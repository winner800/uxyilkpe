new Promise(function (res, rej) {
    res("aaa");
}).then(function (result) {
    console.log(result)
    // if (1) return Promise.resolve("bbb");
    if (1) return resolve();
    return new Promise((resolve, reject) => {
        // if (memberFormData.city == 0) return resolve();
        // this.regionFn("city", memberFormData.province).then((cities) => {
        //     this.pcForm.city = memberFormData.city;
        //     resolve(cities);
        // });
    });

}).then(function (result) {
    console.log(result);
});