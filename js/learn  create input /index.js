const submitButton = document.getElementById("btnSubmit");
const tasks = document.getElementById("tasks");
const messageElement = document.getElementById("message");
submitButton.addEventListener("click", addTask);
displayMessage("Good , you have no tasks today")

function addTask() {
    const newTask = document.getElementById("newTask");
    if (inputIsValid(newTask.value)) {
        tasks.innerHTML += '<li class="list-group-item">' + newTask.value + "</li>";
        newTask.value = "";
        messageElement.style.visibility = "hidden";
    } else {
        displayMessage("Te rog nu lasa spatiu gol ")
    }
}

function displayMessage(message) {
    messageElement.innerHTML = message;
    messageElement.style.visibility = "visible";
}












function inputIsValid(input) {
    if (input) {
        return true;
    }
    return
    false;
}
