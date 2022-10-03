// vel_visualize
var current_vel_img = 1;
var vel_visualization_started = false;
var cmd_vel_x = 0.1;
var intervalID = window.setInterval(timerCallback, 100);
function timerCallback() {
  if(cmd_vel_x == 0 && vel_visualization_started == false)
  {
    vel_visualization_started = true;
    return;
  }
  
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

