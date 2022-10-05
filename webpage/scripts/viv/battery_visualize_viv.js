// Battery_visualize
var battery_current_img = 1;
var battery_visualization_started = false;
var current_battery_percent = 100.0;
const battery_segment_num = 5;
var intervalID = window.setInterval(batteryTimerCallback, 100);
function batteryTimerCallback() {
  if(!localStorage.getItem('viv')) {
    viv_status = {};
  }
  else {
    viv_status = JSON.parse(localStorage.getItem('viv'));
  }
  
  current_battery_percent = viv_status.current_battery_percent;
  
  if(!current_battery_percent)
    current_battery_percent = 100;

  if (current_battery_percent != 100 && current_battery_percent != 0)
  {
    battery_current_img = battery_segment_num - Math.floor(current_battery_percent / (100 / battery_segment_num));
  }
  else if(current_battery_percent == 100)
  {
    battery_current_img = 1;
  }
  else if(current_battery_percent == 0)
  {
    battery_current_img = battery_segment_num;
  }
  try
  {
    document.getElementById("battery-visualizer-img").style.backgroundImage="url('images/battery/battery_" + battery_current_img + ".png')";
  }
  catch
  {
    console.log("battery_visualize.js ERR => Failed to get battery visualizer img!");  
  }
  try
  {
    document.getElementById("battery-visualizer-text").innerHTML = Math.round(current_battery_percent) + "%";
  }
  catch
  {
    console.log("battery_visualize.js ERR => Failed to get battery visualizer text!");  
  }
}
