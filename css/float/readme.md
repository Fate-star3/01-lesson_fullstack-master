# es6  新的数据类型  
    大数据      数值表示范围    

js 简单数据类型       
    String boolean  number undefined null bigint     

- 大数据时代  ，es6推出了新的简单数据类型  BigInt  
- 适合大数相加， 准确 ，不适合 / ， 舍去小数   
- 两种新建方式  1n BigInt("1")  
- typeof  BigInt  独立的数据类型   
- 不支持隐式类型转换    强制类型转换  BigInt()  
- number 和 BigInt 相加 ， 报错， 不能混 强制类型转换    


img  设置float img 脱离文档流 居于左侧   
- 没有完全脱离文档流   
    浮动元素不只影响自己（脱离文档流）， 它会影响周围的元素对齐（左|右）进行环绕   
- block（p 兄弟 不受影响 ） img 离开了文档流 ，所以block 无视img   
- 让inline元素 （文本 ， element document.createElement('p')  document.createTextNode('1212vdf') ）环绕float 元素来实现浮动布局   
- 文字环绕效果是 float 典型的应用   

## float 元素特性   

1. 块级框 
    不管是行内还是块级， 如果被设置了浮动， 浮动元素会生成一个块级框（拥有盒子的能力 block），   

    一旦浮动 ，立刻会像inline元素一样产生包裹性  会随内容适应（inline）  多列布局（菜单）   

2. 高度塌陷  
    block 宽度是100%   
    高度呢？ 是内容 ， 文档里加高的  计算好 父容器有多高？   
    浮动元素不参加父元素高度计算    

    


