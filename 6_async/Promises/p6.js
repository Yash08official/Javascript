// Write a JavaScript function fetchAnyData that:

// Creates three separate functions (fetchData1, fetchData2, fetchData3) that each return a Promise.
// Each function simulates a network request using setTimeout to delay the operation by different durations:
// fetchData1: Rejects after 1 second with a message "Error from fetchData1".
// fetchData2: Resolves after 2 seconds with a message "Data from fetchData2".
// fetchData3: Resolves after 3 seconds with a message "Data from fetchData3".
// Uses Promise.any() to execute all three Promises concurrently.
// Logs the result of the first successfully resolved Promise.
// Catches and logs the error if all Promises are rejected.

function fetchData1() {
    // Return a Promise that rejects after 1 second
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Error from fetchData1");
        }, 1000);
    });
}

function fetchData2() {
    // Return a Promise that resolves after 2 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from fetchData2");
        }, 2000);
    });
}

function fetchData3() {
    // Return a Promise that resolves after 3 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from fetchData3");
        }, 3000);
    });
}

function fetchAnyData() {
    // Use Promise.any() to execute all fetchData functions concurrently
    Promise.any([fetchData1(), fetchData2(), fetchData3()])
        .then((result) => {
            // Handle the resolved result
            console.log(result);
        })
        .catch((error) => {
            // Handle any rejected Promise
            console.log(error);
        });
}

fetchAnyData();