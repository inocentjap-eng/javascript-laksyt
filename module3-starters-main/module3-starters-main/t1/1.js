'use strict';

// select the element with id="target"
const target = document.querySelector('#target');

// backticks make a multiline string
const html =
    `<li>First item</li>
     <li>Second item</li>
     <li>Third item</li>`;

// add the HTML with innerHTML
target.innerHTML = html;

// add the class my-list
target.classList.add('my-list');