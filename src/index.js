import navbar from "../component/navbar";

import'../styles/navbar.css';

document.querySelector("#navbar").innerHTML =navbar();

// const url ="https://api.themoviedb.org/3/movie/popular?api_key=35f6f6d2bcab96e077dfc8302b2ea506&language=en-US&page=1";

//     fetch(url)
//     .then( function(res){
//         return res.json();
//     })
//     .then( function(res){
//         return res.results;
//         console.log("hello");
//         console.log(res.results);
//     })
//     .catch(function(err){
//         console.log(err);
//     })

fetch("https://api.themoviedb.org/3/search/movie?api_key=35f6f6d2bcab96e077dfc8302b2ea506&language=en-US&page=1&include_adult=false&query=avenger")
.then(function (res) {
    return res.json();
}).then(function (res) {
        // return res.results;
        console.log(res.results);
        console.log("done");
        append(res.results);
    })
    .catch(function (err) {
        console.log(err);
    })

    function append(data){
        data.map(function(ele){
            let box=document.createElement("div");
            let image=document.createElement("img");
            let imageurl ="https://image.tmdb.org/t/p/w500"
            image.src = imageurl+ele.poster_path;
            let p=document.createElement("p");
            p.innerText=ele.title;
            box.append(image,p);
            document.querySelector("#movies").append(box);
        })
    }