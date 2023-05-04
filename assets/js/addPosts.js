$(document).ready(function () {
  const allPost = JSON.parse(localStorage.getItem("posts"));

  let posts = [];

  if (allPost) {
    posts = [...allPost];
  }

  ///////////////////// Add Post ////////////////////////////

  $("#img-preview").hide();

  $("#image").on("change", function () {
    const img = $("#image").val().split("\\").pop();
    $("#img-preview").show();
    $("#img-preview").html(`<img src="${"../assets/images/" + img}" />`);
  });

  $("#addPost").on("click", function (e) {
    e.preventDefault();

    const id = Math.floor(Math.random() * 999999);
    const title = $("#title").val();
    const content = $("#content").val();
    const image = $("#image").val().split("\\").pop();

    if (title.trim().length < 1) {
      return alert("Please add title of the post");
    }

    if (content.trim().length < 1) {
      return alert("Please add some content of the post");
    }

    const post = {
      id: id,
      title: title,
      content: content,
      image: image,
    };

    posts.push(post);

    localStorage.setItem("posts", JSON.stringify(posts));

    window.location.href = "http://127.0.0.1:5500/pages/post.html?id=" + post.id;

    alert("Post added successfully");
  });
});
