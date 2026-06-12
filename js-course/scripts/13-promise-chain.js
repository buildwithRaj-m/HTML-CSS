function asyncFunc1()  {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("Success !!");
    }, 4000);
  });
}

function asyncFunc2()  {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("Success !!");
    }, 4000);
  });
}

console.log("Fetching Data1.....");
asyncFunc1().then((res) => {
  console.log("Fetching Data2....");
  asyncFunc2().then((res) => {});
});
