import { Lazy } from "fp-ts/lib/function";

export function adjustCanvasSizeToWindow(canvas: HTMLCanvasElement) {
	const widthPx = window.innerWidth;
	const heightPx = window.innerHeight;
	const scalePx = window.devicePixelRatio || 1;
	Object.assign(canvas.style, {
		width: `${widthPx}px`,
		height: `${heightPx}px`
	});
	Object.assign(canvas, {
		width: widthPx * scalePx,
		height: heightPx * scalePx
	});
}

export function autoAdjustCanvasSize(canvas: HTMLCanvasElement, onResize: Function) {
	window.onresize = () => {
		adjustCanvasSizeToWindow(canvas);
		onResize();
	};
}

export function createCanvas(onResize: Lazy<void>): HTMLCanvasElement {
	document.body.insertAdjacentHTML("beforeend", "<canvas></canvas>");
	const canvas = document.querySelector("canvas");
	autoAdjustCanvasSize(canvas, onResize);
	adjustCanvasSizeToWindow(canvas);
	return canvas;
}