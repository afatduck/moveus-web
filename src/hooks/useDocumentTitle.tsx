import { useEffect } from "react"


const TITLE_SUFFIX = "| MoveUs"

export const useDocumentTitle = (pageTitle: string) => {
    useEffect(() => {
        document.title = `${pageTitle} ${TITLE_SUFFIX}`
    }, [pageTitle])
}