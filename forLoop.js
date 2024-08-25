// const arr=[2,5,7,8,9];
// for(let x of arr)
// {
//     console.log(x);
// }
// const newArr=arr.map((x)=>
// {
//     return x*x;
// });
// console.log(newArr);
// const student={
//     name:"Dhrubo",
//     age:28,
//     cgpa:2.83
// }
// for(const key in student)
// {
//     console.log(`${key} : ${student[key]}`);
// }
// const changedArr=newArr.filter((x)=>
// {
//     return x>5;
// });
// console.log(changedArr);

const students = [
  {
    name: "dhrubo",
    age: 28,
    cgpa: 2.83,
  },
  {
    name: "ava",
    age: 26,
    cgpa: 3.83,
  },
  {
    name: "ammu",
    age: 48,
    cgpa: 3.5,
  },
];
// const studentsName = () => students.filter((x) => x.cgpa > 3).map((y)=> y.name);
const studentsName1 = () => {
    return students.filter((x)=>{
        return x.cgpa>3;
    }).map((y)=>{
        return y.name;
    });
}
console.log(studentsName1());
// console.log(students);