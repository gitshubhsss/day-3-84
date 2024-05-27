const student={
    name:"shubham",
    marks:58,
    city:"Delhi",
    prop:this,
    info:{
        address:"At ghavar post sakhar taluka velhe",
        motherName:"chaaya",
        fathersName:"shivaji",
        getMarks:()=>{
            console.log(this.name);
        }
    },
    getName: function(){
        console.log(this);
        return this.name;
    },
}

student.info.getMarks();
