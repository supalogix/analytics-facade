import Command from "./Command";

export default class ChangeSelectedDateCommand extends Command {
	execute( date ) {
		this.modelFacade.changeSelection(date);
	}
}
