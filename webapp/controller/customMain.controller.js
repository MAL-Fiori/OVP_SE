sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("cis.lam.ZSQRMBWA_OVP_SER_ENG.controller.customMain", {
		
		onBeforeRendering: function(){
			var sample = 1;	
		},
		onAfterRendering: function(){
			var sample = 1;	
		},
		getCustomFilters: function() {

			var oValue1 = this.oView.byId("EngineerId").getValue();
			var oValue2 = this.oView.byId("Commodity").getValue();
			var aFilters = [],
				oFilter1, oFilter2;

			if (oValue1) {
				oFilter1 = new Filter({
					path: "EngineerId",
					operator: "EQ",
					value1: oValue1
				});
				aFilters.push(oFilter1);
			}
			if (oValue2) {
				oFilter2 = new Filter({
					path: "Commodity",
					operator: "EQ",
					value1: oValue2
				});
				aFilters.push(oFilter2);
			}
			if (aFilters && aFilters.length > 0) {
				return (new Filter(aFilters, true));
			}
		},
		getCustomAppStateDataExtension: function(oCustomData) {
			//the content of the custom field shall be stored in the app state, so that it can be restored later again e.g. after a back navigation.
			//The developer has to ensure, that the content of the field is stored in the object that is returned by this method.
			if (oCustomData) {

				var oCustomField1 = this.oView.byId("EngineerId");
				var oCustomField2 = this.oView.byId("Commodity");
				if (oCustomField1) {
					oCustomData.ProductID = oCustomField1.getValue();
				}
				if (oCustomField2) {
					oCustomData.SalesOrderID = oCustomField2.getValue();
				}
			}
		},
		restoreCustomAppStateDataExtension: function(oCustomData) {
			//in order to to restore the content of the custom field in the filter bar e.g. after a back navigation,
			//an object with the content is handed over to this method and the developer has to ensure, that the content of the custom field is set accordingly
			//also, empty properties have to be set
			if (oCustomData) {

				if (oCustomData.ProductID) {
					var oCustomField1 = this.oView.byId("EngineerId");
					oCustomField1.setValue(oCustomData.ProductID);
				}

				if (oCustomData.SalesOrderID) {
					var oCustomField2 = this.oView.byId("Commodity");
					oCustomField2.setValue(oCustomData.SalesOrderID);
				}
			}

		},
		onCustomParams: function(sCustomParams) {
			if (sCustomParams === "getParameters") {
				// Not finding a way to pass the Global filter values to getParameters function. So reluctantly using the window object to store those filters.
				window.sqrmbwaGlobalFilter = this.oGlobalFilter.getFilterData();
				return this.getParameters;
			}
		},
		getParameters: function(oNavigateParams) {
			var aCustomSelectionVariant = [];
			var oCustomSelectionVariant = {
				path: "InspectionDateLow",
				operator: "EQ",
				value1: window.sqrmbwaGlobalFilter.InspectionDate.low,
				value2: null,
				sign: "I"
			};
			aCustomSelectionVariant.push(oCustomSelectionVariant);

			oCustomSelectionVariant = {
				path: "InspectionDateHigh",
				operator: "EQ",
				value1: window.sqrmbwaGlobalFilter.InspectionDate.high,
				value2: null,
				sign: "I"
			};
			aCustomSelectionVariant.push(oCustomSelectionVariant);
			return aCustomSelectionVariant;
		}
	});
});