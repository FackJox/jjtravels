import React, { useEffect, useState } from 'react'

// change to .env
const API_URL = "http://localhost:7000"
console.log(API_URL)

const getImages = async (nextCursor) => {
    const params = new URLSearchParams()

    if (nextCursor) {
        params.append('next_cursor', nextCursor)
    }
    const response = await fetch(`${API_URL}/photos?${params}`)
    return await response.json()
}

const Gallery = () => {
    const [imageList, setImageList] = useState([])
    const [nextCursor, setNextCursor] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const responseJSON = await getImages()
            setImageList(responseJSON.resources)
            setNextCursor(responseJSON.next_cursor)
        }
        fetchData()
    }, [])

    const handleLoadMoreButtonClick = async () => {
        const responseJSON = await getImages(nextCursor)
        setImageList((currentImageList) => [...currentImageList, ...responseJSON.resources])
        setNextCursor(responseJSON.next_cursor)
    }
console.log(imageList)

    return (
        <div className="p-4">
        <div className="container grid-flow-row mx-auto space-y-2 md:grid-cols-2 md:grid md:space-y-0 md:gap-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-5" >
            {imageList.map((image) => <img className="w-[100%] h-[100%] object-cover" src={image.url} alt={image.publicid}></img>)}
            <p></p>
        </div>
        <div className="flex justify-center ">
        {nextCursor && <button onClick={handleLoadMoreButtonClick}>Load More</button>}
        </div>
        </div >
    )
}

export default Gallery