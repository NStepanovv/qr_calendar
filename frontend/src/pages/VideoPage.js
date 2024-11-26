import { useState, useEffect } from 'react';
import { fetchVideo } from '../api';
import './VideoPage.css';
import logo from "../assets/deco_logo.png";

const VideoPage = ({ weekNumber }) => {
    const [video, setVideo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchVideo(weekNumber)
            .then(setVideo)
            .catch(setError);
    }, [weekNumber]);

    if (error) return <div className="video-container">{error.message}</div>;
    if (!video) return <div className="video-container">Loading...</div>;

    return (
        <div>
            <a href="/" className="logo">
                <img src={logo} alt="Company Logo" />
            </a>
            <div className="video-container">
                <h1>Видео за неделю {video.week_number}</h1>
                <video controls src={video.video_url}></video>
                <p className="release-date">
                    Дата доступа: {new Date(video.release_date).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
};

export default VideoPage;