//webpackChunk_solo_mainapp[3][1][85491]['name'] indaga por ahi
var autonext = true;
var autoskipintro = true;
var autofullscreen = true;

var fullscreen = false;
var old_url = false;



setTimeout(function(){
    setInterval(function(){
        timerscripts();


function timerscripts(){

    if (autonext) check_next_button();
    if (autoskipintro) check_skipintro();
    if (autofullscreen) control_fullscreen();

}


function control_fullscreen(){
    if(!old_url) return false;
    if(old_url != window.location.pathname){
        if(fullscreen == false){
            old_url = false;
            return false;
        }
        if(jQuery(".fullscreen-icon").is(":visible")){
            console.log("Going to Full Screen");
            simulateKeyPress('f');
            jQuery(".fullscreen-icon").click();
            document.body.webkitRequestFullscreen();
            old_url = false;
            return true;
        }

    }
    return false;

}

 function check_next_button(){
    if(jQuery(".button-play--default").is(":visible")) {


        setTimeout(function(){
            if(jQuery(".button-play--default").attr('data-gv2elementkey') == 'playNext') {
                //if(hasNumber(jQuery(".button-play--default p").html())) {
                    fullscreen = detect_fs();
                    old_url = window.location.pathname;
                    console.log("Going to Next");
                    jQuery(".button-play--default").click();
                //}
            }
        },500);
    }
    return true;
}



function check_skipintro(){

    if (jQuery(".skip-icon-btn").is(":visible")) {
        console.log("Skipping Intro");
        jQuery(".skip-icon-btn").click();
    }
}



function detect_fs() {

    if(
        jQuery(".fullscreen-icon").is(":visible")
        && jQuery(".exit-fullscreen-icon").is(":visible") == false
    ) return false;

    if(
        jQuery(".fullscreen-icon").is(":visible") == false
        && jQuery(".exit-fullscreen-icon").is(":visible")
    ) return true;

    return undefined;
}

function simulateKeyPress(character) {
    jQuery.event.trigger({
        type: 'keypress',
        which: character.charCodeAt(0)
    });
}


function hasNumber(myString) {

    return /\d/.test(myString);
}


    },1000);
}, 1000);


