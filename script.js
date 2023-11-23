// Inputai
var inputName = document.getElementById("inputName")
var inputSurname = document.getElementById("inputSurname")
var inputAge = document.getElementById("inputAge")

// Table
var listTable = document.getElementById("listTable")
var remfirst = document.getElementById("remfirst")
var remlast = document.getElementById("remlast")

// Console
// console.log(inputName, inputSurname, inputAge, listTable, addBtn, rowCount)

function addRow() {
    var newRow = listTable.insertRow(-1)
 
    if(inputName.value == "" || inputSurname.value == "" || inputAge.value == ""){
        alert("Įveskite visus duomenis.")
        
    }else if(inputAge.value <= 0){
        alert("Neteisingas amžius.")
        
    } else {

        var c1 = newRow.insertCell(0)
        var c2 = newRow.insertCell(1)
        var c3 = newRow.insertCell(2)
     
        c1.innerText = inputName.value
        c2.innerText = inputSurname.value
        c3.innerText = inputAge.value
    
        newRow.appendChild(c1)
        newRow.appendChild(c2)
        newRow.appendChild(c3)

    document.body.append(listTable)

    inputName.value = ""
    inputSurname.value = ""
    inputAge.value = ""
}

}

function remFirst(){
    document.getElementById("listTable").deleteRow(1)
}
function remLast(){
    
    if(rowCount < 1){
        alert("Nebėra ką trinti.")
    }
    else (document.getElementById("listTable").deleteRow(-1))
}




// function remLast(){

//     var lastIndex = rowCount.length -1
    
//     // validacija 
//     if(rowCount.length < 1){
//         alert("Jau ištrinta viskas")
//     } else {
//         var lastIndex = rowCount.length -1 
//     }
//     rowCount[lastIndex].remove(-1)
// }
// console.log(listTable, rowCount)







