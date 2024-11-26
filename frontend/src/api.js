const API_URL = 'http://localhost:8000/api';

export const fetchVideo = async (weekNumber) => {
    const response = await fetch(`/api/videos/${weekNumber}/`);
    if (!response.ok) throw new Error(await response.json());
    return response.json();
};

export const fetchLatestVideo = async () => {
    const response = await fetch('/api/videos/latest/');
    if (!response.ok) throw new Error(await response.json());
    return response.json();
};