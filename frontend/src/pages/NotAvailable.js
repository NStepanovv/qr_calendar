import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchVideo, fetchLatestVideo } from "../api";
import "./NotAvailable.css";
import logo from "../assets/deco_logo.png";

const NotAvailable = () => {
    const { weekNumber } = useParams();
    const [releaseDate, setReleaseDate] = useState(null);
    const [latestVideoWeek, setLatestVideoWeek] = useState(null);

    useEffect(() => {
        const getVideoInfo = async () => {
            try {
                const data = await fetchVideo(weekNumber);
                setReleaseDate(data.release_date);
            } catch (error) {
                console.error("Error fetching video data:", error);
            }
        };

        const getLatestVideoInfo = async () => {
            try {
                const data = await fetchLatestVideo();
                setLatestVideoWeek(data.week_number);
            } catch (error) {
                console.error("Error fetching latest video data:", error);
            }
        };

        getVideoInfo();
        getLatestVideoInfo();
    }, [weekNumber]);

    return (
        <div>
            {/* Логотип с ссылкой */}
            <a href="/" className="logo">
                <img src={logo} alt="Company Logo" />
            </a>

            {/* Основная плашка */}
            <div className="not-available-container">
                <h2 className="not-available-title">Это видео еще не доступно</h2>
                {releaseDate ? (
                    <p className="not-available-date">
                        Видео будет доступно с {new Date(releaseDate).toLocaleDateString()}
                    </p>
                ) : (
                    <p className="not-available-date">Загрузка данных...</p>
                )}

                {/* Кнопки */}
                <div className="button-container">
                    <Link to="/" className="button">
                        На главную
                    </Link>
                    {latestVideoWeek ? (
                        <Link to={`/video/${latestVideoWeek}`} className="button">
                            Последнее доступное видео
                        </Link>
                    ) : (
                        <p className="not-available-date">Нет доступных видео</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotAvailable;