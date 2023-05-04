$(document).ready(function () {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");

  const posts = JSON.parse(localStorage.getItem("posts"));

  const post = $.grep(posts, (post) => {
    return post.id === parseInt(postId);
  });

  const postContent = $("<div>").attr("id", "post");
  const titleElement = $("<h2>").text(post[0].title);
  const contentElement = $("<p>").text(post[0].content);
  const imageContainer = $("<div>").attr("class", "image-container");
  const deleteBtn = $("<button>").attr("class", "delete-btn").text("Delete Post");
  const editBtn = $("<button>").attr("class", "edit-btn").text("Edit Post");
  const actions = $("<div>").attr("class", "actions");

  let imageElement = "";

  if (post[0].image.indexOf("https") !== -1) {
    imageElement = $("<img>").attr("src", post[0].image);
  } else {
    imageElement = $("<img>").attr("src", "../assets/images/" + post[0].image);
  }

  imageContainer.append(imageElement);
  actions.append(deleteBtn).append(editBtn);
  postContent.append(imageContainer).append(titleElement).append(contentElement).append(actions);

  deleteBtn.click(() => {
    const newPosts = $.grep(posts, (post) => {
      return post.id !== parseInt(postId);
    });

    localStorage.setItem("posts", JSON.stringify(newPosts));

    window.location.href = "http://127.0.0.1:5500/index.html";
    alert("Post deleted successfully");
  });

  editBtn.click(() => {
    window.location.href = "http://127.0.0.1:5500/pages/edit_post.html?id=" + postId;
  });

  $("#postContainer").append(postContent);
});
