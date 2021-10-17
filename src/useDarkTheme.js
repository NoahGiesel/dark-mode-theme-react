import {
    useState,
    useEffect
} from "react"

export default function useDarkTheme() {


    const [dark, setDark] = useState(localStorage.getItem("theme") === "dark" ? true : false);

    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark")
        } else {
            document.body.classList.remove("dark-mode")
            localStorage.setItem("theme", "light")
        }
    }, [dark]);

    const toggleDarkMode = () => {
        setDark(!dark)
    }

    return [dark, toggleDarkMode]
}