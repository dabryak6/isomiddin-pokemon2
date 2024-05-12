let ul = document.getElementById("pokemon-list")

console.log(pokemons);

pokemons.forEach((item) => {

    chiqar(item)

})

function chiqar(item) {
    let li = document.createElement("li")
    li.classList.add("outlane-box")

    li.innerHTML = `
    <div class="content-box">
    <div class="content-head">
    <span class="pokemon-number">#${item.id}</span>
    <img class="pokemon-img" src="${item.img}" alt="rasm">
    </div>
    <div class="content-footer">
    <h3 class="pokemon-name">${item.name}</h3>
    <div class="btns">
    <button class="btn btn-grass">grass</button>
        <button class="btn btn-poison">poison</button>
        </div
        </div>
        </div>
        `
    ul.appendChild(li)

    li.addEventListener("click", () => modalShow(item.id))
}

let detailModal = document.getElementById("detail-modal")
let info = document.getElementById("info")

function modalShow(id) {
    console.log(id);
    detailModal.classList.add("show")

    let obj = pokemons.filter((item) => item.id === id)?.[0]

    console.log(obj);
    info.innerHTML = `
    <img class="bosil" src="./images/chiqish.svg" alt="rasm" onclick="bos()" id="bos">
    <h2 class="pokemon-nomi">${obj.name}</h2>
    <img class="loader2" src="./images/loader.svg" alt="rasm">
    <span class="pokemon-id">#${obj.id}</span>
    <img class="pokemon-imge"
        src="${obj.img}"
        alt="rasm">
    <div class="pastki-qism">
        <div class="btn3">
            <button class="btn2 btn2-grass">grass</button>
            <button class="btn2 btn2-poison">poison</button>
        </div>
        <h4 class="about">About</h4>
        <div class="kg">
            <p class="weight"><img class="kgmi" src="./images/kg.svg" alt="rasm">${obj.about}</p>
            <p class="height"><img class="uzun" src="./images/uzunligi.svg" alt="rasm">${obj.about2}</p>
        </div>
        <h4 class="abilities">Abilities</h4>
        <div class="emotsiyalar">
            <p class="overgrow">${obj.abilities}</p>
            <p class="hlorophyll">${obj.abilities2}</p>
        </div>
        <h4 class="base-stats">Base Stats</h4>

        <ul class="line-ul">
        <li class="line-li">
            <p class="line-name">hp</p>
            <div class="right-line">
                <p class="line-raqam">${obj.stats.hp}</p>
                <div class="box-line">
                    <div class="line" style = "--hp :${obj.stats.hp}"></div>
                </div>
            </div>
        </li>
          
        <li class="line-li">
            <p class="line-name">attack</p>
            <div class="right-line">
                <p class="line-raqam">${obj.stats.attack}</p>
                <div class="box-line">
                    <div class="line" style = "--hp :${obj.stats.attack}"></div>
                </div>
            </div>
        </li>
        
        <li class="line-li">
            <p class="line-name">defense</p>
            <div class="right-line">
                <p class="line-raqam">${obj.stats.defense}</p>
                <div class="box-line">
                    <div class="line" style = "--hp :${obj.stats.defense}"></div>
                </div>
            </div>
        </li>
        
        <li class="line-li">
            <p class="line-name">special-attack</p>
            <div class="right-line">
                <p class="line-raqam">${obj.stats.special_attack}</p>
                <div class="box-line">
                    <div class="line" style = "--hp :${obj.stats.special_attack}"></div>
                </div>
            </div>
        </li>

        <li class="line-li">
            <p class="line-name">special-defense</p>
            <div class="right-line">
                <p class="line-raqam">${obj.stats.special_defense}</p>
                <div class="box-line">
                    <div class="line" style = "--hp :${obj.stats.special_defense}"></div>
                </div>
            </div>
        </li>
    
        <li class="line-li">
            <p class="line-name">speed</p>
            <div class="right-line">
                <p class="line-raqam">${obj.stats.speed}</p>
                <div class="box-line">
                    <div class="line" style = "--hp :${obj.stats.speed}"></div>
                </div>
            </div>
        </li>
    </ul> 
    `
}

let overlay = document.getElementById("overlay")

overlay.addEventListener("click", () => {
    detailModal.classList.remove("show")
})