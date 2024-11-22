import { useState, useEffect } from 'react';
import { fetchVideo } from './api';

const VideoPage = ({ weekNumber }) => {
    const [video, setVideo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchVideo(weekNumber)
            .then(setVideo)
            .catch(setError);
    }, [weekNumber]);

    if (error) return <div>{error.message}</div>;
    if (!video) return <div>Loading...</div>;

    return (
        <div>
            <h1>Video for Week {video.week_number}</h1>
            <video controls src={video.video_url}></video>
        </div>
    );
};

export default VideoPage;