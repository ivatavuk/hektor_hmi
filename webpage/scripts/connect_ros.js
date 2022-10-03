console.log("inicijalizacija skripte!");

var ros = new ROSLIB.Ros({
  url : 'ws://localhost:9090'
});

ros.on('connection', function() {
  console.log("connected!")
  document.getElementById("ros-status").innerHTML = "Connected";
});

ros.on('error', function(error) {
  console.log("error!")
  document.getElementById("ros-status").innerHTML = "Error";
});

ros.on('close', function() {
  console.log("closed!")
  document.getElementById("ros-status").innerHTML = "Closed";
}
);

var cmd_vel_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/viv/cmd_vel',
  messageType : 'geometry_msgs/Twist'
});

cmd_vel_listener.subscribe(function(m) {
  update_cmd_vel_x(m.linear.x);
  update_cmd_angular_vel_z(m.angular.z);
  try
  {
    document.getElementById("viv-forward-vel").innerHTML = Math.round(m.linear.x * 1000) / 1000 + " m/s";
    document.getElementById("viv-angular-vel").innerHTML = Math.round(m.angular.z * 1000) / 1000 + " rad/s";
  }
  catch
  {
    console.log("/viv/cmd_vel listener => couldn't write to viv-forward-vel and viv-angular-vel");
  }
});

var tank_back_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/viv/tank_back',
  messageType : 'std_msgs/Float64'
});

tank_back_listener.subscribe(function(m) {
  update_back_tank_volume(m.data);
  try
  {
    document.getElementById("tank-visualizer-text-left").innerHTML = Math.round(m.data * 10) / 10 + " L";
  }
  catch
  {
    console.log("/viv/tank_back listener => couldn't write to tank left");
  }
});

var tank_front_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/viv/tank_front',
  messageType : 'std_msgs/Float64'
});

tank_front_listener.subscribe(function(m) {
  update_front_tank_volume(m.data);
  try
  {
    document.getElementById("tank-visualizer-text-right").innerHTML = Math.round(m.data * 10) / 10 + " L";
  }
  catch
  {
    console.log("/viv/tank_front listener => couldn't write to tank right");
  }
});

var battery_state_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/viv/battery_state',
  messageType : 'std_msgs/Float64'
});

battery_state_listener.subscribe(function(m) {
  update_battery_state(m.data);
});