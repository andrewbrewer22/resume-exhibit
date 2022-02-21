function navDropDownMenu(){
    document.getElementById("nav-dropdown-content").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.nav-dropdown-button')){
        var dropdowns = document.getElementsByClassName("nav-dropdown-content");
        for(var i = 0; i < dropdowns.length; i++){
            var openDropDown = dropdowns[i];
            if(openDropDown.classList.contains('show')){
                openDropDown.classList.remove('show');
            }
        }
    }
}