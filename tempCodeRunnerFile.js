async function harrry(){
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("27 Deg")
        })
    },1000)


    let bangloreWeather = new Promise((resolve ,reject) =>{
        setTimeout(() =>{
            resolve("21 Deg")
        }, 2000)
    })
}

console.log("welcome to weather forecasting");
harrry()