import React from 'react';
import Persons from '../Service/service1/Persons';
import CourseSlide from '../CourseSlides/CourseSlide';


const Home = () => {
    return (
        <div>
            <CourseSlide></CourseSlide>
            <Persons></Persons>
        </div>
    );
};

export default Home;