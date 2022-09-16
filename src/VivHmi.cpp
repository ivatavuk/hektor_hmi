#include "VivHmi.hpp"

VivHmi::VivHmi(ros::NodeHandle &nh, ros::NodeHandle &nh_private) 
    : nh_(nh), rate_(1), nh_private_(nh_private)
{
  std::cout << "initializing VivHmi!\n";

  control_timer_ = nh_.createTimer(ros::Duration(ros::Rate(rate_)), &VivHmi::loop, this);
}

void VivHmi::loop(const ros::TimerEvent &/* unused */)
{
  std::cout << "in loop!\n";
}