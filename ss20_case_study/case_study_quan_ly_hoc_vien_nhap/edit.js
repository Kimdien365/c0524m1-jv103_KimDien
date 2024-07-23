function edit (i){
    editIndex = i;
    document.getElementById("inputID").value =students[i].id;
    document.getElementById("inputName").value =students[i].name;
    document.getElementById("inputBirthday").value =students[i].birthday;
    document.getElementById("inputGender").value =students[i].gender;
    document.getElementById("inputClass").value = students[i].classroom;
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = students[i].picture;
    let imgElement = tempDiv.querySelector("img");
    document.getElementById("preview").src =imgElement.src;
}