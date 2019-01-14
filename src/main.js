import { doRequest } from './connection.js';
import { titleAnimator, setListeners, appender, animation, interval, hideLoader } from './renderer.js';

/**
 * Init function, ran as soon the js is imported
 */
(async () => {

    // Function responsible to animate the page loader
    animation();
    // Function responsible to animate the page title
    titleAnimator();
    // Bind the page elements and set functions for them
    setListeners();

    /**
     * Make requests
     */
    const companies = await doRequest('http://demo1163728.mockable.io/companies');
    const skills = await doRequest('http://demo1163728.mockable.io/skills');

    if (!companies || !skills) {
        Swal('Pare!', 'Algo deu errado durante a requisição. <br>Tente novamente mais tarde!', 'error');
    }

    // Get the informations received from mockable and append them into the HTML
    appender(companies, 'p-experience', (snap, a) => {

        const doc = document.getElementById(a);

        snap.forEach((s) => {

            const h2 = document.createElement('H2');
            h2.innerText = s.companyName;

            const h3 = document.createElement('H3');
            h3.innerHTML = s.role;

            const h5 = document.createElement('H5');
            h5.innerHTML = s.stay;

            const p = document.createElement('p');
            p.innerHTML = s.moreInfos;

            [document.createElement('HR'), h2, h3, h5, p].forEach((v) => { doc.appendChild(v) });

        });

    });
    appender(skills, 'p-skills', (snap, a) => {

        const doc = document.getElementById(a);

        snap.forEach((s) => {

            const h2 = document.createElement('H2');
            h2.innerText = `${s.language} - ${s.rate}/10`;

            const progress = document.createElement('progress');
            progress.value = s.rate;
            progress.max = '10';

            [document.createElement('HR'), h2, progress].forEach((v) => { doc.appendChild(v) });

        });


    });

    // Hide the loader, since there is no awaiting respose
    hideLoader();
    // Clear the interval animation to reduce proccessing
    clearInterval(interval);

})();
