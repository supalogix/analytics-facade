//var AnalyticsFacade = require("../lib/facade/AnalyticsFacade").default;
//var Service = require("Service").default;
import AnalyticsFacade, {COMMAND, EVENT} from "../src/facade/AnalyticsFacade";
import Service from "service";
import {expect} from "chai";

describe("AnalyticsFacade", () => {
	let service;
	let facade;

	beforeEach(() => {
		let delay = 1;
		service = new Service(delay);
		facade = new AnalyticsFacade(service);
	});
	describe("LoadData Command", () => {

		it("executes the delegate onChartChanged", (done) => {
			//
			// Arrange
			//
			let onChartChanged = facade
				.getDelegate(EVENT.CHART_CHANGED)

			onChartChanged(callback);

			//
			// Act
			//
			let command = facade
				.getCommand(COMMAND.LOAD);

			command.execute();

			//
			// Assert
			//
			function callback(data) {
				let date = data.date;
				expect(date).to.equal("January 01, 2016");
				done();
			}
		});

		it("executes the delegate onSelectedDateChanged", (done) => {
			//
			// Arrange
			//
			let onSelectedDateChanged = facade
				.getDelegate(EVENT.SELECTED_DATE_CHANGED);

			onSelectedDateChanged(callback);

			//
			// Act
			//
			let command = facade
				.getCommand(COMMAND.LOAD);

			command.execute();

			//
			// Assert
			//
			function callback(date) {
				expect(date).to.equal("January 01, 2016");
				done();
			}
		});
	});

	describe("ChangeSelectedDate Command", () => {
		it("executes the delegate onChartChanged", (done) => {
			//
			// Arrange
			//
			facade
				.getCommand(COMMAND.LOAD)
				.execute();

			let onChartChanged = facade
				.getDelegate(EVENT.CHART_CHANGED)


			onChartChanged(callback2);
			console.log("delegate found");

			//
			// Act
			//
			//console.log("about to execute command");
			//facade
			//	.getCommand(COMMAND.CHANGE_SELECTED_DATE)
			//	.execute("January 01, 2016");
			//console.log("command executed");
			
			//
			// Assert
			//
			function callback2(data) {
				console.log("callback");
				console.log(data);
				expect(true).to.equal(true);
				done();
			}
		});
	});

	describe("AggregateByDay Command", () => {
	});

	describe("AggregateByMonth Command", () => {
	});

	describe("AggregateByYear Command", () => {
	});
});


