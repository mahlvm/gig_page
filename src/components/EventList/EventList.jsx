import React, { useState, useEffect } from "react";
import "./EventList.css"; 

const EventList = (props) => {
    const [shows, setShows] = useState([]);
    
    useEffect(() => {
        const URL = "https://makers-gig-backend.onrender.com/events";
        fetch(URL)
            .then((res) => res.json())
            .then((data) => setShows(data))
            .catch((error) => console.error("Error fetching events:", error));
    }, []);
    
    return (
        <div className="shows-container-EL">
            <h3 className="shows-list-EL">More Artists:</h3>
            <div>
                {shows.map((showData) => (
                    <SingleShow key={showData.id} data={showData} />
                ))}
            </div>
        </div>
    );
};

const SingleShow = ({ data }) => {
    return (
        <div className="single-show">
            <div key={data.id}>
                <p className="band-name-EL"><strong>{data.band_name}</strong></p>
                <p className="description-EL">{data.description}</p>
                <p className="time-EL">{data.time}</p>
                <p className="location-EL">{data.location}</p>
            </div>
        </div>
    );
};

export default EventList;


