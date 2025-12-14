window.addEventListener("load", (e) => {
  const nav = document.querySelector("nav");
  const container = document.querySelector("main");
  const navHeight = nav.offsetHeight;
  container.style.marginTop = "80px";

  

  setTimeout(returnStyle, 350);
  // setTimeout(returnStyle, 1500);
});

var barraTopo = document.getElementById("x1");
var barraMeio = document.getElementById("x2");
var barraBaixo = document.getElementById("x3");
var testes = "";

function animateX() {
    const isClosed = barraBaixo.style.display === "none";

    if (isClosed) {
      document.getElementsByClassName("nav-options")[0].style.display = "none";

      // Volta ao hamburguer normal
      barraBaixo.style.display = "block";
      barraTopo.style.transform = "rotate(0deg) translate(0, 0)";
      barraMeio.style.transform = "rotate(0deg) translate(0, 0)";
      // Mantém largura igual pra todas
      barraTopo.style.width = "60%";
      barraMeio.style.width = "60%";
    } else {
      // Transforma em X

      document.getElementsByClassName("nav-options")[0].style.display = "flex";

      barraBaixo.style.display = "none";
      barraTopo.style.transform = "rotate(45deg) translate(7px, 6px)";
      barraMeio.style.transform = "rotate(-45deg) translate(5px, -5px)";
      barraTopo.style.width = "30px";
      barraMeio.style.width = "30px";
    }
}

function returnStyle() {
      document
        .querySelectorAll("footer")
        .forEach((e) => e.classList.add("reveal-article"));
      document
        .querySelectorAll("article")
        .forEach((e) => e.classList.add("reveal-article"));

    document
        .querySelectorAll(".ultimas-postagens h1")
        .forEach((e) => e.classList.add("reveal-article"));
      
      document
        .querySelectorAll(".postagens-antigas")
        .forEach((e) => e.classList.add("reveal-article"));
      
      
      
}

      

async function carregarUltimosPosts() {
  await fetch("./posts/posts.json")
    .then((res) => res.json())
    .then((posts) => {
      //ordenando pelo post mais recente
      let ultimosPosts = posts.sort((a, b) => new Date(b.data) - new Date(a.data)).slice(0, 3);
      let containerPosts = document.getElementById("articlescontainer");
      ultimosPosts.forEach((e) => {
        //construindo post
        let article = document.createElement("article");
        article.innerHTML = `
          <div class="article-contain">
            <img rel="preload" as="image" loading="lazy" src="${e.banner}" alt="${e.alt}"/>
            <div class="article-description">
              <p class="${e.estilo}">${e.categoria}</p>
              <h3><a href="${e.link}">${e.titulo}</a></h3>
              <p class="description-style">${e.descricao}</p>
              <p class="description-style">${e.dataartigo}</p>
              <a class="ler-artigo" href="${e.link}">ler mais</a>
            </div>
          </div>
            `;

        containerPosts.appendChild(article);
      });
    });
}

async function carregarPostsAntigos() {
  await fetch("./posts/posts.json")
    .then((res) => res.json())
    .then((posts) => {
      //ordenando pelo post mais recente
      let postsantigos = posts.sort((a, b) => new Date(b.data) - new Date(a.data)).slice(0);
      //remove recentes  
      for(let i=1; i <= 3; i++){

          postsantigos.shift()
      }
      let postsantigoscontainer = document.getElementById("oldpostscontainer");
      postsantigos.forEach((e) => {
        
        let datformatada = e.data.split("-").reverse().join('-') 
        //construindo post
        let h3 = document.createElement("h3");
        h3.innerHTML = `&#9658; <a href="${e.link}" target="_blank">${e.titulo}</a> &#8212; ${e.categoria} &#8212; ${datformatada}`;
        
        postsantigoscontainer.appendChild(h3);
      });
    });
}


carregarUltimosPosts();
carregarPostsAntigos();
