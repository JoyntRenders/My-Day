document.getElementById('logWater').addEventListener('click', () => logActivity("Water"));
document.getElementById('logFood').addEventListener('click', () => logActivity("Food"));
document.getElementById('logBathroom').addEventListener('click', () => logActivity("Bathroom"));
document.getElementById('logPlaytime').addEventListener('click', () => logActivity("Playtime"));
document.getElementById('logSmoke').addEventListener('click', () => logActivity("Smoke"));
document.getElementById('logSex').addEventListener('click', () => logActivity("Sex"));
document.getElementById('undoButton').addEventListener('click', undoLastEntry);

function logActivity(type) {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const listItem = document.createElement('li');
    listItem.textContent = `${type} at ${timeString}`;
    document.getElementById('logList').appendChild(listItem);
    postDataToGoogleSheets(now.toISOString(), type);
}

function postDataToGoogleSheets(timestamp, activity) {
    fetch(https://script.google.com/macros/s/AKfycby8c3zwghdkyHLCFZHJh_Qm20GxsFYZT1rlFAOylnxAS-pzBV_c5QQXov3UymKilrmb/exec, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({timestamp: timestamp, activity: activity})
    })
    .then(response => response.json())
    .then(data => console.log("Data posted successfully: ", data))
    .catch(error => console.error('Error posting data:', error));
}

function undoLastEntry() {
    const logList = document.getElementById('logList');
    if (logList.lastChild) {
        logList.removeChild(logList.lastChild);
    }
}






