const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is complete ..........");
    resolve();
  }, 3000);
});

promiseOne.then(function () {
  console.log("Promise  consumed .......   ");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 ");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Async 2 resolved  ...");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log({ username: "kio", emil: "kio23@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log("Async 3 resolved  ...");
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // let error = true;
    let error = false;
    if (!error) {
      resolve({
        username: "kio0",
        password:
          "Olkjjghujyfghfjhsvfcnsdvhtujwyretujshbcksfhtgisuhbcksdjghcsdjbhc,jsdcbiusbcsdcslckjkosdbnlkdvvw",
      });
    } else {
      reject("Error :: error ");
    }
  }, 4000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("Finally "));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        username: "kio-mio",
        password: "Olkjjghujyfghfjhsvfcnsdvhtuj",
      });
    } else {
      reject("ERROR  : Something went wrongs ...........");
    }
  }, 5000);
});

async function consumePromise() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromise();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.log("Error :   ", error);
  }
}

getAllUsers();
