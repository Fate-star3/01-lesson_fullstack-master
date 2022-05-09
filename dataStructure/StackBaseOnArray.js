// 创建一个基于数组的stack

class ArrayStack {
    constructor(n) {
        this.item = [] //数据集合 
        this.n = n //数组的最大长度
        this.count = 0 //栈顶指针  初始栈为空
    }
    // 入栈
    push(ele) {
        if(this.count >= this.n) return false
        this.item[this.count] = ele //添加进数组
        this.count ++ //栈顶指针指向栈顶
        return true

    }
    // 出栈
    pop(ele) {
        if(this.count == 0) return false
        this.item.pop(this.count - 1) //将数组末尾的元素删除 相当于出栈
        this.count --
    }

}