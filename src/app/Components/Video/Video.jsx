import React from 'react';

const Video = () => {
    return (
        <div>
            <video
                autoPlay
                loop
                muted
                className="w-full h-auto"
                src="/hello.mp4"
                type="video/mp4"
            />
        </div>
    );
};

export default Video;