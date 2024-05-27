let arr = [65, 4, 74754, 8574, 8574854, 54];
let MaxNum=arr.reduce((max,ele)=>{
    if(max<ele){
           return ele;
    }
    else{
        return max;
    }
})
console.log(MaxNum);
