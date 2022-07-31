function show_list(nameBlock) {
    var courses = document.getElementById(`${nameBlock}_id`);
    
    if (courses.style.display == "block") {
        courses.style.display = "none";
    } else {
        courses.style.display = "block";
    }
}
window.onclick = function (event) {
    if (!event.target.matches('.project-btn-more')) {
        var menuList = document.getElementsByClassName('courses');
        for (var item of menuList)
        {
            item.style.display = "none";
        }
    }
}