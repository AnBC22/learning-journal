import { blogPosts } from './data.js'

const viewMoreEl = document.getElementById('view-more')

viewMoreEl.addEventListener('click', renderPosts)

let postsToRender = 3; 
let currentPage = 1 

function handleWindowSizeChange() {
    const screenWidth = window.innerWidth;
    
    if(screenWidth >= 550 && screenWidth < 768) {
        postsToRender = 4;
    }
    else if(screenWidth >= 768) {
        postsToRender = 6;
    }
}

// -------------------------------------
function renderPosts() {

    const startIndex = (currentPage - 1) * postsToRender;
    const endIndex = startIndex + postsToRender;

    if(startIndex < blogPosts.length) {
        document.getElementById('feed').innerHTML = getPostsHtml(startIndex, endIndex)
        currentPage++;
    }
}

// -------------------------------------
function getPostsHtml(start, end) {
    let feed = ``

    for(let i = start; i < end && i < blogPosts.length; i++) {

        let post = blogPosts[i]

        feed += `
            <section class="post">
                <img class="post-img" src="${post.img}">
                <p class="post-date">${post.date}</p>
                <h2>${post.title}</h2>
                <p>${post.text}</p>
            </section>
        ` 
    }
    
    return feed
}
// -------------------------------------

handleWindowSizeChange()
renderPosts()
