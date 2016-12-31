
# Task15:

1. 通过call函数对Object数组调用Array的方法
对于Object数组，不可以直接使用Array的forEach方法，但可以在Html上下文中调用数组方法
eg：
```javascript
[].forEach.call(el.children, function(childEl) {
  console.log(childEl);
})
```

2. 使用HTML5的新属性dataset传递值

使用dataset，用data-city保存自定义属性名。

想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

注意dataset要使用驼峰命名法

 ```javascript
 // 
    $("aqi-table").addEventListener("click", function(event) {
        if (event.target.nodeName.toLowerCase() === 'button') {
            delBtnHandle.call(null, event.target.dataset.city);
        }
    })
    
  ```
 
 3. 判断城市名称是否只包含中英文
  ```javascript
  
  	if ( city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
  }
  ```
    