document.getElementById('jsonForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const errorMsg = document.getElementById('errorMsg');
    const jsonInput = document.getElementById('jsonInput').value.trim();
    
    try {
        // Validate JSON
        const parsedJson = JSON.parse(jsonInput);
        
        // Create formatted JSON and open in new tab
        const jsonBlob = new Blob(
            [JSON.stringify(parsedJson, null, 2)], 
            { type: 'application/json' }
        );
        const jsonUrl = URL.createObjectURL(jsonBlob);
        window.open(jsonUrl, '_blank');
        
        errorMsg.style.display = 'none';
    } catch (error) {
        errorMsg.textContent = 'Invalid JSON format. Please check your input.';
        errorMsg.style.display = 'block';
    }
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('jsonInput').value = '';
    document.getElementById('errorMsg').style.display = 'none';
});

// Auto-resize textarea
const textarea = document.getElementById('jsonInput');
textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});