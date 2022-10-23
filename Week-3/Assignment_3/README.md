# Pesto Assignment Number 3 of Week 3 

# Explanation about the code change for getting expected behaviour
In the given code the position of "message" was out side the methods that were called
so its value was only set once and when you call the methods the initial value was printed
as "0".

We had to move the "message" inside the increment method to update the "message" with incremented 
value of count to get the expected behaviour.