var pattern="ABABBC"
var wc={} //{A:1B:1}

for(let char of pattern){
    if(char in wc){
        console.log("first recursive character is",char);
        break
    }
    else{
        wc[char]=1
    }
    
}