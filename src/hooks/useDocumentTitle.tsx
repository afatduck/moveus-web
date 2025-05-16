import { useEffect } from "react"


const TITLE_SUFFIX = "| MoveUs"

function useDocumentTitle (pageTitle: string) {
    useEffect(() => {
        document.title = `${pageTitle} ${TITLE_SUFFIX}`
    }, [pageTitle])
}

export default useDocumentTitle