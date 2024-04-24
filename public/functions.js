const toggleExperiences = () => {
    const elements = document.querySelectorAll('.hide');
    const showMoreButton = document.getElementById('showMoreButton');

    if (!showMoreButton) return;

    elements.forEach(element => {
        element.classList.toggle('hidden');
    });

    const hiddenElements = document.querySelectorAll('.hidden');

    showMoreButton.textContent = hiddenElements.length > 0 ? 'Ver más' : 'Ver menos';
};

export { toggleExperiences };