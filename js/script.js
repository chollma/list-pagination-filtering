/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

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
function appendPageLinks(listItems) {
    let pageDiv = document.getElementsByClassName('page');
    let paginationDiv = document.createElement('div');


    /* Create div container for pagination */
    /* Give that div a class of 'pagination' */
    /* Create ul to hold pagination list */
    /* Create li x5 for the pagination links */
    /* Create links inside of each of the list items with a number representing the page */

}