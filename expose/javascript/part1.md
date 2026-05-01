1. What is printed by line 9? If the code returns an error, explain why. 
    - 20
2. What is printed by line 13? If the code returns an error, explain why. 
    - 20
3. Why should you not use var? Explain why. 
    - Restricting a variable to the block in which it exists is more intuitive for developers, makes it easier to understand the variables purpose when reading code, and is easier to debug when scoping issues arise. Var also allows redeclarations which can lead to unintentionally overriding a variable.
4. What is printed by line 9? If the code returns an error, explain why.
    - 20
5. What is printed by line 13? If the code returns an error, explain why. 
    - There is an error because let variables are block scoped, meaning that after the if block the result variable goes out of scope and is no longer defined.
6. What is printed by line 9? If the code returns an error, explain why.
    - There is an error because a const variable cannot be reassigned after initialization so result = num1 + num2 causes an error.
7. What is printed by line 13? If the code returns an error, explain why.
    - There is an error because a const variable cannot be reassigned after initialization so result = num1 + num2 causes an error. There is another error since by line 13 result is out of scope and no longer defined.