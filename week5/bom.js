function onClick() {
	// Storing the HTML values as well as the user input
	const input = document.getElementById("favchap");
	const button = document.querySelector("button");

	// Saving the user input into another variable for use
	const myInput = input.value;
	// Clearing the value of the input
	input.value = "";

	// Getting the container from the HTML
	const container = document.querySelector(".list");

	// Creating a new List
	const newList = document.createElement("li");
	// Appending the new list to the contnainer from HTML
	container.appendChild(newList);

	// Creating a new Span element
	const newSpan = document.createElement("span");
	// Saving the value of the user input to the span element
	newSpan.textContent = myInput;
	// Appending the span element to the list that was created
	newList.appendChild(newSpan);

	// Creating a button element
	const deleteBtn = document.createElement("button");
	// Saving the text content of the delete button as "X"
	deleteBtn.textContent = "❌";
	// Appending the delete button to the newly created list
	newList.appendChild(deleteBtn);

	// Adds an event listener that removes the whole list when the delete button has been clicked
	deleteBtn.addEventListener("click", () => {
		// Removes the list
		newList.remove();

		// Makes the focus be on the input box
		input.focus();
	});
}

// Adds an event listener that calls the onClick function when the user clicks on the button
document.querySelector("button").addEventListener("click", onClick);