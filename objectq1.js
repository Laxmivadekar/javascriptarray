/*d1 = {'a': 100, 'b': 200, 'c':300}
d2 = {'a': 300, 'b': 200, 'd':400}
d3={}
for (i in d1){
    for (j in d2){
        if (i===j){
            d3[i]=d1[i]+d2[i]}}
}
console.log(d3)*/   //{ a: 400, b: 400 }


d1 = {'a': 100, 'b': 200, 'c':300}
d2 = {'a': 300, 'b': 200, 'd':400}
d3={}
for (i in d1){
    for (j in d2){
        if (i===j){
            d3[i]=d1[i]+d2[i]}}
}
d3["c"]=d1["c"]
d3["d"]=d2["d"]
console.log(d3)  //{ a: 400, b: 400, c: 300, d: 400 }