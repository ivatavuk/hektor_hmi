// Tank_visualize
var tank_current_img_left = 1;
var tank_current_img_right = 1;
var max_tank_volume = 15;
var current_tank_volume_left = 15.0;
var current_tank_volume_right = 15.0;
const tank_segment_num = 9;
var intervalID = window.setInterval(tankTimerCallback, 100);

function select_tank_image_number(current_tank_volume)
{
  let tank_volume_percentage = current_tank_volume / max_tank_volume * 100.0;
  
  if (tank_volume_percentage != 100 && tank_volume_percentage != 0)
  {
    tank_current_img = tank_segment_num - Math.floor(tank_volume_percentage / (100 / tank_segment_num));
  }
  else if(tank_volume_percentage == 100)
  {
    tank_current_img = 1;
  }
  else if(tank_volume_percentage == 0)
  {
    tank_current_img = tank_segment_num;
  }
  return tank_current_img;
}

function tankTimerCallback() {

  viv_status = JSON.parse(localStorage.getItem('viv'));
  current_tank_volume_left = viv_status.backTankVolume;
  current_tank_volume_right = viv_status.frontTankVolume;
  if(!current_tank_volume_left)
    current_tank_volume_left = 15.0;
  if(!current_tank_volume_right)
    current_tank_volume_right = 15.0;
    
  tank_current_img_left = select_tank_image_number(current_tank_volume_left);
  tank_current_img_right = select_tank_image_number(current_tank_volume_right);
  
  try
  {
    document.getElementById("tank-visualizer-img-left").style.backgroundImage="url('images/tank/tank_left_" + tank_current_img_left + ".png')";
    document.getElementById("tank-visualizer-img-right").style.backgroundImage="url('images/tank/tank_right_" + tank_current_img_right + ".png')";
  }
  catch
  {
    console.log("tanks_visualize.js ERR => Failed to get tank visualizer img!");  
  }
  try
  {
    document.getElementById("tank-visualizer-text-left").innerHTML = Math.round(current_tank_volume_left * 10) / 10 + " L";
    document.getElementById("tank-visualizer-text-right").innerHTML = Math.round(current_tank_volume_right * 10) / 10 + " L";
  }
  catch
  {
    console.log("battery_visualize.js ERR => Failed to get battery visualizer text!");  
  }
}
