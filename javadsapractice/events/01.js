const datas = [
  { name: "kio", role: "software engineer in google" },
  { name: "mio", role: "software engineer in microsoft" },
];

function getData() {
  let output = "";
  setTimeout(() => {
    datas.forEach((data, index) => {
      console.log(data);
      output += `<li>${data.name}  &&  ${index} </li>`;
    });
    document.getElementById("outputList").innerHTML = output;
  }, 1000);
}

function createdata(newdatas, callback) {
  setTimeout(() => {
    datas.push(newdatas);
    callback();
  }, 2000);
}

createdata({ name: "lio", role: "software engineer in uber " }, getData);

// getData();
