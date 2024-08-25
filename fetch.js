// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE",
// })
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//fetch using async await
const makeRequest = async (url,config) => {
  const res = await fetch(url,config);
  if (!res.ok) {
    throw new Error(res.status);
  }
  const data = res.json();
  return data;
};

const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

getData();
