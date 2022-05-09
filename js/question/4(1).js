var obj = {  
    // es6 对象字面量的简写方式
    hi(){ 
        //this 对象方法调用 obj 
        // 
        console.log(this,'-------');
        // 返回值是函数  ，高阶函数  
        // 箭头函数 里面没有this 
        return () =>{
            console.log(this,'+++++++');
        }
    },
    sayHi:function(){
        return function(){
            console.log(this);
            return ()=>{
                console.log(this);
            }
        }
    },
    say:()=>{
        console.log(this);
    }
}   

var func = obj.hi;  //普通函数 不执行
// var func = obj.hi();  // 执行 this 指向对象
// func.call(obj);
// 指定this 并且返回一个新的函数
// bind 为了稍后执行而准备的  ， 异步 
func.bind(obj)()();