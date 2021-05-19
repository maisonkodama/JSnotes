window.addEventListener("load", () => {
    var notesList = JSON.parse(localStorage.getItem("allNotes"));
    var noteBody = document.getElementById("notesContainer");
    var gridContent = document.getElementById("allNoteGrid");

    if (notesList === null) {
        noteBody.innerHTML = "<p class='lead'>There are no notes</p>"
    } else {
        document.getElementById("deleteAll").classList.remove("d-none");
        notesList.forEach(element => {
        const noteIndex = notesList.indexOf(element);
        if (element.title == "") {
            gridContent.innerHTML += "<tr><td>" + noteIndex + "</td><td>*untitled note*</td><td>" + 
        element.content + "</td><td>" + element.created_at + "</td></tr>";
        } else {
        gridContent.innerHTML += "<tr><td>" + noteIndex + "</td><td>" + element.title + "</td><td>" + 
        element.content + "</td><td>" + element.created_at + "</td></tr>";
        };
    })
};
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("deleteAll").addEventListener("click", () => {
        var confirmAllDelete = confirm("Confirming will delete all of your notes. This action can not be undone. Continue?");
        if (confirmAllDelete) localStorage.removeItem("allNotes");
        location.reload();
    });
});