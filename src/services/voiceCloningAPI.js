// voiceCloningAPI.js

/**
 * Voice Cloning API functionality
 * Provides methods to interact with the voice cloning service.
 */

const axios = require('axios');

const VOICE_CLONING_API_URL = 'https://api.voicecloning.com';

/**
 * Clones the provided voice based on the input text.
 * @param {string} text - The input text to be cloned into voice.
 * @param {string} voiceId - The ID of the voice to clone.
 * @returns {Promise<string>} - Returns a promise that resolves to the audio URL of the cloned voice.
 */
const cloneVoice = async (text, voiceId) => {
    try {
        const response = await axios.post(`${VOICE_CLONING_API_URL}/clone`, {
            text,
            voiceId
        });
        return response.data.audioUrl;
    } catch (error) {
        console.error('Error cloning voice:', error);
        throw error;
    }
};

module.exports = { cloneVoice };