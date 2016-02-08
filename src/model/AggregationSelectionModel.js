export default class AggregationSelectionModel {
	constructor(emitter) {
		this.emitter = emitter;
		this.type = "Day";
	}

	select(type) {
		this.type = type;
		this.emitter.emit("AGGREGATION_TYPE_CHANGED", type);
	}
}

class Command {
	constructor( service, modelFacade ) {
		this.service = service;
		this.modelFacade = modelFacade;
	}
}
