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

  it('It can swith PSM off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('It can switch PSM back on', function() {
    thermostat.switch
  });

});
