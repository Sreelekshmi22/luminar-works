var arr=[2,3,4,5]
var element=1;
var flag=0;
var upp=arr.length-1,low=0;
while(low<upp){
    let cur_sum=arr[low]+arr[upp]
    // case 1
    if(element==cur_sum){
        flag++;
        console.log(`pairs (${arr[low]},${arr[upp]})`);
        break;
    }
    // case 2
    else if(cur_sum<element){
        low++;
    }
    else if(cur_sum>element){
        upp--;
    }
}
if(flag==0)
{
    console.log("no pairs");
}