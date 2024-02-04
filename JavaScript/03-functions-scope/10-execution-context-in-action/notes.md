## Execution Context:

-  When you run any Javascript, a special environment is created to handle the transformation & execution of code. 
   This is called execution context. It contains the currently running code and everything that aids in its execution

- There is a global execution context as well as a function execution context for every function invoked.

```
    MEMORY: 
    name: 'john'
    x: 100
    y: 200

    fn: {...}

```
- This is the variable environment that stores all of your variables and functions as key:value pairs in memory

## EXECUTION(CODE):

    `
      {}
    
    `
- This is the thread of execution. Each line of code is executed line by line.

- Javascript single threaded and synchronous

### Execution Context Phases

#### Memory Creation Phase:
1. Create the global object (browser = window, Node.js = global)
1. Create the 'this' object and bind it to the global object
1. Setup memory heap for storing variables and function references
1. Store functions and variables in global execution context and set to "undefined"
        
#### Execution Phase:
1. Execute code line by line
1. Create a new execution context for each function call

### Creation Phase:
- Line 1 : x variable is allocated memory and stores "undefined".
- Line 2 : y variable is allocated memory and stores "undefined".
- Line 3 : getSum() function is allocated memory and stores all the code.
- Line 7 : sum1 variable is allocated memory and stores "undefined".
- Line 8 : sum2 variable is allocated memory and stores "undefined". 

### Execution Phase:
- Line 1 : Places the value of 100 into the x variable.
- Line 2 : Places the value of 50 into the x variable.
- Line 3 : Skips the function because there is nothing to execute.
- Line 7 : Invokes the getSum() function and creates a new function execution context. 

### Function EC Creation Phase:
- Line 3 : n1 & n2 variables are allocated memory and stores "undefined".
- Line 4 : sum variable is allocated memory and stores "undefined".

### Function EC Execution Phase:
- Line 3 : n1 & n2 are assigned 100 and 50.
- Line 4 : Calculation is done and 150 is put into the sum variable. 
- Line 5 : return tells the function EC to return the global EC with value of sum (150).
- Line 7 : Returned sum value is put into the sum1 variable.
- Line 8 : Open another function execution context and do the same thing with different parameters. 







