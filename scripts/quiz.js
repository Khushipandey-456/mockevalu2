 async function getData() {
    try {
        let res= await fetch("https://evergreen-bow-alamosaurus.glitch.me")
        let data= await res.json() 
        console.log(data)
        displayData(data)
        
    } catch (error) {
        console.log("err",err)
    }

 }
 function displayData(arr){
    let save =document.getElementById("save").innerHTML;
    save.addEventListener("click",()=>{
        alert("Answer Submitted");
    });
   let cont =document.getElementById("cont")
        arr.map((el,i)=>{
        let get=document.createElement("div");
        let data=document.createElement("h3");
        data.textContent=el.MiniQuiz
        let retrive= document.createElement("button")
        retrive.textContent="Retrive Button"
        retrive.addEventListener ("click",()=>{
            alert("Data Retrived from Quiz")
        });
        let deletebtn = document.createElement("button")
        deletebtn.textContent="Delete Button"
        deletebtn.addEventListener ("click",()=>{
            el.MiniQuiz.remove()
            confirm("Are you sure")
        })
        get.append(data)
        cont.append(get) 
    })
    

 }
 