// [a]=[2,3,4,5]
// console.log(a)//[ 2] 
// console.log(window.a) 
      //If you run this in a browser:
      // 1.window is the global object for JavaScript in browsers.
      // 2.Variables declared with let or const do not attach to window.
      // 3.Since a is declared using destructuring (implicitly let), window.a is undefined.

      // If you run this in Node.js:
      // 1.There is no window object.
      // 2.You will get a ReferenceError: window is not defined.

// *{var [a] = [2, 3, 4, 5]; 
// console.log(window.a); // Output: 2 (because `var` attaches to `window`)}* thisis for browswer

// a=[2,3,4,5]
// console.log(a)//[ 2, 3, 4, 5 ] 

// [a,...rest]=[2,3,4,5]
// console.log(a)//[ 2, 3, 4, 5 ] 
