export default class ChartModel {
	constructor(emitter) {
		this.emitter = emitter;
	}

	load(data) {
		this.emitter.emit("CHART_CHANGED", data);
	}
}
