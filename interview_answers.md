# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

The difference between a stateful and a function component is that stateful component (aka. class components) implement logic and state, while functional component they accept data and display them.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount is called before the render method is executed. componentWillUpdate is called after the render method is executed so it could update a component on the application.

3. Define stateful logic.

Stateful logic is logic that is built into a component.

4. What are the three step of creating a successful test? What is done in each phase?

Step 1. Arrange: Renders the component that we want to test.

Step 2. Act: this is where we get the elements that we would like to test and we could also add userEvents to them.

Step 3. Assert: this is where we make sure that the elements we are getting are either displayed on the screen or not.
