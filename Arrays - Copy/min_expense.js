var expenses=[15000,20000,25000,30000,35000]
var min_exp=15000;
for(let amount of expenses)
{
if(amount<min_exp)
 {
    min_exp=amount
 }
}
console.log("min exp",min_exp);