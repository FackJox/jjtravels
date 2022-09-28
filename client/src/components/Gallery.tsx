import React, { useEffect, useState } from 'react'

type getImagesProps = {
    nextCursor: string
}

interface ImageListProps {
    url: string
    publicid: string
}

// change to .env
const API_URL = process.env.REACT_APP_API_URL

const getImages = async ({nextCursor}: getImagesProps) => {
    const params = new URLSearchParams()

    if (nextCursor) {
        params.append('next_cursor', nextCursor)
    }
    const response = await fetch(`${API_URL}/photos?${params}`)
    return await response.json()
}

const Gallery = () => {
    const [imageList, setImageList] = useState<ImageListProps[]>([])
    const [nextCursor, setNextCursor] = useState(null!)

    useEffect(() => {
        const fetchData = async () => {
            const responseJSON = await getImages(null!)
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
            {imageList.map((image) => <div><div>test</div><img className="w-[100%] h-[100%] object-cover" src={image.url} alt={image.publicid}></img></div>)}
            <p></p>
        </div>
        <div className="flex justify-center ">
        {nextCursor && <button onClick={handleLoadMoreButtonClick}>Load More</button>}
        </div>
        </div >
    )
}

export default Gallery