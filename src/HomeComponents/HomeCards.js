import React, { useState } from 'react'

function HomeCards() {
    const [cards] = useState(require('./CardDetails.json'))

    // const handleClickCards = (url) =>{
    //     window.location.href = 
    // }

    const cardType = (type) => {
        if(type === "Website"){
            return (
                <div className="card-type green-border">
                    {type}
                </div>
            )
        }
        else if(type === "Facebook"){
            return (
                <div className="card-type blue-border">
                    {type}
                </div>
            )
        }
        else if(type === "Instagram"){
            return (
                <div className="card-type purple-border">
                    {type}
                </div>
            )
        }
        else if(type === "Linkedin"){
            return (
                <div className="card-type orange-border">
                    {type}
                </div>
            )
        }
    }


    const card = (card) => {
        if(card.show){
            return (
                <a href={card.url} target="_blank" key={card.id}>
                    <div key={card.id} className="cards-box">
                        <div >
                            <img className="card-image" src={card.image} alt="Img" />
                        </div>
                        <div className="cards-info">
                            <div className="cards-title">
                                {card.title}
                            </div>
                            <div className="cards-description">
                                {card.description}
                            </div>
                        </div>
                        <div className="card-bottom-bar">
                            {cardType(card.type)}               
                        </div>
                    </div>
                </a>
            )
        }
        else{
            return <> </>
        }
    }


    return cards.map(each => 
        card(each)
    )
}

export default HomeCards
