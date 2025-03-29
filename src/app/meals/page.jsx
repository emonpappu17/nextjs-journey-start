// "use client"
// import React, { useEffect, useState } from 'react';

import MealSearchNewInput from "./components/MealSearchNewInput";

const MealsPage = async ({ searchParams }) => {
    // const [meals, setMeals] = useState([]);
    // const [search, setSearch] = useState("")
    const query = await searchParams;
    console.log('query', query);

    // const meals = []

    const fetchMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`);
            // const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = await res.json();

            // setMeals(data?.meals || []);
            return data.meals;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    // useEffect(() => {
    //     fetchMeals();
    // }, [search])
    // console.log('meals', meals);

    const meals = await fetchMeals();
    return (
        <div>
            <div className='flex justify-center '>
                <MealSearchNewInput></MealSearchNewInput>
                {/* <input className='border mt-4 text-black' value={search} onChange={(e) => setSearch(e.target.value)} /> */}
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {meals?.map((singleMeal) => {
                    return (
                        <div key={singleMeal?.idMeal}>
                            <p className='text-3xl font-bold'>{singleMeal?.strMeal}</p>
                            <p>{singleMeal?.strInstructions
                            }</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default MealsPage;