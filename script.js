document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.dropdown-button');
    const dropdowns = document.querySelectorAll('.dropdown');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetDropdown = document.getElementById(targetId);

            dropdowns.forEach(dropdown => {
                if (dropdown !== targetDropdown) {
                    dropdown.classList.remove('show');
                }
            });

            targetDropdown.classList.toggle('show');
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.header-options')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
    });
});
