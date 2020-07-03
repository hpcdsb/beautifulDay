// Array.prototype.unique = function () {
//     let newArray = [];
//     let flag = true;
//     for(let i = 0;i<this.length;i++){
//         flag = false;
//         for(let j = 0;j<newArray.length;j++){
//             if(this[i] == newArray[j]){
//                 flag = true;
//                 break
//             }
//         }
//         if(!flag){
//             newArray.push(this[i]);
//         }
//     }
//     return newArray;

// }

// Array.prototype.unique= function(){
//     let newArray = [];
//     this.forEach(function(item){
//         if(newArray.indexOf(item) === -1){
//             newArray.push(item);
//         }
//     })
//     return newArray;
// }

// Array.prototype.unique = function(){
//    return this.filter(function(item,index){
//         return this.indexOf(item) === index
//     }.bind(this))
// }

// Array.prototype.sum = function(){
//     return this.reduce(function(total,num){
//         return total + num
//     })
// }

// let arr = [1,2,3,4,5]
// console.log(arr.sum())

// let item = '上海自来水来自海上';
// for(let i =0; i<item.length;i++){
//     console.log(item[i])
// }

// function huiwne(item){
//     let str = ''
//     for(let i = item.length-1;i>=0;i--){
//         str += item[i]
//     }
//     if(str == item){
//         console.log('这是回文')
//     }else{
//         console.log('这不是回文')
//     }
// }
// huiwne(item)
