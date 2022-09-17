import React, { useEffect, useState } from 'react';
// import { useQuery } from "react-query";
// import primaryAxios from "../../Api/primaryAxios";
import Person from './Person';

const Persons = () => {
    // const { data: personDetails } = useQuery(["personDetails"], () =>
    //     primaryAxios.get(`/personDetails`)
    // );
    const [person, setPerson] = useState([]);
    useEffect(() => {
        fetch('personDetails.json')
        .then(res => res.json())
        .then(data => setPerson(data))
    } ,[])

    return (
        <div>
            <div>
                <h1 className="text-4xl text-center my-10 font-sans">Professional Person</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mx-10 gap-5 my-10">
                {/* {personDetails?.data?.map((person) => (
                    <Person key={person._id} person={person}></Person>
                ))} */}
                {person.map((per) => <Person per={per}></Person>)}
            </div>

        </div>
    );
};

export default Persons;