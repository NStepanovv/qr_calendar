import React from "react";
import "./Home.css";
import logo from "../assets/deco_logo.png";
import centerImage from "../assets/center-image.png"; // Новое изображение в центре

function Home() {
    return (
        <div>
            {/* Логотип с ссылкой */}
            <a href="/" className="logo">
                <img src={logo} alt="Company Logo" />
            </a>

            {/* Основная плашка */}
            <div className="main-container">
                {/* Текст приветствия */}
                <div className="welcome-text">Добро пожаловать на наш сайт!</div>

                {/* Изображение в центре плашки */}
                <img src={centerImage} alt="Center Illustration" className="center-image" />

                {/* Текст объяснения */}
                <div className="description">
                    Здесь вы найдете видеоматериалы, связанные с нашим календарем. Сканируйте QR-коды на календаре,
                    чтобы перейти к соответствующим видео. Каждое видео становится доступным в начале соответствующей недели.
                </div>
            </div>
        </div>
    );
}

export default Home;