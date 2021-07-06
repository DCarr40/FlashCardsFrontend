import React from 'react';
import '../FlashcardList/FlashcardList.css';
import FlashCard from '../FlashCard/FlashCard';

export default function FlashcardList ({flashcards}) {
    return (
        <div className="card-grid">
            {flashcards.map(flashcard => {   
            return <FlashCard flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )
}
