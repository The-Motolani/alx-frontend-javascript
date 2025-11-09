import { Subjects } from './subjects/Teacher';
import { Subjects as CppSubjects } from './subjects/Cpp';
import { Subjects as JavaSubjects } from './subjects/Java';
import { Subjects as ReactSubjects } from './subjects/React';

export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

export const cTeacher: Teacher = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10,
};
/*
// Teacher object with experienceTeachingC
export const cTeacher: Subjects.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10,
}; 
*/

// Cpp
export const cpp = new CppSubjects.Cpp();
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java
export const java = new JavaSubjects.Java();
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React
export const react = new ReactSubjects.React();
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
