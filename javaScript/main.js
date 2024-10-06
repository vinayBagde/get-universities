let url = "http://universities.hipolabs.com/search?name=";


let btn = document.querySelector("#btn");
btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let obj = await getInfo(country);
    console.log(obj.data);
    show(obj.data);
    
 
});

let show = (arr) => {
    let list = document.querySelector("#list");
    for(el of arr) {
        let li = document.createElement("li");
        li.innerText = el.name;
        list.appendChild(li);
    }
}

async function getInfo(country) {
 let info = await axios.get(url + country);
 return info;
}
