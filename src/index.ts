import { fromNullable, isSome, Option } from 'fp-ts/lib/Option';
import { createCanvas } from '../lib/auto-canvas';
import { pathPolyline } from '../lib/ctx-util';
import { Vector2 } from '../lib/types';
import * as Vec2 from '../lib/vec2';
import { Particle, simulateFluidParticles } from './fluid-simulation';
import { interpolate, startLoop } from './util';

const makePointGrid = (startPoint: Vector2, stride: number, size: Vector2): Vector2[] => {
	// const startPoint = Vec2.multiply(size, -stride / 2);
	let points: Vector2[] = [];
	for (let x = 0; x < size[0]; x++){
		for (let y = 0; y < size[1]; y++) {
			points.push(
				Vec2.add(
					startPoint, 
					Vec2.multiply([x, y], stride)
				)
			);
		}
	}
	return points;
};

function makeCenteredPointGrid(containerSize: Vector2, stride: number, size: Vector2): Vector2[] {
	return makePointGrid(
		[
			(containerSize[0] - size[0] * stride) / 2,
			(containerSize[1] - size[1] * stride) / 2,
		],
		stride, size
	)
}

function makePointPyramid(startPoint: Vector2, stride: number, baseCount: number): Vector2[] {
	let points: Vector2[] = [];
	for (let i = 0; i < baseCount; i++){
		const y = startPoint[1] + i * stride;
		const rowX = startPoint[0] + stride * 0.5 * i;
		for (let j = 0; j < baseCount - i; j++){
			const x = rowX + j * stride;
			points.push([x, y]);
		}
	}
	return points;
}

function randomOffset(): Vector2 {
	return [
		Math.random() - 0.5,
		Math.random() - 0.5
	]
}

function createInitialParticles(radius: number, containerSize: Vector2): Particle[] {
	// const maxStacking = containerSize.map(v => Math.floor(v / (2 * radius))) as Vector2;
	return [
		...makeCenteredPointGrid(
			containerSize, radius, [16, 16]
		)
		// ...makePointPyramid([1.6, 0.1], radius, 18)
		// ...flatten(
		// 	[[0.2, 0.2] as Vector2, [5.3, 0.2] as Vector2].map(
		// 		startPoint => makePointGrid(startPoint, radius, [8, 17])
		// 	)
		// )
	].map(position => ({
		position: Vec2.add(position, Vec2.multiply(randomOffset(), 0.01)), 
		velocity: [0, 0] 
	}))
}

type SceneRotationControlState = {
	targetValue: number,
	rotationSpeed: number
};

