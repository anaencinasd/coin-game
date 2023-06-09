let cara = 0
let cruz = 0
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip");
let resetBtn = document.querySelector("#reset");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() *2);
    coin.style.animation = "none";
    if(i){
        setTimeout (function(){
            coin.style.animation = "spin-cara 3s forwards";
        }, 100);
        cara++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-cruz 3s forwards";
        }, 100);
        cruz++;
    }
    setTimeout(updateStats, 3000);
    });

    function updateStats(){
        document.querySelector("#caraCounter").textContent = `Cara: ${cara}`;
        document.querySelector("#cruzCounter").textContent = `Cruz: ${cruz}`;
    }

    resetBtn.addEventListener("click",() => {
        coin.style.animation = "none";
        cara = 0;
        cruz = 0;
        updateStats();
    });

    coin.addEventListener("click",()=> {
        let i = Math.floor(Math.random() *2);
        coin.style.animation = "none";
        if(i){
            setTimeout (function(){
                coin.style.animation = "spin-cara 3s forwards";
            }, 100);
            cara++;
        }
        else{
            setTimeout(function(){
                coin.style.animation = "spin-cruz 3s forwards";
            }, 100);
            cruz++;
        }
        setTimeout(updateStats, 3000);
        });
    
        function updateStats(){
            document.querySelector("#caraCounter").textContent = `Cara: ${cara}`;
            document.querySelector("#cruzCounter").textContent = `Cruz: ${cruz}`;
        }
    
        resetBtn.addEventListener("click",() => {
            coin.style.animation = "none";
            cara = 0;
            cruz = 0;
            updateStats();
        } )

        

