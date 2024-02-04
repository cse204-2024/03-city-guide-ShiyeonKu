//grab the initial button then insert the modal
document.addEventListener('click', function(e){
    console.log(e.target.id);
    action(e.target.id);
    //depending on the target open different modals
})

//listen to when form opener is clicked

function action (variable){
    //grab modal and open it up
    if (variable =="aic_overlay"){
        let modal = document.getElementById("m_aic");
        modal.style.display = "block";
    }
    if(variable =="aic_close_btn"){
        let modal = document.getElementById("m_aic");
        modal.scrollTop = 0;
        modal.style.display = "none";
    }

    if(variable == "mp_overlay"){
        let modal = document.getElementById("m_mp");
        modal.style.display = "block";
    }
    if(variable =="mp_close_btn"){
        let modal = document.getElementById("m_mp");
        modal.scrollTop = 0;
        modal.style.display = "none";
    }

    if(variable == "mca_overlay"){
        let modal = document.getElementById("m_mca");
        modal.style.display = "block";
    }
    if(variable == "mca_close_btn"){
        let modal = document.getElementById("m_mca");
        modal.scrollTop = 0;
        modal.style.display = "none";
    }

    if(variable == "hpac_overlay"){
        let modal = document.getElementById("m_hpac");
        modal.style.display = "block";
    }
    if(variable == "hpac_close_btn"){
        let modal = document.getElementById("m_hpac");
        modal.scrollTop = 0;
        modal.style.display = "none";
    }

    //if it's a form button open form button
    if(variable == "form_btn"){
        let form = document.getElementById("interest_form");
        form.style.display = "block";
    }

    //if variable is close button close the display
    if(variable == "close_btn"){
        let form = document.getElementById("interest_form");
        form.style.display = "none";
    }

    //if the user clicks "learn more" lead to the website of the museum
    if(variable =="aic_btn"){
        window.open('https://www.artic.edu/');
    }
    if(variable =="mp_btn"){
        window.open('https://www.crevecoeurmo.gov/284/Parks');
    }
    if(variable =="mca_btn"){
        window.open('https://mcachicago.org/');
    }
    if(variable =="hpac_btn"){
        window.open('https://www.hydeparkart.org/');
    }
}