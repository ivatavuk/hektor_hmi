// Battery_visualize
var current_velocities = [0, 0, 0, 0];

var intervalID = window.setInterval(drivesTimerCallback, 100);
function drivesTimerCallback() {
  if(!localStorage.getItem('viv')) {
    viv_status = {};
  }
  else {
    viv_status = JSON.parse(localStorage.getItem('viv'));
  }
  
  current_velocities = viv_status.drive_data_vel;
  try
  {
    document.getElementById("drive_1").innerHTML = Math.round(current_velocities[0] * 100) / 100 + " rad/s";
    document.getElementById("drive_2").innerHTML = Math.round(current_velocities[1] * 100) / 100 + " rad/s";
    document.getElementById("drive_3").innerHTML = Math.round(current_velocities[2] * 100) / 100 + " rad/s";
    document.getElementById("drive_4").innerHTML = Math.round(current_velocities[3] * 100) / 100 + " rad/s";
  }
  catch
  {
    console.log("drives_visualize_viv.js ERR");  
  }
}
