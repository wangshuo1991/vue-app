"use strict";

// 根据手机屏幕，调整html的font-size，以便达到手机屏幕适配
~function () {

    var designWidth = 640, deviceWidth = document.documentElement.clientWidth, scaleRatio = deviceWidth / designWidth;

    if(deviceWidth>640){
        var layout = document.querySelector(".app");
        layout.className = 'app app-640';
        return;
    }

    document.documentElement.style.fontSize = scaleRatio * 100 + "px";

}();