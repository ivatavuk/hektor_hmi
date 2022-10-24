# HEKTOR HMI

Human Machine Interface developed for the heterogenous robotic system used in the [HEKTOR](https://hektor.fer.hr/) project using [rosbridge](https://github.com/RobotWebTools/rosbridge_suite).


<img src="doc/Hektor_hmi.png" width="700">

## 🛠️ Usage

    roslaunch hektor_hmi start_hmi.launch   

in hektor_hmi/webpage

    python3 -m http.server 7000

goto:
 
    http://localhost:7000/index.html