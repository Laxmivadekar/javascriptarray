/*var a=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var max=0;
for(var i=0;i<a.length;i++){
    if (a[i]>max){
        max=a[i]
    }
}
console.log(max)*/

/*var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var max=0;
var second_max=0;
for (var i =0;i<numbers.length;i++){
if (max<numbers[i]){
if (second_max<max){
second_max=max;
}
max=numbers[i];
}
else{
if (second_max<numbers[i]){
second_max=numbers[i];
}
}
}
console.log(second_max)*/

var a=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var max=0;
var s_max=0;
for(var i=0;i<a.length;i++){
    if (a[i]>max){
        if (s_max<=max){
            s_max=a[i]
        }
    }
}
console.log(s_max)