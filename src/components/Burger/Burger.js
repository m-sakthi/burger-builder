import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
      .map(ig => {
          return [...Array(props.ingredients[ig])].map((_, i) => {
              return <BurgerIngredient key={ig + i} type={ig} />;
          });    
      })
      .reduce((arr, el) => {
          return arr.concat(el)
      }, []);

    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;