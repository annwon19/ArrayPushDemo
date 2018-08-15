var students=[];
var students2=[];
//ask user for a first name, and store it in the first name array.
var name= prompt("what is your first name?");
students.push(name);
//ask user for a last name, and store it in the last name.
var last=prompt("what is your last name?");
students2.push(last);
//display to the window both first and last name from the array wit the length of the both arrays.
window.alert(students[0]+students2[0]+students.length+students2.length);

