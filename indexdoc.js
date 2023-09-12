const myform = document.querySelector("form");
const namee = document.getElementById("name");
const docid = document.getElementById("docID");
const department = document.getElementById("dept");
const exp = document.getElementById("exp");
const email = document.getElementById("email");
const number = document.getElementById("mbl");
const tbody = document.querySelector("tbody");

let alltask = [];
myform.addEventListener("submit", function (e) {
  e.preventDefault();

  let data = {
    name: namee.value,
    doctorid: docid.value,
    department: department.value,
    experience: exp.value,
    email: email.value,
    number: number.value,
  };

  if (data.experience > 5) {
    data.role = "Senior";
  } else if (data.exp >= 2 && data.exp <= 5) {
    data.role = "Junior";
  } else if (data.exp <= 1) {
    data.role = "Trainee";
  } else {
    data.role = "Unknown";
  }
  alltask.push(data);
  tbody.innerHTML = "";
  
  
  alltask.map((ele) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");
    const td7 = document.createElement("td");
    const td8 = document.createElement("td");
    console.log(ele.input);
    td1.innerText = ele.name;
    td2.innerText = ele.doctorid;
    td3.innerText = ele.department;
    td4.innerText = ele.experience;
    td5.innerText = ele.email;
    td6.innerText = ele.number;
    td7.innerText = ele.role;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
      const deleteIndex = alltask.indexOf(ele);
      alltask.splice(deleteIndex, 1);
      tbody.removeChild(tr);
    });

    td8.append(deleteButton);

    tr.append(td1, td2, td3, td4, td5, td6, td7 , td8);
    tbody.append(tr);
    
  });
});
