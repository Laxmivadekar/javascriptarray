//o/p: Output: the quick brown fox jumped the lazy dog. The dog slept on the verandah.
var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
var subStr = "over";
var c = mainStr.split(" ");
var empty=" ";
for (i of c){
    if (i=="over"){
        //pass
    }
    else{
        str=" "
        empty+=i+str}}
console.log(empty)