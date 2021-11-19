// Count of the elements that is repeated in a list.
var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
var unique=[];
for (i of char_list){
    if(!unique.includes(i))
    unique.push(i)}
for (i of unique){
    var c=0;
    for (j of char_list){
        if (i===j){
            c+=1}
    }
    console.log(i,c)
}