// vel_visualize
var current_vel_img = 1;
var cmd_vel_x = 0.0;
var cmd_angular_vel_z = 0.0;
var intervalID = window.setInterval(timerCallback, 100);

function update_cmd_vel_x (vel_x)
{
  cmd_vel_x = vel_x;
}
function update_cmd_angular_vel_z (vel_z)
{
  cmd_vel_z = vel_z;
}

var vel_visualize_init = true;
function timerCallback() {

  viv_status = JSON.parse(localStorage.getItem('viv'));
  cmd_vel_x = viv_status.forwardVel;
  cmd_vel_angular_z = viv_status.angularVel;
  if(!cmd_vel_x) cmd_vel_x = 0.0;
  if(!cmd_vel_angular_z) cmd_vel_angular_z = 0.0;

  if(cmd_vel_x > 0.0) { go_forward(); }

  if(cmd_vel_x < 0.0) { go_backward(); }
  try
  {
    document.getElementById("vel-visualizer").style.backgroundImage="url('images/viv_driving/transparent/viv_driving_" + current_vel_img + "_transparent.png')";
  }
  catch { console.log("vel_visualize.js ERR => Failed to get VIV driving image!"); }

  try
  {
    document.getElementById("viv-forward-vel").innerHTML = Math.round(cmd_vel_x * 1000) / 1000 + " m/s";
    document.getElementById("viv-angular-vel").innerHTML = Math.round(cmd_vel_angular_z * 1000) / 1000 + " rad/s";
  }
  catch
  {
    console.log("/viv/cmd_vel listener => couldn't write to viv-forward-vel and viv-angular-vel");
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

