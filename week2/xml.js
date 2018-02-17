'use strict';
const button = document.getElementById("search");
const input = document.getElementById("search1");
const container = document.getElementById("container");
const container1 = document.getElementById("container1");

function fetchJSON(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.onload = () => resolve(xhr.response);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
}

function informationRep() {
    fetchJSON("https://api.github.com/repos/HackYourFuture/" + input.value).then(data => {
        const h1 = document.createElement("h1");
        container.appendChild(h1);
        h1.innerHTML = data.name;

        const h3 = document.createElement("h3");
        container.appendChild(h3);
        h3.innerHTML = data.owner.login;

        const p1 = document.createElement("p");
        container.appendChild(p1);
        p1.innerHTML = data.description;

        const p2 = document.createElement("p");
        container.appendChild(p2);
        p2.innerHTML = data.created_at;


        const p3 = document.createElement("p");
        container.appendChild(p3);
        p3.innerHTML = data.updated_at;


        const p4 = document.createElement("p");
        container.appendChild(p4);
        p4.innerHTML = data.forks_count;

        const a = document.createElement("a");
        container.appendChild(a);
        a.href = data.html_url;
        a.innerHTML = "click here";
        a.target = '_blank';


        const img = document.createElement("img");
        container.appendChild(img);
        img.src = data.owner.avatar_url;

        const contributor = data.contributors_url;
        fetchJSON(contributor).then(Elements => {
            Elements.forEach(Element => {
                const p5 = document.createElement("p");
                container1.appendChild(p5);
                p5.innerHTML = Element.login;

                const img1 = document.createElement("img");
                container1.appendChild(img1);
                img1.src = Element.avatar_url;

            });
        });
    });
}
button.addEventListener("click", informationRep);


