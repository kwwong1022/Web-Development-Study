/*
// case without promises
const fakeRerquestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;

    setTimeout(() => {
        if (delay > 4000) {
            failure("Timeout");
        } else {
            success("success");
        }
    }, delay);
}

// fakeRerquestCallback(url, success, failure)
fakeRerquestCallback("dummy.com",  // url
    function () {                  // success()
        console.log("Worked");
    }, function () {                // failure()
        console.log("Error");
    });
*/

// case with promises
const fakeRerquestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;

        setTimeout(()=> {
            if (delay > 4000) {
                reject('Connection Timeout');
            } else {
                resolve('Success');
            }
        }, delay);
    });
}

fakeRerquestPromise("asdasd");