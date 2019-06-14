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

#生成apk
配置keystore后,还需要执行
$ cd android && ./gradlew assembleRelease
才能生成可发布的apk
