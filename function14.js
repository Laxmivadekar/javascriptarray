// [2, 6, 18, 10, 3, 75] and [6, 19, 24, 12, 3, 87] 
// dono even hain
// dono even nahi hai
var c=[2, 6, 18, 10, 3, 75];
var d=c.length
console.log(d)
function l(a,b){
    for (var i=1;i<=6;i++){
        if (a[i]%2==0 && b[i]%2==0){
            console.log('dono even hain')}
        else{
            console.log('dono even nahi hain')  
        }
    }
}
l([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87])