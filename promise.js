console.log("hello promise");
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let cnt = true;
    if (cnt) resolve("promise1 completed");
    else reject("promise1 not completed");
  },2000);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve("promise2 completed");
  },1000);
});
// promise1.then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

Promise.race([promise1, promise2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("bye promise");
