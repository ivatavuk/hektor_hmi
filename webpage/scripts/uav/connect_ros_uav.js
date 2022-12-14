var ros = new ROSLIB.Ros({
  url : 'ws://localhost:9090'
});

ros.on('connection', function() {
  try {
    document.getElementById("ros-status").innerHTML = "CONNECTED";
    document.getElementById("ros-status").style = "color: #30ff30;";
  }
  catch
  {
    console.log("err");
  }
});

ros.on('error', function(error) {
  try {
    document.getElementById("ros-status").innerHTML = "ERROR";
    document.getElementById("ros-status").style = "color: rgb(255, 34, 34);";
  }
  catch
  {
    console.log("err");
  }
});

ros.on('close', function() {
  try {
    document.getElementById("ros-status").innerHTML = "CLOSED";
    document.getElementById("ros-status").style = "color: rgb(255, 34, 34);";
  }
  catch
  {
    console.log("err");
  }
}
);

var cmd_vel_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/viv/cmd_vel',
  messageType : 'geometry_msgs/Twist'
});

cmd_vel_listener.subscribe(function(m) {
  localStorage.forwardVel = m.linear.x;
  localStorage.angularVel = m.angular.z;
});

var tank_back_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/viv/tank_back',
  messageType : 'std_msgs/Float64'
});

tank_back_listener.subscribe(function(m) {
  localStorage.backTankVolume = m.data;
});

var tank_front_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/viv/tank_front',
  messageType : 'std_msgs/Float64'
});

tank_front_listener.subscribe(function(m) {
  localStorage.frontTankVolume = m.data;
});

var battery_state_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/viv/battery_state',
  messageType : 'std_msgs/Float64'
});

battery_state_listener.subscribe(function(m) {
  localStorage.current_battery_percent = m.data;
});

var measured_current_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/viv/measured_current',
  messageType : 'std_msgs/Float64'
});

measured_current_listener.subscribe(function(m) {
  localStorage.measured_current = m.data;
});

var battery_voltage_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/viv/battery_voltage',
  messageType : 'std_msgs/Float64'
});

battery_voltage_listener.subscribe(function(m) {
  localStorage.battery_voltage = m.data;
});