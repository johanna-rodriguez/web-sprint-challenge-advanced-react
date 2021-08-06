# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

    - Functional component Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.
    - A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element.	
    - Stateful component They implement logic and state.
    - A stateful component requires you to extend from React. Component and create a render function which returns a React element.


2. When does a componentWillMount function be called? What about a componentWillUpdate?

    ComponentWillMount() is invoked immediately before mounting occurs. It is called before render() , therefore setting state in this method will not trigger a re-rendering.

    ComponentWillUpdate gives you control to manipulate the component just before it receives new props or state.


3. Define stateful logic.

    It is logic that is built into a component. It can be a function that handles a click event or maybe a function that sets toggle state, or even a function that formats data before it gets displayed. Usually, this kind of logic deals with state in the component. 


4. What are the three step of creating a successful test? What is done in each phase?

    First, you set some stuff up (“Arrange”) Then, you do something (“Act”) Then, you make sure that what you expected to happen, actually happened.