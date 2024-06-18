// function to create and append comment section to blog post
function createCommentSection(blogArticleElement, postId) {
    
    //create a comments section and assign attributes
    const commentSectionEl = document.createElement("section");
    commentSectionEl.classList.add("comments-section");
    commentSectionEl.classList.add("column-format");

    //comments section text area to write comment
    const commentTextEl = document.createElement("textarea");
    commentTextEl.classList.add("write-comment")
    commentTextEl.setAttribute("name","comment");
    commentTextEl.setAttribute("rows","2");
    commentTextEl.setAttribute("placeholder","Write comment here...");
    commentTextEl.setAttribute("blog-post-id", postId); // gives the text area an attribute that corresponds to the blog post ID

    //button to post commenht
    const commentBtnEl = document.createElement("button");
    commentBtnEl.classList.add("comment-button");
    commentBtnEl.textContent = "Post Comment";
    commentBtnEl.setAttribute("blog-post-id", postId); // gives the button an attribute that corresponds to the blog post ID

    // append text area and button to section
    commentSectionEl.appendChild(commentTextEl);
    commentSectionEl.appendChild(commentBtnEl);

    // Assign event listener to the button
    commentBtnEl.addEventListener("click", () => {
        postComment(postId, commentSectionEl);
    });

    // Append the comment section to the blog article
    blogArticleElement.appendChild(commentSectionEl);
}


// function to post the comment to the corresponding blog post
function postComment(postId, commentSectionEl) {
    // create container for comment
    const commentContainerEl = document.createElement("div");
    commentContainerEl.classList.add("comments");

    // append comments container to comment section
    commentSectionEl.appendChild(commentContainerEl);

    const commentText = document.querySelector(`textarea[blog-post-id="${postId}"]`).value;
    console.log("The comment text is",commentText)


    if (commentText.trim() !== "") { // checks if there is something in the comment text box
        const newComment = { // if fills a object with comment info
            username: localStorage.getItem("username"),
            commentText: commentText,
            timeCommented: new Date().toISOString()
        };

        console.log("new comment data is",newComment)

        const postIndex = postedBlogs.findIndex(post => // iterates over each "post"
            post.id === parseInt(postId)); // checks which post has an id property equal to the one that triggered the event listener

        if (postIndex !== -1) { // if found then it uses it as the post index
            postedBlogs[postIndex].comments.push(newComment); // changed from 'blogPosts' to 'postedBlogs'
            displayBlogs(); // displays the blog post
        } else {
            console.error("Blog post does not exist!"); // if -1, blog post was not found
        }
    } else {
        console.error("Comment cannot be empty!") // if empty, error message
    }

    console.log(postedBlogs);
}