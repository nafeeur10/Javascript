/*

Quesiton:

  Consider the following snippet:

  let notifications = [
    {message: ‘Lorem’, read: true},
    {message: ‘Ipsum’, read: true},
    {message: ‘Dolor’, read: true},
    {message: ‘Sit’, read: false},
    {message: ‘Amet’, read: true}
  ];
  let allRead = true;
  You have to set the allRead variable to false using a built-in higher-order function on the notifications array. 
  Conditions: 
    a) You cannot use for, while, do-while loops 
    b) You cannot use forEach(), map(), reduce(), filter().
  
  */
  
  // Answer:
  
  let notifications = [
    {message: 'Lorem', read: true},
    {message: 'Ipsum', read: true},
    {message: 'Dolor', read: true},
    {message: 'Sit', read: false},
    {message: 'Amet', read: true}
];

let allRead = true;

/* 
    Without using for, while, do while loop
    And without using map, reduce, filter, forEach
    we can use Every to solve this problem
*/

allRead = notifications.every( (notification) => notification.read ? true : false);
console.log("allRead Value: ", allRead);

  
