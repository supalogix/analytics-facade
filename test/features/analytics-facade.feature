Feature: Normative Command/Delegate Standards

	As a client of the facade
	I want to test the published API of the facade
	So that I can have confidence in the facades correctness

	Background: Load Fake Data
		Given the following fake data
		"""
			{
				"day": [
					{ "date": "January 01, 2016", "items": [ { "name": "item1", "value": 100}, { "name": "item2", "value": 100},{ "name": "item3", "value": 900}] },
					{ "date": "January 02, 2016", "items": [ { "name": "item1", "value": 200}, { "name": "item2", "value": 200},{ "name": "item3", "value": 800}] },
					{ "date": "January 03, 2016", "items": [ { "name": "item1", "value": 300}, { "name": "item2", "value": 300},{ "name": "item3", "value": 700}] },
					{ "date": "January 04, 2016", "items": [ { "name": "item1", "value": 400}, { "name": "item2", "value": 400},{ "name": "item3", "value": 600}] },
					{ "date": "January 05, 2016", "items": [ { "name": "item1", "value": 500}, { "name": "item2", "value": 500},{ "name": "item3", "value": 500}] },
					{ "date": "January 06, 2016", "items": [ { "name": "item1", "value": 100}, { "name": "item2", "value": 600},{ "name": "item3", "value": 400}] },
					{ "date": "January 07, 2016", "items": [ { "name": "item1", "value": 200}, { "name": "item2", "value": 700},{ "name": "item3", "value": 300}] },
					{ "date": "January 08, 2016", "items": [ { "name": "item1", "value": 300}, { "name": "item2", "value": 800},{ "name": "item3", "value": 200}] },
					{ "date": "January 09, 2016", "items": [ { "name": "item1", "value": 400}, { "name": "item2", "value": 900},{ "name": "item3", "value": 100}] },
					{ "date": "January 10, 2016", "items": [ { "name": "item1", "value": 500}, { "name": "item2", "value": 100},{ "name": "item3", "value": 100}] },
					{ "date": "January 11, 2016", "items": [ { "name": "item1", "value": 500}, { "name": "item2", "value": 200},{ "name": "item3", "value": 100}] },
					{ "date": "January 12, 2016", "items": [ { "name": "item1", "value": 400}, { "name": "item2", "value": 300},{ "name": "item3", "value": 100}] },
					{ "date": "January 13, 2016", "items": [ { "name": "item1", "value": 300}, { "name": "item2", "value": 400},{ "name": "item3", "value": 100}] },
					{ "date": "January 14, 2016", "items": [ { "name": "item1", "value": 200}, { "name": "item2", "value": 500},{ "name": "item3", "value": 100}] },
					{ "date": "January 15, 2016", "items": [ { "name": "item1", "value": 100}, { "name": "item2", "value": 600},{ "name": "item3", "value": 100}] },
					{ "date": "January 16, 2016", "items": [ { "name": "item1", "value": 200}, { "name": "item2", "value": 700},{ "name": "item3", "value": 100}] },
					{ "date": "January 17, 2016", "items": [ { "name": "item1", "value": 300}, { "name": "item2", "value": 800},{ "name": "item3", "value": 100}] },
					{ "date": "January 18, 2016", "items": [ { "name": "item1", "value": 400}, { "name": "item2", "value": 900},{ "name": "item3", "value": 100}] },
					{ "date": "January 19, 2016", "items": [ { "name": "item1", "value": 500}, { "name": "item2", "value": 100},{ "name": "item3", "value": 100}] }
				],
				"month": [
					{ "date": "January 2016", "items": [ { "name": "item1", "value": 1000}, { "name": "item2", "value": 2000},{ "name": "item3", "value": 1500}] },
					{ "date": "February 2016", "items": [ { "name": "item1", "value": 2000}, { "name": "item2", "value": 1575},{ "name": "item3", "value": 2000}] },
					{ "date": "March 2016", "items": [ { "name": "item1", "value": 3000}, { "name": "item2", "value": 100},{ "name": "item3", "value": 20000}] },
					{ "date": "April 2016", "items": [ { "name": "item1", "value": 100}, { "name": "item2", "value": 100},{ "name": "item3", "value": 100}] },
					{ "date": "May 2016", "items": [ { "name": "item1", "value": 100}, { "name": "item2", "value": 100},{ "name": "item3", "value": 100}] },
					{ "date": "June 2016", "items": [ { "name": "item1", "value": 100}, { "name": "item2", "value": 100},{ "name": "item3", "value": 100}] },
					{ "date": "July 2016", "items": [ { "name": "item1", "value": 100}, { "name": "item2", "value": 100},{ "name": "item3", "value": 100}] },
					{ "date": "August 2016", "items": [ { "name": "item1", "value": 100}, { "name": "item2", "value": 100},{ "name": "item3", "value": 100}] },
					{ "date": "September 2016", "items": [ { "name": "item1", "value": 100}, { "name": "item2", "value": 100},{ "name": "item3", "value": 100}] },
					{ "date": "October 2016", "items": [ { "name": "item1", "value": 100}, { "name": "item2", "value": 100},{ "name": "item3", "value": 100}] },
					{ "date": "November 2016", "items": [ { "name": "item1", "value": 100}, { "name": "item2", "value": 100},{ "name": "item3", "value": 100}] },
					{ "date": "December 2016", "items": [ { "name": "item1", "value": 100}, { "name": "item2", "value": 100},{ "name": "item3", "value": 100}] }
				],
				"year": [
					{ "date": "2016", "items": [ { "name": "item1", "value": 1000}, { "name": "item2", "value": 2000},{ "name": "item3", "value": 3000}] },
					{ "date": "2015", "items": [ { "name": "item1", "value": 2000}, { "name": "item2", "value": 3000},{ "name": "item3", "value": 2000}] },
					{ "date": "2014", "items": [ { "name": "item1", "value": 3000}, { "name": "item2", "value": 4000},{ "name": "item3", "value": 1000}] },
					{ "date": "2013", "items": [ { "name": "item1", "value": 4000}, { "name": "item2", "value": 1000},{ "name": "item3", "value": 4000}] }
				]
			}
		"""

	Scenario: Load Facade

		When I execute the LOAD command
		Then the "1st" execution of the CHART_CHANGED delegate should have the parameter
		"""
			{ 
			   "date": "January 01, 2016", 
			   "items": [ { "name": "item1", "value": 100}, { "name": "item2", "value": 100},{ "name": "item3", "value": 900}] 
			}
		"""
			And the "1st" execution of the SELECTED_DATE_CHANGED delegate should have the parameter "January 01, 2016"

	Scenario: Change from "January 01, 2016" to "January 02, 2016"

		When I execute the LOAD command
			And I execute the CHANGE_SELECTED_DATE command with date "January 02, 2016"
		Then the "2nd" execution of the CHART_CHANGED delegate should have the parameter
		"""
			{ 
				"date": "January 02, 2016", 
				"items": [ 
					{ "name": "item1", "value": 200}, 
					{ "name": "item2", "value": 200},
					{ "name": "item3", "value": 800}
				] 
			}
		"""
			And the "2nd" execution of the SELECTED_DATE_CHANGED delegate should have the parameter "January 02, 2016"

	Scenario: Change from "Day" aggregation to "Month" aggregation

		When I execute the LOAD command
			And I execute the AGGREGATE_BY_MONTH command
		Then the "2nd" execution of the CHART_CHANGED delegate should have the parameter
		"""
			{ 
				"date": "January 2016", 
				"items": [ 
					{ "name": "item1", "value": 1000}, 
					{ "name": "item2", "value": 2000},
					{ "name": "item3", "value": 1500}
				] 
			}
		"""
			And the "2nd" execution of the SELECTED_DATE_CHANGED delegate should have the parameter "January 2016"

	Scenario: Change from "Day" aggregation to "Year" aggregation

		When I execute the LOAD command
			And I execute the AGGREGATE_BY_YEAR command
		Then the "2nd" execution of the CHART_CHANGED delegate should have the parameter
		"""
			{ 
				"date": "2016", 
				"items": [ 
					{ "name": "item1", "value": 1000}, 
					{ "name": "item2", "value": 2000},
					{ "name": "item3", "value": 3000}
				] 
			}
		"""
			And the "2nd" execution of the SELECTED_DATE_CHANGED delegate should have the parameter "2016"

	Scenario: Change from "Day" aggregation to "Month" aggregation and Select "February 2016"

		When I execute the LOAD command
			And I execute the AGGREGATE_BY_MONTH command
			And I execute the CHANGE_SELECTED_DATE command with date "February 2016"
		Then the "2nd" execution of the CHART_CHANGED delegate should have the parameter
		"""
			{ 
				"date": "January 2016", 
				"items": [ 
					{ "name": "item1", "value": 1000}, 
					{ "name": "item2", "value": 2000},
					{ "name": "item3", "value": 1500}
				] 
			}
		"""
			And the "3rd" execution of the CHART_CHANGED delegate should have the parameter
			"""
				{ 
					"date": "February 2016", 
					"items": [ 
						{ "name": "item1", "value": 2000}, 
						{ "name": "item2", "value": 1575},
						{ "name": "item3", "value": 2000}
					] 
				}
			"""
			And the "2nd" execution of the SELECTED_DATE_CHANGED delegate should have the parameter "January 2016"
			And the "3rd" execution of the SELECTED_DATE_CHANGED delegate should have the parameter "February 2016"
