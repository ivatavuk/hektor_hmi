// Battery_visualize
var current_velocities = [0, 0, 0, 0];

var intervalID = window.setInterval(drivesTimerCallback, 100);

drive_printing = true;

function togglePauseDrivePrinting() {
  drive_printing = !drive_printing;
  try
  {
    if(drive_printing)
      document.getElementById("toggle_pause_printing_button").innerHTML = "PAUSE PRINTING"; 
    else
      document.getElementById("toggle_pause_printing_button").innerHTML = "RESUME PRINTING";
  }
  catch
  {
    console.log("drives_visualize_viv.js ERR");  
  }
}

function drivesTimerCallback() {
  if(!localStorage.getItem('viv')) {
    viv_status = {};
  }
  else {
    viv_status = JSON.parse(localStorage.getItem('viv'));
  }
  reduction = 81
  current_velocities = viv_status.drive_data_vel;
  if(drive_printing) {
    try
    {
      document.getElementById("drive_1").innerHTML = Math.round(current_velocities[0] / reduction * 100) / 100 + " °/s";
      document.getElementById("drive_2").innerHTML = Math.round(current_velocities[1] / reduction * 100) / 100 + " °/s";
      document.getElementById("drive_3").innerHTML = Math.round(current_velocities[2] / reduction * 100) / 100 + " °/s";
      document.getElementById("drive_4").innerHTML = Math.round(current_velocities[3] / reduction * 100) / 100 + " °/s";
    }
    catch
    {
      console.log("drives_visualize_viv.js ERR");  
    }
  }
}
