import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl,date,author,source } = this.props;
    return (
      <div >
        <div className="card">
          <div>
            <span className="badge rounded-pill bg-danger"style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}} >
              
              {source}
            
            </span>
            </div>
          <img src={!imageUrl?"https://static-cdn.jtvnw.net/jtv_user_pictures/e771d8c2-8ac9-413a-b1c6-9beb7e8b841a-profile_image-300x300.png":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
          
            <h5 className="card-title">{title}<span className="badge rounded-pill text-bg-danger">New</span></h5>
            <p className="card-text"> {description}..... </p>
            <p className="card-text">
             
              <small className="text-muted"> By<strong> {author}</strong> <strong/> on <strong>{new Date(date).toGMTString()}</strong> </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">
              ReadMore
            </a>
          </div>
        </div>
      </div>
    );
  }
}
