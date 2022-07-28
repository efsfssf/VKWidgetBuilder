function show_list() {
    var courses = document.getElementById("courses_id");

    if (courses.style.display == "block") {
        courses.style.display = "none";
    } else {
        courses.style.display = "block";
    }
}
window.onclick = function (event) {
    if (!event.target.matches('.project-btn-more')) {
        document.getElementById('courses_id')
            .style.display = "none";
    }
}