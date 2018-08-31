sap.ui.define([], function() {
	"use strict";
	return sap.ui.controller("cis.lam.ZSQRMBWA_OVP_SE.controller.customMain", {
		onBeforeRendering: function(){
			var oGlobalFilter = this.getView().byId("ovpGlobalFilter");
			
			//Ensure that there is no default Variant set by the user. In such a case, do not set default values to the Gloabl Filter.
			var sDefaultVariantKey = oGlobalFilter.getVariantManagement().getDefaultVariantKey();
			if (sDefaultVariantKey !== "*standard*"){  //If No variant is set, default variant is "standard"
				return;
			}
			var oToday = new Date();
			var o90DayesEarlier = new Date();
			o90DayesEarlier.setDate(o90DayesEarlier.getDate() - 90);
			var oDefaultFilter = {
				InspectionDate: {
						low: o90DayesEarlier,
						high: oToday
				}
			};
			oGlobalFilter.setFilterData(oDefaultFilter);
			// oGlobalFilter.getVariantManagement().setCurrentVariantId("id_1534840222817_203_page");
		}
	});
});