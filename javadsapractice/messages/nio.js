const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      console.log("Hello world ");
      resolve(" Resolve project is running and developing security");
    } else {
      reject(" Rejecting your order in industry");
    }
  }, 1000);
});

promiseOne
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    
    console.log(error);
  });