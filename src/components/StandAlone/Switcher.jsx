// src/components/StandAlone/Switcher.jsx
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../../hooks/useDark.jsx";

export default function Switcher() {
    const [theme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(theme === "dark");

    const toggleDarkMode = (checked) => {
        setTheme(checked ? "dark" : "light");
        setDarkSide(checked);
    };

    return (
        <>
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={25}
            />
        </>
    );
}
