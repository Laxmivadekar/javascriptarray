//Write a program to console the sum of odd numbers and sum of even numbers from a given list.
var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
sum_odd=0
sum_even=0
for (i of elements){
    if (i%2==0){
        sum_even+=i}
    else{
        sum_odd+=i}
}
console.log('sum_of_even: ',sum_even)
console.log('sum_of_odd: ',sum_odd)