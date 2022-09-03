let isDark = false;


function switchModes(){
    


    if(isDark === true){
        
        console.log("I'm true");
        document.documentElement.style.setProperty("--col-01", "#130202")
        document.documentElement.style.setProperty("--col-02", "#d8cab3")

        document.documentElement.style.setProperty("--col-05", "#2c709b")
        document.documentElement.style.setProperty("--col-06", "#faefcb")
        document.getElementById("modeButton").innerHTML="Dark Mode";
        isDark = false;
        
    }
    //dark mode is confusing me a far bit its almost working how I would like but some issues.
    //

    else{
        console.log("I'm false");
        document.documentElement.style.setProperty("--col-01", "#D3D0CB")
        document.documentElement.style.setProperty("--col-02", "#1A1919")

        document.documentElement.style.setProperty("--col-05", "#130202")
        document.documentElement.style.setProperty("--col-06", "#130202")
        document.getElementById("modeButton").innerHTML="Light Mode";
        isDark = true;
        
    }
}

//js for the button that takes you back to the top, worked as wanted with help of w3 schools.


mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
 
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  
    } else {
            mybutton.style.display = "none";
    }
}


function topFunction() {
  
    document.body.scrollTop = 0;
  
    document.documentElement.scrollTop = 0;
}