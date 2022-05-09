# byteDance css 考题
1. 选择器
    - 伪类选择器 :nth-child :nth-of-type :hover
    - 伪元素选择器 ::before ::after
    - html元素都是有标签的，::before像元素一样插入页面没有标签，是用css来申明的，用来完成一些特殊情况。比如字体图标
    - 有些任务标签也可以做，但副作用重
        1. li border-bottom: 10px solid #000; 可以用伪元素来完成
        2. li 盒子文档流 渲染出来的 
2. css3盒子模型
    -  标准盒子模型(IE盒子) box-sizing: content-box;  
     content-box是指width+padding+border
    - css3盒子 box-sizing: border-box;
        + border-box指width,width里面包含了border和padding
        + 设置这个属性，盒子不会受padding和border的影响撑大盒子，前提是padding和border加起来不超过width 
        + 移动端布局基本上都用CSS3的盒子模型 
        + css3盒子模型文字居中是行高等于行间距，但是应该将边框填充给去掉 
3. 文档流
> 文档流指的是元素排版布局过程中，元素会默认自动从左往右，从上往下的流式排列方式。并最终窗体自上而下分成一行行，并在每行中从左至右的顺序排放元素。