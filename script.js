function filterPosts() {
    const searchInput = document.getElementById("searchBar").value.toLowerCase();
    const posts = document.querySelectorAll(".blog-post");
  
    posts.forEach(post => {
      const title = post.querySelector("h2").textContent.toLowerCase();
      const description = post.querySelector("p").textContent.toLowerCase();
  
      if (title.includes(searchInput) || description.includes(searchInput)) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    });
  }
  