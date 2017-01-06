

# Task21

## 1. 立即执行函数

[详解javascript立即执行函数表达式](http://web.jobbole.com/82520/)


普通的函数声明和执行如下：

```javascript
function foo() {...}     // 这是定义，Declaration；定义只是让解释器知道其存在，但是不会运行。
foo();                   // 这是语句，Statement；解释器遇到语句是会运行它的。
```

IIFE立即执行函数格式如下：

```javascript
(function foo() {...})();    
```

那么为什么要 IIFE？

- 传统的方法啰嗦，定义和执行分开写；
- 传统的方法直接污染全局命名空间（浏览器里的 global 对象，如 window）


### 立即执行函数与闭包的暧昧关系
立即执行函数能配合闭包保存状态。

像普通的函数传参一样，立即执行函数也能传参数。如果在函数内部再定义一个函数，而里面的那个函数能引用外部的变量和参数（闭包），利用这一点，我们能使用立即执行函数锁住变量保存状态。
```javascript
// 并不会像你想象那样的执行，因为i的值没有被锁住
// 当我们点击链接的时候，其实for循环已经执行完了
// 于是在点击的时候i的值其实已经是elems.length了
var elems = document.getElementsByTagName( 'a' );
for ( var i = 0; i < elems.length; i++ ) {
  elems[ i ].addEventListener( 'click', function(e){
    e.preventDefault();
    alert( 'I am link #' + i );
  }, 'false' );
 
}
 
 
// 这次我们得到了想要的结果
// 因为在立即执行函数内部，i的值传给了lockedIndex，并且被锁在内存中
// 尽管for循环结束后i的值已经改变，但是立即执行函数内部lockedIndex的值并不会改变
var elems = document.getElementsByTagName( 'a' );
for ( var i = 0; i < elems.length; i++ ) {
  (function( lockedInIndex ){
    elems[ i ].addEventListener( 'click', function(e){
      e.preventDefault();
      alert( 'I am link #' + lockedInIndex );
    }, 'false' );
  })( i );
}
 
```



## 2. innerHTML属性，outerHTML属性，textContent属性，innerText属性区别
- innerHTML属性用来读取或设置某个节点内的HTML代码。
- outerHTML属性用来读取或设置HTML代码时，会把节点本身包括在内。
- textContent属性用来读取或设置节点包含的文本内容。
- innerText属性和outerText属性在读取元素节点的文本内容时，得到的值是不一样的。它们的不同之处在于设置一个节点的文本属性时，outerText属性会使得原来的元素节点被文本节点替换掉。注意，innerText是非标准属性，Firefox不支持。

innerText和textContent的区别：

1. innerText受CSS影响，textcontent没有这个问题。比如，如果CSS规则隐藏了某段文本，innerText就不会返回这段文本，textcontent则照样返回。
2. innerText返回的文本，会过滤掉空格、换行和回车键，textcontent则不会
3. innerText属性不是DOM标准的一部分，Firefox浏览器甚至没有部署这个属性，而textcontent是DOM标准的一部分。


[MDN Node.textContent文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/textContent)

## 3.删除数组指定位置的元素

1. 找到某个元素在数组中的索引
```javascript
var pos = fruits.indexOf("Banana");
// 1
```

2. 通过索引删除某个元素
```javascript
var removedItem = fruits.splice(pos, 1); // this is how to remove an item
// ["Strawberry", "Mango"]
```

## 4. 判断是否获得焦点
```javascript
function isFocus(){
            if(document.activeElement.id=='txt2'){
                alert('txt2获得焦点');
            }
```

## 5. 给父元素的每个子元素添加事件
有两种方式：

1. 手动遍历dom元素的children
2. 直接给父元素添加事件，对所有的子元素增加点击事件的监听

```javascript
// 事件代理
function delegateEvent(element, tag, eventName, listener) {
    addEvent(element, eventName, function (e) {
        var event = e || window.event;
        var target = event.target || event.srcElement;
        if (target && target.tagName === tag.toUpperCase()) {
            listener.call(target, event);
        }
    });
}

// 使用示例
// 还是上面那段HTML，实现对list这个ul里面所有li的click事件进行响应
$.delegate($("#list"), "li", "click", clickHandle);
```
## 6. 判断各种数据类型：
```javascript
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    return '[object Array]' === Object.prototype.toString.call(arr);
}

//判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    // chrome下,'function' == typeof /a/ 为true.
    return '[object Function]' === Object.prototype.toString.call(fn);
}
```

isArray 使用’instanceof’或者'Array.constructor'判断，在跨iframe的情况下，有不同Array定义。考虑使用Object.prototype.toString方式判断更准确。

isFunction 问题同上。另外，在较老的chrome浏览器上，正则表达式(/a/)使用’typeof’判断的结果也是’function’。因此使用toString的方式判断更准确。


## 7.遍历DOM元素的children属性遇到的坑
关于DOM元素的children属性，以前我只在意它和childNodes属性的区别：即children属性只会返回子元素节点集合，而childNodes返回的就不止元素节点，还有文本节点等所有子节点集合。

我们知道，children返回的子元素集合实际上是一个类似数组的HTMLCollection对象，那接下来我们要获取每个子元素自然要遍历它咯，但是一遍历，问题就出来了：
```javascript
    <div id="ul">
        <div id='i'></div>
        <div id="ii"></div>
        <div></div>
    </div>

    <script>
        o=document.getElementById('ul').children;
        for (i in o) {
            console.log(o[i]);
        }
    </script>
 ```   
    
  上面的代码使用了for-in进行遍历，但我们预料中的结果并未出现，以chrome为例，运行结果是这个：
    
 ![Untitled Image](http://images.zyy1217.com/FrNrT)
 
 
 其中有两个奇怪的问题:
 
1. 多返回了length等几个在数组应该是不可枚举的属性。
2. 把有id的元素重复了两次。

### 小结

这下我们可以得出结论了：children个属性返回的HTMLCollection对象不止能遍历到子元素，还能遍历到来自其原型的length、item()、namedItem()三个属性。而且一旦遍历到的子元素有id，就存在HTMLCollection对象里一个元素会有两个属性名的问题，更让人蛋疼的是各浏览器对这两个属性名的选取各不相同。当然，最根本原因还是因为children属性现在还没被正式纳入标准，在使用这种非标准属性时我们难免遇到一些奇葩的状况。

而至于for-in，最好只用来遍历数组或简单的对象。既要防止那些添加、修改了原型属性的对象遍历出多余的的结果，也要防止类似children这种非标准属性返回一个属性的枚举性不可控的对象的坑





