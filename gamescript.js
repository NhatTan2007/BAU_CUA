const dicesArea = document.getElementById("dice-area");
const imagesBettingTables = [
      {
            link: "/images/NAI.jpg",
            alt: "NAI"
      },
      {
            link: "/images/BAU.jpg",
            alt: "BAU"
      },
      {
            link: "/images/GA.jpg",
            alt: "GA"
      },
      {
            link: "/images/CA.jpg",
            alt: "CA"
      },
      {
            link: "/images/CUA.jpg",
            alt: "CUA"
      },
      {
            link: "/images/TOM.jpg",
            alt: "TOM"
      },
]
let listPerson = new Array;
let bettingTableImages = document.getElementsByClassName("betting-table");
let diceImages = dicesArea.children;

for (let i = 0; i < bettingTableImages.length; i++) {
      let imagesElement = bettingTableImages[i];
      imagesElement.innerHTML = `<img src="${imagesBettingTables[i].link}" alt="${imagesBettingTables[i].alt}">`;
}

function StartRollingDices() {
      let listRandom = new Array;
      for (let i = 0; i < 3; i++) {
            listRandom[i] = Math.floor(Math.random() * 6); 
      }

      dicesArea.style.opacity = "0%";

      for (let i = 0; i < diceImages.length; i++) {
            let imagesElement = diceImages[i];
            imagesElement.innerHTML = `<img src="${imagesBettingTables[listRandom[i]].link}" alt="${imagesBettingTables[listRandom[i]].alt}">`;
      }
      
      let intervalHandle = setInterval(increaseOpacity,20);

      setTimeout(() => {clearInterval(intervalHandle)}, 3000);
      listPerson = [];
      writeBet();
}

function increaseOpacity() {
      let getImages = dicesArea;
      if(+getImages.style.opacity < 1) {
            getImages.style.opacity = +getImages.style.opacity + 0.01;
      }
}

function name(params) {
      
}

function writeBet() {
      let tbodyTable = document.getElementById("betting-list").children[0].children[1];
      let tfootTable = document.getElementById("betting-list").children[0].children[2];
      tbodyTable.innerHTML = "";
      tfootTable.innerHTML = "";
      let sum = 0;
      if (listPerson.length > 0){
            for (let index in listPerson) {
                  tbodyTable.innerHTML += `<tr><td style="text-align: center;">${listPerson[index].name}</td>
                  <td>${listPerson[index].choose}</td>
                  <td>${listPerson[index].amount}</td>
                  </tr>`;
                  sum += +listPerson[index].amount;
            }
            tfootTable.innerHTML += `<tr><td colspan="2">TỔNG</td>
            <td>${sum}</td>
            </tr>`;
      }
}

function inputBet() {
      let name = prompt("Nhập vào tên người cược: ");
      let amountMoney;
      do {
            amountMoney = prompt("Nhập vào số tiền cược: ");
      } while (isNaN(amountMoney));
      let choose = prompt("Lựa chọn cược con nào?");
      let newPerson = {
            name: name,
            amount: amountMoney,
            choose: choose
      }
      listPerson[listPerson.length] = newPerson;
      writeBet()
}
