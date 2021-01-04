import React from 'react'
import HomeAbout from './HomeAbout'
import HomeHeader from './HomeHeader'
import HomeSubjects from './HomeSubjects'
import HomeVideos from './HomeVideos'

function Home() {
    return (
        <div>
            <div ><HomeHeader/></div>
            <div id="about"><HomeAbout/></div>
            <div id="subjects"><HomeSubjects/></div>
            <div id="videos"><HomeVideos/></div>
        </div>
    )
}

export default Home
