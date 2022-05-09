const city = {
    name:'南昌县',
    population:'100万'
}
const location ={
    longitude:'115.937726',
    latitude:'28.55722'
}
//reset运算符
const hometown = {
    ...city,
    ...location
}
console.log(hometown);