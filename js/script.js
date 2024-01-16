const gameParametr = {
  Max_Level: 10,
  Max_Stats: 99,
  Min_Stat:10,
}

let playerHero = null;
let enemyHero = null;

const sendToBattleButton = document.getElementById("sendToBattleButton");
const getEnemyButton = document.getElementById("getEnemyButton");
const doSlkillButton = document.getElementById("doSlkillButton");
const startBattleButton = document.getElementById("startBattleButton");

sendToBattleButton.onclick = () => {
  const heroName = document.getElementById("name").value;
  if (heroName !== "") {
    const heroClass = document.querySelector('input[name="class"]:checked').value;
    const heroLevel = document.getElementById("level").value;
    const heroStats = {};
    const additionalAbility = document.querySelector('input[name="additionalAbility"]:checked').value;
    const additionalStat = document.getElementById("additionalStat").value;
  } else {
    alert("Вы не добавили имя персонажу.")
  }
}