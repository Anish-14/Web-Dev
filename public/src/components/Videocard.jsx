import React from 'react';
import '../styles.css';
const VideoCard = (props) => {
  return (
    <div className="video-card">
      <div className="card">
        <img
          src={props.video.thumbnail}
          className="card-img-top card-image"
          alt="Thumbnail"
        />
        <div className="card-body">
          <h4 className="card-title">{props.video.title}</h4>
          <p className="card-text channel-name">{props.video.channelName}</p>
          <p className="card-text video-meta">
            {props.video.views} views &#8226; {props.video.time}
          </p>
          <div className="card-actions">
            <button
              className={`like-btn${props.liked ? ' liked' : ''}`}
              onClick={() => props.onLike(props.video.number)}
              title={props.liked ? 'Unlike' : 'Like'}
            >
              {props.liked ? <span>&#10084;</span> : <span>&#9825;</span>}
            </button>
            {props.onRemove ? (
              <button
                className="remove-btn"
                onClick={() => props.onRemove(props.video.number)}
                title="Remove from Watch Later"
              >
                &#10060; Remove
              </button>
            ) : (
              <button
                className={`watchlater-btn${props.inWatchLater ? ' saved' : ''}`}
                onClick={() => props.onWatchLater(props.video.number)}
                title={props.inWatchLater ? 'Saved' : 'Add to Watch Later'}
              >
                {props.inWatchLater ? 'Saved' : <span>&#10010; Watch later</span>}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;