class Node {
    constructor(element) {
        this.element = element //数据域
        // next指向下一个节点
        this.next = null //指针域
    }
}
class StackBasedLinkedList {
    constructor() {
        this.top = null //空栈
    }
    push(value) {
        let node = new Node(value) //创建一个新节点
        if (this.top === null) {
            this.top = node //如果是空栈，则第一个节点为top节点
        } else {
            node.next = this.top //将节点指针指向下一个节点
            this.top = node // 栈顶为新入栈的节点
        }
    }
    pop() {
        // 如果链表为空则返回-1
        if (this.top == null) {
            return -1
        }
        let value = this.top.element
        this.top = this.top.next //栈顶指针为
        return value
    }
    clear() {
        this.top = null
    }
    display() {
        if (this.top !== null) {
            let temp = this.top
            while (temp != null) {
                console.log(temp.element);
                temp = temp.next
            }
        }
    }
}
module.exports = { StackBasedLinkedList, Node }