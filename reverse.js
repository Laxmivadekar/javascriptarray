/*var a=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var i=0
var l=[]
var j=1
while (i<a.length){
b=a.length-j
l.push(a[b])
j++
i++
}
console.log(l)*/



var a=[50, 40, 23, 70, 56, 12, 5, 10, 7];
r_l=[]
for (var i=a.length-1;i>=0;i--){
r_l.push(a[i])
}
console.log(r_l)