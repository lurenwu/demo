function LazyMan(name){
    return new _lazyman(name)
}
function _lazyman (name){
    this.task=[]
    this.task.push(()=>{
        console.log('Hi! This is ' + name )
        this.next()
    })
    setTimeout(()=>{
        this.next()
    });
    return this;
}
_lazyman.prototype.sleep = function(time){  
    this.task.push(()=>{
        setTimeout(()=>{
            console.log("Wake up after " + time)   
            this.next()
        },time*1000)
       
    })
   
    return this;
}
_lazyman.prototype.eat = function(food){
    this.task.push(()=>{
        console.log('Eat ' + food + '~')
        this.next()
    })
    
    return this;
}
_lazyman.prototype.next = function(){
    var fn = this.task.shift();
    typeof fn === 'function' ? fn() : '';
}
_lazyman.prototype.sleepFirst = function(time){
    this.task.unshift(()=>{
        setTimeout(()=>{
            console.log("Wake up after " + time)   
            this.next()
        },time*1000)
    })
    return this;
}


function a () {
    var b = 1;

    window.getB = function () {
        return b;
    }
    return function (num) {
        b = num
    }
}

var setB = a()

setB(4)


var c = 1

exports.aaa = 1

module.exports = {
    getC: function () {
        return c
    },
    setC: function (num) {
        c = num
    }
}

(__webpack__chunk__id_1 = function () {
    var c = 1

    return {
        aaa: 1,
        getC: function () {
            return c
        },
        setC: function (num) {
            c = num
        }
    }
})()