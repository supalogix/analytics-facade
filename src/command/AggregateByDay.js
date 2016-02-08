import Command from "./Command";

export default class AggregateByDay extends Command {
	execute() {
		let self = this;

		console.log("AggregateByDay");

		self.modelFacade.aggregateByDay();
		let promise = this.service.getDays();
	
		promise.then((data)=> {
			console.log(data);
			self.modelFacade.load(data);
		});

		return promise;
	}
}

function getList( data ) {
	return data.map((item) => {
		return item.date;
	});
}
