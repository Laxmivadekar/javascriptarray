// Count the values of an object property; mostly they contain lists as values.
// Input :-
// var dict = {
// 'Alex': ['subj1', 'subj2', 'subj3'],
// 'David': ['subj1', 'subj2']
// }
// Output :-
// total count:5

var dict = {'Alex': ['subj1', 'subj2', 'subj3'],'David': ['subj1', 'subj2']}
var l=[]
for (i in dict){
    l.push(dict[i])}
var c=0
for (i of l){
    for (j of i){
        c++
    }
}
console.log(c)
