import { useThemeStore } from "../store/useThemeStore.js"

const HomePage = () => {
    const { theme } = useThemeStore()
    return (
        <div>HomePage</div>
    )
}

export default HomePage