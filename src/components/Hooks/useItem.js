import { useEffect, useState } from "react"

const useItem = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://boiling-crag-46002.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return { items, setItems }
}


export default useItem