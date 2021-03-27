import React, { useEffect } from 'react'
import HomeCards from './HomeCards'

function Home() {
    
    document.title = "Home | Cian healtcare Ltd"
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    

    return (
        <div>
            <HomeCards />
        </div>
    )
}

export default Home
