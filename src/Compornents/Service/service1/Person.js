import React from 'react';
import { useNavigate } from 'react-router-dom';

const Person = ({ per }) => {
    const { _id,name, edu, img, dec,speciality,address} = per;
    const navigate = useNavigate();

    const handelBlogs = (id) => {
        navigate(`/personDetails/${_id}`)

    }
    return (
        <div>
            <div className="card card-compact lg:w-96 bg-base-300 shadow-xl">
                <figure><img className='w-96 h-80' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-2xl'>{edu}</p>
                    <p>{dec}</p>
                    <p>{speciality}</p>
                    <p>{address}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handelBlogs(_id)} className="btn btn-primary">DEATAILS</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Person;