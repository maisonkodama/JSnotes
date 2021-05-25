window.addEventListener("load", () => {
    let notesList = JSON.parse(localStorage.getItem("allNotes"));
    let noteBody = document.getElementById("notesContainer");
    let gridContent = document.getElementById("allNoteGrid");
    let cardContent = document.getElementById("noteCards");

    if (notesList === null) {
        cardContent.innerHTML = "<p class='lead'>There are no notes. <a href='/index.html' class='text-decoration-none'>Click here to create one.</a></p>"
    } else {
        document.getElementById("deleteAll").classList.remove("d-none"); //displays button to delete notes
        notesList.forEach(element => {
            const noteIndex = notesList.indexOf(element);
            if (element.title == "") {
                cardContent.innerHTML += "<div class='col-md-3 h-75 maxh-500 of-scroll'><div class='p3'><h2 class='text-primary'>*untitled note*</h2>" 
                + "<span class='form-text fsize-smol'>" + element.created_at + "</span></div>"
                + "<div><p class='pt-1 pb-1'>" + element.content + "</p></div></div>";
            } else {
                cardContent.innerHTML += "<div class='col-md-3 h-75 maxh-500 of-scroll'><div class='p3'><h2 class='text-primary'>" + element.title + "</h2>"
                + "<span class='form-text fsize-smol'>" + element.created_at + "</span></div>"
                + "<div><p class='pt-1 pb-1'>" + element.content + "</p></div></div>";
            };
        });
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