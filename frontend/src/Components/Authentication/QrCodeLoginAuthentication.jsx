import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import QrScanner from 'qr-scanner';
import 'qr-scanner/qr-scanner-worker.min.js';
import { qRCodeIsAuthenticated } from '../../redux/actions/userActions';

function QrCodeLoginAuthentication({ qRCodeIsAuthenticated }) {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const scanner = new QrScanner(videoRef.current, async (result) => {
      console.log("Scanned QR code:", result);
      try {
        const postAndResponseQRCodeScan = await qRCodeIsAuthenticated({ email: result });
        console.log("RESPONSE FROM QRCODE SCAN!", postAndResponseQRCodeScan);
        navigate("/home");
      } catch (error) {
        console.error(error);
        // Handle error, e.g., show a toast or modal
      }
    });

    scanner.start();

    return () => {
      scanner.destroy();
    };
  }, [qRCodeIsAuthenticated]);

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-black md:flex">
          <div className="card-body">
            <div className="form-control">
              <label className='text-2xl text-center py-4 my-4'>
                SCAN QR CODE<br />
                TO LOGIN
              </label>
              <video
                className="box-content h-64 w-64 border-4 bg-fuchsia-50"
                ref={videoRef}
                autoPlay
                playsInline
                muted
                style={{ objectFit: 'cover' }}
              ></video>
            </div>
            <div className='flex justify-center'>
              <label className="text-2xl mx-2">
                <Link to="/login" className="label-text-alt link link-hover">
                  Login instead?
                </Link>
              </label>
              <label className="text-3xl mx-2">
                <Link to="/register" className="label-text-alt link link-hover">
                  Create an Account?
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { qRCodeIsAuthenticated })(QrCodeLoginAuthentication);