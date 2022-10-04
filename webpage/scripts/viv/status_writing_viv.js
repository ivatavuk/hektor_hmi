var battery_voltage = 0.0;
var measured_current = 0.0;

var intervalID = window.setInterval(statusTimerCallback, 100);

function statusTimerCallback() {
  viv_status = JSON.parse(localStorage.getItem('viv'));
  battery_voltage = viv_status.battery_voltage;
  if(!battery_voltage)
    battery_voltage = 0.0;
    
  measured_current = viv_status.measured_current;
  if(!measured_current)
    measured_current = 0.0;

  power_consumption = Math.abs(battery_voltage * measured_current);
  
  try
  {
    document.getElementById("battery-voltage").innerHTML = Math.round(battery_voltage * 10) / 10 + " V";
  }
  catch
  {
    console.log("status_writing.js ERR => Failed to set battery-voltage!");  
  }
  try
  {
    document.getElementById("measured-current").innerHTML = Math.round(measured_current * 10) / 10 + " A";
  }
  catch
  {
    console.log("status_writing.js ERR => Failed to set measured-current!");  
  }
  try
  {
    document.getElementById("power-consumption").innerHTML = Math.round(power_consumption * 10) / 10 + " W";
  }
  catch
  {
    console.log("status_writing.js ERR => Failed to set power-consumption!");  
  }
}
