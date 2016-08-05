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
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
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
    if (this.temperature > this.MAX_LIMIT_PSM_ON) {
      this.temperature = this.MAX_LIMIT_PSM_ON;
    }
    this.powerSavingMode = true;
  },

  resetTemperature: function() {
    this.temperature = DEFAULT_TEMP;
  },

  energyUsage: function() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    }
    if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON) {
      return 'medium-usage';
    }
    return 'high-usage';
  }
};
