function update (i) {
    if (editIndex>=0){
        let newID = document.getElementById("inputID").value;
        let newName = document.getElementById("inputName").value;
        let newBirthday = document.getElementById("inputBirthday").value;
        let newGender = document.getElementById("inputGender").value;
        let newClass = document.getElementById("inputClass").value;
        let src = document.getElementById("preview").src
        let newPicture = `<img src='${src}' style='width: 100px;height: 120px'>`
        let newStudent = new Student(newID, newName, newBirthday, newGender,newClass, newPicture);
        students[editIndex] = newStudent;
        showStudent(students);
        document.getElementById("inputID").value ="";
        document.getElementById("inputName").value ="";
        document.getElementById("inputBirthday").value ="";
        document.getElementById("inputGender").value ="";
        document.getElementById("inputClass").value = "";
        document.getElementById("inputPicture").value = "";
        document.getElementById("preview").src ="";
        editIndex = -1;
    }
}