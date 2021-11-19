/*Write a function named perfect() which takes 
1 parameter and checks that given parameter is a perfect number or not.
Perfect number means we will count the factors of a given number including
but you need to exclude the own number as its factor.
If it is a perfect number prints num is a perfect number hai or else prints num is not a perfect number hain.
Example:
6 ek perfect number hai 6=1+2+3.
Output:
6 is a perfect number hain.*/

var sum=0;
function perfect(a){
    for (var i=0;i<a;i++){
        if (a%i==0){
            sum+=i}}
if (sum===a){
    console.log("num is a perfect number hai")}
else{
    console.log("num is not a perfect number hain")
}
}
perfect(6)