/*Add a Class:
Create an HTML div element with an id of "myDiv".
Write JavaScript code to add the class "highlight" to the div element. */
function addClassToDiv() {
    const myDiv = document.getElementById('myDiv');
    myDiv.classList.add('highlight');
}

/* Remove a Class:
Continuing from the previous task, write JavaScript code to remove the "highlight" class from the div element. */
function removeClassFromDiv() {
    const myDiv = document.getElementById('myDiv');
    myDiv.classList.remove('highlight');
}