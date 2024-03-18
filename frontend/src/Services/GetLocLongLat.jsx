import React, { useState, useEffect } from 'react';
import { TbWorldLatitude } from "react-icons/tb";


function GetLocLongLat() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const successCallback = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    };

    const errorCallback = (error) => {
      setError(error.message);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
        <div>
        <label>Your Location:</label>
        <span className='text-5xl'>Latitude: {latitude}</span>
        <br />
        <span className='text-5xl'>Longitude: {longitude}</span>
        </div>
        </>
      )}
    </div>
  );
}

export default GetLocLongLat;