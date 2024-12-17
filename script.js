let progress = document.querySelector('#progress');

let steps = 0;

let leftArrow = document.querySelector('#left-arrow');
let rightArrow = document.querySelector('#right-arrow');

rightArrow.addEventListener('click', () => {
    leftArrow.style.backgroundColor = "green";
    if (steps == 0) {
        steps += 1;
        let innerCircle2 = document.querySelector('.inner-circle2');
        let outerCircle2 = document.querySelector('.outer-circle2');
        outerCircle2.style.backgroundColor = "green";
        innerCircle2.innerHTML = `<i class="ri-check-line text-[green] text-xl"></i>`
        progress.style.width = "25%";
    }
    else if (steps == 1) {
        steps += 1;
        let innerCircle3 = document.querySelector('.inner-circle3');
        let outerCircle2 = document.querySelector('.outer-circle3');
        outerCircle2.style.backgroundColor = "green";
        innerCircle3.innerHTML = `<i class="ri-check-line text-[green] text-xl"></i>`
        progress.style.width = "50%";
    }
    else if (steps == 2) {
        steps += 1;
        let innerCircle4 = document.querySelector('.inner-circle4');
        let outerCircle2 = document.querySelector('.outer-circle4');
        outerCircle2.style.backgroundColor = "green";
        innerCircle4.innerHTML = `<i class="ri-check-line text-[green] text-xl"></i>`
        progress.style.width = "75%";
    }
    else if (steps == 3) {
        steps += 1;
        let innerCircle5 = document.querySelector('.inner-circle5');
        let outerCircle2 = document.querySelector('.outer-circle5');
        outerCircle2.style.backgroundColor = "green";
        innerCircle5.innerHTML = `<i class="ri-check-line text-[green] text-xl"></i>`;
        rightArrow.style.backgroundColor = "gray";
        progress.style.width = "100%";
    }
});

leftArrow.addEventListener('click', () => {
    if (steps == 1) {
        steps -= 1;
        let innerCircle2 = document.querySelector('.inner-circle2');
        let outerCircle2 = document.querySelector('.outer-circle2');
        outerCircle2.style.backgroundColor = "rgb(211,211,211)";
        innerCircle2.innerHTML = `<i class="ri-close-line text-xl text-[gray]"></i>`;
        leftArrow.style.backgroundColor = "gray";
        progress.style.width = "2%";
    }
    else if (steps == 2) {
        steps -= 1;
        let innerCircle3 = document.querySelector('.inner-circle3');
        let outerCircle2 = document.querySelector('.outer-circle3');
        outerCircle2.style.backgroundColor = "rgb(211,211,211)";
        innerCircle3.innerHTML = `<i class="ri-close-line text-xl text-[gray]"></i>`;
        progress.style.width = "25%";
    }
    else if (steps == 3) {
        steps -= 1;
        let innerCircle4 = document.querySelector('.inner-circle4');
        let outerCircle2 = document.querySelector('.outer-circle4');
        outerCircle2.style.backgroundColor = "rgb(211,211,211)";
        innerCircle4.innerHTML = `<i class="ri-close-line text-xl text-[gray]"></i>`;
        progress.style.width = "50%";
    }
    else if (steps == 4) {
        steps -= 1;
        let innerCircle5 = document.querySelector('.inner-circle5');
        let outerCircle2 = document.querySelector('.outer-circle5');
        outerCircle2.style.backgroundColor = "rgb(211,211,211)";
        innerCircle5.innerHTML = `<i class="ri-close-line text-xl text-[gray]"></i>`;
        rightArrow.style.backgroundColor = "green";
        progress.style.width = "75%";
    }
})



