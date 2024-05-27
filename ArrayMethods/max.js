let arr=[5,855,865,9865,56465,498,649,649,864,9684,986,4986498496];

let large=0;
for(let i=0;i<arr.length;i++){
    
    if(large<arr[i]){
        large=arr[i]
    }
}
console.log(large);