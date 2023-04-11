"use strict";

function employee(employeeID,firstName,lastName,Department,level,imgURL){
    this.employeeID=employeeID;
    this.fullName=firstName+" "+lastName;
    this.Department=Department;
    this.level=level;
    this.imgURL=imgURL;
}
employee.prototype.salary= function(){
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
    
    return temp;
}

employee.prototype.render= function(){
    document.write(`${this.fullName} &emsp; ${this.salary()} `);
    document.write("<br>");
}
 const employee1000 = new employee (1000,"Ghazi","Samer","Administration","Senior","url")
const employee1001 = new employee (1001,"Lana","Ali","Finance","Senior","url")
const employee1002 = new employee (1002,"Tamara","Ayoub","Marketing","Senior","url")
const employee1003 = new employee (1003,"Safi","Walid","Administration","Mid-Senior","url")
const employee1004 = new employee (1004,"Omar","Zaid","Development","Senior","url")
const employee1005 = new employee (1005,"Rana","Saleh","Development","Junior","url")
const employee1006 = new employee (1006,"Hadi","Ahmad","Finance","Mid-Senior","url")

employee1000.render();
employee1001.render();
employee1002.render();
employee1003.render();
employee1004.render();
employee1005.render();
employee1006.render(); 