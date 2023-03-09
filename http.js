var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/3");
xhr.send();
xhr.onload =async (response) => {
  // console.log(xhr.response);
    var a = await response.target.response;
    
  console.log(a);
};
