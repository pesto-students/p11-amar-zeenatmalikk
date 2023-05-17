// Your task is to implement a custom Promise implementation using ES6. The Promise object represents a value that may not be available yet but will be resolved at some point in the future.

// You will need to use polyfills to ensure that your implementation works in all modern browsers. Your implementation should include the following methods:

//     then(onFulfilled, onRejected) - Adds a callback to be executed when the Promise is resolved.
//     catch(onRejected) - Adds a callback to be executed when the Promise is rejected.
//     resolve(value) - Resolves the Promise with a given value.
//     reject(reason) - Rejects the Promise with a given reason.
class CustomPromise {
    constructor(executor) {
      this.state = 'pending';
      this.value = undefined;
      this.reason = undefined;
      this.onFulfilledCallbacks = [];
      this.onRejectedCallbacks = [];
  
      const resolve = (value) => {
        if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;
          this.onFulfilledCallbacks.forEach((callback) => callback(this.value));
        }
      };
  
      const reject = (reason) => {
        if (this.state === 'pending') {
          this.state = 'rejected';
          this.reason = reason;
          this.onRejectedCallbacks.forEach((callback) => callback(this.reason));
        }
      };
  
      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }
  
    then(onFulfilled, onRejected) {
      if (typeof onFulfilled !== 'function') {
        onFulfilled = (value) => value;
      }
  
      if (typeof onRejected !== 'function') {
        onRejected = (reason) => {
          throw reason;
        };
      }
  
      return new CustomPromise((resolve, reject) => {
        const handleFulfilled = (value) => {
          try {
            const result = onFulfilled(value);
            if (result instanceof CustomPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        };
  
        const handleRejected = (reason) => {
          try {
            const result = onRejected(reason);
            if (result instanceof CustomPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        };
  
        if (this.state === 'fulfilled') {
          setTimeout(() => {
            handleFulfilled(this.value);
          });
        } else if (this.state === 'rejected') {
          setTimeout(() => {
            handleRejected(this.reason);
          });
        } else {
          this.onFulfilledCallbacks.push(handleFulfilled);
          this.onRejectedCallbacks.push(handleRejected);
        }
      });
    }
  
    catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  
    static resolve(value) {
      return new CustomPromise((resolve) => {
        resolve(value);
      });
    }
  
    static reject(reason) {
      return new CustomPromise((resolve, reject) => {
        reject(reason);
      });
    }
  }
  
  
  // You will need to fill in the constructor and the methods with the appropriate code to make this implementation work.
  // Requirements
  
  //     Your implementation should work in all modern browsers, including IE11 and above.
  //     Your implementation should include error handling for any unexpected behavior.
  //     Your implementation should not use any external libraries or frameworks.
  //     Your implementation should use ES6 features, including classes and arrow functions.
  //     Your implementation should be well-documented with clear explanations of how it works.
  
  // Testing
  
  // To test your implementation, you can create a new instance of your CustomPromise class and use it to resolve or reject a value, and then use the then and catch methods to handle the results.
  
  // Here's an example of how to use your implementation:
  
  const myPromise = new CustomPromise((resolve, reject) => {
    // Resolve the Promise after 1 second
    setTimeout(() => {
      resolve("Success!");
    }, 1000);
  });
  
  myPromise
    .then((result) => {
      console.log(result); // Output: Success!
    })
    .catch((error) => {
      console.error(error);
    });
  
  
  // myPromise
  //   .then((result) => {
  //     console.log(result); // Output: Success!
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  
  //   You can also test your implementation by creating a Promise that rejects, and using the catch method to handle the error:
  // const myPromise = new CustomPromise((resolve, reject) => {
  //   // Reject the Promise immediately
  //   reject("Error!");
  // });
  const myPromiseReject = new CustomPromise((resolve, reject) => {
    // Reject the Promise immediately
    reject("Error!");
  });
  
  myPromise.catch((error) => {
    console.error(error); // Output: Error!
  });
  
  
  // myPromise.catch((error) => {
  //   console.error(error); // Output: Error!!
  // });