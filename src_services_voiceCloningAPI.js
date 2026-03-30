export async function cloneVoice(payload) {
  const response = await fetch('/api/voice-clone', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Voice cloning request failed');
  }

  return response.json();
}