import React, { useState, useEffect } from 'react';

const DarkModeHandler = ({ onThemeChange }) => {
    // Utilise le thème du localStorage si disponible ou définit le thème clair par défaut
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    // Met à jour l'état lors du toggle
    const handleToggle = (e) => {
        const newTheme = e.target.checked ? "dark" : "light";
        setTheme(newTheme);
        onThemeChange(newTheme); // Appelle la fonction de rappel pour notifier le changement de thème
    };

    // Définit l'état du thème dans le localStorage lors du montage et met à jour le localStorage lors des changements d'état
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // Ajoute l'attribut data-theme personnalisé à la balise html requis pour mettre à jour le thème avec DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    return (
        <div className="flex items-center">
            <button className="btn btn-square btn-ghost">
                <label className="swap swap-rotate w-12 h-12">
                    <input
                        type="checkbox"
                        onChange={handleToggle}
                        // Affiche l'image de toggle en fonction du thème enregistré dans localStorage
                        checked={theme !== "light"}
                    />
                    {/* Icône de thème clair (soleil) */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 swap-on"
                    >
                        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                    </svg>
                    {/* Icône de thème sombre (lune) */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 swap-off"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </label>
            </button>
        </div>
    );
};

export default DarkModeHandler;
