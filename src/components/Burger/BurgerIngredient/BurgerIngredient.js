import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ( 'bread-top' ):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;

            case ( 'chicken' ):
                ingredient = <div className={classes.Chicken}></div>;
                break;
            case ( 'rice' ):
                ingredient = <div className={classes.Rice}></div>;
                break;
            case ( 'potato' ):
                ingredient = <div className={classes.Potato}></div>;
                break;
            case ( 'salad' ):
                ingredient = <div className={classes.Salad}></div>;
                break;
            case ( 'broccoli' ):
                ingredient = <div className={classes.Broccoli}></div>;
                break;
            case ( 'salmon' ):
                ingredient = <div className={classes.Salmon}></div>;
                break;
            case ( 'beef' ):
                ingredient = <div className={classes.Beef}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;