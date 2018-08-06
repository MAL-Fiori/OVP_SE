(function() {
	"use strict";
	/*global sap, jQuery */

	/**
	 * @fileOverview Application component to display information on entities from the GWSAMPLE_BASIC
	 *   OData service.
	 * @version @version@
	 */
	jQuery.sap.declare("cis.lam.ZSQRMBWA_OVP_SER_ENG.Component");

	jQuery.sap.require("sap.ovp.app.Component");

	sap.ovp.app.Component.extend("cis.lam.ZSQRMBWA_OVP_SER_ENG.Component", {
		metadata: {
			manifest: "json"
		}
	});
}());