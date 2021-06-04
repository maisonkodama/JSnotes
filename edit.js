window.addEventListener("load", () => {
   const indexToEdit = JSON.parse(localStorage.getItem("editIndex"));
   let allNotes = JSON.parse(localStorage.getItem("allNotes"));
   let noteToEdit = allNotes[indexToEdit];
   console.log(noteToEdit); // delete this after validating things work
   let titleField = document.getElementById("editTitleText");
   let contentField = document.getElementById("editNoteContent");

   if (noteToEdit.title != null) {
       titleField.value = noteToEdit.title;
       titleField.setAttribute("placeholder", noteToEdit.title)
    }; // sets title value to note title value if there is one
   contentField.value = noteToEdit.content; // sets note content value in textfield
});

let abandonBtn = document.getElementById("abandonEdit");
abandonBtn.addEventListener("click", () => {
    localStorage.removeItem("editIndex");
    window.location.replace("/notes.html")
});

let saveEditBtn = document.getElementById("editNoteBtn");
saveEditBtn.addEventListener("click", () => {
    let titleValue = document.getElementById("editTitleText").value;
    let contentValue = document.getElementById("editNoteContent").value;
    console.log(`title value: ${titleValue}, ` + `content value: ${contentValue}`)
})