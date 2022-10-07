var intervalID = window.setInterval(statusTimerCallback, 100);
var units = "deg";

function toggleUnits() {
  try
  {
    if(units == "deg")
    {
      units = "rad";
      document.getElementById("toggle_units_button").innerHTML = "SWITCH TO DEGREES"; 
    }
    else
    {
      units = "deg";
      document.getElementById("toggle_units_button").innerHTML = "SWITCH TO RADIANS";
    }
      
  }
  catch
  {
    console.log("kinova_status_writing.js ERR");  
  }
}

function statusTimerCallback() {
  if(!localStorage.getItem('viv')) {
    viv_status = {};
  }
  else {
    viv_status = JSON.parse(localStorage.getItem('viv'));
  }
  
  joint_pos_list = viv_status.kinova_joint_pos;
  if(!joint_pos_list)
    joint_pos_list = [0, 0, 0, 0, 0, 0, 0];
    
  try
  {
    for(counter = 1; counter <= 7; counter++)
    {
      if(units == "rad")
        document.getElementById("joint-pos-" + counter).innerHTML = Math.round(joint_pos_list[counter - 1] * 10) / 10 + " rad";
      if(units == "deg")
        document.getElementById("joint-pos-" + counter).innerHTML = Math.round(joint_pos_list[counter - 1] * 180.0 / 3.14159 * 10) / 10 + " °";
    }
  }
  catch
  {
    console.log("kinova_status_writing.js ERR");  
  }
}
