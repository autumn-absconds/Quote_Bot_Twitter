// const axios = require('axios');
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
NAGA_API_KEY = process.env.NAGA_API_KEY;

// Function to generate a new caption using Naga API
async function generate_New_Caption(imageDescription, imageCaption) {

    // Construct the prompt based on the provided texts
    const prompt = `${imageDescription ? `"${imageDescription}"` : ''} ${imageCaption ? `"${imageCaption}"` : ''}`;

    // Build the request body
    const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'system',
                content: 'Generate a new short caption for a Twitter post based on the provided texts(if possible write in the same tone as of the imageCaption provided and if nothing is given then return only empty spaces):',
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
                'Authorization': `Bearer ${NAGA_API_KEY}`, // Replace with your API key
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

export default generate_New_Caption;
