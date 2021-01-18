import React, { useEffect } from 'react';
import useApiCall from '../hooks/useApiCall';

const Slider = () => {
    const [response, executeApiCall] = useApiCall('getTitle');
    const {loading, data, error} = response;

    useEffect(executeApiCall, [])

    return (
        <>
            {loading && <div><h2>Loading...</h2></div>}
            {error && <p>Algo ha pasado! 🙁</p>}
            {data &&
                <div>
                    {/* <img src={image} alt={text}/>
                    <p>{text}</p> */}
                    {data}
                </div>
            }        
        </>
    );
};

export default Slider;

