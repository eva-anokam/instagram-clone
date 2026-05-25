const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postContainer = document.querySelector(".post-container")

posts.forEach(eachPost => { 
    const post = document.createElement("div")
    post.classList.add("post", "flex-vertical")
    post.innerHTML =
    `
        <div class="post-header flex-horizontal ">
            <div class="post-header__img ">
                <img src=${eachPost.avatar} alt="" class="round-img">
            </div>
            <div class="post-header__info">
                <p class="post-header__name bold-text">${eachPost.name}</p>
                <p class="post-header__location">${eachPost.location}}</p>
            </div>
        </div>

            <div class="post-image">
                <img src=${eachPost.post} alt="" class="post-img">
            </div>

            <div class="post-reactions flex-vertical">
                <div class="flex-horizontal reactions">
                    <img src="images/icon-heart.png" alt="">
                    <img src="images/icon-comment.png" alt="">
                    <img src="images/icon-dm.png" alt="">
                </div>
                <p class="bold-text">${eachPost.likes} likes</p>
                <div class="post-content">
                    <p><span class="bold-text">${eachPost.username}</span> ${eachPost.comment}</p>
                </div>
            </div>


    `
    postContainer.appendChild(post)
})