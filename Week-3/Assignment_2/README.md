# Pesto Assignment Number 2 of Week 3 

# Call
We can bound a function to a particular object by using ‘call()’.
Call is a predefined javascript method, which is used to write methods for different objects.
It calls the method, taking the owner object as an argument. The keyword "this" refers to the “owner” of the function or the object it belongs to.

# Apply
Apply() method is same as call and the only differance from the function call() is that it takes arguments as an array.

# Bind
With Bind() method, we can bind an object to a common function, so that the function gives different result when bound to different objects.

We use the Bind() method to call a function with the this value, this keyword refers to the same object which is currently selected . In other words, bind() method allows us to easily set which object will be bound by the this keyword when a function or method is invoked.

To make sure that any binding of this is not to be lost, we are using Bind() method.

The bind() method creates a new function where this keyword refers to the parameter in the parenthesis.This way the bind() method enables calling a function with a specified this value.
