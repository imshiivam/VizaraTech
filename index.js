const allItems = document.querySelectorAll('.navigationButton span');
const lines = document.querySelector('.one');
const stepperOne = document.querySelector('#one');
const stepperTwo = document.querySelector('#two');
const stepperThree = document.querySelector('#three');
const stepperFour = document.querySelector('#four');
const stepperFive = document.querySelector('#five');

allItems.forEach(item => {
    item.addEventListener('click', function(e) {
        for(var i = 0; i < allItems.length; i++){
            allItems[i].classList.remove("active");
            lines.classList.remove("one");
            lines.classList.remove("two");
            lines.classList.remove("three");
            lines.classList.remove("four");
            lines.classList.remove("five");
        }
        this.classList.add("active");
        if(stepperOne.classList.contains("active")){
            lines.classList.add("one");
        }
        else if(stepperTwo.classList.contains("active")){
            lines.classList.add("two");
        }
        else if(stepperThree.classList.contains("active")){
            lines.classList.add("three");
        }
        else if(stepperFour.classList.contains("active")){
            lines.classList.add("four");
        }
        else if(stepperFive.classList.contains("active")){
            lines.classList.add("five");
        }
    });
});