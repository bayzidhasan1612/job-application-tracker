1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is that getElementById is used to select an element by their id, getElementsByClassName is used to select elements by their class name, and querySelector / querySelectorAll is used to select elements by their tag name or attribute. And querySelector only selects matching first element and querySelectorAll selects all matching elements.

2. How do you create and insert a new element into the DOM?
To create and insert a new element into the DOM,I use the createElement() method to create a new element, and then I use the appendChild() method to insert it into the DOM.

3. What is Event Bubbling? And how does it work?
Event Bubbling is a process in which an event starts from the target element and travels up the DOM tree to the root element. When I click on an element, the event starts from the parent element and then their parent elements until it reaches the root element.

4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique in which I attach a single event listener to a parent element	instead of child elements. It is useful because it reduces the number of child elements event listeners and improves performance.

5. What is the difference between preventDefault() and stopPropagation() methods?
Difference between preventDefault() and stopPropagation() methods is that preventDefault() prevents the default action of an event, and stopPropagation() stops the event from bubbling up the DOM tree.
 
