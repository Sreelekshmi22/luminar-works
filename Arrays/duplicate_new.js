var expenses=[15000,20000,25000,30000,35000,35000]
var unique=[]
for(let amount of expenses)
{
    if(unique.includes(amount)){

    }
    else{
        unique.push(amount)
    }
}
console.log(unique);