#热加载
root@zxfpc:~/proj/rnp5# adb shell input keyevent 82

#环境变量

root@zxfpc:~/proj/rnp5# source $HOME/.bash_profile

具体内容:

export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
