import React, { useContext, useEffect } from "react";
import PropTypes from 'prop-types'
import style from "../styles/Card.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreaters } from "../state";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { addToCart as atc } from "../utilities";

export default function Card(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = useSelector(state => state.login);
    const theme = useSelector(state => state.theme);


    // let cartItem = [{ _id: "62278be34e90e53ae1b763be", quantity: 2 }, { _id: "62278ce84e90e53ae1b763c0", quantity: 3 },];

    //   if(!theme) {
    //     // document.body.style = 'background: red;';
    //     document.querySelector('.fade')?.classList.add(style.light);
    // }
    // else{
    //     // document.body.style = 'background: green;';
    //     document.querySelector('.fade')?.classList.remove(style.light);
    // }

    useEffect(() => {
        // dispatch(actionCreaters.setCart(cartItem))
    }, [])

    return (
        <div className={style.item} id={"item" + props.num}>
            <Link to={`/product/${props.num}`}>
                {/* <img src={props.imgurl} alt="food" loading="lazy" /> */}
                <LazyLoadImage src={props.imgurl}
                    /* width={225} height={100} */
                    threshold={50}
                    alt="blog"
                // effect="blur"
                />
            </Link>
            <div className={style.content}>
                {/* <Link to={`/product/${props.num}`}> */}
                <div className={style.item_name}>
                    <h3>{props.foodName}</h3>
                </div>
                <div>{props.dsc}</div>
                <h5 className={!theme ? style.light : null}>‎ {/* this is an invisible character */}</h5>
            </div>
        </div>
    );
}

Card.propTypes = {
    // num:PropTypes.number.isRequired,
    foodName: PropTypes.string.isRequired,
    dsc: PropTypes.string
}
Card.defaultProps = {
    foodName: "Unnamed Blog",
    dsc: "No discription is available for this Artical"
}