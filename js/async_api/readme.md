# 异步之数据请求  

1. xhr 和 fetch 关系？
    功能都是一样的 xhr 旧时代， fetch es6 最新的api 
    fetch('http://localhost:3000/posts')
        .then(data => data.json())
        .then(data => data)   

    xhr = new XMLHttpRequest   xhr 实例    
    <!-- request 多种请求方法  get 明文  url输入  post 加密   -->
    xhr.open("GET","http://localhost:3000/posts",true)    
    xhr.send(); 发送一个请求   
    xhr.addEventListener
    xhr.onreadystatechange= function(event){   <!--添加事件监听 -->
        event.target.readyState   4
        JSON.parse(event.target.responseText);    变成一个JSON object 

    }    

- json-server  提供数据库访问服务  
    live-server 提供网页服务