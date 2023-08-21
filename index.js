import { blogPosts } from './data.js'

const hero = document.getElementById('hero');
const heroPost = document.getElementById('hero-post');
const aboutMeSection = document.getElementById('about-me');

document.addEventListener('click', function(e) {
    if(e.target.id === 'home-link') {
        toggleSection(hero)
    }
    else if(e.target.id === 'about-me-link') {
        toggleSection(aboutMeSection)
    }
    else if(e.target.closest('#hero')) {
        toggleSection(heroPost)
    }
    else if(e.target.id === 'view-more') {
        renderPosts()
    }
})


function toggleSection(sectionToShow) {
    
    const sections = [hero, heroPost, aboutMeSection];

    sections.forEach(function(section) {
        if(sectionToShow === section) {
            sectionToShow.classList.remove('hidden');
        } else {
            section.classList.add('hidden')
        }
    })
}

// ---------------------------------------
let postsToRender = 3; 
let currentPage = 1 

function handleWindowSizeChange() {
    const screenWidth = window.innerWidth;
    
    if(screenWidth >= 550 && screenWidth < 768) {
        postsToRender = 4;
    }
    else if(screenWidth >= 768) {
        console.log(`my screen width is: ${screenWidth}`)
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
