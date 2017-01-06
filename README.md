# IFE

## Task4：定位和居中问题

1. 学会使用border生成图形的圆角
2. 使用绝对定位进行布局
3. 学习float的原理，以及布局时清除浮动的方法


[学习笔记](https://github.com/fyuanfen/IFE/blob/master/1-4/task4.md)

## Task5：静态网页布局一

1. label标签与表单元素的绑定
2. 学会自适应网页布局

## Task6: 通过HTML及CSS模拟报纸排版

1. 学习CSS字体兼容
2. 学习使用绝对定位实现蒙版重叠效果


## Task7: 实现精美的官网页面架构及样式布局

1. 学习使用inline-block布局
2. 中文兼容字体设置问题
3. 通过CSS的hover实现导航条的悬停特效
4. 美化的下拉列表样式
5. 使用border属性实现三角形的绘制
6. 巧用radio单选框模拟js点击事件
7. 修改输入框placeholder文字默认颜色
8. input输入框大小无法设置的问题

[演示地址](http://www.zyy1217.com/project/task7/)

[学习笔记](https://github.com/fyuanfen/IFE/blob/master/1-7/task7.md)

## Task8: 响应式网格（栅格化）布局

1. 学习媒体查询
2. 学习CSS预处理器SCSS的使用

参考资料：

[SASS官方文档](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)

[SASS语法](http://www.w3cplus.com/sassguide/syntax.html)

## Task9:

未完成待续。。。。


## Task10：Flexbox 布局练习

1. 学习兼容移动端的弹性布局
2. 注意媒体查询的格式`@media all and ()`,其中and后面必须要有个空格

[学习笔记](https://github.com/fyuanfen/IFE/blob/master/1-10/task10.md)

# 第二阶段：javascript篇

## Task13：
 
1. 学会封装函数：
```javascript
var $ = function (id) {
return document.getElementById(id);
}
```


## Task15:
1. 通过call函数对Object数组调用Array的方法

2. 使用HTML5的新属性dataset传递值
 
3. 判断文本是否只包含中英文

[学习笔记](https://github.com/fyuanfen/IFE/blob/master/2-15/task15.md) 


## Task17:

1. 学习了JS设置CSS样式的几种方式

2. 使用Object.keys(obj).length，来获取没有length属性的object数组的长度
   
3. 学习了javascript中in操作符(for..in)、Object.keys()和Object.getOwnPropertyNames()的区别
  
[参考文章](http://www.cnblogs.com/wujie520303/p/4931384.html?utm_source=tuicool&utm_medium=referral)

4. mouseover和mouseenter的区别

 
[参考文章](http://www.cnblogs.com/kingwell/archive/2012/09/09/2677258.html)

 
[学习笔记](https://github.com/fyuanfen/IFE/blob/master/2-17/task17.md)


[演示地址](http://zyy1217.com/project/task17/)


## Task18： 模拟队列

1. 学习js的队列操作

2. 添加事件监听程序时，需要对处理程序handler进行封装


eg:

```javascript
addEventhandler(item,'click',function(){
	que.leftPop();
});
```

[演示地址](http://www.zyy1217.com/project/task18)

## Task19： 排序算法
未做

## Task20: 队列操作及模糊查询
1. 学习js正则匹配

2. 学会函数式编程

[演示地址](http://www.zyy1217.com/project/task20)

## Task21: 实现个人tag标签

1. 学习函数式编程，实现代码的高级抽象和封装

2. 立即执行函数

3. innerHTML属性，outerHTML属性，textContent属性，innerText属性区别

4. 删除数组指定位置的元素

5. 使用document.activeElement判断是否获得焦点

6. 给父元素的每个字元素添加事件

7. 遍历DOM元素的children属性遇到的坑

[学习笔记](https://github.com/fyuanfen/IFE/blob/master/2-21/task21.md)

[演示地址](http://www.zyy1217.com/project/task21)


## Task22: js二叉树遍历问题

1. arguments.callee()

回调自身的函数

2. 二叉树问题

[参考资料](http://blog.csdn.net/luckyxiaoqiang/article/details/7518888)

[演示地址](http://www.zyy1217.com/project/task22/)

[学习笔记](https://github.com/fyuanfen/IFE/blob/master/2-22/task22.md)

## Task23: 

1. 为什么使用setTimeout替代setInterval
[你真的了解setTimeout和setInterval吗](http://qingbob.com/difference-between-settimeout-setinterval/)

2. 学会事件代理和函数封装