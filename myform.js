document.addEventListener("DOMContentLoaded", function () {
  const myForm = document.getElementById("myForm");

  const nameee = document.getElementById("name");
  const employeeID = document.getElementById("employeeID"); 
  const department = document.getElementById("department");
  const exp = document.getElementById("exp"); 
  const email = document.getElementById("email");
  const mlb = document.getElementById("mbl"); 
  const tbody = document.querySelector("tbody");

  let AllTask = [];

  myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = {
      name: nameee.value,
      employeeID: employeeID.value, 
      department: department.value,
      exp: parseFloat(exp.value),
      email: email.value,
      number: mlb.value, 
    };

  
    if (data.exp > 5) {
      data.role = "Senior";
    } else if (data.exp >= 2 && data.exp <= 5) {
      data.role = "Junior";
    } else if (data.exp <= 1) {
      data.role = "Fresher";
    } else {
      data.role = "Unknown"; 
    }

    AllTask.push(data);

    tbody.innerHTML = "";
    AllTask.map((ele) => {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const td4 = document.createElement("td");
      const td5 = document.createElement("td");
      const td6 = document.createElement("td");
      const td7 = document.createElement("td");

      td1.innerText = ele.name;
      td2.innerText = ele.employeeID;
      td3.innerText = ele.department;
      td4.innerText = ele.exp;
      td5.innerText = ele.email;
      td6.innerText = ele.number;
      td7.innerText = ele.role;

      tr.append(td1, td2, td3, td4, td5, td6, td7);
      tbody.append(tr);
    });
  });
});
