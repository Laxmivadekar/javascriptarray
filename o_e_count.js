//Write a program to count how many odd numbers are there and how many even numbers are there in a given list.
var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
e_c=0
o_c=0
for(i of elements){
    if (i%2==0){
        e_c+=1}
    else{
        o_c+=1}
}
console.log('even_count: ',e_c)
console.log('oddd_count: ',o_c)