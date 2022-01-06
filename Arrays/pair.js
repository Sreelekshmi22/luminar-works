var arr=[2,3,4,5]
var sum=6;
var count=0;
for(let i of arr)
{
    for(let j of arr){
        if((i+j)==sum){
            console.log(`pairs(${i},${j})`);
        }
    }
}