import React from 'react'
import ReactPlayer from 'react-player'

function HomeVideos() {
    return (
        <div className="mx-80">
            <h1 className="text-3xl font-bold text-gray-600 text-center my-8">Videos</h1>
            <div className="my-10 border-2 border-gray-300 p-8">
            <ReactPlayer
                url="https://www.youtube.com/watch?v=KvYh1e93BII"
            />
            </div>
            <div className="my-10 border-2 border-gray-300 p-8">
            <ReactPlayer
                url="https://www.youtube.com/watch?v=3DUmm3NbcQE"
            /></div>
            <div className="my-10 border-2 border-gray-300 p-8">
            <ReactPlayer
                url="https://www.youtube.com/watch?v=xhN5Zkm82DA"
            />
            </div>
            <div className="my-10 border-2 border-gray-300 p-8">
                <ReactPlayer
                url="https://www.youtube.com/watch?v=UtxaRodBVf8"
            /></div>
            
        </div>
    )
}

export default HomeVideos
