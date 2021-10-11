function add(a,b){
    console.log(a+b)
    return a+b;
}
function callBackFun(a,b,callback){
    callback(a,b)

}
callBackFun(3,5,add);