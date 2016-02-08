export default class OrdinalMapping {
	static getIndex(value) {
		this.ordinalMapping = {
			"1st": 0,
			"2nd": 1,
			"3rd": 2,
			"4th": 3,
			"5th": 4,
			"6th": 5,
		};
		return this.ordinalMapping[value];
	}
}
