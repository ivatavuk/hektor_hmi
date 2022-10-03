// Battery_visualize
var battery_current_img = 1;
var battery_visualization_started = false;
var current_battery_percent = 78.32;
const battery_segment_num = 5;
var intervalID = window.setInterval(batteryTimerCallback, 100);
function batteryTimerCallback() {
  if (current_battery_percent != 100 && current_battery_percent != 0)
  {
    battery_current_img = 5 - Math.floor(current_battery_percent / (100 / battery_segment_num));
  }
  else if(current_battery_percent == 100)
  {
    battery_current_img = 1;
  }
  else if(current_battery_percent == 0)
  {
    battery_current_img = 5;
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