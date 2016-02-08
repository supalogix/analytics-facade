export default class ServiceStub {
	constructor(fakeData, delay = 1000) {
		this.data = fakeData;
		this.delay = delay;
	}

	getDays() {
		let self = this;
		return new Promise( (resolve, reject) => {
			setTimeout( () => {
				resolve( self.data["day"] );
			}, self.delay);
		});
	}

	getMonths() {
		let self = this;
		return new Promise( (resolve, reject) => {
			setTimeout( () => {
				resolve( self.data["month"] );
			}, self.delay);
		});
	}

	getYears() {
		let self = this;
		return new Promise( (resolve, reject) => {
			setTimeout( () => {
				resolve( self.data["year"] );
			}, self.delay);
		});
	}
}

