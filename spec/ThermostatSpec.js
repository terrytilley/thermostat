describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(DEFAULT_TEMP);
  });

  it('Increase temperature with the up button', function() {
    thermostat.upTemp();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('Decrease temperature with the down button', function() {
    thermostat.downTemp();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('The minimum temperature is 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.downTemp();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('Has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('It can switch PSM off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('It can switch PSM back on', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can be reset to the default temperature', function () {
    for (var i = 0; i < 6; i++) {
      thermostat.upTemp();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(DEFAULT_TEMP);
  });

  describe('When power saving mode is on', function() {
    it('Has a maximum temperature of 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.upTemp();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('When power saving mode is off', function() {
    it('Has a maximum temperature of 32 degrees', function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.upTemp();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });



});
