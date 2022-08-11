function show_list(nameBlock) {
    var courses = document.getElementById(`${nameBlock}_id`);
    console.log(courses)
    if (courses.style.display == "block") {
        courses.style.display = "none";
    } else {
        console.log('Включаем')
        courses.style.display = "block";
    }
}
window.onclick = function (event) {
    if (!event.target.matches('.project-btn-more')) {
        var menuList = document.getElementsByClassName('courses');
        for (var item of menuList)
        {
            if (item.id !== 'add-btn_id')
                return;
            item.style.display = "none";
        }
    }
}