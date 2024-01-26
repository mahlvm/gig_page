// import React from "react";
// import Button from "../Button/Button";
// import "./Gig.css"; 


// const Gig = (props) => {
//     const { name, description, time, location, favorite, onToggleFavorite } = props;

    
//     return (
        
//         <div className="gig">
//                 <h3 className="band-name">{props.name}</h3>
//                 <p className="event-description">{props.description}</p>
//                 <p className="event-time">{props.time}</p>
//                 <p className="event-location">{props.location}</p>

//                 <Button/>
//         </div>


//     );
// };

// export default Gig;

import React from "react";
import Button from "../Button/Button";
import "./Gig.css";

const Gig = (props) => {
    const { name, description, time, location, favorite, onToggleFavorite } = props;

    const gigs = [
            {
                id: 1,
                name: "Iron Maiden",
                evdescription: "Following their spectacular performances this year across Europe, \n" +
                "in Western Canada and at the recent PowerTrip Festival in California, \n" +
                "iconic British band IRON MAIDEN will be bringing THE FUTURE PAST TOUR to \n" +
                "Australia next year. This will be the first return to Australia since the \n" +
                "band touched down on Ed Force One for their 2016-17 The Book of Souls Tour.",
                time: "01 September - 20h",
                location: "RAC Arena - Perth, AUSTRALIA",
                
            },
        
            // {
            //     id: 2,
            //     name: "Iron Maiden",
            //     evdescription: "Following their spectacular performances this year across Europe, \n" +
            //     "in Western Canada and at the recent PowerTrip Festival in California, \n" +
            //     "iconic British band IRON MAIDEN will be bringing THE FUTURE PAST TOUR to \n" +
            //     "Australia next year. This will be the first return to Australia since the \n" +
            //     "band touched down on Ed Force One for their 2016-17 The Book of Souls Tour.",
            //     time: "14 September - 20h",
            //     location: "RAC Arena - Perth, AUSTRALIA",
            // }
    ];

    return (
        <div className="gig">
        {gigs.map((gig) => (
            <div key={gig.id}>
            <h3 className="band-name">{gig.name}</h3>
            <p className="event-description">{gig.evdescription}</p>
            <p className="event-time">{gig.time}</p>
            <p className="event-location">{gig.location}</p>
            <Button />
            </div>
        ))}
        </div>
    );
};

export default Gig;