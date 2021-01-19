import React, { useEffect } from 'react';
import useApiCall from '../hooks/useApiCall';

const Slider = () => {
    const [response, executeApiCall] = useApiCall('getBackgroundSlider');
    const {loading, data, error} = response;

    useEffect(executeApiCall, [])

    return (
        <>
            {loading && <div><h2>Loading...</h2></div>}
            {error && <p>Something is wrong! 🙁</p>}
            {data &&
                <div className="head">
                    <img src={data} alt="Stradivarius" />
              </div>
            }        
        </>
    );
};
export default Slider;