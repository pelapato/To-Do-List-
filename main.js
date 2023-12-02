let input =document.querySelector("#input")
let add =document.querySelector("#btn")
let tarefas =document.querySelector("#tarefas")
let audio=document.createElement("audio")
audio.setAttribute("src","message-incoming-132126.mp3")

function BlocoDeNotas(){
  add.addEventListener('click',(evt) => {
    audio.play()
    let elementoNovo = document.createElement("div")
    let remove=document.createElement("img")
    
    elementoNovo.setAttribute("class","bloco")
    
    remove.setAttribute("class","remove")
    remove.setAttribute("src","icons8-excluir-lixeira-48.png")
    
    elementoNovo.innerHTML = input.value
    remove.innerHTML="Remover"
    tarefas.appendChild(elementoNovo)
    elementoNovo.appendChild(remove)
    remove.addEventListener("click",()=>{
      elementoNovo.style.display="none"
    })
  })
  
}
BlocoDeNotas()

