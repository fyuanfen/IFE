# Task17:
## 1. 学习JS设置CSS样式的几种方式


1. 直接设置style的属性 ：
	(某些情况用这个设置 !important值无效)

	如果属性有'-'号，就写成驼峰的形式（如textAlign）  

	如果想保留 - 号，就中括号的形式  
    ```javascript
    element.style['text-align'] = '100px';
	element.style.height = '100px';
	```

2. 直接设置属性（只能用于某些属性，相关样式会自动识别）
    ```javascript
    element.setAttribute('height', 100);
	element.setAttribute('height', '100px');
    ```

3. 设置style的属性
    ```javascript
    element.setAttribute('style', 'height: 100px !important');
        ```

4. 使用setProperty  (如果要设置!important，推荐用这种方法设置第三个参数)
    ```javascript
    element.style.setProperty('height', '300px', 'important');
        ```

5. 改变class   比如JQ的更改class相关方法
	因JS获取不到css的伪元素，所以可以通过改变伪元素父级的class来动态更改伪元素的样式
    ```javascript
    element.className = 'blue';
	element.className += 'blue fb';
    ```

6. 设置cssText
    ```javascript
    element.style.cssText = 'height: 100px !important';
	element.style.cssText += 'height: 100px !important';
    ```
    

## 2. 获取object数组的长度
   
 js的object没有length属性，可以使用`Object.keys(obj).length`获得数组的长度
   
## 3. 学习了javascript中in操作符(for..in)、Object.keys()和Object.getOwnPropertyNames()的区别
  
 [参考文章](http://www.cnblogs.com/wujie520303/p/4931384.html?utm_source=tuicool&utm_medium=referral)
 
## 4.mouseover和mouseenter的区别
 
 [参考文章](http://www.cnblogs.com/kingwell/archive/2012/09/09/2677258.html)
 
 
[演示地址](http://zyy1217.com/project/task17/)
   