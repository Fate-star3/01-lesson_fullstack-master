# 电商界面开发

- html css js 位置有何意义？
    1. html + css  完成静态页面的显示  越快越好
        css 放到 head html + css 允许  并行  下载和执行
        - 下载html DOM树
         - 下载css 
         css 不会阻塞html 继续下载  ，css尽可能放到上面（head头部）
         html +  css  排版好  可看的
        t = t1 + t2
        t = Math.max(t1,t2)
    2. js 放到尾部的原因？
        在下载的过程（1M），会阻塞html的下载
        js下载并执行完后，才会恢复html下载
        t = Math.max(t1,t2)+t3
        js  执行  后台

- defer 
    1. 异步 下载html 不会影响到后续DOM的渲染
    2. 多个script
        文件的大小  下载的速度和标签的顺序不一样
        js文件下载后还要执行
        script 立即执行  放到head里面（不用defer） 下载时间+执行时间 = 拖慢首屏
        静态页面显示时间
        defer 确保执行的顺序  和标签的顺序一致（引入顺序由总用）
    3. defer 脚本会在文档渲染完毕后，DOMContentLoaded事件调用前执行
        DOMContentLoaded（html+css） 早于load（资源加载都ready）事件

- async （chrome 新版 没有去执行）
    - DOMContentLoaded之后运行
    - 谁先下载完，谁先执行，没有顺序的约定， 

- js 事件 分不同的时期等级
    1. DOM0 级事件 onload onclick 事件里包含on
    2. DOM2 级事件 addEventListener('click',callback);


- 电商应用（页面开发）
    1. 界面能力良好，原子级别（html标签+css排版）
    2. 组件（页面开发的思维提升，工具级别）
        - css 命名技巧
        - 用一堆的html+css组成了一个组件，一个展示功能和能力的集合，复用
        - 有个框架提供了这些组件的话，70%的工作不用做了
    3. 做项目
        - 调研weui 移动端最nb的ui框架
        - 界面能力 丰富业务
        