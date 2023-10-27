const switchTab = (tabID) => {
    const tabs = document.querySelectorAll('.tab');

    for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i];
        tab.classList.add('hidden');
        if (tab.id === tabID) tab.classList.remove('hidden');
    }

    const switches = document.querySelectorAll('.switch');

    for (let i = 0; i < switches.length; i++) {
        const switche = switches[i];
        switche.classList.remove('active');
        if (switche.getAttribute('data-switch-id') === tabID) switche.classList.add('active');
    }

    const settingsButton = document.querySelector('#settings-button a');
    const editButton = document.querySelector('#edit-button a');

    settingsButton.setAttribute('href', `/settings/${tabID}`);
    settingsButton.setAttribute('title', `Change ${tabID[0].toUpperCase() + tabID.slice(1)} order.`);
    editButton.setAttribute('href', `/settings/edit/${tabID}`);
    editButton.setAttribute('title', `Edit ${tabID[0].toUpperCase() + tabID.slice(1)} items.`);
};
