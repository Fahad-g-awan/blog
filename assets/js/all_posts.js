$(document).ready(function () {
  ////////////////////////// Recent Posts ////////////////////

  const showAllPosts = () => {
    const posts = JSON.parse(localStorage.getItem("posts")).reverse();

    const row = $("<div>").attr("class", "row justify-content-center");

    $.map(posts, (post) => {
      let title = "";

      if (post.title.slice(0, 15).length >= 15) {
        title = post.title.slice(0, 15) + "...";
      } else {
        title = post.title;
      }

      const postContainer = $("<div>").attr("id", "post");
      const titleElement = $("<h2>").text(title);
      const contentElement = $("<p>").text(post.content.slice(0, 80) + "...");
      const col = $("<div>").attr("class", "col justify-content-center d-flex");
      const imgContainer = $("<div>").attr("class", "img-container");
      let imageElement = "";

      if (post.image.indexOf("https") !== -1) {
        imageElement = $("<img>").attr("src", post.image);
      } else {
        imageElement = $("<img>").attr("src", "../assets/images/" + post.image);
      }

      imgContainer.append(imageElement);
      postContainer.append(imgContainer).append(titleElement).append(contentElement);

      //   Redirect to that post details page using post id
      postContainer.click(() => {
        window.location.href = "http://127.0.0.1:5500/pages/post.html?id=" + post.id;
      });

      col.append(postContainer);
      row.append(col);
    });

    $("#allPosts").append(row);
  };

  showAllPosts();
});
