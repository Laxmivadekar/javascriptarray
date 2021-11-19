//var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
// Who has the more than 1 crore or equal to 1 crore called Crorepati hain.
// Who has the more than 1 lakh or equal to 1 lakh called Lakhpati hain.
// Who has less than 1 lakh they are called as Dilwale hain.
// You have to print Count of crorepati, Count of lakhpati, Count of Dilwale
// Output:
// 4 Crorepati hai
// 3 Lakhpati hai
// 4 Dilwale hai
var c=[3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100];
var count_crore=0;
var count_lakh=0;
var count_dilwale=0
for (i of c){
    if (i>=10000000){
        count_crore+=1}
    else if(i>=100000){
        count_lakh+=1}
    else if(i<100000){
        count_dilwale+=1}  
}
console.log("Crorepati hain.",count_crore)
console.log("Lakhpati hain",count_lakh)
console.log("Dilwale hain",count_dilwale)