#ifndef VIVHMI_HPP
#define VIVHMI_HPP

#include <ros/ros.h>

class VivHmi
{
public:
  VivHmi(ros::NodeHandle &nh, ros::NodeHandle &nh_private);
private:
  ros::NodeHandle nh_, nh_private_;
  double rate_;
  ros::Timer control_timer_;

  void loop(const ros::TimerEvent &/* unused */);
};

#endif /* VIVHMI_HPP */