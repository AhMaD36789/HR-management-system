"use strict";


let allEmployee=[];
let form=document.getElementById('info-aq');
form.addEventListener('submit',submitHandler);

function employee(fullname,Department,level,imgURL){
    this.fullName=fullname;
    this.Department=Department;
    this.level=level;
    this.imgURL=`./assets/${this.fullName}.jpg`;
    this.salary=0;
    allEmployee.push(this);
}
employee.prototype.calcSalary= function(){

    let temp=0;
    if (this.level=="junior"||this.level=="Junior")
    {
        temp=Math.floor(Math.random() * 501)+500;
        temp=Math.floor(temp-temp*(7.5/100));
        
    }
    else if (this.level=="mid-senior"||this.level=="Mid-Senior")
    {
        temp=Math.floor(Math.random() * 501)+1000;
        temp=Math.floor(temp-temp*(7.5/100));
        
    }
    else if (this.level=="senior"||this.level=="Senior")
    {
        temp=Math.floor(Math.random() * 501)+1500;
        temp=Math.floor(temp-temp*(7.5/100));
        
    }
    
    this.salary=temp;

}


employee.prototype.genID=function(){
 this.employeeID=generateID();
}
function generateID(){
    /*  attempt at guarentee unique id
     const idArr =[];
    for(let i=0;i<idArr.length;i++){
        const random = Math.floor(Math.random()*8999)+1000;
        if (idArr.indexOf(random) !== -1){
            idArr.push(random);
        }
        const random = Math.floor(Math.random()*8999)+1000;
    if (allEmployee.indexOf(random) !== -1){
        generateID()
    }
    else
} */
return Math.floor(Math.random()*8999)+1000;
}
employee.prototype.render=function(){
   const Container = document.getElementById('container');
   const divE1 =document.createElement('div');
   Container.appendChild(divE1);
   const imgE1 = document.createElement('img')
   imgE1.src = this.imgURL;
   Container.appendChild(imgE1);
   const pE1 = document.createElement('p');
   pE1.textContent = `ID:${this.employeeID}`;
   divE1.appendChild(pE1);
   const pE2 = document.createElement('p');
   pE2.textContent = `Department:${this.Department}`;
   divE1.appendChild(pE2);
   const pE3 = document.createElement('p');
   pE3.textContent = `Level:${this.level}`;
   divE1.appendChild(pE3);
   const pE4 =document.createElement('p');
   pE4.textContent = `Salary:${this.salary}`;
   divE1.appendChild(pE4);

}
function submitHandler(event){
    event.preventDefault();
    let Fname = event.target.fullname.value;
    let Dept = event.target.department.value;
    let Level = event.target.level.value;
    let Img = event.target.img.value;
    let newEmployee=new employee(Fname,Dept,Level,Img);
    newEmployee.genID();
    newEmployee.calcSalary();
    newEmployee.render();

}
