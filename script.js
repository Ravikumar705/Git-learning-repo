const toggle = document.querySelector("#btn-toggle");
toggle.addEventListener('click', () => {
    const toggle_box = document.querySelector(".center-box");
    let style = window.getComputedStyle(toggle_box);
    if(style.getPropertyValue("background-color")=== 'rgb(255, 0, 0)'){
       toggle_box.style.backgroundColor='green';
    }
    else if(style.getPropertyValue("background-color")=== 'rgb(0, 128, 0)'){
       toggle_box.style.backgroundColor='orange';

    }
    else if(style.getPropertyValue("background-color")=== 'rgb(255, 165, 0)'){
       toggle_box.style.backgroundColor='blue';

    }
    else if(style.getPropertyValue("background-color")=== 'rgb(0, 0, 255)'){
       toggle_box.style.backgroundColor='yellow';
       toggle_box.style.color='black';

    }
    else{
       toggle_box.style.backgroundColor='red';
       toggle_box.style.color='white';
    }
    
}) 

console.log("test");
