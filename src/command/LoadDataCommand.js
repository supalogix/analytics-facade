import Command from "./Command";

export default class LoadDataCommand extends Command {
	execute(data) {
		let self = this;
		let promise = this.service.getDays();

		promise.then( (data) => {
			self.modelFacade.load(data);
		});

		return promise;
	}
}
