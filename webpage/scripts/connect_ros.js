var ros = new ROSLIB.Ros({
  url : 'ws://localhost:9090'
});

ros.on('connection', function() {
  document.getElementById("status").innerHTML = "Connected";
});

ros.on('error', function(error) {
  document.getElementById("status").innerHTML = "Error";
});

ros.on('close', function() {
  document.getElementById("status").innerHTML = "Closed";
}
);
var txt_listener = new ROSLIB.Topic({
  ros : ros,
  name : '/txt_msg',
  messageType : 'std_msgs/String'
});

txt_listener.subscribe(function(m) {
  document.getElementById("msg").innerHTML = m.data;
});


function visualize_vel()
{
  let current_img = 1;
  if(current_img == 3)
  {
    current_img == 1;
  }
  else
  {
    current_img = current_img + 1;
  }

  console.log(current_img);
}

visualize_vel()