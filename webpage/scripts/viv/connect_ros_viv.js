if (!localStorage.viv)
  localStorage.viv = [];

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
  name : '/viv/viv_velocity_controller/cmd_vel',
  messageType : 'geometry_msgs/Twist'
});

cmd_vel_listener.subscribe(function(m) {
  if(!localStorage.getItem('viv')) {
    viv_status = {};
  }
  else {
    viv_status = JSON.parse(localStorage.getItem('viv'));
  }
  viv_status.forwardVel = m.linear.x;
  viv_status.angularVel = m.angular.z;
  localStorage.setItem("viv",  JSON.stringify(viv_status));
});

var tank_back_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/viv/tank_back',
  messageType : 'std_msgs/Float64'
});

tank_back_listener.subscribe(function(m) {
  if(!localStorage.getItem('viv')) {
    viv_status = {};
  }
  else {
    viv_status = JSON.parse(localStorage.getItem('viv'));
  }
  viv_status.backTankVolume = m.data;
  localStorage.setItem("viv",  JSON.stringify(viv_status));
});

var tank_front_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/viv/tank_front',
  messageType : 'std_msgs/Float64'
});

tank_front_listener.subscribe(function(m) {
  if(!localStorage.getItem('viv')) {
    viv_status = {};
  }
  else {
    viv_status = JSON.parse(localStorage.getItem('viv'));
  }
  viv_status.frontTankVolume = m.data;
  localStorage.setItem("viv",  JSON.stringify(viv_status)); 
});

/*
var battery_state_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/viv/battery_state',
  messageType : 'std_msgs/Float64'
});

battery_state_listener.subscribe(function(m) {
  if(!localStorage.getItem('viv')) {
    viv_status = {};
  }
  else {
    viv_status = JSON.parse(localStorage.getItem('viv'));
  }
  viv_status.current_battery_percent = m.data;
  localStorage.setItem("viv",  JSON.stringify(viv_status));
});
*/

var measured_current_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/viv/measured_current',
  messageType : 'std_msgs/Float64'
});

measured_current_listener.subscribe(function(m) {
  if(!localStorage.getItem('viv')) {
    viv_status = {};
  }
  else {
    viv_status = JSON.parse(localStorage.getItem('viv'));
  }
  viv_status.measured_current = m.data;
  localStorage.setItem("viv",  JSON.stringify(viv_status));
});

var battery_voltage_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/viv/battery_voltage',
  messageType : 'std_msgs/Float64'
});

battery_voltage_listener.subscribe(function(m) {
  if(!localStorage.getItem('viv')) {
    viv_status = {};
  }
  else {
    viv_status = JSON.parse(localStorage.getItem('viv'));
  }

  battery_voltage = m.data;
  viv_status.battery_voltage = battery_voltage;
  full_battery_voltage = 55;
  empty_battery_voltage = 51;
  line_coeff = 100.0 / (full_battery_voltage - empty_battery_voltage);
  battery_percentage = line_coeff * (battery_voltage - empty_battery_voltage);
  if (battery_percentage > 100.0)
    battery_percentage = 100.0;
  if (battery_percentage < 0.0)
    battery_percentage = 0.0;

  viv_status.current_battery_percent = battery_percentage;
  localStorage.setItem("viv",  JSON.stringify(viv_status));
});

var driver_state_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/viv/viv_epos_driver/joint_state',
  messageType : 'sensor_msgs/JointState'
});

driver_state_listener.subscribe(function(m) {
  if(!localStorage.getItem('viv')) {
    viv_status = {};
  }
  else {
    viv_status = JSON.parse(localStorage.getItem('viv'));
  }
  viv_status.drive_data_pos = m.position;
  viv_status.drive_data_vel = m.velocity;
  localStorage.setItem("viv",  JSON.stringify(viv_status));
});

var kinova_state_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/my_gen3/joint_states',
  messageType : 'sensor_msgs/JointState'
});

kinova_state_listener.subscribe(function(m) {
  if(!localStorage.getItem('viv')) {
    viv_status = {};
  }
  else {
    viv_status = JSON.parse(localStorage.getItem('viv'));
  }
  viv_status.kinova_joint_pos = m.position;
  viv_status.kinova_joint_vel = m.velocity;
  viv_status.kinova_joint_eff = m.effort;
  localStorage.setItem("viv",  JSON.stringify(viv_status));
});