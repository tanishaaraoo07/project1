cat > js/script.js << 'EOL'
document.addEventListener('DOMContentLoaded', function() {
    // Set current date as last updated
    const now = new Date();
    document.getElementById('last-updated').textContent = now.toLocaleDateString();
});
EOL