// src/hooks/useDark.jsx
import { useState, useEffect } from "react";

export default function useDarkSide() {
    const getInitialTheme = () => {
        // Check local storage first
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            return savedTheme;
        }

        // If not found in local storage, use system preference
        const userPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
        return userPrefersDark ? "dark" : "light";
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const root = window.document.documentElement;
        const isDark = theme === "dark";
        root.classList.remove(isDark ? "light" : "dark");
        root.classList.add(theme);

        localStorage.setItem("theme", theme);
    }, [theme]);

    return [theme, setTheme];
}
