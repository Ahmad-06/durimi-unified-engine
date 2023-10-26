const switchTab = (tabID) => {
    const tabs = document.querySelectorAll('.tab');

    for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i];
        tab.classList.add('hidden');
        if (tab.id === tabID) tab.classList.remove('hidden');
    }
};
