//all pairs in an array of integers whose sum is equal to 30
//[ [ 11, 19 ], [ 12, 18 ], [ 13, 17 ], [ 17, 13 ], [ 18, 12 ], [ 19, 11 ] ]
var n = [10, 11, 12, 13, 14, 17, 18, 19]
main=[]
for (i of n){
    sub=[]
    for (j of n){
        if (i+j===30){
            sub.push(i)
            sub.push(j)
    main.push(sub) }}}
console.log(main)
