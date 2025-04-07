const API_URL = 'https://complete-health-85c8d30342.strapiapp.com'
const API_KEY = '4c9f869b9d3a2c03992f1c5b89c223ea4c6cea2f1fcb09302074c4f905aeaf4fc5d3c72e9fad3916c98f2ee82f5aa55838c94fc4a92b9e10ba822064a92d8fad7eb8af5a7f7df4392fe4c660e6b9391d3f566fb1653bbc30c520979e5f6ab13ace980cef0f2e96be898f4cf6159cba4bc4a882a6ed1bb8a47ae0c87306e632bb'

async function fetchList() {
    console.log("fetchList");
    const resp = await fetch('https://complete-health-85c8d30342.strapiapp.com' + '/api/nyheter?populate=*', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + API_KEY
        }
    })
    const response = await resp.json();
    console.log(response); // Log the API response to the console
    for (let doc of response.data) {
        await showDocument(doc)
    }
}

async function showDocument(doc) {
    document.querySelector('#nyheter').innerHTML += `
        <h2>${(doc.Tittel)}</h2>
        <details>
            <summary>${(doc.Ingress)}</summary>
            <p>${doc.Innhold}</p>
            <p>${doc.Forfatter}</p>
            <p>${doc.Dato}</p>
            <img alt="${(doc.title)}" src="${doc.Bilde.formats.large.url}">
        </details>
    `
}

window.onload = () => {
    console.log("Window loaded, calling fetchList");
    fetchList();
}
