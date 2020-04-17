 
var neeu = [];
const addRecipe = (ev)=>{
    ev.preventDefault(); //stop the form submitting
    let add = {
        name: document.getElementById('name').value,
        type: document.getElementById('type').value,
        severity: document.getElementById('severity').value,
        ingrediants: document.getElementById('ingrediants').value,
        description: document.getElementById('description').value
    }
    neeu.push(add)
    document.forms[0].reset(); //clear form for next entries   
    localStorage.setItem(1, JSON.stringify(neeu));
    
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addRecipe);   
}); 

localStorage.setItem('Spagehtthi Bollo', JSON.stringify(Spagehtthi_Bollo));
localStorage.setItem('Pilz', JSON.stringify(Spagehtthi_Bollo));
localStorage.setItem('Pizza', JSON.stringify(Pizza));