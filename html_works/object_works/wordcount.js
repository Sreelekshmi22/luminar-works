var text="hello hai hello hai"
var words=text.split(" ")
// words=["hello","hai","hello","hai"]
console.log(words);

var wc={}//{hello:1}

for(let word of words){
    if(word in wc){
        wc[word]+=1;
    }
    else{
        wc[word]=1
    }
}
console.log(wc);