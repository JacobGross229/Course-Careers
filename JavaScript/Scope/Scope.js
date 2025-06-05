// Global scope

function accessX() {
    let x = 4;

    function test() {
        console.log(x);
    }

    test();
}

accessX();

// ------------------------------------------------------------------------------------------------------------------

function test(x) {
    if (x === 3) {
        let val = 5;
    } else if (x == 4) {
        let val = 6;
    } else {
        let val = 0;
    }
}



// ------------------------------------------------------------------------------------------------------------------

function test(x) {
    function test2 () {
        if (x === 3) {
            var val = 5;
        } else if (x == 4) {
            var val = 6;
        } else {
            var val = 0;
        }
    }
    test2();
    console.log(val);
}

test(3);

// ------------------------------------------------------------------------------------------------------------------

const x = 5;

function test(x) {
    if (x === 3) {
        const val = 5;
    } else if (x == 4) {
        const val = 6;
    } else {
        const val = 0;
    }

    console.log(val);
}

test(3);