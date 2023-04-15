let allEmployee = [];
let AdminEmpNo = 0, marketEmpNo = 0, DevEmpNo = 0, SalesEmpNo = 0, totalEmpNo = 0;
let totAdminSal = 0, totMarketSal = 0, totDevSal = 0, totSalesSal = 0, totSalary = 0;
let avgAdminSal = 0, avgMarketSal = 0, avgDevSal = 0, avgSalesSal = 0, empAvgSalary = 0;
function getEmployee() {
    let jsonArr = localStorage.getItem('All Employees');
    let dataFromStorage = JSON.parse(jsonArr);
    allEmployee = dataFromStorage;
}
getEmployee();

function tableRender() {
    totalAndAvg();
    const Container = document.getElementById('employeeTable');
    if (allEmployee == null) {
        allEmployee = [];
    }
    const divE1 = document.createElement('div');
    // divE1.setAttribute('class', 'empTable');
    Container.appendChild(divE1);

    const tabE1 = document.createElement('table');
    divE1.appendChild(tabE1);

    const tabHeadE1 = document.createElement("thead");
    tabE1.appendChild(tabHeadE1);

    const tabR1 = document.createElement("tr");
    tabHeadE1.appendChild(tabR1);

    const thE1 = document.createElement("th");
    thE1.textContent = `Department Name`;
    tabE1.appendChild(thE1);

    const thE2 = document.createElement("th");
    thE2.textContent = `# of employees`;
    tabE1.appendChild(thE2);

    const thE3 = document.createElement("th");
    thE3.textContent = `Average Salary for department`;
    tabE1.appendChild(thE3);

    const thE4 = document.createElement("th");
    thE4.textContent = `Total Salary for department`;
    tabE1.appendChild(thE4);

    const tabR2 = document.createElement("tr");
    tabE1.appendChild(tabR2);

    const tD1E1 = document.createElement("td");
    tD1E1.textContent = `Administration`;
    tabE1.appendChild(tD1E1);

    const tD1E2 = document.createElement("td");
    tD1E2.textContent = `${AdminEmpNo}`;
    tabE1.appendChild(tD1E2);

    const tD1E3 = document.createElement("td");
    tD1E3.textContent = `${avgAdminSal}`;
    tabE1.appendChild(tD1E3);

    const tD1E4 = document.createElement("td");
    tD1E4.textContent = `${totAdminSal}`;
    tabE1.appendChild(tD1E4);

    const tabR3 = document.createElement("tr");
    tabE1.appendChild(tabR3);

    const tD2E1 = document.createElement("td");
    tD2E1.textContent = "Marketing";
    tabE1.appendChild(tD2E1);

    const tD2E2 = document.createElement("td");
    tD2E2.textContent = `${marketEmpNo}`;
    tabE1.appendChild(tD2E2);

    const tD2E3 = document.createElement("td");
    tD2E3.textContent = `${avgMarketSal}`;
    tabE1.appendChild(tD2E3);

    const tD2E4 = document.createElement("td");
    tD2E4.textContent = `${totMarketSal}`;
    tabE1.appendChild(tD2E4);

    const tabR4 = document.createElement("tr");
    tabE1.appendChild(tabR4);

    const tD3E1 = document.createElement("td");
    tD3E1.textContent = "Development";
    tabE1.appendChild(tD3E1);

    const tD3E2 = document.createElement("td");
    tD3E2.textContent = `${DevEmpNo}`;
    tabE1.appendChild(tD3E2);

    const tD3E3 = document.createElement("td");
    tD3E3.textContent = `${avgDevSal}`;
    tabE1.appendChild(tD3E3);

    const tD3E4 = document.createElement("td");
    tD3E4.textContent = `${totDevSal}`;
    tabE1.appendChild(tD3E4);

    const tabR5 = document.createElement("tr");
    tabE1.appendChild(tabR5);

    const tD4E1 = document.createElement("td");
    tD4E1.textContent = "Sales";
    tabE1.appendChild(tD4E1);

    const tD4E2 = document.createElement("td");
    tD4E2.textContent = `${SalesEmpNo}`;
    tabE1.appendChild(tD4E2);

    const tD4E3 = document.createElement("td");
    tD4E3.textContent = `${avgSalesSal}`;
    tabE1.appendChild(tD4E3);

    const tD4E4 = document.createElement("td");
    tD4E4.textContent = `${totSalesSal}`;
    tabE1.appendChild(tD4E4);

    const tabR6 = document.createElement("tr");
    tabE1.appendChild(tabR6);

    const tD1E5 = document.createElement("td");
    tD1E5.textContent = "Total";
    tabE1.appendChild(tD1E5);

    const tD2E5 = document.createElement("td");
    tD2E5.textContent = `${totalEmpNo}`;
    tabE1.appendChild(tD2E5);

    const tD3E5 = document.createElement("td");
    tD3E5.textContent = `${empAvgSalary}`;
    tabE1.appendChild(tD3E5);

    const tD4E5 = document.createElement("td");
    tD4E5.textContent = `${totSalary}`;
    tabE1.appendChild(tD4E5);

}

function totalAndAvg() {

    allEmployee.forEach(emp => {
        if (emp.Department == "Administration") {
            AdminEmpNo++;
            totAdminSal += emp.salary;
        }


        else if (emp.Department == "Marketing") {
            marketEmpNo++;
            totMarketSal += emp.salary;
        }

        else if (emp.Department == "Development") {
            DevEmpNo++;
            totDevSal += emp.salary;
        }

        else if (emp.Department == "Finance") {
            SalesEmpNo++;
            totSalesSal += emp.salary;
        }

    });
    avgMarketSal = totMarketSal / marketEmpNo;
    avgDevSal = totDevSal / DevEmpNo;
    avgAdminSal = totAdminSal / AdminEmpNo;
    avgSalesSal = totSalesSal / SalesEmpNo;
    totSalary = totAdminSal + totMarketSal + totDevSal + totSalesSal;
    totalEmpNo = AdminEmpNo + marketEmpNo + DevEmpNo + SalesEmpNo;
    empAvgSalary = totSalary / totalEmpNo;

}
tableRender();