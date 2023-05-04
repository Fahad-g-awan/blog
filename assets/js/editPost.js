$(document).ready(function () {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");

  let posts = JSON.parse(localStorage.getItem("posts"));

  ////////// Prefill the values inside input fields //////////////
  const post = $.grep(posts, (post) => {
    return post.id === parseInt(postId);
  });

  $("#title").val(post[0].title);
  $("#content").val(post[0].content);

  if (post[0].image.indexOf("https") !== -1) {
    imageElement = $("<img>").attr("src", post.image);
    $("#img-preview").html(`<img src="${post[0].image}" />`);
  } else {
    $("#img-preview").html(`<img src="${"../assets/images/" + post[0].image}" />`);
  }

  ////////////////////////////////////////////////////////

  $("#image").on("change", function () {
    const img = $("#image").val().split("\\").pop();
    $("#img-preview").html(`<img src="${"../assets/images/" + img}" />`);
  });

  ///////////// Add Post function ////////////////////////

  $("#editPost").on("click", function (e) {
    e.preventDefault();

    const title = $("#title").val();
    const content = $("#content").val();
    let image = "";

    if ($("#image").val()) {
      image = $("#image").val().split("\\").pop();
    } else {
      image = post[0].image;
    }

    const updatedPost = {
      id: parseInt(postId),
      title: title,
      content: content,
      image: image,
    };

    posts = $.grep(posts, (post) => {
      return post.id !== parseInt(postId);
    });

    posts.push(updatedPost);

    localStorage.setItem("posts", JSON.stringify(posts));

    alert("Post Updated Successfully");
    window.location.href = "http://127.0.0.1:5500/pages/post.html?id=" + postId;
  });
});
