import React, { useEffect } from 'react';
import useApiCall from '../hooks/useApiCall';

const Section = () => {
    const [response, executeApiCall] = useApiCall('getTitleSection');
    const { loading, data, error } = response;

    useEffect(executeApiCall, [])

    return (
        <>
            {loading && <div><h2>Loading...</h2></div>}
            {error && <p>Something is wrong! 🙁</p>}
            {data &&
                <>
                    {data.map(section => {
                        return (
                            <div key={section.index} className="sales-content">
                                <h2>{section}</h2>
                            </div>
                        )
                    })}
                {console.log('DATA:')}
                {console.log(data)}
                </>
            }
        </>
    );
};
export default Section;