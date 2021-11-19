// If we have [50, 60, 10] and [10, 20, 13] and prints output like this.
// 60
// 80
// 23
 
function sum(a,b){
    for (var i=0;i<=2;i++){
        var s=0;
        s+=a[i]+b[i]
        console.log(s)
    }
}
sum([50, 60, 10],[10, 20, 13])

