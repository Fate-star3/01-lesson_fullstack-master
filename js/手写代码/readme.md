# 手写代码

instanceof运算符用于判断构造函数的prototype属性是否出现在对象的原型链中的任何位置
object.getPrototypeOf

- web编程的基础是http协议  基于请求响应式的简单协议
    1. lazyload.html  http协议
    响应  html文件
    2. html 渲染的过程  html DOM + css OM  静态页面
    3. img 引入图片资源的， 再次启动http请求
        图片响应后， 显示在页面上
        页面网络请求数比较多，且大

- 如何优化图片过多造成的网络请求堵塞
    1. 请求数是页面打开速度性能的重要指标
        a标签不算，
        link  href 
        script src 
        img  src  100张图片 -> 页面卡死
        audio  video
        并发井喷式
    2. 启动network 下载
    3. http协议  请求-响应  马路， 并发限制的

- 延迟加载
    1. img src 不改变
        显示一个占位图片
        原来src -> data-src 不需要并发n张图片
        只需要下载一张占位图片  浏览器对已经下载的资源会缓存Cache
    2. onscroll  鼠标滚轮滚动到图片可视区的时候