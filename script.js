function showContent(contentId) {
    var contentSections = document.querySelectorAll("section");
    for (var i = 0; i < contentSections.length; i++) {
        contentSections[i].style.display = "none";
    }
    document.getElementById(contentId).style.display = "block";
}