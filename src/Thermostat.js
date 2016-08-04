/* jshint esversion: 6 */
(function () {
   'use strict';
}());

const DEFAULT_TEMP = 20;

function Thermostat() {
  this.MINIMUM_TEMP = 10;
  this.temperature = DEFAULT_TEMP;
  this.powerSavingMode = true;
}

Thermostat.prototype = {
  getCurrentTemperature: function() {
    return this.temperature;
  },
  isMinimumTemp: function() {
    return this.temperature === this.MINIMUM_TEMP;
  },
  upTemp: function() {
    this.temperature++;
  },
  downTemp: function() {
    if (this.isMinimumTemp()) {
      return;
    }
    this.temperature--;
  },
  isPowerSavingModeOn: function() {
    return this.powerSavingMode === true;
  },
  switchPowerSavingModeOff: function() {
    this.powerSavingMode = false;
  }
};
