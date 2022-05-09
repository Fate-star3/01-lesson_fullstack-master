## json 主流数据交换格式    
    1. db.json 数据 posts comments {} 来组织  
    2.交换 json格式一般用于前端和后端  交换数据  
- json 格式文件   
    {} 对象字面量   json object    

- 博客   
    - 文章   
    - 评论  
    - 用户    

- 数据存在数据库中 ，导出来的，也是文件 .csv 
    也可以在json文件里   json 后缀的文件，放的是数据   
    前端的视角  -> 数据的存储和使用  
    - mysql 数据表   json key    结合名字  []  
    - 很多列    key:val    
    - 表之间也有关系   

- mysql 数据库服务 ？  
    db.json 数据库  后端  也当成资源来访问   
    1. 把当前项目转换成为一个全栈项目   npm init -y （直接初始化，不询问）   后端项目的初始化  for db   
        根目录下会多一个package.json 文件    项目描述文件    
    2. 安装一些工具包  npm i json-server  
        json-server 基于json格式的数据文件提供数据访问服务  ，http 
  
- live-server 启动了  前端网页的访问（http）  
    前端 live-server  http://127.0.0.1:5500/lesson_fullstack-master/js/async/index.html     
    Mysql  数据库服务  127.0.0.1:3306  
    后端  json-server    http://localhost:3000/posts   npm run dev 启动  ctrl + c 停止访问

- 前端  后端  数据通信  json  通信的基本格式   
    xhr    
    前端主动去拉取后端的数据服务  