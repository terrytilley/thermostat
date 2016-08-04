/* jshint esversion: 6 */
(function () {
   'use strict';
}());

const DEFAULT_TEMP = 20;

function Thermostat() {
  this.MINIMUM_TEMP = 10;
  this.temperature = DEFAULT_TEMP;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
}

Thermostat.prototype = {
  getCurrentTemperature: function() {
    return this.temperature;
  },

  isMinimumTemp: function() {
    return this.temperature === this.MINIMUM_TEMP;
  },

  isMaximumTemp: function() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  },

  upTemp: function() {
    if (this.isMaximumTemp()) {
      return;
    }
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
  },

  switchPowerSavingModeOn: function() {
    this.powerSavingMode = true;
  },

  resetTemperature: function() {
    this.temperature = DEFAULT_TEMP;
  }
};
