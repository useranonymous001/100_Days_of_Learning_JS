// Today we'll learn about the insertAdjacentHTML...Text...element

let parentDiv = document.getElementById("rohan");
// insertAjacentHTML('position','html element/string')

parentDiv.insertAdjacentHTML("beforebegin", "<div>beforebegin</div>");
parentDiv.insertAdjacentHTML("beforeend", "<div>beforeend</div>");
parentDiv.insertAdjacentHTML("afterend", "<div>afterend</div>");
parentDiv.insertAdjacentHTML("afterbegin", "<div>afterbegin</div>");

// removing a node in an html
removed.remove();

/// let' learn about the changing classname and using classList

colorParent = document.getElementById("colorDiv");
// accessing the specific property of the class using className attribute
colorParent.className = "red text-color";
// Inorder to get the all the list of classes that an element carries
// we can use element.classList  to get every classes associated with that element

// to change the property if it does not exists and remove if present
colorParent.classList.toogle("red");
// to check whether the property exists in the element or not
colorParent.classList.contains("red");
// to remove the certain classes from the element
colorParent.classList.remove("red");
// to add new classes to the element
colorParent.classList.add("red");
