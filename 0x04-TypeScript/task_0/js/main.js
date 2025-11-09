// Create two students
var student1 = {
    firstName: "Motolani",
    lastName: "Alebiosu",
    age: 24,
    location: "Lagos"
};
var student2 = {
    firstName: "Wisdom",
    lastName: "Alfred",
    age: 25,
    location: "Abuja"
};
// Create an array of students
var studentsList = [student1, student2];
// render a table dynamically
var table = document.createElement("table");
var headerRow = document.createElement("tr");
var firstStdRow = document.createElement("tr");
var secondStdRow = document.createElement("tr");
var header = document.createElement("th");
var header2 = document.createElement("th");
var header3 = document.createElement("th");
var header4 = document.createElement("th");
var tdata = document.createElement('td');
// Set header values
header.innerText = "First Name";
header2.innerText = "Last Name";
header3.innerText = "Age";
header4.innerText = "Location";
headerRow.appendChild(header);
headerRow.appendChild(header2);
headerRow.appendChild(header3);
headerRow.appendChild(header4);
table.appendChild(headerRow);
// Set first student row values
var firstStdData1 = document.createElement("td");
firstStdData1.innerText = student1.firstName;
var firstStdData2 = document.createElement("td");
firstStdData2.innerText = student1.lastName;
var firstStdData3 = document.createElement("td");
firstStdData3.innerText = student1.age.toString();
var firstStdData4 = document.createElement("td");
firstStdData4.innerText = student1.location;
firstStdRow.appendChild(firstStdData1);
firstStdRow.appendChild(firstStdData2);
firstStdRow.appendChild(firstStdData3);
firstStdRow.appendChild(firstStdData4);
table.appendChild(firstStdRow);
// Set second student row values
var secondStdData1 = document.createElement("td");
secondStdData1.innerText = student2.firstName;
var secondStdData2 = document.createElement("td");
secondStdData2.innerText = student2.lastName;
var secondStdData3 = document.createElement("td");
secondStdData3.innerText = student2.age.toString();
var secondStdData4 = document.createElement("td");
secondStdData4.innerText = student2.location;
secondStdRow.appendChild(secondStdData1);
secondStdRow.appendChild(secondStdData2);
secondStdRow.appendChild(secondStdData3);
secondStdRow.appendChild(secondStdData4);
table.appendChild(secondStdRow);
// Append the table to the document body
document.body.appendChild(table);
