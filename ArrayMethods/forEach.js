let arr=[
    {
        name:"shubham",
        marks:100,
    },{
        name:"pavan",
        marks:56,
    },{
        name:"ashish",
        marks:89,
    }
];

// for (const value of arr) {
//     console.log(value.marks);
// }

// arr.forEach((value)=>{
//     console.log(value.marks);
// })

let PrintMarks=function(value){
    console.log(value.marks);
}
arr.forEach(PrintMarks)