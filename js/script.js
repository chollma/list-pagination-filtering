/******************************************
Student: Cooper Hollmaier
Project: Techdegree - Unit 2
Intended Behavior: List Filter and Pagination
Goal: Exceeds Expecatations
******************************************/

/* Global Variables */
const listItems = document.getElementsByTagName('li');
const numOfItems = 10;

/* Sort Function */
function showPage(listItems, page) {
    const startIndex = (page * numOfItems) - numOfItems;
    const endIndex = page * numOfItems;
    for (let i = 0; i < listItems.length; i++) {
        if (i >= startIndex && i < endIndex) {
            listItems[i].style.display = 'block';
        } else {
            listItems[i].style.display = 'none';
        }
    }
}


/* Pagination Function */
function addPagination(listItems) {
    let pageDiv = document.getElementsByClassName('page');
    let newDiv = document.createElement('div');
    pageDiv[0].appendChild(newDiv);
    newDiv.className = "pagination";
    let newUl = document.createElement('ul');
    newDiv.appendChild(newUl);

    for (let i = 1; i < (listItems.length) / numOfItems; i++) {
        let newLi = document.createElement('li');
        newUl.appendChild(newLi);
        let pageLink = document.createElement('a');
        newLi.appendChild(pageLink);
        pageLink.setAttribute('href', '#');
        pageLink.innerHTML = i;
        pageLink.addEventListener('click', (e) => {
            let otherLinks = document.querySelectorAll('a');
            pageLink.className = "active";
        })
    }
}
window.addEventListener('load', (e) => {
    console.log('Page loaded');
    addPagination(listItems);

})