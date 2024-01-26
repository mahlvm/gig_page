import React, { useState } from "react";
import "./Button.css"; 

const FavoriteButton = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div>
            <button onClick={handleFavoriteClick}>
                {isFavorite ? <b>👎 DISLIKE</b> : <b>🌟 FAVORITE SHOW </b>}
            </button>
            {/* {isFavorite && <p className="favorite-status">Favorito!</p>} */}
            
        </div>
        );
};

export default FavoriteButton;


