window.addEventListener("load", () => {
    let notesList = JSON.parse(localStorage.getItem("allNotes"));
    let noteBody = document.getElementById("notesContainer");
    let gridContent = document.getElementById("allNoteGrid");

    if (notesList === null) {
        noteBody.innerHTML = "<p class='lead'>There are no notes. <a href='/index.html' class='text-decoration-none'>Click here to create one.</a></p>"
    } else {
        document.getElementById("deleteAll").classList.remove("d-none"); //displays button to delete notes
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

// button to delete all notes
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("deleteAll").addEventListener("click", () => {
        let confirmAllDelete = confirm("Confirming will delete all of your notes. This action can not be undone. Continue?");
        if (confirmAllDelete) localStorage.removeItem("allNotes");
        location.reload();
    });
});