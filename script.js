let mainTitle = document.getElementById("main_title");
let titleInput = document.getElementById("title_input");
let nounInput = document.getElementById("noun");
let verbInput = document.getElementById("verb");
let adjectiveInput = document.getElementById("adjective");
let submitButton = document.getElementById("submit_button");
let formField = document.querySelector(".form_container");
let storyArea = document.getElementById("story_result");

function updateMainTitle(){
    let userInput = titleInput.value;
    mainTitle.innerHTML = userInput;
}

function onSubmit(event){
    event.preventDefault();
    if(titleInput.value=="" || nounInput.value=="" || verbInput.value=="" || adjectiveInput.value==""){
        alert("Please fill in all fields");
    }else{
        formField.style.display = "none";
        storyArea.style.display = "block";
        let storyResult = "Last night I ate a " + nounInput.value + " and today I just had to " + verbInput.value + ". What a " + adjectiveInput.value+ " day!"
        storyArea.innerText = storyResult;
    }

}


titleInput.addEventListener("input", updateMainTitle);
submitButton.addEventListener("click", onSubmit);