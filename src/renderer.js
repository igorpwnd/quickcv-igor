export let interval;

/**
 * Move each character forward every 250ms
 */
export function titleAnimator() {

    let titleText = document.title;
    setInterval(() => {
        titleText = titleText.substring(1, titleText.length) + titleText.substring(0, 1);
        document.title = titleText;
    }, 250);

}

/**
 * Verify if the user clicked the icon or the father tag, after that do the animation to spin and show
 * @param {*} id html id
 * @param {*} event html entire tag
 */
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

/**
 * Set every listener on the HTML
 */
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

/**
 * 
 * @param {*} arr infos array
 * @param {*} id Id of the element it's going to be appended
 * @param {*} htmlBuilder funtion with specific treat for each information to be displayed
 */
export function appender(arr, id, htmlBuilder) {
    htmlBuilder(arr, id);
}

/**
 * Perform a rotation of 1degree each 5ms
 */
export function animation() {

    let i = 0;
    interval = setInterval(() => {
        document.getElementById('spinner').style.transform = `rotateZ(${i++}deg)`;
    }, 5);


}

/**
 * Toggle between show and hide the loader
 */
export function hideLoader() {
    document.getElementById('load').classList.toggle('d-none');
}