let NomeHeroi = prompt("Digite o nome  do seu Heroi")
let Nivel = Number(prompt("Digite a quantidade de XP do seu Heroi"))


     if(!Nivel){
     alert("Apenas Numeros")

     } else {
          if(Nivel<1000){
               Nivel = "Ferro"

          } else if(Nivel >= 1001 && Nivel <= 2000){
              Nivel = "Bronze"

          }  else if(Nivel >= 2001 && Nivel <= 5000){
               Nivel = "Prata"

           }  else if(Nivel >= 6001 && Nivel <= 7000){
               Nivel = "Ouro"

           } else if(Nivel >= 7001 && Nivel <= 8000){
               Nivel = "Platina"

           } else if(Nivel >= 8001 && Nivel <= 9000){
               Nivel = "Ascendente"

           }  else if(Nivel >= 9001 && Nivel <= 10000){
               Nivel = "Imortal"

           }  else if(Nivel >= 10001){
               Nivel = "Radiante"
           }

           
     }
     alert(`O Heroi ${NomeHeroi} está no Nível ${Nivel}`)
     