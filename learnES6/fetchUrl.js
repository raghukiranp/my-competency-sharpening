const http = require('http');

const cache = {};

function request(url) {
    // this is where we're hiding the asynchronicity,
    // away from the main code of our generator
    // `it.next(..)` is the generator's iterator-resume
    // call
    if(cache[url]) {
        // "defer" cached response long enough for current
        // execution thread to complete
        setTimeout( function(){
            it.next(cache[url]);
        }, 0 );
    } else {
    return new Promise( function(resolve,reject) {
        http.get(url, (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                cache[url] = data;
                console.log(JSON.parse(data));
                //it.next( data );
                resolve(data);
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
            reject(err);
            //it.throw(err);
        });
    });
    }
}


// run (async) a generator to completion
// Note: simplified approach: no error handling here
function runGenerator(g) {
    var it = g(), ret;

    // asynchronously iterate over generator
    (function iterate(val){
        ret = it.next( val );

        if (!ret.done) {
            // poor man's "is it a promise?" test
            if ("then" in ret.value) {
                // wait on the promise
                ret.value.then( iterate );
            }
            // immediate value: just send right back in
            else {
                // avoid synchronous recursion
                setTimeout( function(){
                    iterate( ret.value );
                }, 0 );
            }
        }
    })();
}

runGenerator( function *test() {

    var result1 = yield request( "http://bus00bgf.us.oracle.com/ccstoreui/v1/collections/rootCategory" );
    var data = JSON.parse( result1 );
    // Your assertions go here

    var result2 = yield request( "http://bus00bgf.us.oracle.com/ccstoreui/v1/collections/?categoryIds=" + data.childCategories[0].id );
    var resp = JSON.parse( result2 );
    // Your assertions go here

    console.log( "The value you asked for: " + resp );
} );

//var it = test();
//it.next(); // get it all started