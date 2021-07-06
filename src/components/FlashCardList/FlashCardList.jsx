import React from 'react';
import '../FlashcardList/FlashcardList.css';
import '../FlashCard/FlashCard';

export default function FlashcardList({flashcards}) {
    return (
        <div className="card-grid">
            {flashcards.map(flashcard => {   
                //test
            return <FlashCard flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )
}
