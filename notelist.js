window.addEventListener("load", () => {
    let notesList = JSON.parse(localStorage.getItem("allNotes"));
    let cardContent = document.getElementById("noteCards");

    if (notesList === null) {
        cardContent.innerHTML = "<p class='lead'>There are no notes. <a href='/index.html' class='text-decoration-none'>Click here to create one.</a></p>"
    } else {
        document.getElementById("deleteAll").classList.remove("d-none"); //displays button to delete notes
        notesList.forEach(element => {
            const noteIndex = notesList.indexOf(element);
            if (element.title == "") {
                cardContent.innerHTML += "<div class='col-md-4 maxh-500 of-scroll'><div class='m-1 p-3 rounded-3 bg-dark text-light'><div><h2>*untitled note*</h2>" 
                + "<span class='text-white fsize-smol'>" + element.created_at + "</span></div>"
                + "<div><p class='pt-1 pb-1'>" + element.content + "</p>"
                + "<p class='text-white fsize-smol'>Note ID: " + element.id + "</p>" 
                + "<button type='button'" + "id='delAtIndex-" + noteIndex + "'" + " class='btn btn-danger btn-sm'" + "onClick='delClick(this.id)'" + ">Delete</button>" 
                + "<button type='button'" + "id='editAtIndex-" + noteIndex + "'" + " class='btn btn-primary btn-sm ms-1'" + "onClick='eClick(this.id)'" + ">Edit</button></div>"
                + "</div></div>";
            } else {
                cardContent.innerHTML += "<div class='col-md-4 maxh-500 of-scroll'><div class='m-1 p-3 rounded-3 bg-dark text-light'><div><h2>" + element.title + "</h2>"
                + "<span class='text-white fsize-smol'>" + element.created_at + "</span></div>"
                + "<div><p class='pt-1 pb-1'>" + element.content + "</p>"
                + "<p class='text-white fsize-smol'>Note ID: " + element.id + "</p>" 
                + "<button type='button'" + "id='delAtIndex-" + noteIndex + "'" + " class='btn btn-danger btn-sm'" + "onClick='delClick(this.id)'" + ">Delete</button></div>"
                + "</div></div>";
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

// delete THIS note button (referring to delete button in note card deleting the note it is in)

let delClick = (currentID) => {
    const notesList = JSON.parse(localStorage.getItem("allNotes"));
    let thisDelButton = document.getElementById(currentID);
    let thisCurrentNote = thisDelButton.previousSibling.innerHTML;

    let indexToDelete = notesList.findIndex(note => "Note ID: " + note.id.toString() === thisCurrentNote);
    // if statement to remove allNotes from local storage if notesList length == 1
    if (notesList.length == 1) {
        localStorage.removeItem("allNotes");
    } else {
    notesList.splice(indexToDelete, 1);
    localStorage.setItem("allNotes", JSON.stringify(notesList));
    };
    location.reload()
}

let eClick = (currentID) => {
    const notesList = JSON.parse(localStorage.getItem("allNotes"));
    let thisEButton = document.getElementById(currentID);
    let thisCurrentNote = thisEButton.previousSibling.previousSibling.innerHTML;

    let indexToEdit = notesList.findIndex(note => "Note ID: " + note.id.toString() === thisCurrentNote);
    localStorage.setItem("editID", JSON.stringify(indexToEdit));

    // add page link switcheroo to edit page so edit page can render values of the note into the text fields of the form
};