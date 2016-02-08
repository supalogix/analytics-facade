import Command from "./Command";

export default class AggregateByMonth extends Command {
	execute() {
		let self = this;

		this.modelFacade.aggregateByMonth();

		let promise = this.service.getMonths();

		promise.then((data)=> {
			self.modelFacade.load(data);
		});

		return promise;
	}
}