function setupScene() {
	const canvas = createCanvas(
		() => render()
	);
	const ctx = canvas.getContext("2d");
	const backgroundColor = "#d4d3d2";
	const sceneScale = 100 / window.devicePixelRatio;
	
	const targetContainerSize: Vector2 = [6, 6];
	const cellSize = 0.4;
	const gridSize = targetContainerSize.map(v => Math.round(v / cellSize)) as Vector2;
	const containerSize = gridSize.map(v => v * cellSize) as Vector2;
	
	const particleRadius = 0.2;
	let particles = createInitialParticles(particleRadius, containerSize);
		

	//instructions ###

	document.body.insertAdjacentHTML(
		"beforeend", 
		`
			<div 
				style="
					position: absolute; 
					left: 0px; right: 0px; bottom: 0px; 
					padding: 10px; 
					display: flex; 
					flex-direction: column; 
					text-align: center;
				"
			>
				<span>press space to pause/resume the simulation</span>
				<span>use the left/right arrow keys to rotate the container</span>
			</div>
		`	
	);
		
	//scene-rotation-control ###

	let sceneRotationControlState: SceneRotationControlState = {
		rotationSpeed: 0,
		targetValue: 0
	};
	const setSceneRotationVelocity = (velocity: number) => {
		sceneRotationControlState = {
			...sceneRotationControlState,
			rotationSpeed: velocity
		};
	};
	const keyToSceneRotationVelocity: Record<string, number> = {
		"ArrowRight": +2,
		"ArrowLeft": -2
	};
	function getSceneRotationValueForKey(key: string): Option<number> {
		return fromNullable(
			keyToSceneRotationVelocity[key]
		);
	}
	document.addEventListener("keydown", e => {
		const nextSpeed = getSceneRotationValueForKey(e.key);
		if (isSome(nextSpeed)){
			setSceneRotationVelocity(nextSpeed.value);
		}
	});
	document.addEventListener("keyup", e => {
		const nextSpeed = getSceneRotationValueForKey(e.key);
		if (isSome(nextSpeed)) {
			setSceneRotationVelocity(0);
		}
	});

	let sceneRotation = 0;

	function updateSceneControlAndRotation(dt: number){
		sceneRotationControlState = {
			...sceneRotationControlState,
			targetValue: sceneRotationControlState.targetValue + sceneRotationControlState.rotationSpeed * dt
		};
		sceneRotation = interpolate(
			sceneRotation,
			sceneRotationControlState.targetValue,
			8 * dt
		);
	}


	const gravityStrength = 3;


	const render = () => {
		const { canvas } = ctx;
		const [w, h] = [canvas.clientWidth, canvas.clientHeight];

		ctx.save();
		const pr = devicePixelRatio;
		ctx.scale(pr, pr);
		ctx.fillStyle = backgroundColor;
		ctx.fillRect(0, 0, w, h);
		ctx.translate(w / 2, h / 2);
		ctx.scale(sceneScale, -sceneScale);
		
		ctx.rotate(sceneRotation);
		ctx.translate(
			-containerSize[0] / 2, 
			-containerSize[1] / 2
		);

		//render grid ###
		ctx.globalAlpha = 0.1;
		ctx.strokeStyle = "black";
		ctx.lineWidth = 0.03;
		ctx.lineCap = "round";
		for (let i = 0; i <= gridSize[0]; i++){
			pathPolyline(ctx, [[i * cellSize, 0], [i * cellSize, containerSize[1]]]);
			ctx.stroke();
		}
		for (let i = 0; i <= gridSize[1]; i++) {
			pathPolyline(ctx, [[0, i * cellSize], [containerSize[0], i * cellSize]]);
			ctx.stroke();
		}

		//render particles ###
		ctx.globalAlpha = 1;
		ctx.fillStyle = "#69b3d1";
		ctx.strokeStyle = "#323333";
		ctx.lineWidth = 0.03;
		for (const particle of particles){
			ctx.beginPath();
			ctx.arc(...particle.position, particleRadius / 2, 0, 2 * Math.PI);
			ctx.fill();
			ctx.stroke();
		}

		//render container outline ###
		ctx.strokeStyle = "#323333";
		ctx.lineWidth = 0.03;
		pathPolyline(ctx, [[0, 0], [containerSize[0], 0], containerSize, [0, containerSize[1]], [0, 0]]);
		ctx.stroke();

		ctx.restore();
	};

	
	const updateAndRender = (dt: number) => {
		updateSceneControlAndRotation(dt);

		const gravityVector: Vector2 = [
			-Math.sin(sceneRotation) * gravityStrength,
			-Math.cos(sceneRotation) * gravityStrength
		];
		const simFunc = simulateFluidParticles({
			cellSize, gridSize, particleRadius, 
			forceField: () => gravityVector
		});
		particles = simFunc(dt)(particles);
		render();
	};

	let simRunning = false;
	document.addEventListener("keydown", e => {
		if (e.key === " "){
			simRunning = !simRunning;
		}
		else if (e.key === "d") {
			updateAndRender(1 / 30);
		}
	});

	startLoop(
		(args) => {
			if (!simRunning) return;
			updateAndRender(args.dt);
		}
	);

	render();
	setTimeout(
		() => simRunning = true,
		1000
	);
}

setupScene();