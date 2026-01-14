/* Create and Append Elements
Create a new <p> element with the text "This is a paragraph."
Append this new <p> element to the body of the document. */

function createAndAppendParagraph() {
    const p = document.createElement('p');
    p.textContent = "This is a paragraph.";
   document.body.appendChild(p);
}



/* Modify Existing Elements
Create a new <h2> element with the text "Subheading."
Append this <h2> element to the body of the document.
Change the text content of the <h2> element to "Updated Subheading." */
function modifyHeading() {
    const h2 = document.createElement('h2');
    h2.textContent = "Subheading.";
    document.body.appendChild(h2);
    h2.textContent = "Updated Subheading.";
}