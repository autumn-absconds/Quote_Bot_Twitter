// const axios = require('axios');
import axios from 'axios';

// Function to generate a new caption using Naga API
async function generateNewCaption(imageDescription, imageCaption) {

    // Construct the prompt based on the provided texts
    const prompt = `${imageDescription ? `"${imageDescription}"` : ''} ${imageCaption ? `"${imageCaption}"` : ''}`;

    // Build the request body
    const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: 'Generate a new short caption for a Twitter post based on the provided texts(if possible write in the same tone as of the imageCaption provided):',
                name: 'instructions',
            },
            {
                role: 'user',
                content: prompt,
                name: 'user-input',
            },
        ],
    };

    try {
        // Make the POST request to Naga API
        const response = await axios.post('https://api.naga.ac/v1/chat/completions', requestBody, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 5orXoTFfvt9NRb9XOgamsLOmK3kx62wGT8DL8c7Hp_Y`, // Replace with your API key
            },
        });

        // Extract and return the generated caption
        return response.data.choices[0].message.content;
    } catch (error) {
        // Handle errors
        console.error('Error:', error.response ? error.response.data : error.message);
        return ''; // Return an empty string in case of an error
    }
}

module.exports = generateNewCaption;
// Example usage
const imageDescription = 'A beautiful landscape';
const imageCaption = 'Sunset over the mountains';

generateNewCaption(imageDescription, imageCaption)
    .then((generatedCaption) => {
        console.log('Generated Caption:', generatedCaption);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
