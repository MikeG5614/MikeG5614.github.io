document.getElementById('modeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-theme', this.checked);
    const label = document.querySelector('.label');
    label.classList.toggle('dark', this.checked); // Add/remove dark class for background
});
