export let text="Not Initialized Yet"

export function setupHandler(){
    document.getElementById("btn").onclick = () =>{
        text = document.getElementById("text").value
    }
}