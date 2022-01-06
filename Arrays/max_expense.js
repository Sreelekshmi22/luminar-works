var expenses=[15000,20000,25000,30000,35000]
var max_exp=0;
for(let amount of expenses)
{
if(amount>max_exp)
{
    max_exp=amount
}
}
console.log("max exp",max_exp);