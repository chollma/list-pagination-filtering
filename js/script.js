/******************************************
Student: Cooper Hollmaier
Project: Techdegree - Unit 2
Intended Behavior: List Filter and Pagination
Goal: Exceeds Expecatations
******************************************/

/* Global Variables */
const list = document.getElementsByTagName('li');
const display = document.getElementsByClassName('student-item cf');
const count = 10;
const div = document.createElement('div');
const container = document.getElementsByClassName('page');


/* Display the list with the given constraints */
function showPage(list, page) {
    const startIndex = (page * count) - count;
    const endIndex = page * count;
    for (let i = 0; i < list.length; i++) {
        if (i >= startIndex && i < endIndex) {
            list[i].style.display = 'block';
        } else {
            list[i].style.display = 'none';
        }
    }
}

/* Dynamically add pagination links to bottom of the page */
function addPagination(list) {
    container[0].appendChild(div);
    div.className = "pagination";
    let ul = document.createElement('ul');
    div.appendChild(ul);

    for (let i = 1; i < (list.length) / count; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        ul.appendChild(li);
        li.appendChild(a);
        a.setAttribute('href', '#');
        a.innerHTML = i;
        let links = ul.querySelectorAll('a');


        ul.addEventListener('click', (e) => {
            if (e.target.tagName = 'A') {
                for (let i = 0; i < links.length; i++) {
                    links[i].className = '';
                }
                e.target.className = "active";
                showPage(list, e.target.innerHTML);
            }


        });
    }
    let first = document.querySelector('a');
    first.className = "active";

}

showPage(list, 1);
addPagination(display);