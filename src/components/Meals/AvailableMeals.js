import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [fetchedMeals, setFetchedMeals] = useState([]);
  useEffect(() => {
    fetch(
      "https://meal-ordering-app-1aa10-default-rtdb.firebaseio.com/meals.json")
      .then((res) => res.json())
      .then((data) => setFetchedMeals(data));
  }, []);
  const mealsList = fetchedMeals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
