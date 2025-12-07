  window.addEventListener("load", () => {
    
      const nav = document.querySelector("nav");
      const container = document.querySelector('main')
      const navHeight = nav.offsetHeight;
      container.style.marginTop = `${navHeight}px`;
    
  });

document.addEventListener('DOMContentLoaded', () => {
  var breadcrumbList = document.getElementById('breadcrumb-list');
  const path = window.location.pathname
  const pathSegments = path.split('/').filter(segment => segment)
  pathSegments.pop()
  
  let final = '<a href="/lfbytez">home</a> '

    pathSegments.forEach(e=>{
      
        breadcrumbList.innerHTML = `
            ${final +=' / ' + e }
        `
    })

})


    var barraTopo = document.getElementById('x1');
    var barraMeio = document.getElementById('x2');
    var barraBaixo = document.getElementById('x3');

  

  function animateX(){

      const isClosed = barraBaixo.style.display === "none";

      if (isClosed) {
                document.getElementsByClassName('nav-options')[0].style.display = "none"
          // Volta ao hamburguer normal
          barraBaixo.style.display = "block";
          barraTopo.style.transform = "rotate(0deg) translate(0, 0)";
          barraMeio.style.transform = "rotate(0deg) translate(0, 0)";
          // Mantém largura igual pra todas
          barraTopo.style.width = "60%";
          barraMeio.style.width = "60%";
  

      } else {
                  document.getElementsByClassName('nav-options')[0].style.display = "flex"
        // Transforma em X
          barraBaixo.style.display = "none";
          barraTopo.style.transform = "rotate(45deg) translate(7px, 6px)";
          barraMeio.style.transform = "rotate(-45deg) translate(5px, -5px)";
          barraTopo.style.width = "30px";
          barraMeio.style.width = "30px";

      }

}

    function checarPostagens(){

    fetch('../posts.json').then(res => res.json())
    .then(posts =>{
    
        for(i in posts){
            //links sao iguais? :O
            
            let url = posts[i]['link'].split('/').pop() 
            let titulopagina = window.location.pathname.split('/').pop()
            if(url === titulopagina){
                 document.querySelector('title').innerText = posts[i]['titulo']
                document.getElementById('titulo-artigo').innerHTML = posts[i]['tituloartigo']
                document.getElementById('data-artigo').innerHTML = "<em>" + posts[i]['dataartigo'] +"</em>"
                document.getElementById('contentimg').src = "../" + posts[i]['imagem']
               
                
            }   
        }
    });

}


function returnStylePosts(){
    document.querySelectorAll('hr').forEach(e=> e.classList.add('reveal-posts-and-text')) 
    document.querySelectorAll('.contain-img').forEach(e=> e.classList.add('reveal-posts-and-text')) 
    document.querySelectorAll('.content-text').forEach(e=> e.classList.add('reveal-posts-and-text')) 

}


  checarPostagens()
 setTimeout(returnStylePosts, 300)
//  setTimeout(returnStylePosts, 1000)

