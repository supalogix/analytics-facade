import chai, {expect} from "chai";
import AnalyticsFacade, {COMMAND, EVENT} from "../../../src/facade/AnalyticsFacade";
import ServiceStub from "./stub/ServiceStub";
import OrdinalMapping from "./util/OrdinalMapping";
import co from "co";

module.exports = function() {
	let delegateHistory;
	let facade;

	this.Given(/^the following fake data$/, (jsonString, done) => {
		delegateHistory = {
			"CHART_CHANGED": [],
			"SELECTED_DATE_CHANGED": []
		};

		let json = JSON.parse(jsonString);
		let simulatedDelay = 1;

		let service = new ServiceStub( json, simulatedDelay );
		facade = new AnalyticsFacade( service );

		//
		// Register Event Listeners
		//
		facade.register(EVENT.CHART_CHANGED, (data) => {
			delegateHistory["CHART_CHANGED"].push(data);
		});

		facade.register(EVENT.SELECTED_DATE_CHANGED, (data) => {
			delegateHistory["SELECTED_DATE_CHANGED"].push(data);
		});

	  	done();
	});

	this.When(/^I execute the LOAD command$/, (done) => {
		co(function*() {
			yield facade
				.getCommand(COMMAND.LOAD)
				.execute();

			done();
		});
	});

	this.When(/^I execute the CHANGE_SELECTED_DATE command with date "([^"]*)"$/, (date, done) => {
		co(function*() {
			facade
				.getCommand(COMMAND.CHANGE_SELECTED_DATE)
				.execute(date);

			done();
		});
	});

	this.When(/^I execute the AGGREGATE_BY_MONTH command$/, (done) => {
		co(function*() {
			yield facade
				.getCommand(COMMAND.AGGREGATE_BY_MONTH)
				.execute();

			done();
		});
	});

	this.When(/^I execute the AGGREGATE_BY_YEAR command$/, (done) => {
		co(function*() {
			yield facade
				.getCommand(COMMAND.AGGREGATE_BY_YEAR)
				.execute();

			done();
		});
	});

	this.Then(/^the "([^"]*)" execution of the CHART_CHANGED delegate should have the parameter$/, (ordinalValue, jsonString, done) => {
		let index = OrdinalMapping.getIndex(ordinalValue);
		let json = delegateHistory[COMMAND.CHART_CHANGED][index];

		let expectedJson = JSON.parse(jsonString);

		expect(expectedJson).to.deep.equal(json);

	 	done();
	});

	this.Then(/^the "([^"]*)" execution of the SELECTED_DATE_CHANGED delegate should have the parameter "([^"]*)"$/, function (ordinalValue, expectedDate, done) {
		let index = OrdinalMapping.getIndex(ordinalValue);
		let date = delegateHistory[COMMAND.SELECTED_DATE_CHANGED][index];

		expect(expectedDate).to.equal(date);

	 	done();
	});
}
