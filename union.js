// var list1 = [1,2,3,4,5,6]
// var list2 = [2,3,1,0,6,7]
// a=list1.concat(list2);     //[ 1, 2, 3, 4, 5, 6, 2, 3, 1, 0, 6, 7 ]

var list1 = [1,2,3,4,5,6];
var list2 = [2,3,1,0,6,7];
var l=[]
var l1=[]
for(i of list1){
    for (j of list2){
        if (i!=j){
                console.log(i)
            }
        }
    }
}

// var list1 = [1,2,3,4,5,6]
// var list2 = [2,3,1,0,6,7]
// elements=[]
// for(var i of list1){
// if (!list2.includes(i)){
// elements.push(i)
// }
// }
// console.log(elements);