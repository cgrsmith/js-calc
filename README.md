# Javascript Calculator
## FCC Advanced Front End Development Projects - 1
### General Description
A slightly advanced html/css/js calulcator. Rather than the traditional _one operation at a time_ calculator, this calculator allows the user to construct larger equations (as would be understood by excel or a programming languages math evaluation).

### Functionality
- Allows an equation to be built either by clicking on numbers/operators or typing them if focus is on the equation field.
- Clicking "=" or hitting enter while focus is on equation will cause the equation to evaluate and display below the equation
- If the first element of an equation is an operator, the equation will be prepended by the previous calculated answer (defaults to 0)
- Accepted inputs are numbers: 0-9; decimal: "."; operators: +,-,*,/,^; brackets: (,); equals: =. Equations will be checked for legality before being evaluated.
- There will also be a "<-" backspace button and a "c" clear button.
- Throws errors if:
    - Equation contains illegal characters
    - Equation fails to evaluate for whatever reason 

### Style
- Each button will be a single, equal sized grid square, except the enter/equals buttons, which will be the size of two grid squares.
- All buttons will be aligned in a grid.
- The equation entry field and the answer field will be one over the other in a single "screen" display