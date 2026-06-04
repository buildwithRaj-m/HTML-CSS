function getData(dataId) {
  return new Promise((resolve, reject) =>{
  setTimeout(() => {
    console.log("data:", dataId);
    resolve("success ");
  }, 3000);
  });
}

/*callback hell
getData(1, () => {
  console.log("getting data2 ......");
  getData(2, () => {
    console.log("getting data3 ......");
    getData(3, () => {
      console.log("getting data4 ......");
      getData(4);
    });
  } );
});*/

//By Promise Chain
getData(1).then((res) => {
  return getData(2);
}).then((res) => {
  return getData(3);
})
.then((res) => {
  console.log("Success");
});
