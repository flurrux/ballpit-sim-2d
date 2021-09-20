import { Morphism, Vector2 } from "../lib/types";
import { add, divide, magnitude, multiply, subtract } from '../lib/vec2';

export type Particle = {
	position: Vector2,
	velocity: Vector2
};
const getPosition = (particle: Particle): Vector2 => particle.position;

type SimulationEnvironment = {
	particleRadius: number,
	cellSize: number,
	gridSize: Vector2,
	forceField: Morphism<Vector2, Vector2>
};

//sorts a given number of points into cells that they fall in
//returns an array of "columns" of cells with the contained indices of points
//a given cell of indices can be retrieved by `columns[x][y]`
type CellData = {
	cells: number[][][], 
	particleIndexToCell: Vector2[]
};
const sortIntoCells = (cellSize: number, gridSize: Vector2) => (points: Vector2[]): CellData => {
	const columns: number[][][] = [];
	for (let x = 0; x < gridSize[0]; x++){
		const column: number[][] = [];
		for (let y = 0; y < gridSize[1]; y++){
			column.push([]);
		}
		columns.push(column);
	}

	const cellLocations: Vector2[] = [];
	for (let i = 0; i < points.length; i++){
		const [cellX, cellY] = points[i].map(v => Math.floor(v / cellSize));
		cellLocations.push([cellX, cellY]);
		if (cellX < 0 || cellY < 0 || cellX >= gridSize[0] || cellY >= gridSize[1]) continue;
		columns[cellX][cellY].push(i);
	}

	return {
		cells: columns,
		particleIndexToCell: cellLocations
	}
};

const calculateDepenetrationForces = (radius: number, cellSize: number, gridSize: Vector2, points: Vector2[]): Vector2[] => {
	const attractionRadius = 1 * radius;
	const containerSize = multiply(gridSize, cellSize);
	const { cells, particleIndexToCell } = sortIntoCells(cellSize, gridSize)(points);
	let forces: Vector2[] = points.map(() => [0, 0]);
	for (let i = 0; i < points.length; i++){
		const [cellX, cellY] = particleIndexToCell[i];
		const point1 = points[i];
		
		//loop over the adjacent cells and calculate forces between pairs
		for (let j = -1; j <= 1; j++){
			const cx = cellX + j;
			if (cx < 0 || cx >= gridSize[0]) continue;
			for (let k = -1; k <= 1; k++){
				const cy = cellY + k;
				if (cy < 0 || cy >= gridSize[1]) continue;
				const cell = cells[cx][cy];
				for (const l of cell){
					if (l === i) continue;
					const point2 = points[l];
					const diff = subtract(point1, point2);
					const mag = magnitude(diff);
					if (mag > attractionRadius) continue;
					if (mag > radius){
						forces[i] = add(
							forces[i],
							multiply(diff, 0.005 * (radius - mag) / mag)
						);
					}
					else {
						forces[i] = add(
							forces[i], 
							multiply(diff, (radius - mag) / mag)
						);
					}
				}
			}
		}

		const [x, y] = point1;

		//add boundary forces
		const rh = radius / 2;
		if (x < rh){
			forces[i][0] += rh - x;
		}
		else if (x > containerSize[0] - rh){
			forces[i][0] -= rh - (containerSize[0] - x);
		}
		
		if (y < rh) {
			forces[i][1] += rh - y;
		}
		else if (y > containerSize[1] - rh) {
			forces[i][1] -= rh - (containerSize[1] - y);
		}
	}
	return forces;
};

export const simulateFluidParticles = (env: SimulationEnvironment) => (dt: number) => (particles: Particle[]): Particle[] => {
	const { cellSize, gridSize, particleRadius, forceField } = env;

	//make a local copy of the particles
	particles = particles.map(p => ({ ...p }));

	//move particles according to their velocity and add forces
	for (const particle of particles){
		const { position, velocity } = particle;
		particle.position = add(
			position, multiply(velocity, dt)
		);
		particle.velocity = add(
			velocity, multiply(forceField(position), dt)
		);
	}

	//depenetrate
	let points = particles.map(getPosition);
	const forceStrength = 0.2;
	for (let i = 0; i < 10; i++){
		const forces: Vector2[] = calculateDepenetrationForces(particleRadius, cellSize, gridSize, points);
		points = points.map((point, index) => add(point, multiply(forces[index], forceStrength)));
	}

	//update velocities by depenetration offsets
	const dtInv = 1 / dt;
	for (let i = 0; i < particles.length; i++){
		const particle = particles[i];
		const point = points[i];
		const depenetrationOffset = subtract(point, particle.position);
		particle.position = point;
		particle.velocity = add(particle.velocity, multiply(depenetrationOffset, dtInv));
	}

	return particles;
};