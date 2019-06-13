(function f() {


    const funcs = {
        printNum: function* () {
            for (let i = 0; i < 100; i++) {
                yield i;
            }
        }
    }
    const ref = funcs.printNum();

    console.log('asdasd',ref.next());
    console.log(ref.next());
    console.log(ref.next());
    console.log(ref.next());
    console.log(ref.next());
    console.log(ref.next());
    console.log(ref.next());
    console.log(ref.next());
    console.log(ref.next());
    console.log(ref.next());
})();