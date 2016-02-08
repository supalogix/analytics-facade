export default class DateSelectionModel {
	constructor(emitter) {
		this.emitter = emitter;
		this.items = [];
		this.selectedDate = "";
	}

	load(items) {
		this.items = items;
		this.selectedDate = items[0];

		this.emitter.emit("DATES_UPDATED", this.items);
		this.emitter.emit("SELECTED_DATE_CHANGED", this.selectedDate);
	}

	select(date) {
		this.selectedDate = date;
		this.emitter.emit("SELECTED_DATE_CHANGED", this.selectedDate);
	}
}

