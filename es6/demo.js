function foo() {
    setTimeout(function () {
        console.log(this)
        console.log('-----------------------------');
    }, 100)

    setTimeout(() => {
        console.log(this)
    }, 200)
}
foo.call({ num: 1 })