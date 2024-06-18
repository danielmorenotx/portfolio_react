// ===== SORT =====
// function to sort by date
function olderFirst() {
    postedBlogs.sort((a,b) => {
        return new Date(a.timePosted) - new Date(b.timePosted);
    });
};

function newerFirst() {
    postedBlogs.sort((a,b) => {
        return new Date(b.timePosted) - new Date(a.timePosted);
    });
};

// function to display posts after sorted
function displayBlogsSorted() {
    postedBlogsElement.innerHTML = ""; // clearing the blogs

    displayBlogs();
}

// create listener for sort by feature
const sortByElement = document.getElementById("sort-by");
sortByElement.addEventListener("change",sortBlogsBy);

function sortBlogsBy() {
    const sortByValue = sortByElement.value; // finding the value of the chosen sort
    console.log(sortByValue);

    if (sortByValue === "oldest") {
        newerFirst();
    } else if (sortByValue === "newest") {
        olderFirst();
    }

    displayBlogsSorted();
}

// ====== FILTER BY TEXT =====

// event listener for the search bar
const searchBarElement = document.getElementById("search-bar");
searchBarElement.addEventListener("input", function() {
    console.log(this) // "this" is the html element that activates the function
    const searchTerm = this.value // value of the element, which is the input text
    console.log("This is the search value:", searchTerm);
    displayFilteredBlogPosts(searchTerm);
});

function filteredBlogPosts(searchTerm) { // create an array of filtered blog posts
    const filteredPosts = postedBlogs.filter(post => {
        // set everything to lowercase
        const title = post.title.toLowerCase();
        const body = post.body.toLowerCase();
        const term = searchTerm.toLowerCase();

        // condition to check if anything in the title or body match the search term
        console.log(title.includes(term) || body.includes(term));
        return title.includes(term) || body.includes(term);
    })
    console.log("filtered posts:",filteredPosts);
    return filteredPosts;
}

function displayFilteredBlogPosts(searchTerm) {
    // clear blog section
    postedBlogsElement.innerHTML = ""

    // setting the results of the function to variable as an array
    const filteredPosts = filteredBlogPosts(searchTerm);

    // display blog posts, similar to other function in post_blog
    filteredPosts.forEach(post => {
        //setting text content of blog elements to each object's corresponding properties
        const blogArticleElement = document.createElement("article"); // create article element to contain blog post
        blogArticleElement.classList.add("blog-article");

        const blogHeaderElement = document.createElement("div"); // create div to hold title and date
        blogHeaderElement.classList.add("blog-header");

        const blogTitleElement = document.createElement("h2"); // create header element for title
        blogTitleElement.classList.add("blog-title");
        blogTitleElement.textContent = post.title;

        const blogDateElement = document.createElement("span"); //create span element for date
        blogDateElement.classList.add("blog-date");
        blogDateElement.textContent = post.timePosted;

        const blogBodyElement = document.createElement("p"); // create paragraph for the body
        blogBodyElement.classList.add("blog-body");
        blogBodyElement.textContent = post.body;

        // Append title and body elements to blog article
        blogArticleElement.appendChild(blogTitleElement);
        blogArticleElement.appendChild(blogBodyElement);

        createCommentSection(blogArticleElement, post.Id) // creating and appending comment section to each post

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
            
        });
        postedBlogsElement.prepend(blogArticleElement);
    });
}