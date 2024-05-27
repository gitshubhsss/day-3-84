let arr=[5,8,8,8,8,55212,15745,72,0,-1];

function getMin(arr){
    let minVal=arr.reduce((min,ele)=>{
        if(min>ele){
            return ele;
        }
        else{
            return min;
        }
    });
    return minVal;
}

console.log(getMin(arr));














// let min=0;
// for(let i=0;i<arr.length;i++){
//     for(j=0;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             arr[i]=arr[j];
//             min=arr[i];
//         }
//     }
// }
// console.log(min);