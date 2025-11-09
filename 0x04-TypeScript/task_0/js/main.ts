// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Motolani",
  lastName: "Alebiosu",
  age: 24,
  location: "Lagos"
};

const student2: Student = {
  firstName: "Wisdom",
  lastName: "Alfred",
  age: 25,
  location: "Abuja"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Create table element
const table: HTMLTableElement = document.createElement("table");

// Create table header row
const headerRow: HTMLTableRowElement = document.createElement("tr");
const header1: HTMLTableCellElement = document.createElement("th");
const header2: HTMLTableCellElement = document.createElement("th");

header1.textContent = "First Name";
header2.textContent = "Location";

headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

// Loop through the students and create table rows
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");
  const nameCell: HTMLTableCellElement = document.createElement("td");
  const locationCell: HTMLTableCellElement = document.createElement("td");

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append table to the document body
document.body.appendChild(table);

// Optional: add simple styling
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
table.style.marginTop = "20px";

table.querySelectorAll("th, td").forEach((cell) => {
  (cell as HTMLElement).style.border = "1px solid black";
  (cell as HTMLElement).style.padding = "8px";
});

/*

// render a table dynamically
const table = document.createElement("table");
const headerRow = document.createElement("tr");
const firstStdRow = document.createElement("tr");
const secondStdRow = document.createElement("tr");
const header = document.createElement("th");
const header2 = document.createElement("th");
const header3 = document.createElement("th");
const header4 = document.createElement("th");
const tdata = document.createElement('td');

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
const firstStdData1 = document.createElement("td");
firstStdData1.innerText = student1.firstName;
const firstStdData2 = document.createElement("td");
firstStdData2.innerText = student1.lastName;
const firstStdData3 = document.createElement("td");
firstStdData3.innerText = student1.age.toString();
const firstStdData4 = document.createElement("td");
firstStdData4.innerText = student1.location;
firstStdRow.appendChild(firstStdData1);
firstStdRow.appendChild(firstStdData2);
firstStdRow.appendChild(firstStdData3);
firstStdRow.appendChild(firstStdData4);
table.appendChild(firstStdRow);
// Set second student row values
const secondStdData1 = document.createElement("td");
secondStdData1.innerText = student2.firstName;
const secondStdData2 = document.createElement("td");
secondStdData2.innerText = student2.lastName;
const secondStdData3 = document.createElement("td");
secondStdData3.innerText = student2.age.toString();
const secondStdData4 = document.createElement("td");
secondStdData4.innerText = student2.location;
secondStdRow.appendChild(secondStdData1);
secondStdRow.appendChild(secondStdData2);
secondStdRow.appendChild(secondStdData3);
secondStdRow.appendChild(secondStdData4);
table.appendChild(secondStdRow);
// Append the table to the document body
document.body.appendChild(table);
*/