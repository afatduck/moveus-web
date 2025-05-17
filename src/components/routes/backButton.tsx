import { useCallback } from "react"
import { HiChevronLeft } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"

function BackButton() {
    const navigate = useNavigate()

    const goBack = useCallback(() => {
        navigate(-1)
    }, [navigate])

    return <HiChevronLeft className="text-3xl block cursor-pointer" 
        onClick={goBack} />
}

export default BackButton