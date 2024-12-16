let progress = document.querySelector('#progress');

let steps = 1;

let leftArrow = document.querySelector('#left-arrow');
let rightArrow = document.querySelector('#right-arrow');
leftArrow.disabled = true;


rightArrow.addEventListener('click', () => {
    if (steps == 1) {
        steps += 1;
        progress.style.width = "25%";
    }
    else if (steps == 2) {
        leftArrow.disabled = false;
        steps += 1;
        progress.style.width = "50%";
    }
    else if (steps == 3) {
        steps += 1;
        progress.style.width = "75%";
    }
    else if (steps == 4) {
        rightArrow.disabled = true;
        progress.style.width = "100%";
    }
});

leftArrow.addEventListener('click', () => {
    if (steps == 4) {
        console.log('step1');
        steps -= 1;
        progress.style.width = "75%";
        rightArrow.disabled = false;
    }
    else if (steps == 3) {
        console.log('step3');
        
        steps -= 1;
        progress.style.width = "50%";
    }
    else if (steps == 2) {
        console.log('step2');
        steps -= 1;
        progress.style.width = "25%";
    }
    else if (steps == 1) {
        console.log('step1');
        progress.style.width = "2%";
        leftArrow.disabled = true;
    }


})



