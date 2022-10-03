// vel_visualize
var current_img = 1;
const cmd_vel_x = 1.0;
var intervalID = window.setInterval(timerCallback, 100);

function timerCallback() {
  if(cmd_vel_x == 0)
  {
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
    document.getElementById("vel-visualizer").style.backgroundImage="url('../images/viv_driving/transparent/viv_driving_" + current_img + "_transparent.png')";
  }
  catch
  {
    console.log("asdfasdf");  
  }
}

function go_forward()
{
  current_img = current_img + 1;
  if(current_img == 4)
  {
    current_img = 1;
  }
}

function go_backward()
{
  current_img = current_img - 1;
  if(current_img == 0)
  {
    current_img = 3;
  }
}

