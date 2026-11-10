'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

// select the <select> element
const target = document.querySelector('#target');

for (const student of students)

{
  const option = document.createElement('option');

  // create option element
  option.value = student.id;                       // set value attribute
  option.innerText = student.name;                 // set visible text
  target.appendChild(option);                      // add to the select
}