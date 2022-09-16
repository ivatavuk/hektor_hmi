cmake_minimum_required(VERSION 3.0.2)
project(viv_hmi)

find_package(catkin REQUIRED COMPONENTS
  roscpp
  rospy
)

catkin_package(
)

include_directories(
  include
  ${catkin_INCLUDE_DIRS}
)

##-------------------------------------------------

add_executable(viv_hmi 
  src/main.cpp
  src/VivHmi.cpp)

target_link_libraries(viv_hmi
  ${catkin_LIBRARIES}
)

add_dependencies(viv_hmi 
  ${catkin_EXPORTED_TARGETS}
)