import { useCallback } from "react"
import { HiChevronLeft } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"

function BackButton({to}: BackButtonProps) {
    const navigate = useNavigate()

    const goBack = useCallback(() => {
        navigate(to ?? -1 as any)
    }, [navigate])

    return <HiChevronLeft className="text-3xl block cursor-pointer" 
        onClick={goBack} />
}

export default BackButton

interface BackButtonProps {
    to?: string
}