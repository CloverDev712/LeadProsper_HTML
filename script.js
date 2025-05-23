// Configuration
const config = {
    apiKey: 'YOUR_API_KEY', // Replace with your actual API key
    sourceId: 'YOUR_SOURCE_ID', // Replace with your actual Source ID
    apiEndpoint: 'https://api.leadprosper.com/v1/leads' // Replace with actual LeadProsper API endpoint
};

// Form submission handler
document.getElementById('leadForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const messageDiv = document.getElementById('message');
    messageDiv.className = 'message';
    messageDiv.textContent = '';
    
    try {
        // Get form data
        const formData = new FormData(e.target);
        const leadData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            city: formData.get('city'),
            state: formData.get('state'),
            zipCode: formData.get('zipCode'),
            notes: formData.get('notes')
        };

        // Prepare headers
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.apiKey}`,
            'X-Source-ID': config.sourceId
        };

        // Send data to LeadProsper API
        const response = await fetch(config.apiEndpoint, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(leadData)
        });

        const result = await response.json();

        if (response.ok) {
            // Success
            messageDiv.className = 'message success';
            messageDiv.textContent = 'Lead submitted successfully!';
            e.target.reset();
        } else {
            // API Error
            throw new Error(result.message || 'Failed to submit lead');
        }
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        messageDiv.className = 'message error';
        messageDiv.textContent = error.message || 'An error occurred while submitting the lead. Please try again.';
    }
}); 