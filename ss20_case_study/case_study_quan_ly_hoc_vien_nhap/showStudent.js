function showStudent(students) {
    let row = "";
    for (let i = 0; i < students.length; i++) {
        row += `<tr>
            <th>${students[i].id}</th>
            <th>${students[i].name}</th>
            <th>${students[i].birthday}</th>
            <th>${students[i].gender}</th>
            <th>${students[i].classroom}</th>
            <th>${students[i].picture}</th>
            <th>
            <input type="button" onclick="del(${i})" value="Delete">
            <input type="button" onclick="edit(${i})" value="Edit">
            </th>
            </tr>`
        document.getElementById("body").innerHTML = row;
}
}
