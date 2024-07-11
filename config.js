function saveConfig() {
    const hide_ip = document.getElementById("ip").checked;
    const hide_last = document.getElementById("last_names").checked;
    const hide_first = document.getElementById("first_names").checked;
    const hide_address = document.getElementById("addresses").checked;
    const hide_un = document.getElementById("usernames").checked;

    chrome.storage.sync.set({
        hide_ip: hide_ip,
        hide_last: hide_last,
        hide_first: hide_first,
        hide_address: hide_address,
        hide_un: hide_un,
    }, () => {
        const status = document.getElementById("status");
        status.textContent = "Saved!";
        setTimeout(() => {
            status.textContent = "";
        }, 1500);
    })
}

function restoreConfig() {
    chrome.storage.sync.get({
        hide_ip: true,
        hide_last: true,
        hide_first: false,
        hide_address: true,
        hide_un: false,
    },
    items => {
        document.getElementById("ip").checked = items.hide_ip;
        document.getElementById("last_names").checked = items.hide_last;
        document.getElementById("first_names").checked = items.hide_first;
        document.getElementById("addresses").checked = items.hide_address;
        document.getElementById("usernames").checked = items.hide_un;
    });
}

document.addEventListener("DOMContentLoaded", restoreConfig);
document.getElementById("save").addEventListener("click", saveConfig);
