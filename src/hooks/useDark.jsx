import { useState, useEffect } from "react";

export default function useDarkSide() {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    useEffect(() => {
        const root = window.document.documentElement;
        const isDark = theme === "dark";
        root.classList.remove(isDark ? "light" : "dark");
        root.classList.add(theme);

        localStorage.setItem("theme", theme);
    }, [theme]);

    return [theme, setTheme];
}
