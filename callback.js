const taskOne = (callback) => {
  console.log("task1");
  callback();
};
const taskTwo = (callback) => {
  setTimeout(() => {
    console.log("task2.data loading");
    callback();
  },2000);
};
const taskThree = (callback) => {
  console.log("task3");
  callback();
};
const taskFour = () => {
  console.log("task4");
};

taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
            taskFour();
        });
    });
});