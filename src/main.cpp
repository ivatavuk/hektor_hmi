#include "VivHmi.hpp"

int main(int argc, char** argv) 
{
  ros::init (argc, argv, "viv_hmi");
  ros::NodeHandle nh;
  ros::NodeHandle nh_private("~");

	VivHmi VivHmi(nh, nh_private);
    
  ros::spin();
    
  return 0;
}
