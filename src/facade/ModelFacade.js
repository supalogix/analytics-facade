export default class ModelFacade {
	constructor(chartModel, aggregationModel, selectionModel) {
		this.chartModel = chartModel;
		this.aggregationModel = aggregationModel;
		this.selectionModel = selectionModel;

		this.items = [];
	}

	load(items) {
		this.items = items;

		let list = getList(items);

		this.selectionModel.load(list);
		this.chartModel.load(items[0]);
	}

	changeSelection(date) {
		let item = this.items.filter((item) => {
			return item.date === date;
		});
		this.chartModel.load(item[0]);

		this.selectionModel.select( date );
	}

	aggregateByDay() {
		this.aggregationModel.select("Day");
	}

	aggregateByMonth() {
		this.aggregationModel.select("Month");
	}

	aggregateByYear() {
		this.aggregationModel.select("Year");
	}
}

function getList( data ) {
	return data.map((item) => {
		return item.date;
	});
}

