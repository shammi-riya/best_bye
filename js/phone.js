
// call API
const loadData = async (searhText,datalimit)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searhText}`
    const res = await fetch(url)
    const data =await res.json()
    shawData(data.data,datalimit)
}

function shawData(Alldata,datalimit){

    const showMores = document.getElementById("showMore")
    if(datalimit &&  Alldata.length > 10){
       Alldata =  Alldata.slice(0,8)
       showMores.classList.remove("d-none")
    }else{
        showMores.classList.add("d-none")
    }

    const Container = document.getElementById("Container");
    document.getElementById("Container").innerHTML =""

    Alldata.forEach(data=>{
        console.log(data);
    const myDiv = document.createElement("div");
     myDiv.classList.add("col")
     const {image, brand ,phone_name,slug} = data
    myDiv.innerHTML = `
    <div class="card h-100 p-3 Regular shadow">
    <img src="${image
    }" class="card-img-top img-fluid h-75" alt="...">
    <div class="card-body">
      <h5 class="card-title">${brand}</h5>
      <p class="card-text">${phone_name}.</p>
    
      <button onclick="showMoreDetails('${slug}')" class="btn btn-danger" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">show details</button>
    </button>
    
    </div>
    </div>  
    `
     Container.appendChild(myDiv)
    })
    toggolSppiner(false)
   

}

const showMoreDetails = async (id)=>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    const res = await fetch(url)
    const data = await res.json()
    singlePhoneDetails(data)
   
}

const singlePhoneDetails = (getData)=>{
//    console.log(getData.data.image
//     );
console.log(getData.data);
const modalbody = document.getElementById("modal-body")
const title = document.getElementById("title");
title.innerText = getData.data.brand

modalbody.innerHTML = `

<img src="${getData.data.image}" alt="">
<h3>Name:${getData.data.name}</h3>
<h4> RelaseDate:${getData.data.releaseDate
}</h4>
<h4>Memory: ${getData.data.mainFeatures.memory
}</h4>

`

}



function SeatchText(){
   procesSourch(10)
   
}

const toggolSppiner =(isLoading)=>{
    const spiner = document.getElementById("spin")
    if(isLoading){
      spiner.classList.remove("d-none")
    }else{
        spiner.classList.add("d-none")
    }
}


function procesSourch(datalimit){
    const inputFeild = document.getElementById("inputGroupSelect04");
    const inputFeildText = inputFeild.value
    loadData(inputFeildText,datalimit)
    toggolSppiner(true)
}


function showMoreData(){  
    procesSourch()

 }


 

//  loadData("i-phone")


