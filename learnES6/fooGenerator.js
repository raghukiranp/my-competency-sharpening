
function foo(x) {
    console.log("x: " , x);
}

function *bar() {
    yield {y:4}; // just pause
    foo( yield {key: "value"}); // pause waiting for a parameter to pass into `foo(..)`
}

console.log("Hey foo");
console.log("Hey end");

var it = bar();
console.log(it.next());
console.log(it.next());
console.log(it.next());
