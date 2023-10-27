const editLink = async () => {
    const idInput = document.getElementById('edit-app-id');
    const nameInput = document.getElementById('edit-app-name');
    const linkInput = document.getElementById('edit-app-link');

    const app = { id: idInput.value, name: nameInput.value, link: linkInput.value };

    const resp = await fetch('/api/v1/app/edit', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(app),
    });
    const { success, error } = await resp.json();

    if (!success) return console.error(error);

    closeModal('edit');
};
