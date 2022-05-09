# Flex布局学习
## 容器设置
### 1. flex-direction  主轴的方向（项目排列的方向）
- 1.row(默认值):主轴为水平方向，起点在左端。
- 2.row-reverse:主轴为水平方向，起点在右端。
- 3.column:主轴为垂直方向，起点在上沿。
- 4.column-reverse:主轴为垂直方向，起点在下沿。
![alt 1](https://img-blog.csdn.net/2018093016442097?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaHVhbmh1YW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

### 2.flex-wrap
- 1.nowrap(默认，不换行)
![alt 2](https://img-blog.csdn.net/20180930164438445?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaHVhbmh1YW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
- 2.wrap(换行)
![alt 3](https://img-blog.csdn.net/20180930164452405?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaHVhbmh1YW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
- 3.wrap-reverse(换行，第一行在下方)
![alt 4](https://img-blog.csdn.net/20180930164502600?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaHVhbmh1YW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

### 3.flex-flow
    1.这个属性是上面两个属性的简写模式
    2.默认值：flex-flow,row-nowrap

### 4.justify-content(定义了项目在主轴上的对齐方式)
- 1.flex-start(左对齐)
![alt 5](https://img-blog.csdn.net/2018093016451425?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaHVhbmh1YW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
- 2.flex-eng(右对齐)
![alt 6](https://img-blog.csdn.net/20180930164521566?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaHVhbmh1YW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
- 3.center(居中)
![alt 7](https://img-blog.csdn.net/20180930164531105?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaHVhbmh1YW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
- 4.space-between(两端对齐，项目之间的间隔都相等)
![alt 8](https://img-blog.csdn.net/20180930164541872?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaHVhbmh1YW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
- 5.space-around(每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍)
![alt 9](https://img-blog.csdn.net/20180930164551214?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaHVhbmh1YW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

### 5.align-items（定义项目在交叉轴上如何对齐)
    1.flexflex-start 交叉轴的起点对齐。
    2.flex-end 交叉轴的终点对齐。
    3.center 交叉轴的中点对齐。
    4.baseline 项目的第一行文字的基线对齐。
    5.stretch（默认值） 如果项目未设置高度或设为auto，将占满整个容器的高度。
![alt 10](https://img-blog.csdn.net/20180930164608841?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaHVhbmh1YW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

### 6.align-content(多根轴线的对齐方式，一根轴该属性无效)
    1.flex-start 与交叉轴的起点对齐。
    2.flex-end 与交叉轴的终点对齐。
    3.center 与交叉轴的中点对齐。
    4.space-between 与交叉轴两端对齐，轴线之间的间隔平均分布。
    5.space-around 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
    6.stretch（默认值） 轴线占满整个交叉轴。
![alt 11](https://img-blog.csdn.net/20180930164626250?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaHVhbmh1YW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

## 项目的属性设置

### 1.order
    1.定义项目的排列顺序，数字越小，排列越靠前，默认为零
![alt 1](https://img-blog.csdn.net/20180930164641229?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaHVhbmh1YW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
![alt 2](https://img-blog.csdn.net/2018093016464825?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaHVhbmh1YW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

### 2.flex-grow
    1.定义项目的放大比例，默认为0，默认情况下即使有剩余空间项目也不会放大。缩放的方向为flex-direction的方向。如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
![alt 3](https://img-blog.csdn.net/20180930164658813?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaHVhbmh1YW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
![alt 4](https://img-blog.csdn.net/20180930164705388?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaHVhbmh1YW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

### 3.flex-shrink
    1.定义项目的缩小比例，默认为1，空间不足时，该项目会缩小。其值为0表示不缩小.缩放的方向为flex-direction的方向。如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
    2.负值对该属性无效。
![alt 5](https://img-blog.csdn.net/20180930164716705?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaHVhbmh1YW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

### 4.flex 
    1.flex-grow,flex-shrink和flex-basis的简写 该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
    2.建议优先使用这个属性而不分开写，浏览器会推算相关值。
    3.grow表示伸张因子，shrink表示是收缩因子。
    4.grow在flex容器下的子元素的宽度和比容器小的时候起作用。
    5.grow定义了子元素的宽度增长因子，除去子元素之和剩下的宽度会按照各个子元素的gorw值进行平分加大各个子元素上。
    6.计算容器还剩空间：available_space(容器还剩的空间）=container_size(容器宽度)-flex_item_total(子元素宽度之和)
    7.计算增长单位：grow_unit(增长单位)=available_space/flex_grow_total(子元素增长因子之和)
    8.得到子元素的宽度：flex-item-width(子元素计算得到的宽度)=flex-basis+grow-unit*flex-grow

### 5.align-self
    1.该属性允许单个项目与其他项目不同的对齐方式，可覆盖align-items的属性值。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则为stretch。
    2.auto | flex-start | flex-end | center | baseline | stretch;该属性可能取6个值，除了auto，其他都与align-items属性完全一致。
![alt 6](https://img-blog.csdn.net/20180930164743878?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21yaHVhbmh1YW4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)


