import { useEffect, useState } from "react"

const useReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('bicycle.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return [reviews, setReviews]
}
export default useReview;