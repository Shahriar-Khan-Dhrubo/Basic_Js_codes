const makeRequest = (method, url, data) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = () => {
    let data = xhr.response;
    console.log(JSON.parse(data));
  };
  xhr.onerror = () => {
    console.log("error is here");
  };
  xhr.send(JSON.stringify(data));
};

const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");
};

const sendData = () => {
  makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
    title: "foo",
    body: "bar",
    userId: 1,
  });
};

const updateData = () => {
  makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
    id: 1,
    title: "fooMa",
    body: "barMa",
    userId: 1,
  });
};

const updateSingleData = () => {
  makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
    title: "this is changed",
  });
};

const deleteData = () => {
  makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
};

deleteData();
