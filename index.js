let modal = null;

//grab the initial button then insert the modal
document.addEventListener('click', function(e){
    console.log(e.target);
    modalOpen(e.target.id);
    //depending on the target open different modals
})

function modalOpen (vairable){
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
}




//get the <span> element that closes the modal 
//when user click on <span>, close the modal