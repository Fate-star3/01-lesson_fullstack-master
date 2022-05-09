// 浏览器前进后退功能
// 1.面对对象模块化 
// 2.一个文件属于一个模块
const {StackBasedLinkedList} = require('./StackBaseOnLinkedList')
console.log(StackBasedLinkedList); //[class StackBasedLinkedList]
class Browser {
    constructor() {
        this.normalStack = new StackBasedLinkedList()
        this.backStack = new StackBasedLinkedList()
    }
    pushNormal(name) {
        // 在进行入栈操作时，要判断一下backStack是否为空
        this.normalStack.push(name) // 浏览网页入栈  当前访问的页面是栈顶
        this.backStack.clear()//abc  b->d  c就会丢失
        this.displayAllStack()
    }
    back() {
        const value = this.normalStack.pop()//如果normalStack  this.normalStack.pop()返回-1
        if (value !== -1) {
            // 如果normalStack不为空 
            this.backStack.push(value)
            this.displayAllStack()
        }else {
            // 不能进行回退了 normalStack为空
            console.log('normalStack为空了  无法后退');
        }
        //normalStack出栈 pop
        // backStack入栈 push
    }
    front() {
        const value = this.backStack.pop()
        if (value !== -1) {
            this.normalStack.push(value)
            this.displayAllStack()
        }else {
            console.log('backStack为空 无法前进了');
        }
         //normalStack入栈 push
        // backStack出栈 pop
    }
    displayAllStack() {
        console.log('----后退页面----');
        this.backStack.display()
        console.log('----浏览页面----');
        this.normalStack.display()
    }
}
let browser = new Browser()
browser.pushNormal('www.baidu.com')
browser.pushNormal('www.jd.com')
browser.pushNormal('www.github.com')
browser.back();
browser.back();
browser.front();
browser.pushNormal('www.tmall.com');
