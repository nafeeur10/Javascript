/* 
Question: Print "Hello World like this without using any loop or repeaded printing statement:

  Hello World!
  Hello World!
  Hello World!
  Hello World!
  Hello World!
  
*/

Answer:

We can solve this using Recursion:

function customPrint(n, message) {
  if(n === 0)
     return;
  else {
     console.log(message);
     n = n - 1;
     customPrint(n, message);
  }
}

customPrint(5, "Hello, World!");
