//Start with the following code template. After each step, run the program and see how the output changes.

function outer(){
  let a = "string";
  let b = {
    type: "object",
  }
  console.log(1,a,b);
  function inner(a,b) {
    console.log(2,a,b);
    a = "newString";
    b = {
      type: "newObject",
    }
    b.type = "newValue",
    console.log(3,a,b);
  }

  inner(a,b);
  console.log(4,a,b);
}

outer();

   // 1.Declare two variables, a and b in the outer function's scope and set them to a 
   //string and an object respectively. Log their values immediately.
	
   // 2.Log the values of a and b in the inner function.
    
	// 3.Update the inner function to take two parameters named a and b.
    
	// 4.Pass a and b in as arguments when you execute inner().
    
  // 5.Inside the inner function, assign new values to a and b and log them at the end of 
  //the function AND after the execution of inner(a,b).
    
	// 6.Inside the inner function, update a property of the b object.
