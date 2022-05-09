
function func(num) {
    this.count++
    console.log(this);//指向window
    console.log(this.count);//NaN
}
// window.count与func.count没有关联
func.count = 0
func(1)
console.log(func.count); //0
console.log(window.count);//NaN
func()
console.log(func.count);