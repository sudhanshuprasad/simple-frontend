import React, { Suspense, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import urlContext from '../context/api_url/urlContext';
import Card from '../components/Card'
// import LazyCard from './lazy/Card'
import "../styles/Grid.css";
import dataFromDB from "../Database/data"
import { actionCreaters } from '../state';
import NotFound from './NotFound';
import Navbar from '../components/Navbar';
// import LoadingGrid from './lazy/LoadingGrid';
// const Card = React.lazy(() => import("./Card.js"));

export default function Grid() {

    // const host = useContext(urlContext);
    const [data, setData] = useState([]);
    // const theme = useSelector(state => state.theme);
    const [loading, setLoading] = useState(true);
    // const login = useSelector(state => state.login);
    const dispatch = useDispatch()

    //infinite scroll
    const fetchingData = useRef(false);
    const hasMore = useRef(true);

    const lastCard = document.querySelector('.loading');
    // console.log(lastCard);
    const observer = new IntersectionObserver((entries) => {
        // console.log('is intersecting ',entries[0].isIntersecting)
        if (entries[0].isIntersecting && !fetchingData.current && hasMore.current) {

            // fetchMoreData();
        }

    });

    if (lastCard != null) {
        observer.observe(lastCard);
    }

    useEffect(() => {
        setData(dataFromDB)
        console.log('useEffect ', data);
    }, [data])

    return (
        <>
            <Navbar />
            <div className='grid-container' style={{
                // backgroundColor: theme ? "rgb(100,100,100)" : "white",
                // color: theme ? "white" : "black",
            }}>
                {
                    data.map((element) => (
                        <div className='card' key={element._id}>
                            <Suspense fallback={<NotFound />}>
                                <Card
                                    num={element._id}
                                    imgurl="https://picsum.photos/60"
                                    foodName={element.name}
                                    shopName={element.shopName}
                                    price={element.price}
                                    dsc={element.dsc}
                                />
                            </Suspense>
                        </div>
                    ))
                }

                {loading ? <footer className='loading'>loading more...</footer> : <footer>End</footer>}


                {/* {loading ? <LoadingGrid /> : null} */}
            </div>
        </>
    )
}
