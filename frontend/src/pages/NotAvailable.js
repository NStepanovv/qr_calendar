import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVideo } from '../api';

const NotAvailable = () => {
  const { weekNumber } = useParams();
  const [releaseDate, setReleaseDate] = useState(null);

  useEffect(() => {
    const getVideoInfo = async () => {
      try {
        const data = await fetchVideo(weekNumber);
        setReleaseDate(data.release_date);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };
    getVideoInfo();
  }, [weekNumber]);

  return (
    <div>
      <h2>Это видео еще не доступно</h2>
      {releaseDate ? (
        <p>Видео будет доступно с {new Date(releaseDate).toLocaleDateString()}</p>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
};

export default NotAvailable;