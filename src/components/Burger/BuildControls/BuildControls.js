import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salmon', type: 'salmon' },
    { label: 'Beef', type: 'beef' },
    { label: 'Chicken', type: 'chicken' },
    { label: 'Rice', type: 'rice' },
    { label: 'Potato', type: 'potato' },
    { label: 'Salad', type: 'salad' },
    { label: 'Broccoli', type: 'broccoli' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p><strong>Create your own</strong></p>
        <p><strong>${props.price.toFixed(2)}</strong></p>
        <div className={classes.Quantity}>
        <button>-</button>
        <input type="number" id="mealQuantity" name="mealQuantity"
       min="1" max="50"></input>
       <button>+</button>
       </div>
       <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>Add to Cart</button>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        
    </div>
);

export default buildControls;