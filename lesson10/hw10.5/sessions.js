let div = document.getElementById('sessions');

let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
for (const session of sessions) {
    let sessionDiv = document.createElement('div');
    sessionDiv.innerText = session.date;
    div.appendChild(sessionDiv);
}



