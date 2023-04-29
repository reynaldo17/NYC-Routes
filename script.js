const aButton = document.querySelector("#aButton")
console.log(aButton)
const cButton = document.querySelector("#cButton")
console.log(cButton)
const eButton = document.querySelector("#eButton")
console.log(eButton)
const oneButton = document.querySelector("#oneButton")
console.log(oneButton)
const twoButton = document.querySelector("#twoButton")
console.log(twoButton)
const threeButton = document.querySelector("#threeButton")
console.log(threeButton)
const NButton = document.querySelector("#NButton")
console.log(NButton)
const QButton = document.querySelector("#QButton")
console.log(QButton)
const RButton = document.querySelector("#RButton")
console.log(RButton)
const getStationsByLine = async function (line) {

  var requestOptions = {
    method: 'GET',
  };

  const res = await fetch(`https://data.cityofnewyork.us/resource/kk4q-3rt2.json?line=${line}`, requestOptions)
  
  const data = await res.json()
  return data

}

const display = async function (line) {
  const data = await getStationsByLine(line)
  console.log(data[0])

  const final= data.map((station)=>{
    return {...station,crowded:getRandomPercentage()}
  })
  console.log(final[0])
}

aButton.addEventListener("click",display("A"))
cButton.addEventListener("click",display("C"))
eButton.addEventListener("click",display("E"))
oneButton.addEventListener("click",display("1"))
twoButton.addEventListener("click",display("2"))
threeButton.addEventListener("click",display("3"))
nButton.addEventListener("click",display("N"))
qButton.addEventListener("click",display("Q"))
rButton.addEventListener("click",display("R"))



function getRandomPercentage() {
  let randomPercentage = Math.floor(Math.random() * 101);
  return randomPercentage ;
}

console.log(getRandomPercentage());

