var posts = [
    {
      title: "Title 1",
        body: "Body 1",
    },
    {
        title: "Title 2",
        body: "Body 2"
    }
];

var showPost = () => {
    setTimeout(() => {posts.forEach(
        function(data){
            const div = document.createElement("div");
            div.innerHTML = `${data.title} || ${data.body}`;
            document.getElementById("posts").appendChild(div);
        }
    )}, 2000 )
}

var addPost = (inputInfo) => {
    posts.push(inputInfo);
    showPost();
    // Called a callback function, showPost will wait for the higher order
}

// addPost({title: "Title 3", body: "Body 3"});

document.querySelector("button").addEventListener("click", showPost);