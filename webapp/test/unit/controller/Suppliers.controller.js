/*global QUnit*/

sap.ui.define([
	"ns/nsbusinesspartners/controller/Suppliers.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Suppliers Controller");

	QUnit.test("I should test the Suppliers controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
