import React from "react";
import './styles.scss';

export function Movies({ title, items }) {
    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="listArea">
                <div className="list">
                    {items.results.length > 0 && items.results.map((item,key) => (
                        <div className="item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_url}></img>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>

    )
}
