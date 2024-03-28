import React from 'react';
import MealItem from './MealItem';
import useHttp from '../Hooks/useHttp';
import Error from './Error';

const requestConfig = {};

const Meals = () => {
    const { data: loadedMeals, isLoading, error } = useHttp(`${window.location.origin}/meals`, requestConfig, []);

    if (isLoading) {
        return <p className='center'>Fetching Meals...</p>;
    }

    if (error) {
        return <Error title='Failed to Fetch Meals' message = {error} />
    }

    if (!loadedMeals) {
        return <p className='center'>No meals found.</p>;
    }

    return (
        <ul id='meals'>
            {loadedMeals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    );
};

export default Meals;
