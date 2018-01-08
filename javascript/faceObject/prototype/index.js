// 构造函数A 它的原型有一个getName方法
function A(name){
    this.name = name;
}
A.prototype.getName = function(){
    return this.name;
}
// 实列化2次后 该2个实列都有原型getName方法；如下代码
var instance1 = new A("longen1");
var instance2 = new A("longen2");
console.log(instance1.getName()); //longen1
console.log(instance2.getName()); // longen2
