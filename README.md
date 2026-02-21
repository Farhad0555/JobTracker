. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById() selects one unique element by its id, while getElementsByClassName() returns a live collection of elements with the same class name.
querySelector() returns the first matching element using any CSS selector, whereas querySelectorAll() returns all matching elements as a static NodeList.


2. How do you create and insert a new element into the DOM?
Create an element using document.createElement(), set its content or attributes, and insert it into the DOM using methods like appendChild() or append().

3.What is Event Bubbling? And how does it work?
Event Bubbling is a DOM event mechanism where an event starts from the target element and then propagates upward through its parent elements until it reaches the root.