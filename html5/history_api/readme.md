- 网站，  文件夹

- 网站基于https? 协议
    1. url 网络视角 向服务器发起新的请求
        将 url 对应的html文件 读取到内存中 并且发送给请求者
    2. 等待服务器到达后，将原来的页面清除，替换新的内容

- 传统web开发   
    1. 基于http
    2. 每次链接跳转，全新的http请求，并且返回内容后，重新渲染页面
    3. 每个文件都是全新一套，哪怕有很多重复的地方  导航
    - 缺点？
        1. 文件比较大的，去服务器走一遭
            速度可能会比较慢，网页打开速度非常重要，0.1s
        2. 拿了重复的内容，做了重复的渲染
        http协议这个能优化，依赖于http协议 去取新的内容（去除重复的东西？ nav）
        需要改变的页面地方，动态地去修改
        3. 原来的页面丢掉，等待请求 页面会白屏， 内容到后，再显示出来

- web 2.0  ajax  动态页面  体验比较好  解决白屏问题 
    1. 没有白屏 event.preventDefault
    2. 请求了重复的内容？
        respon
- web 3.0  区块链  安全  