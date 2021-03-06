//button to save note
document.getElementById("saveNote").addEventListener("click", () => {

    if (document.getElementById("noteContent").value === "") {
        alert("Oops. It looks like the note is empty. Add some text before you can save.");
    } else {

        // declares note values
        let titleValue = document.getElementById("titleText").value;
        let contentValue = document.getElementById("noteContent").value;

        // gets list of notes parsed into JSON, if no list exists, create empty array
        let allMyNotes = JSON.parse(localStorage.getItem("allNotes"));
        if (allMyNotes === null) allMyNotes = [];

        // saves form as object. using value does not provide any data validation
        const savedNote = {
            id: 1,
            title: titleValue,
            content: contentValue,
            created_at: Date().toString(),
        };

        if (allMyNotes && allMyNotes.length > 0) {
                let lastNoteID = allMyNotes[allMyNotes.length - 1].id;
                console.log("last note ID " + lastNoteID);
                let thisNoteID = lastNoteID + 1;
                savedNote.id = thisNoteID
        };

        // prints values to console to check if object is initiated with expected values
        console.log(savedNote);
        console.log("note content " + savedNote.content);

        // sets object in local storage
        localStorage.setItem("pkNote", JSON.stringify(savedNote));
        allMyNotes.push(savedNote);
        localStorage.setItem("allNotes", JSON.stringify(allMyNotes));

        document.getElementById("noteForm").reset(); // resets title after saving
        document.getElementById("noteContent").value = ""; // resets textarea after saving

        // layer of feedback on save button to show the note has been saved, will replace the text in the following block
        const save_button = document.getElementById("saveNote");
        save_button.classList.remove("btn-primary");
        save_button.classList.add("btn-success");
        save_button.innerHTML = "Saved";

        setTimeout(() => {
            save_button.classList.remove("btn-success");
            save_button.classList.add("btn-primary");
            save_button.innerHTML = "Save";
        }, 1500);
    };
});


//button to see note stored as pkNote
document.getElementById("lastNote").addEventListener("click", () => {

    // check to see if there are notes saved in local storage
    if (localStorage.getItem("pkNote") !== null) {
        let myLastNote = JSON.parse(localStorage.getItem("pkNote"));

        // displays note
        document.getElementById("lastNoteTitle").innerHTML = myLastNote.title;
        document.getElementById("lastNoteContent").innerHTML = myLastNote.content;

    } else {
        console.log("Looks like you have no notes. Type one out and save one to see them here!");
        // displays create a note suggestion
        document.getElementById("lastNoteContent").innerHTML = "Looks like you have no notes. Type one out and save one to see them here!";
    }
})
