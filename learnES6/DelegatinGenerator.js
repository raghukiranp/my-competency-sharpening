function *foo() {
    var z = yield 3;
    var w = yield 4;
    console.log( "z: " + z + ", w: " + w );
    return 'foo';
}

function *bar() {
    var x = yield 1;
    var y = yield 2;
    var tiedledFooValue = yield *foo(); // `yield*` delegates iteration control to `foo()`
    console.log(tiedledFooValue);
    var v = yield 5;
    console.log( "x: " + x + ", y: " + y + ", v: " + v );
}

var it = bar();

it.next();      // { value:1, done:false }
it.next( "X" ); // { value:2, done:false }
it.next( "Y" ); // { value:3, done:false }
it.next( "Z" ); // { value:4, done:false }
it.next( "W" ); // { value:5, done:false }
// z: Z, w: W

it.next( "V" ); // { value:undefined, done:true }
// x: X, y: Y, v: V

//Restart
it = bar();

it.next();      // { value:1, done:false }
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
it.next(); // { value:4, done:false }
it.next(); // { value:5, done:false }
// z: Z, w: W

it.next(); // { value:undefined, done:true }
// x: X, y: Y, v: V