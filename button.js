//button to save note
document.getElementById("saveNote").addEventListener("click", () => {
    
    if (document.getElementById("noteContent").value === "") {
        alert("Oops. It looks like the note is empty. Add some text before you can save.");
    } else {

    // declares note values
    var titleValue = document.getElementById("titleText").value;
    var contentValue = document.getElementById("noteContent").value;

    // gets list of notes parsed into JSON, if no list exists, create empty array
    var allMyNotes = JSON.parse(localStorage.getItem("allNotes"));
    if (allMyNotes === null) allMyNotes = [];

    // saves form as object. using value does not provide any data validation
    const savedNote = {
        title: titleValue,
        content: contentValue,
        created_at: Date().toString()
    };

    // prints values to console to check if object is initiated with expected values
    console.log(savedNote);
    console.log("note content " + savedNote.content);

    // sets object in local storage
    localStorage.setItem("pkNote", JSON.stringify(savedNote));
    allMyNotes.push(savedNote);
    localStorage.setItem("allNotes", JSON.stringify(allMyNotes));

    document.getElementById("note").reset(); // resets form after saving

        /* will try to figure this out in built in Bootstrap since it's not playing nice

    // gives a layer of feedback to show the user the note has been saved.
    const savedText = document.querySelector(".isSaved");
    savedText.classList.remove("isHidden");

    setTimeout(function () {
        savedText.classList.add("isHidden");
    }, 3000); */
};
});


//button to see note stored as pkNote
document.getElementById("lastNote").addEventListener("click", () => {

    // check to see if there are notes saved in local storage
    if (localStorage.getItem("pkNote") !== null) {
        let myLastNote = JSON.parse(localStorage.getItem("pkNote"));

        console.log(myLastNote);

        // displays note
        document.getElementById("lastNoteTitle").innerHTML = myLastNote.title;
        document.getElementById("lastNoteContent").innerHTML = myLastNote.content;

    } else {
        console.log("Looks like you have no notes. Type one out and save one to see them here!");
        // displays create a note suggestion
        document.getElementById("lastNoteContent").innerHTML = "Looks like you have no notes. Type one out and save one to see them here!";
    };
});
