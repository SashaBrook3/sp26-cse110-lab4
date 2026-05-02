1. What will happen at line 12 and why? If the code causes an error, explain why.
    - Line 12 prints 3 since after iterating through the for loop three times i will be incremented to 3 which == prices.length, ending the for loop. Since i was declared with var it's scope extends outside the for loop so console.log(i) prints 3.
2. What will happen at line 13 and why? If the code causes an error, explain why.
    - Line 13 prints 150 since discountedPrice = prices[i] * (1 - discount) where prices[2]=300 on the last iteration and discount =.5 so discountedPrice = 300 * (.5) = 150, and discountedPrice is declared as a var so its scope extends outside of the for loop.
3. What will happen at line 14 and why? If the code causes an error, explain why.
    - Line 14 will print 150 since discountedPrice = 150 and Math.round(150 * 100) = 15000, 15000 / 100 = 150 and finalPrice was declared as a var so it stays in scope.
4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
    - The function will return [ 50, 100, 150 ] because finalPrice is calculated by 100 * (.5) = 50 the first iteration and pushed into the discounted array, 200 * (.5) = 100 the second iteration and pushed into the discounted array, 300 *(.5) = 150 the third iteration and pushed into the discounted array. Since discounted was declared as a var it stays in scope and returns [ 50, 100, 150 ].
5. What will happen at line 12 and why?  If the code causes an error, explain why.
    - Line 12 causes an error since i is declared with let so its scope ends after the for loop block and i is no longer defined.
6. What will happen at line 13 and why? If the code causes an error, explain why.
    - Line 13 causes an error since discountedPrice is declared with let so its scope ends after the for loop block and discountedPrice is no longer defined.
7. What will happen at line 14 and why? If the code causes an error, explain why. 
    - Line 14 will print 150 since discountedPrice = 150 and Math.round(150 * 100) = 15000, 15000 / 100 = 150 and finalPrice was declared as a let in the function block so it stays in scope.
8. What will this function return? Give a brief explanation. If the code causes an error, explain why.
    - The function will return [ 50, 100, 150 ] because finalPrice is calculated by 100 * (.5) = 50 the first iteration and pushed into the discounted array, 200 * (.5) = 100 the second iteration and pushed into the discounted array, 300 *(.5) = 150 the third iteration and pushed into the discounted array. Since discounted was declared as a let in the function block it stays in scope and returns [ 50, 100, 150 ].
9. What will happen at line 11 and why? If the code causes an error, explain why.
    - Line 11 causes an error since i is declared with let so its scope ends after the for loop block and i is no longer defined.
10. What will happen at line 12 and why? If the code causes an error, explain why.
    - Line 12 will print 3 since prices.length = 3 and length was declared as a const in the function block so it doesn't go out of scope.
11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
    - The function will return [ 50, 100, 150 ] because discountedPrice is calculated by 100 * (.5) = 50 the first iteration and pushed into the discounted array, 200 * (.5) = 100 the second iteration and pushed into the discounted array, 300 *(.5) = 150 the third iteration and pushed into the discounted array. Since discounted was declared as a const in the function block it stays in scope and returns [ 50, 100, 150 ].
12. Given the above Object, write the notation for:  
- Accessing the value of the name property in the student object  
    - You can access the name property in the student object by using student.name in the same scope as the object.  
- Accessing the value of the Grad Year property in the student object  
    - You can access the Grad Year property in the student object by using student['Grad Year'] in the same scope as the object.  
- Calling the function for the greeting property in the student object  
    - You can call the function for the greeting property in the student object by using student.greeting() in the same scope as the object.  
- Accessing the name property of the object in the Favorite Teacher property in student  
    - You can access the name property of the object in the Favorite Teacher property in student by using student['Favorite Teacher'].name in the same scope as the object.  
- Access index zero in the array of the courseLoad property of the student object  
    - You can access index zero in the array of the courseLoad property of the student object by using student.courseLoad[0] in the same scope as the object.  
13. Arithmetic
- '3' + 2 = '32'
    - The + triggers string concatenation when one element is a string so 2 becomes '2'.
- '3' - 2 = 1
    - The - forces numeric conversion so '3' becomes 3.
- 3 + null = 3
    - null is converted to 0 in numeric operations.
- '3' + null = '3null'
    - The + triggers string concatenation when one element is a string so null becomes 'null'.
- true + 3 = 4
    - true becomes 1 in numeric operations.
- false + null = 0
    - false and null are both converted to 0 in numeric operations.
- '3' + undefined = '3undefined'
    - The + triggers string concatenation when one element is a string so undefined becomes 'undefined'.
- '3' - undefined = NaN
    - The - forces numeric conversion but undefined cannot be converted to a number.
14. Comparison
- '2' > 1 = true
    - '2' is converted to 2.
- '2' < '12' = false
    - Both are string so they are compared lexigraphically and '2' > '1'
- 2 == '2' = true
    - '2' becomes 2.
- 2 === '2' = false
    - Both types and values are checked, one is a string and one is a number so not the same type.
- true == 2 = false
    - true is converted to 1, 1!=2.
- true === Boolean(2) = true
    - Boolean(2) is true, and true and true have the same value and type.
15. Explain the difference between the == and === operators.
    - == is a loose equality check, it compares values after a type conversion, whereas === is a strict equality check that compares both value and type with no conversion.
17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result.
    - newArr will equal [ 2, 4, 6 ]. In the first iteration of the for loop in modifyArray a call is made to doSomething which returns array[0]* 2 which is 1* 2=2 which is then pushed onto the newArr. In the second iteration of the for loop in modifyArray a call is made to doSomething which returns array[1]* 2 which is 2* 2=4 which is then pushed onto the newArr. In the final iteration of the for loop in modifyArray a call is made to doSomething which returns array[2]* 2 which is 3*2=6 which is then pushed onto the newArr.
19. What is the output of the above code?
    - 1  
    4  
    3  
    2