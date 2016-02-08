import Command from "./Command";

export default class AggregateByYear extends Command {
	execute() {
		let self = this;

		this.modelFacade.aggregateByYear();

		return this.service.getYears().then((data)=> {
			self.modelFacade.load(data);
		});
	}
}
