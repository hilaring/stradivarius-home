import React, { useEffect } from 'react';
import useApiCall from '../hooks/useApiCall';

const Slider = () => {
    const [response, executeApiCall] = useApiCall('getTitle');
    const {loading, data, error} = response;

    useEffect(executeApiCall, [])

    return (
        <>
            {loading && <div><h2>Loading...</h2></div>}
            {error && <p>Something is wrong! 🙁</p>}
            {data &&
                <div className="slider-content">
                    <h1>{data}</h1>
                </div>
            }        
        </>
    );
};
export default Slider;