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
}

function undoLastEntry() {
    const logList = document.getElementById('logList');
    if (logList.lastChild) {
        logList.removeChild(logList.lastChild);
    }
}
