// // var x = prompt("enter your name")
// // document.write("Hi " + x + " how are you");
// // // document.getElementById("test").innerHTML = ('Hi ' + x + ' how are you');
// // // console.log('Hi ' + x)
// // alert(typeof x)
//
// // var arr = ['soufiane', 20, 'youssoufia', true, 5.4545]
// //
// // // document.write(arr)
// // console.log(arr);
// //
// // // document.write(arr.join(' | '))
// //
// // // alert(arr.reverse());
// //
// // var narr = arr.slice();
// // console.log(narr);
//   var ar = ['a', 'b', 'c', 'd', 'm', 'q', 'g', 'h']
//
//   var arr2 = ['ahmed', 56667, false, 88.6788]
//
//   // var con = ar.concat(arr2)
//
//   // console.log(con)
//   // console.log(ar.copyWithin(3 ,4))
//   // console.log(ar.sort())
//   // var ar3 = ar.sort()
//   // console.log(ar3.reverse())
// // console.log(ar.pop())
//
// // var newAr = ar.slice(0, 4)
// // console.log(newAr)
//
// // ar.splice(4, 2, 'L')
// // alert(ar)
//
// // alert(ar.indexOf('m'))
//
// alert(ar.join(""))


var ar = []

function ajout(){
  var aj = prompt("your name: ")
      ar.push(aj)
      document.getElementById("ad").innerHTML = ar.join(" | ")
      console.log(ar);
}

function delet(){
  var inp = prompt("the name that you wanna remove: ")
  var idx = ar.findIndex(element => element == inp);
  console.log(idx)
  ar.splice(idx, 1)
  document.getElementById("rm").innerHTML = ar.join(" | ")
}

function tri(){
  ar.sort()
  document.getElementById("srt").innerHTML = ar.join(" | ")
}

function triC(){
  ar.reverse()
  document.getElementById("rvrs").innerHTML = ar.join(" | ")

}
