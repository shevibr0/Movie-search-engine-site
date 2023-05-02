import { doApi } from "./tvList.js"

export const declareEvent=()=>{
let id_input=document.querySelector("#id_input")
let search_btn=document.querySelector("#search_btn")
search_btn.addEventListener("click",function(){
    doApi(id_input.value);
})
id_input.addEventListener("keydown",function(e){
    if(e.key=="Enter")

    doApi(id_input.value);
})
}