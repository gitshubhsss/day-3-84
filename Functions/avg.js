let arrayAverage=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}

let arr=[8,9,2,8,28,8,5]

console.log(arrayAverage(arr));