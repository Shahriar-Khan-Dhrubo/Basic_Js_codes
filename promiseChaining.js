console.log("hello");
const taskOne = ()=>{
    return new Promise((resolve,reject)=>{
        let cnt=true;
        if(cnt) resolve("task1 is completed");
        else reject(new Error("task1 is not completed"));
    });
}
const taskTwo = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("task2 is completed");
        },2000);
    });
}
const taskThree = ()=>{
    return new Promise((resolve,reject)=>{
        resolve("task3 is completed");
    })
}
const taskFour = ()=>{
    return new Promise((resolve,reject)=>{
        resolve("task4 is completed");
    })
}
// taskOne()
// .then((res) => {
//     console.log(res);
//     return taskTwo();
// })
// .then((res) => {
//     console.log(res);
//     return taskThree();
// })
// .then((res) => {
//     console.log(res);
//     return taskFour();
// })
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=> console.log(err.message));

//Async & await
const promiseCalling = async () =>{
    try{
        let t1=await taskOne();
        console.log(t1);
        let t2=await taskTwo();
        console.log(t2);
        let t3=await taskThree();
        console.log(t3);
        let t4=await taskFour();
        console.log(t4);
    }catch(err){
        console.log(err);
    }
}
promiseCalling();
console.log("bye");