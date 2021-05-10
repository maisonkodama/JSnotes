window.addEventListener("load", () => {

    var notesList = JSON.parse(localStorage.getItem("allNotes"));
    var noteBody = document.getElementById("notesContainer");
    var gridContent = document.getElementById("allNoteGrid");

    if (notesList === null) noteBody.innerHTML = "<p>There are no notes</p>"; 
    notesList.forEach(element => {
        console.log(notesList.indexOf(element)); //check to see the index of current object note
        const noteIndex = notesList.indexOf(element);
        if (element.title == "") {
            gridContent.innerHTML += "<tr><td>" + noteIndex + "</td><td>" + "*untitled note*" + "</td><td>" + 
        element.content + "</td><td>" + element.created_at + "</td></tr>";
        } else {
        gridContent.innerHTML += "<tr><td>" + noteIndex + "</td><td>" + element.title + "</td><td>" + 
        element.content + "</td><td>" + element.created_at + "</td></tr>";
        };
    });

});