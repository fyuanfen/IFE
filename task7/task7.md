
呼呼，第一个完整的WEB网页项目总算做好了，因为是边学边做，同步记笔记，每个知识点都认真钻研，所以足足花了三四天才做好。不过收获也很大呐~~~

满满的成就感ING,开森..
下面是网页的[演示地址](http://www.zyy1217.com/project/task7/)
# 1. 使用inline-block布局

网页的页眉使用inline-block进行布局，并使用了相对定位，且利用font-size:0消除inline-block的间距

参考[有哪些好方法能处理 display: inline-block 元素之间出现的空格？](https://www.zhihu.com/question/21468450)

# 2. 中文兼容字体设置问题
```css
font-family:"Microsoft YaHei",Arial,Helvetica,sans-serif,"宋体";
```
[学习笔记](http://www.zyy1217.com/2016/12/21/CSS%E4%B8%AD%E7%9A%84%E5%AD%97%E4%BD%93%E5%85%BC%E5%AE%B9%E5%86%99%E6%B3%95/)

# 3. 通过CSS的hover实现导航条的悬停特效

hover的时候改变导航条字体颜色，同时下方有动画托条的过渡效果


![Untitled Image](http://images.zyy1217.com/KvYv3)


1. +符号指代 #a和#b是相邻兄弟关系，可通过a:hover改变#b的样式
```css
#a:hover + #b{...}
```

2. ~ 符号指代 ：a元素在同一个父元素下后面的其他兄弟元素。
```css
#a:hover ~ #photos{animation: ma1 .15s ease-out forwards;} 
```

3. 空格 表明#b元素是#a元素的子元素

```css
#a:hover #b{animation: ma1 .15s ease-out forwards;} 
```




# 4. 美化下拉列表样式

HTML中有select标签可以实现下拉框，可是默认样式实在是太丑了。除了使用插件外，也有多种方式实现下拉列表的美化
## 1. 用纯css改变下拉列表select框的默认样式

[参考文章](http://ourjs.com/detail/551b9b0529c8d81960000007)

## 2. 类似 select 选择框效果及美化
[类似 select 选择框效果及美化](http://www.cnblogs.com/LY-leo/p/5765598.html)

[CSS进阶伪元素的妙用--单标签之美](http://www.cnblogs.com/coco1s/p/5528393.html)

## 3. 用CSS和jQuery制作简单的下拉框演示
http://www.dowebok.com/demo/196/



# 5.使用border属性实现三角形的绘制

## 效果图如下：

![Untitled Image](http://images.zyy1217.com/RnhnU)


主要是利用了正方形，除了其左边框，其他都不显示，最终效果就是一个三角形，如下图：

![Untitled Image](http://images.zyy1217.com/ilDDC)
## 实现代码：

```css
.img{
    background: url('../images/pic08.jpg') no-repeat;

}
.img header{
    content: '';
    flex-direction:column ;
    justify-content: center;
    align-self: flex-start;
    width:0;
    height:0;
    border: 20px solid transparent;
    border-left-color: #FFF;
}
```

```html
 <div class="img">
            <header></header>
        </div>
```

## 参考资料：

[css 巧用border属性制作各种图形](http://www.manongjc.com/article/86.html)

# 6. 巧用radio单选框模拟js点击事件

阶段一的任务不能用JS，为了增强页面的交互性，我们最终用radio单选框成功的模拟了JS的点击事件。

1. 页面结构：
给input标签设置width和height，然后通过定位，使其与目标元素重合，并且覆盖在目标元素上（这里可以使用z-index属性），最后将input标签透明度设置为0（opacity=0）。

2. 点击事件模拟：
使用::checked伪元素，结合'+','~'选择器，在radio被选中后，选择器选择到单选框的兄弟元素，然后便可以设置目标元素点击后的样式了，而且还可以通过给目标元素设置transition属性，使样式的转变更加美观。

3. 限制因素：
input标签必须是目标元素的兄弟元素，且并是目标元素的“哥哥”。


# 7. 修改输入框placeholder文字默认颜色
```html
<input type="text" placeholder="姓名："/>
```
input框默认显示的字体颜色是由placeholder设定的，其默认字体颜色是浅灰色的， 因此应该针对placeholder来设置你自己想要的颜色。

```css
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #000; opacity:1; 
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #000;opacity:1;
}

input:-ms-input-placeholder{
    color: #000;opacity:1;
}

input::-webkit-input-placeholder{
    color: #000;opacity:1;
}
```


# 8. input输入框大小无法设置的问题

height和width是实际输入框宽高度，input 元素是可替换元素，根据type值的不同有不同的表现形式

## 问题1：
对input控件设置CSS属性时，如果对其高度height进行设置后，在IE上可以正确显示，但是如果在Safair、Chrome、Firefox等WebKit为核心的浏览器上却实效。
```css
/* 这样设置只对IE有效，对其他内核的浏览器无效 */
input {
    height:30px
}
```
兼容性问题一直是比较麻烦的，要解决这个问题，就需要给控件CSS属性添加一个box-sizing属性，然后添加height属性，这样就可以兼容所有浏览器了。
```css

/* 兼容WebKit核心和IE核心的浏览器 */
input {
  	  box-sizing:border-box;
      -moz-box-sizing:border-box; /* Firefox */
      -webkit-box-sizing:border-box; /* Safari */;
       padding: 0;
   	   height:150px}
  ```
## 问题2：windows可以对type为button类型的input元素设置宽高，但是MAC不可以

## Solution1:
```css
    input[type=button] {
      appearance:button;
      -moz-appearance:button; /* Firefox */
      -webkit-appearance:button; /* Safari 和 Chrome */

      -moz-box-sizing:border-box; /* Firefox */
      -webkit-box-sizing:border-box; /* Safari */;
      box-sizing:border-box;
      padding: 0;
      height: 50px;
    }

```
appearance属性将元素呈现为按钮。box-sizing:border-box;令浏览器呈现出带有指定宽度和高度的框，并把边框和内边距放入框中。

## Solution2:将input文本框默认有边框，将边框设为0也可以
```css
    input[type=button] {
    	border: 0;
        height:50px;
        -moz-box-sizing:border-box; /* Firefox */
        -webkit-box-sizing:border-box; /* Safari */;
        box-sizing:border-box;
   	 	padding:0;
    }

```







