function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather Data");
      resolve("200");
    }, 2000);
  });
}

async function getWeatherData() {
  await api();  //1st
  await api(); //2nd
}



function getData(dataId) {
  return new Promise((resolve, reject) =>{
  setTimeout(() => {
    console.log("data:", dataId);
    resolve("success ");
  }, 3000);
  });
}

//Async- Await
async function getAllData() {
  console.log("getting data1....");
  await getData(1);
  console.log("getting data2....");
  await getData(2);
  console.log("getting data3....");
  await getData(3);
  console.log("getting data4....");
  await getData(4);
  console.log("getting data5....");
  await getData(5);
  console.log("done");
}

//IIFE (Immediately Invoked Function Expression)
(async function () {
  console.log("getting data1....");
  await getData(1);
  console.log("getting data2....");
  await getData(2);
  console.log("getting data3....");
  await getData(3);
  console.log("getting data4....");
  await getData(4);
  console.log("getting data5....");
  await getData(5);
  console.log("done");
})();