import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PersonDetails = () => {
    const { detailsId } = useParams();

    const [person, setPerson] = useState([]);
    useEffect(() => {
        fetch('/personDetails.json')
            .then(res => res.json())
            .then(data => setPerson(data))
    }, [])
    const newPerson = person.filter(s => s._id == detailsId)
    return (
        <div>
            <div className="card lg:card-side grid lg:p-10 lg:mx-32 place-content-center shadow-xl">
                <figure><img className='w-96' src={newPerson[0]?.img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{newPerson[0]?.name}</h2>
                    <p>{newPerson[0]?.dec}</p>
                    <p>{newPerson[0]?.edu}</p>
                    <p>{newPerson[0]?.speciality}</p>
                    <p>{newPerson[0]?.address}</p>
                   
                </div>
            </div>

        </div>
    );
};

export default PersonDetails;