import React from 'react'
import "./FlashCard.css";

export default function FlashCard({flashcard}) {
    return (
        <div>
            {flashcard.title}
        </div>
    )
}
