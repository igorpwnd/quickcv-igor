export let interval;

export function titleAnimator() {

    let titleText = document.title;
    setInterval(() => {
        titleText = titleText.substring(1, titleText.length) + titleText.substring(0, 1);
        document.title = titleText;
    }, 250);

}

function expander(id, event) {

    const srcEl = event.srcElement;

    switch (srcEl.nodeName) {
        case 'I':
            event.srcElement.classList.toggle('rotate');
            break;
        case 'H1':
            event.srcElement.firstElementChild.classList.toggle('rotate');
            break;
        default:
            break;
    }

    document.getElementById(id).classList.toggle('expanded');
}

export function setListeners() {

    document.getElementById('p-exp-btn').addEventListener('click', (event) => {
        expander('p-experience', event);
    }, false);

    document.getElementById('p-skil-btn').addEventListener('click', (event) => {
        expander('p-skills', event);
    }, false);

    document.getElementById('theme-switch').addEventListener('click', (event) => {
        document.getElementsByClassName('bg-set')[0].classList.toggle('invert');

        document.getElementById('theme-switch').classList.toggle('far');
        document.getElementById('theme-switch').classList.toggle('fas');

    }, false);


}

export function appender(arr, id, htmlBuilder) {
    htmlBuilder(arr, id);
}

export function animation() {

    let i = 0;
    interval = setInterval(() => {
        document.getElementById('spinner').style.transform = `rotateZ(${i++}deg)`;
    }, 5);


}

export function hideLoader(){
    document.getElementById('load').classList.toggle('d-none');
}