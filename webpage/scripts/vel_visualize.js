// vel_visualize
var current_vel_img = 1;
var cmd_vel_x = -0.1;
var cmd_angular_vel_z = 0.1;
var intervalID = window.setInterval(timerCallback, 100);
function timerCallback() {
  if(cmd_vel_x > 0.0)
  {
    go_forward();
  }

  if(cmd_vel_x < 0.0)
  {
    go_backward();
  }
  try
  {
    document.getElementById("vel-visualizer").style.backgroundImage="url('images/viv_driving/transparent/viv_driving_" + current_vel_img + "_transparent.png')";
  }
  catch
  {
    console.log("vel_visualize.js ERR => Failed to get VIV driving image!");  
  }
  
  try
  {
    document.getElementById("viv-forward-vel").innerHTML = cmd_vel_x + " m/s";
    document.getElementById("viv-angular-vel").innerHTML = cmd_angular_vel_z + " rad/s";
  }
  catch
  {
    console.log("vel_visualize.js ERR => Failed to get vel visualizer text!");  
  }
  
}

function go_forward()
{
  current_vel_img = current_vel_img + 1;
  if(current_vel_img == 4)
  {
    current_vel_img = 1;
  }
}

function go_backward()
{
  current_vel_img = current_vel_img - 1;
  if(current_vel_img == 0)
  {
    current_vel_img = 3;
  }
}

