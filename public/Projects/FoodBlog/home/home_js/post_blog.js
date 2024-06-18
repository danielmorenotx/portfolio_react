// ===== EVENT LISTENER =====
const postBtnEl = document.getElementById("post-button"); // set post button to variable

postBtnEl.addEventListener("click",postToBlogObject) // add listener to button

const postedBlogs = [ // array to hold all posted blogs
    // {
    //     id:
    //     title:
    //     body:
    //     timePosted:
    //     comments: [
    //         username:
    //         comment:
    //         timeCommented:
    //     ]
    // }
]

function postToBlogObject() { // create an object with the blog info in it to add to postedBlogs array
    console.log("Post button clicked!"); // Check if the function is being called upon button click

    const blogTitle = document.getElementById("post-title").value; // set post title to variable
    const blogBody = document.getElementById("post-body").value; // set post body to variable
    const postId = postedBlogs.length + 1; // uses the length of the postedBlogs array to generate a unique blog post ID
    const postDate = new Date().toISOString(); // generates time when function runs
    
    console.log("post ID is",postId);
    console.log("post date is",postDate);

    let newPost = { // create object containing new post data
        id: postId,
        title: blogTitle,
        body: blogBody,
        timePosted: postDate,
        comments: [
            // username:
            // commentText:
            // timeCommented:
        ]
    }

    //clear blog writing text areas after posting
    document.getElementById("post-title").value = ""; // Clear title input
    document.getElementById("post-body").value = ""; // Clear body input

    postedBlogs.push(newPost); // adds new post to postedBlogs array
    console.log(postedBlogs)

    displayBlogs() //calls function to display all blogs in postedBlogs array
}


const postedBlogsElement = document.getElementById("posted-blogs")

function displayBlogs() { // display the contents of postedBlogs on the website
    
    postedBlogsElement.innerHTML = ""; // clears all blogs before adding a new one

    postedBlogs.forEach(post => {
        
        //setting text content of blog elements to each object's corresponding properties
        const blogArticleElement = document.createElement("article"); // create article element to contain blog post
        blogArticleElement.classList.add("blog-article");

        const blogHeaderElement = document.createElement("div"); // create div to hold title and date
        blogHeaderElement.classList.add("blog-header");

        const blogHeaderLink = document.createElement("a"); // anchor tag to wrap the header in
        blogHeaderLink.href = "../single_post/single_post.html";
        blogHeaderLink.classList.add("header-link");

        const blogTitleElement = document.createElement("h2"); // create header element for title
        blogTitleElement.classList.add("blog-title");
        blogTitleElement.textContent = post.title;

        const blogDateElement = document.createElement("span"); //create span element for date
        blogDateElement.classList.add("blog-date");
        blogDateElement.textContent = post.timePosted;

        const blogBodyElement = document.createElement("p"); // create paragraph for the body
        blogBodyElement.classList.add("blog-body");
        blogBodyElement.textContent = post.body;

        blogHeaderLink.appendChild(blogTitleElement); // appending title to link

        // appending to the blog header element
        blogHeaderElement.appendChild(blogHeaderLink);
        blogHeaderElement.appendChild(blogDateElement);

        // appending everything to the container
        blogArticleElement.appendChild(blogHeaderElement);
        blogArticleElement.appendChild(blogBodyElement);

        //appending the comment section to the created blog post
        createCommentSection(blogArticleElement,post.id);

        // append any comments to the blog post
        post.comments.forEach(comment => {
            // div to hold a single comment
            const commentContainerEl = document.createElement("div");
            commentContainerEl.classList.add("comment");

            // div for comment header, which will contain the username and date
            const commentHeaderEl = document.createElement("div");
            commentHeaderEl.classList.add("comment-header");

            // header class for username and span for date posted
            const commenterUsernameEl = document.createElement("h5");
            commenterUsernameEl.classList.add("commenter-username");
            const commentDateEl = document.createElement("h6");
            commentDateEl.classList.add("comment-date");

            // appending username and date to container
            commentHeaderEl.appendChild(commenterUsernameEl);
            commentHeaderEl.appendChild(commentDateEl);

            // paragraph for the comment text
            const commentTextEl = document.createElement("p");
            commentTextEl.classList.add("comment-text");

            // appending elements to comment container
            commentContainerEl.appendChild(commentHeaderEl);
            commentContainerEl.appendChild(commentTextEl);

            // filling username, date, and text with data from object
            commenterUsernameEl.textContent = comment.username;
            commentDateEl.textContent = comment.timeCommented;
            commentTextEl.textContent = comment.commentText;

            console.log("The commenter username is",comment.username);
            console.log("The comment date is",comment.timeCommented);
            console.log("The comment is",comment.commentText);

            // appending comment container to the blog post
            blogArticleElement.appendChild(commentContainerEl);
        })

        // appending to the top of the article section
        postedBlogsElement.prepend(blogArticleElement);
    })
}