//  Student Name: Daniel Perusse
//  Student ID: 200551990
//  Student Email: daniel.perusse@mygeorgian.ca
//  Course Code: COMP1073 - Client-Side JavaScript
//  Submission for Lab #11

//Create 3 variable to hold references to the ul, input and button elements
const shopList = document.querySelector("ul");
const textInput = document.querySelector("input");
const submit = document.querySelector("button");

//Create a function that will run when we submit
submit.addEventListener("click", function() {
    
    //store the current value of the input element
    let userText = textInput.value;

    //Empty the input element by setting it to an empty string
    textInput.value = "";

    //create 3 new elements: a list item, span and button. Store them in variables
    const listItem = document.createElement("li");
    const listSpan = document.createElement("span");
    const listButton = document.createElement("button");

    //append the span and button as children of the listItem
    listItem.appendChild(listSpan);
    listItem.appendChild(listButton);

    //set the text content of the span to the user input value and set the button text to "Delete"
    listSpan.textContent = userText
    listButton.textContent = "Delete";

    //append the list item as a child of the unordered list
    shopList.appendChild(listItem);

    //add an event handler to the delete button to delete the list item
    listButton.addEventListener("click", function() {
        listItem.parentNode.removeChild(listItem);
    });

    //use the focus method to have the text input selected for next input
    textInput.focus();
});