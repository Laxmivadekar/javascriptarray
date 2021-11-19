// Take 1 list and have some objects inside it as sample data given below,
// and create a new list with unique values and console the unique values list.
// Example :
// Input :
// [ {"first":"1"}, {"second": "2"}, {"third": "1"}, {"four": "5"}, {"five":"5"}, {"six":"9"}, {"seven":"7"} ]
// Output :-
// [2', '7', '9', '5', '1']

a=[ {"first":"1"}, {"second": "2"}, {"third": "1"}, {"four": "5"}, {"five":"5"}, {"six":"9"}, {"seven":"7"} ]
b=[]
for (i of a){
    for ( j in i){
       if(!b.includes(i[j])){
           b.push(i[j])
       } }
}
console.log(b)
