const closeModal = () => {
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal-create');

    overlay.classList.add('hidden');
    modal.classList.add('hidden');

    const headingApp = document.getElementById('modal-heading-app');
    const typeInput = document.getElementById('app-type');

    headingApp.innerText = '';
    typeInput.value = '';
};
