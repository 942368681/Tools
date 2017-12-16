;(function (deviceWidth, fontSize){
  deviceWidth = deviceWidth || 640;
  fontSize = fontSize || 100;
  var metas = document.querySelectorAll('meta');
  var viewPort = [].slice.call(metas).filter((item) => {
    return item.name === 'viewport';
  })[0];
  if(!viewPort){
    var meta = document.createElement('meta');
    meta.name = 'viewport';
    viewPort = document.head.insertBefore(meta, metas[metas.length - 1].nextElementSibling);
  }
  var scale = 1/window.devicePixelRatio;
  viewPort.content = `width=device-width, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no`;
  var html = document.documentElement;
  var fn = function (){
    html.style.fontSize = (html.clientWidth / deviceWidth) * fontSize + 'px';
  };
  fn();
  window.addEventListener('resize', fn);
})();

{
   "views": {
      "User": {
         "records": [
            "Tab 1",
            "Tab 2",
            "Tab 3"
         ]
      }
   },
   "metas": {
      "demo": {
         "properties": {
            "defaultActiveKey":1,
            "onChange":"() => {alert(1)}"
         }
      }
   },
   "flag": 0,
   "pageNum": 1
}


<TabPane tab="1" key="1">1</TabPane>
            <TabPane tab="2" key="2">2</TabPane>
            <TabPane tab="3" key="3">3</TabPane>


      YYIMChat.initSDK({
         app: 'udn', //appId
         etp: 'yonyou', //etpId
         wsurl: 'stellar.yyuap.com', //websocket Url
         wsport: 5227, //websocket port 5227/5222/5225
         hbport: 7075, //httpbind  port 7075/7070
         servlet: 'https://im.yyuap.com/', //rest Url
         flash_swf_url: 'xxx/x/Moxie.swf', //flash 上传 swf文件位置
         logEnable: true, //client log
         clientMark: 'web' //client mark 'web' or 'pc'
      });


      (2) [{…}, {…}]
0
:
contactReadedVersion
:
-1
id
:
"zongtengfei"
jid
:
"zongtengfei.yycloud_dev.yycloud@im.yyuap.com"
lastContactTime
:
1512452754704
lastMessage
:
{from: "sfl", to: "zongtengfei", id: "92B89148-AC64-40AA-8E32-866B49557AE2", dateline: 1512452754704, type: "chat", …}
readedVersion
:
1
sessionVersion
:
1
state
:
"exists"
type
:
"chat"
__proto__
:
Object
1
:
{contactReadedVersion: 2, jid: "zhoulei.yycloud_dev.yycloud@im.yyuap.com", lastContactTime: 1512447726268, lastMessage: {…}, readedVersion: 3, …}
length
:


let bool = re.test(e.data.content);
         if (bool) {
            let str = e.data.content;
            str.replace(re,($0,$1) => {
               let find = imgArr.some((item,index) => {
                  return (item.actionData == $1);
               });
               if (find) {
                  imgArr.forEach((item,index) => {
                     if (item.actionData == $1) {
                        data = {
                           key:i,
                           name_from:e.from,
                           txt:<img src = {path+item.url} />
                        }
                     }
                  })
               } else {
                  data = {
                     key:i,
                     name_from:e.from,
                     txt:e.data.content
                  }
               }
            });
         } else {
         }

         let re = /(^\[[\u4e00-\u9fa5A-Za-z]+\]$)/g;