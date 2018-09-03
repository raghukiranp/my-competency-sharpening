function *foo() {
    try {
        yield 2;
    }
    catch (err) {
        console.log( "foo caught: " + err );
    }

    yield; // pause

    // now, throw another error
    throw "Oops!";
}

function *bar() {
    yield 1;
    try {
        yield *foo();
    }
    catch (err) {
        console.log( "bar caught: " + err );
    }
}

var it = bar();

console.log(it.next()); // { value:1, done:false }
it.next(); // { value:2, done:false }

console.log(it.throw( "Uh oh!" )); // will be caught inside `foo()`
// foo caught: Uh oh!

console.log(it.next()); // { value:undefined, done:true }  --> No error here!
// bar caught: Oops!