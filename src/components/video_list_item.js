import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imgageURL = video.snippet.thumbnails.default.url;
    console.log("Video ", video);
    return (
        <li className="list-group-item" onClick={()=>onVideoSelect(video)} >
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imgageURL} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title} </div>
                </div>
            </div>
        </li>
    )
};

export default VideoListItem;