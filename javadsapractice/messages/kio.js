// const fetchUser = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ id: 12, name: "alice  " });
//     }, 1000);
//   });
// };

// const fetchPost = (userId) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([{ id: 12, title: "post 1", userId }]);
//     }, 1000);
//   });
// };

// fetchUser()
//   .then((user) => {
//     console.log("User : ", user);
//     return fetchPost(user.id);
//   })
//   .then((posts) => {
//     console.log("Posts : ", posts);
//   })
//   .catch((error) => {
//     console.error("error  : ", error);
//   });

const fetchDataWithCallback = (callback) => {
  setTimeout(() => {
    const data = { name: "Jhon ", age: 9090 };
    callback(null, data);
  }, 1000);
};

const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetchDataWithCallback((error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);

Promise.all([promise1, promise2])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error);
  });

const promise10 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 2000);
});

const promise20 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 5000);
});

Promise.race([promise10, promise20])
  .then((value) => {
    console.log(value); // Output: 2
  })
  .catch((error) => {
    console.error(error);
  });

function greet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, World!");
    }, 2000);
  });
}

greet()
  .then((message) => {
    console.log(message); // Output: Hello, World!
  })
  .catch((error) => {
    console.error(error);
  });

function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Alice" });
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ id: 1, title: "First Post", userId: userId }]);
    }, 1000);
  });
}

fetchUser()
  .then((user) => {
    console.log("User:", user);
    return fetchPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
