let resolver = null;

export async function doRequest(url) {

    return new Promise((resolve) => {
        resolver = resolve;
        fetch(url).then(treatThen).catch(treatCatch);
    });

}

function treatThen(snap) {
    snap.json().then((data) => { resolver(data); });
}

function treatCatch(snap) {
    resolver({ status: 0 });
}
