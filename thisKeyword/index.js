let student={
    name:"shubham",
    eng:84,
    maths:64,
    marathi:89,
    getAvg(){
        console.log(this);
        let avg=(this.eng+this.marathi+this.maths)/3;
        console.log(`${this.name } got ${avg} marks`);
    }
}
student.getAvg();

function getName(){
    console.log(this);
}
getName();