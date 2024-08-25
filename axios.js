const makeRequest = async (config) => {
  return await axios(config);
};

const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
// getData();

const createData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    data: {
      title: "Name",
      body: "Dhrubo",
      userId: 1,
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
createData();
