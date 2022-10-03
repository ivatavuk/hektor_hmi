// Battery_visualize
var battery_current_img = 1;
var battery_visualization_started = false;
var current_battery_percent = 75.0;
const battery_segment_num = 5;
var intervalID = window.setInterval(batteryTimerCallback, 100);
function batteryTimerCallback() {
  console.log(current_battery_percent);
  if (current_battery_percent != 100 && current_battery_percent != 0)
  {
    console.log("tu smo");
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
    document.getElementById("battery-visualizer").style.backgroundImage="url('images/battery/battery_" + battery_current_img + ".png')";
  }
  catch
  {
    console.log("battery_visualize.js ERR => Failed to get battery image!");  
  }
}
