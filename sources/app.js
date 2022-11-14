const filled = document.querySelector('.filled');

function update(){
    filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
    requestAnimationFrame(update);
}

update()

//Botonera

function botonera(){
let pSize = 12;
let hSize = 33;
var textSize = document.getElementById('size');
let tagP = document.getElementsByTagName('p');
let tagH = document.getElementsByTagName('h1');

const btnAumentar = document.querySelector('.add');
btnAumentar.addEventListener('click', ()=>{
    pSize+=2;
    hSize+=2;
    if(pSize<38){
        document.querySelector('#size').value = pSize;
        var texto = document.querySelectorAll(".texto");
        texto.forEach((etiquetaP, index) =>{
            etiquetaP.style.fontSize = pSize + 'px';
        })
    }
    if(hSize<71){
        var h = document.querySelectorAll(".western");
        h.forEach((etiquetaH, index) =>{
            etiquetaH.style.fontSize = hSize + 'px';
        })
    }
})

const btnReducir = document.querySelector('.remove');
btnReducir.addEventListener('click', ()=>{
    pSize-=2;
    hSize-=2;
    if(pSize>0){
        console.log(pSize);
        document.querySelector('#size').value = pSize;
        var texto = document.querySelectorAll(".texto");
        texto.forEach((etiquetaP, index) =>{
            etiquetaP.style.fontSize = pSize + 'px';
        })
    }
    if(hSize>21){
        var h = document.querySelectorAll(".western");
        h.forEach((etiquetaH, index) =>{
            etiquetaH.style.fontSize = hSize + 'px';
        })
    }
})

textSize.addEventListener('keypress', (event)=>{
    if (event.key === "Enter"){
        if(parseInt(textSize.value, 10) > 2 || parseInt(textSize.value, 10) < 48){  //No funciona
            console.log(2);
            pSize = textSize.valueAsNumber;
            hSize = textSize.valueAsNumber + 21;
            console.log(pSize);
            document.querySelector('#size').value = pSize;
            var texto = document.querySelectorAll(".texto");
            texto.forEach((etiquetaP, index) =>{
                etiquetaP.style.fontSize = pSize + 'px';
            })
            var h = document.querySelectorAll(".western");
            h.forEach((etiquetaH, index) =>{
                etiquetaH.style.fontSize = hSize + 'px';
            })
        }
    }
})
}

botonera();