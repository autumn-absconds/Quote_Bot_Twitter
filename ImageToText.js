import axios from 'axios';

// Function to predict image caption using Gradio API
async function predictImageCaption(imagePath, textInput) {
    try {
        const response = await axios.post('https://library-samples-image-captioning-with-blip.hf.space/--replicas/e935hxsm9/caption', {
            parameter_2: imagePath,
            Text: textInput,
        });

        // Extract and return the result
        return response.data;
    } catch (error) {
        // Handle errors
        console.error('Error:', error.response ? error.response.data : error.message);
        return null; // Return null in case of an error
    }
}

// Example usage
const imagePath = 'https://pbs.twimg.com/media/GAL95pNWcAAzJEj?format=jpg&name=small';
const textInput = 'Hello!!';

predictImageCaption(imagePath, textInput)
    .then((result) => {
        console.log('Result:', result);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
