// Main JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    console.log('Site loaded successfully');

    // File Explorer Logic
    const folders = document.querySelectorAll('.folder');

    folders.forEach(folder => {
        folder.addEventListener('click', (e) => {
            // Toggle the 'open' class on the folder itself (for chevron rotation)
            folder.classList.toggle('open');

            // Find the next sibling which should be the folder-content
            const content = folder.nextElementSibling;
            if (content && content.classList.contains('folder-content')) {
                content.classList.toggle('open');
            }
        });
    });
});
