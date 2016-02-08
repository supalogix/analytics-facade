import LoadDataCommand from "../command/LoadDataCommand";
import ChangeSelectedDateCommand from "../command/ChangeSelectedDateCommand";
import AggregateByDay from "../command/AggregateByDay";
import AggregateByMonth from "../command/AggregateByMonth";
import AggregateByYear from "../command/AggregateByYear";
import AggregationSelectionModel from "../model/AggregationSelectionModel";
import DateSelectionModel from "../model/DateSelectionModel";
import ChartModel from "../model/ChartModel";
import ModelFacade from "./ModelFacade";
import {COMMAND} from "../constant/Command";
import {EVENT} from "../constant/Event";

import {EventEmitter} from "events";

export {COMMAND} from "../constant/Command";
export {EVENT} from "../constant/Event";

export default class AnalyticsFacade {
	constructor(service) {
		this.service = service;

		let emitter = new EventEmitter();

		this.emitter = emitter;

		let chartModel = new ChartModel(emitter);
		let aggregationModel = new AggregationSelectionModel(emitter);
		let selectionModel = new DateSelectionModel(emitter);

		this.modelFacade = new ModelFacade(
			chartModel, 
			aggregationModel, 
			selectionModel );
	}

	getDelegate(eventName) {
		var self = this;

		let result = (callback) => {
			self.register(eventName, callback);
		};

		return result;
	}

	register(eventName, callback) {
		this.emitter.on(eventName, callback);
	}

	getCommand(commandName) {
		switch( commandName ) {
			case COMMAND.LOAD:
				return new LoadDataCommand( 
					this.service, 
					this.modelFacade );

			case COMMAND.CHANGE_SELECTED_DATE:
				return new ChangeSelectedDateCommand( 
					this.service, 
					this.modelFacade );

			case COMMAND.AGGREGATE_BY_DAY:
				return new AggregateByDay( 
					this.service, 
					this.modelFacade );

			case COMMAND.AGGREGATE_BY_MONTH:
				return new AggregateByMonth( 
					this.service, 
					this.modelFacade );

			case COMMAND.AGGREGATE_BY_YEAR:
				return new AggregateByYear( 
					this.service, 
					this.modelFacade );
		}

		throw new Error("Command Not Found");
	}
}
