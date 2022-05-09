
const phoneHandler = {
    // 监听写操作
    set(target,name,value) {
        console.log(target,name,value);
        target[name] = value.match(/[0-9]/g).join('')
        console.log(target[name]);
    },
    // 监听度操作
    get(target,name) {
        console.log('-----------');
        return target[name].slice(0,10).replace(/([0-9]{3})(\d{3})(\d{4})/, '($1)$2-$3')
    }
}
// 上面代码中，作为构造函数，Proxy接受两个参数。第一个参数是所要代理的目标对象（上例是一个空对象），即如果没有Proxy的介入，操作原来要访问的
// 就是这个对象；第二个参数是一个配置对象，对于每一个被代理的操作，需要提供一个对应的处理函数，该函数将拦截对应的操作
let phoneNumbers = new Proxy({},phoneHandler)
// phoneNumbers.phone = [1,2,3,4,5,6,7,8,9,0]
phoneNumbers.phone = 'dsfsf3434sfsfssffff232423434242dsdsdsdsd4sd5'
// phoneNumbers.get('phone')
console.log(phoneNumbers.phone);

