// Follow along with the examples here
function sayHello() {
    console.log("Hello! Zanzabar!");
    }
function sayHelloToBilly(){
    console.log("Yo, Billy!");
    }
function sayYoRobot(){
    console.log("Yo Robot!");
}
function sayHolaJoe(){
    console.log("Hola Uncle Joe!");
}
function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}
sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo(1); // "Hello, 1!"
sayHelloTo("johhny rocket");
function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Goodbye","Julio Martin David Zurita Tejada");
function add(x,y){
    return x+y;
}
add (1, 2)
console.log(add(22,22));

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Hello", "Liz"));

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  console.log(say("Hello", "Liz"));
  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }
  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }