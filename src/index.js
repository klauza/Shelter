import "./style.scss";
import { app } from "./js/app.js"; 


window.addEventListener('load', function(){
  this.setTimeout(()=>{
    const loader = document.querySelector('.loader');
    app();
    loader.classList.add('hidden');
  }, 500)
 
});