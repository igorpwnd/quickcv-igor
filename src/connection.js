let resolver = null;

/**
 * Perform a quick request to the given url
 * @param {string} url simple string
 */
export async function doRequest(url) {

    return new Promise((resolve) => {
        resolver = resolve;
        fetch(url).then(treatThen).catch(treatCatch);
    });

}

/**
 * Treat the success callback
 */
function treatThen(snap) {
    snap.json().then((data) => { resolver(data); });
}

/**
 * Treat the failure callback
 */
function treatCatch(snap) {
    resolver(null);
}
