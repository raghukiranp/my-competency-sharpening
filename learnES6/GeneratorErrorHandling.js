function *foo() {
    try {
        var x = yield 3;
        console.log( "x: " + x ); // may never get here!
    }
    catch (err) {
        console.log( "Error: " + err );
    }
}


var it = foo();

console.log(it.next()); // { value:3, done:false }

// instead of resuming normally with another `next(..)` call,
// let's throw a wrench (an error) into the gears:
it.throw( "Oops!" ); // Error: Oops!