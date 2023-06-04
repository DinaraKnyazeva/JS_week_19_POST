document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let postTitle = document.getElementById("post__title").value;
  let postBody = document.getElementById("post__body").value;
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: postTitle,
      body: postBody,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.title);
      document.getElementById("post__items-container").innerHTML += `
          <div id="post-container__inner">
          <div id="post-container__title"> ${data.title}</div>
          <div id="post-container__text"> ${data.body}</div>
          </div>`;
      document.getElementById("post__title").value = "";
      document.getElementById("post__body").value = "";
    })
    .catch((error) => console.log(error));
});
