var app = require('express')()
// var http = require('http').Server(app)
// var io = require('socket.io')(http)
var player = {};
var black = [], white = [];
var isBlack = true, isOver = false;
app.get('/main.js', function (req, res) {
    res.send('alert("chenlin")');
});
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
    

})
app.listen('3000')





// var Arr = []
// var num = 0,num1 = 0
// io.on('connection', function (socket) {
//     socket.on('move', function (xy) {
//         Arr.push({ 'x': xy.x, 'y': xy.y, 'isBlack': xy.isBlack })

//         console.log(xy.x, xy.y)


//          for (var i = 0; i < Arr.length; i++) {
//             for (var j = 0; j < 5; j++) {         
//                  console.log(Math.abs(xy.x - 50 * j) )
//                 if (Arr[i].isBlack) {
//                     if (Math.abs(xy.x - 50 * j) == Arr[i].x && xy.y == Arr[i].y) {
//                         num++
//                         if (num == 5) {
//                             console.log("黑棋胜")
//                         }
//                     } else if(xy.y - 50 * j == Arr[i].y && xy.x == Arr[i].x){
//                          num1++
//                         if (num1== 5) {
//                             console.log("黑棋胜")
//                         }
//                     }        
//                 }
//             }
         
//         }
//            num =0
//            num1=0
//         io.emit('move', xy)
//     })

// })

// // http.listen(3000, function () {
// //     console.log('listening on port 3000')
// // })
// function getXY(x, y) {
//     if (x < 0 || y < 0) {
//         return -1;
//     }
//     return (y - y % 50) * 50 + x - x % 50;
// }