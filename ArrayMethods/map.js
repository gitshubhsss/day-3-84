let nums=[1,8,7,5,85,2,2];

let newArr=nums.map((num)=>{
    return num*2
})
console.log(newArr);

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

let gpa=arr.map((el)=>{
    return el.marks/10;
})
console.log(gpa);