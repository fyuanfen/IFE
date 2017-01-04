

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
2. 直接给父元素添加事件，根据event.target判断具体的元素。
可以根据target的其他属性限定具体响应的元素

eg:
```javascript
addHandler(that.output,'mouseover',function (e) {
           if(e.target && e.target.nodeName == "SPAN") {...
           }
   }
           
                        
```

## 6.遍历DOM元素的children属性遇到的坑
关于DOM元素的children属性，以前我只在意它和childNodes属性的区别：即children属性只会返回子元素节点集合，而childNodes返回的就不止元素节点，还有文本节点等所有子节点集合。这样看来，children似乎是我们获取子元素而舍弃其他类型的子节点的最佳选择，虽然说在IE8-的浏览器下用它还会返回注释节点，但兼容起来也是很简单的。

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

### 关于问题1

我们先讨论第一点，这里要考虑for-in循环遍历对象时的规则比较奇葩：对象自身和继承到的可枚举属性都会被遍历到。所以为确定多遍历到的内容到底是自身还是原型上的属性，我们来验证一下：
```javascript  
    console.log(Object.keys(o)); //["0","1","2","i","ii"]
    console.log(Object.getOwnPropertyNames(o)); //["0","1","2","i","ii"]
    ```  
Object.keys()方法返回的是可枚举的自身属性的属性名组成的数组，而Object.getOwnPropertyNames()返回的是所有自身属性的属性名组成的数组（含可枚举和不可枚举）。在这里我们没有看到length、item()、namedItem()三个属性的身影，由此断定他们不是HTMLCollection对象自身的属性，但既然能被for-in遍历到那就只能是来自HTMLCollection原型的可枚举属性。我们可以用Object.getOwnPropertyDescriptor()来验证其在原型上的可枚举性：

```javascript  console.log(Object.getOwnPropertyDescriptor(o.__proto__, 'length').enumerable); //true
    console.log(Object.getOwnPropertyDescriptor(o.__proto__, 'item').enumerable); //true
    console.log(Object.getOwnPropertyDescriptor(o.__proto__, 'namedItem').enumerable); //true
 ```
 
### 关于问题2

解决了多出来的三个属性的来源，我们再回过头看看为什么会把有id的元素重复了两次。观察用Object.keys()方法返回的数组，这两次一次用下标做属性名、一次用id名作属性名。但其实两个属性名指向的是同一个对象：
```javascript  
    o[0]===o['i'] //true
    o[1]===o['ii'] //true
``` 
可见之所以for-in会把id的元素重复遍历两次，不是因为有id的元素都添加进HTMLCollection对象两次，只是一个元素有了两个属性名而已，这是chrome的情况（我的版本是48.0.2564.116 m），但放到火狐和IE下结果却还有点所不同：
```javascript  
    //FF
    console.log(Object.keys(o)); //["0", "1", "2"]
    console.log(Object.getOwnPropertyNames(o)); // ["0", "1", "2", "i", "ii"]
    o[0]===o['i'] //true
    o[1]===o['ii'] //true

    //IE11
    console.log(Object.keys(o)); //["i", "ii", "2"]
    console.log(Object.getOwnPropertyNames(o)); // ["i", "ii", "2"]
    o[0]===o['i'] //true
    o[1]===o['ii'] //true
```  
    
### 小结

这下我们可以得出结论了：children个属性返回的HTMLCollection对象不止能遍历到子元素，还能遍历到来自其原型的length、item()、namedItem()三个属性。而且一旦遍历到的子元素有id，就存在HTMLCollection对象里一个元素会有两个属性名的问题，更让人蛋疼的是各浏览器对这两个属性名的选取各不相同。当然，最根本原因还是因为children属性现在还没被正式纳入标准，在使用这种非标准属性时我们难免遇到一些奇葩的状况。

而至于for-in，最好只用来遍历数组或简单的对象。既要防止那些添加、修改了原型属性的对象遍历出多余的的结果，也要防止类似children这种非标准属性返回一个属性的枚举性不可控的对象的坑





