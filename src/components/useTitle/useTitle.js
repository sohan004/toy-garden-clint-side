import { useEffect } from "react"

const useTitle = t => {
    useEffect(() => {
        document.title = t
    }, [t])
}

export { useTitle }