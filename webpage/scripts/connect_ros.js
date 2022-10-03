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

console.log("tu smo");

var cmd_vel_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/cmd_vel',
  messageType : 'geometry_msgs/Twist'
});

console.log(cmd_vel_listener);

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
    console.log("cmd_vel listener => couldn't write to viv-forward-vel and viv-angular-vel");
  }
});