# Task10:

1. 兼容移动端的弹性布局
首先需要在html文档中添加以下代码，用来兼容移动设备的显示效果
```
<meta name="viewport content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
```
ps:

- width=device-width:宽度等于当前设备的宽度

- initial-scale=1：初始的缩放比例（默认为1）

- maximum-scale=1：允许用户缩放到得最大比例（默认为1）

- user-scalable=no：用户不能手动缩放


2. 媒体查询的格式
**注意:媒体查询的书写格式，and后面必须有空格！！！**
```
@media all and (max-width: 640px) {
 }
 ```
 