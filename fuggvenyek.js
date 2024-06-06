

export function kerdesekOsszeallit(adatok){
    let txt = "";
    adatok.forEach(element => {
        txt += `<div class="nagydoboz">`
        txt += `<div class="kerdes"><h2>${element.kerdes}</h2></div>`
        txt += `<div class="csakvalaszok">`
        txt += `<div class="valasz"><p>${element.valasz1}</p></div>`
        txt += `<div class="valasz"><p>${element.valasz2}</p></div>`
        txt += `<div class="valasz"><p>${element.valasz3}</p></div>`
        txt += `<div class="valasz"><p>${element.helyesValasz}</p></div>`
        txt += `</div></div>`
    });
  return txt;
}

export function megjelenitKerdesek(txt) {
    const menuDivELEM = $(".kerdesek");
    menuDivELEM.html(txt);
  }


export function jorosszValasz(){

    const kattintasraELEM = $(".valasz");
    kattintasraELEM.on("click", function (event) {
        let index = event.target.id;
        console.log("ok")
        if (index.helyesValasz){ //|| (index.valasz2 == index.helyesValasz)){
            console.log("yes")
        }else{
            console.log("no")
        }
        /*
        if (id == index.helyesValasz){
            //this.kerdesek.addClass("helyes");
            console.log("ok")
        }*/

    });

}

/*
let allapot = false;

export function szinesValasz(){
    this.allapot=!this.allapot;
        this.szinBeallit()
}

export function szinBeallit(){

}
*/

