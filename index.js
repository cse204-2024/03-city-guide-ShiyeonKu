//grab the initial button then insert the modal
document.addEventListener('click', function(e){
    console.log(e.target.id);
    action(e.target.id);
    //depending on the target open different modals
})

//listen to when form opener is clicked

function action (vairable){
    //grab modal and open it up
    if (vairable =="aic_overlay"){
        let modal = document.getElementById("m_aic");
        modal.style.display = "block";
    }

    if(vairable == "mp_overlay"){
        let modal = document.getElementById("m_aic");
        modal.style.display = "block";
    }

    if(vairable == "mca_overlay"){
        let modal = document.getElementById("m_aic");
        modal.style.display = "block";
    }

    if(vairable == "hpac_overlay"){
        let modal = document.getElementById("m_aic");
        modal.style.display = "block";
    }

    //if it's a form button open form button
    if(vairable == "form_btn"){
        let form = document.getElementById("interest_form");
        form.style.display = "block";
    }

    //if variable is close button close the display
    if(vairable == "close_btn"){
        let form = document.getElementById("interest_form");
        form.style.display = "none";
    }
}




//get the <span> element that closes the modal 
//when user click on <span>, close the modal