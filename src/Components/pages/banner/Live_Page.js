import React, { useRef, useEffect } from 'react';

const Live_Page = () => {
    const videoRef = useRef(null);

    const openCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: { exact: 'environment' } }
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (err) {
            console.error('Error accessing camera: ', err);
        }
    };

    useEffect(() => {
        openCamera();
    }, []);

    return (
        <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
            <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            ></video>
        </div>
    );
};

export default Live_Page;
