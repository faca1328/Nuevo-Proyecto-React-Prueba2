import { useEffect, useState } from "react"

export function useFetch(url) {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null
    })

    const {data, isLoading, errors} = state

    const getFetch = async () => {
        if (!url) return
        try {
            const response = await fetch(url)
            const data = await response.json()
            setState({
                data,
                isLoading: false,
                errors: null
            })
        } catch (error) {

            setState({
                data: null,
                isLoading: false,
                errors: error
            })
        }
    }

    useEffect( () => {
        getFetch()
    }, [url])

    return {
        data,
        isLoading,
        errors
    }
}
