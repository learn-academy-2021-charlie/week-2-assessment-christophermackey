# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is iteration?

  Your answer: The process of repeating a computation until a condition is met. A for loop is typically used for iteration when trying to find a solution.

  Researched answer: Iteration is the process of performing a task a certain number of times until a condition is met. For example, a for loop has three parts to it that help it perform iteration. Part 1 is what index number the count starts on. Part 2 is how many iterations the loop should go to. Part 3 is what to do after each loop. If the condition we write remains truthy it will continue to run. If false, it will stop. 



2. The built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: The .map() method will take the following parameters: value, index, and array. Value is the only required parameter, while index and array are optional.

  Researched answer: The .map() function is a higher-order function that iterates through an array and returns an array of the same length. It must take at least one argument through the value parameter. This is the value of the array at the current iteration. It can also take a index argument which is the index of the array at the current iteration. The last two arguments are optional. 



3. What is object destructuring?

  Your answer: Destructuring is the process of taking keys from an object and declaring them as a variable outside of the object. This allows it to be called without having to access the object later on.

  Researched answer: Destructuring is an assignment that takes object values and assigns them to variables. This will work on arrays and objects. 



4. What is the difference between an object and a class?

  Your answer: Objects are pieces of code that contain data and behaviors. Classes are blueprints for objects.

  Researched answer: Objects contains key:value pairs that hold data and internal functions that are called methods. Methods can return information that in contained within the object. Classes are a type of function that can be initialized with data and methods using a constructor method. 



5. Why would you use the method super()?

  Your answer: Super is used to pass data from a parent class to a new class.

  Researched answer: Super is called in a subclass constructor method to pass attributes from the parent class. The super method must also be present if "this" is going to be used in the subclass. Without it, "this" would have nothing to refer to. Super can also hold parameters used in the parent class.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: I think this has something to do with passing information to an object. Not too sure though.

  Researched answer: Hoisting is when variable and function declarations are moved to the top of their scope before execution. This allows us to call a function before it is declared. Only declarations can be hoisted, not initializations. 



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. React: A javascript library used for creating user interfaces on web, mobile, and apps. React is component-based which are similar to functions. This allows us to avoid repeating code and making the developer gods cry!

2. React lifecycle methods: These are built-in methods for React class components. There are several of these methods used throughout the 3 lifecycle phases, but render() is the only one that must be used. Lifecycle methods organize React functionality so it behaves in a user-friendly way. 

3. React state: State is an object managed within a component that stores data and decides how it is rendered. 

4. Component invocation/call: The component is called using the syntax <ClassName /> inside of the .render() method.

5. DOM Events: Changes that occur within a document such as a page loading. This can then be used as a trigger to tell javascript command to run.
