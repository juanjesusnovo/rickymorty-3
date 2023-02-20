import {useEffect, useState } from "react"
import axios from "axios"

/* export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getData = async () => {
        await axios.get(url)
            .then(response =>{
                if(!response){
                    throw new Error("Error getting data from api")
                }
                else{
                setData(response.data)
                setLoading(false)
                }
            }, error =>{
                setError("error")
            })
    } 

    useEffect(() => {
        getData()
    }, [])

    return { data, loading, error }
}
 */
export const characterListPagination = (page) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getData = async () => {
        await axios.get(page)
            .then(response =>{
                if(!response){
                    throw new Error("Error getting data from api")
                }
                else{
                setData(response.data)
                setLoading(false)
                }
            }, error =>{
                setError("error")
            })
    }
    useEffect(()=>{
        getData()
    }, [page])

    return {data, loading, error}
}
