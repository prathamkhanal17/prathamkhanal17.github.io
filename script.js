document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Console greeting
    console.log(
        '%c Hello. ',
        'background: #111; color: #fff; padding: 5px; border-radius: 3px;'
    );
});
