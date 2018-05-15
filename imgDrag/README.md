## 移动端手势操作

#### 缩放（pinch）

```
    var scaleCount = 1;
    var oImg = document.getElementById('oImg');
    var hammertime = new Hammer(oImg);
    hammertime.get('pinch').set({ enable: true });
    hammertime.on('pinchout', function(ev) {
        if(scaleCount >= 2.5){
            //alert("max");
            return;
        }
        scaleCount += 0.03;
        oImg.style.transform = "scale("+scaleCount+")";
    });
    hammertime.on('pinchin', function(ev) {
        if(scaleCount <= 0.6){
            //alert("min");
            return;
        }
        scaleCount -= 0.03;
        oImg.style.transform = "scale("+scaleCount+")";
    });

```
