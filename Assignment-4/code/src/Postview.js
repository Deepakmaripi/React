import React, { useState } from 'react';
import './Postview.css';
import axios from 'axios';
const pic = 'https://images.unsplash.com/photo-1645219502014-88689d94096a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
const camera = 'https://images.unsplash.com/photo-1534131707746-25d604851a1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
const dots = 'https://media.istockphoto.com/photos/social-media-messaging-concept-picture-id1324644490?b=1&k=20&m=1324644490&s=170667a&w=0&h=q909kdpU8mYiPV010V-aNmkeDpbycJHNSNDGkHW7yZ0='
const sendbutton = 'https://media.istockphoto.com/photos/email-computer-button-for-business-contact-mail-picture-id952958234?b=1&k=20&m=952958234&s=170667a&w=0&h=bllknZ6IskNjmqb-zbFJcqVfJWXQLWMImL4f9p5mB34='
const heart = 'https://media.istockphoto.com/photos/one-like-social-media-notification-with-heart-icon-picture-id1190336085?b=1&k=20&m=1190336085&s=170667a&w=0&h=8w3XSOWhTJrzDlofS_3bqZWKPTo52iRreJjJJ3Y1Gu0='
const Postview = () => {
  const [post, setPost] = useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:3004/user").then(res => {
      setPost(res.data);
    })
  }, []);
  return (
    <>
      <nav className="navbar">
        <div className="pic">
          <img
            src={pic}
            width="58" alt='pic'
          />
        </div>
        <div className="name">
          <h1>Instaclone</h1>
        </div>
        <div className="camera">
          <img
            src={camera}
            alt="camera"
          />
        </div>
      </nav>
      {post.map((propos, idx) => {
        return (<>
          <div className="main-info" key={idx} style={{ margin: "20px 0" }}>
            <aside></aside>
            <section className="main-container">
              <header>
                <div className="name-loc">
                  <h3>{propos.name}</h3>
                  <span>{propos.location}</span>
                </div>
                <div className="dots">
                  <img
                    src={dots}
                    alt="threedots"
                  />
                </div>
              </header>
              <div className="image-container">
                <img
                  src={propos.PostImage}
                  alt="post-pic"
                />
              </div>
              <footer>
                <div className="likes-share-date">
                  <div className="like-share">
                    <img
                      src={heart}
                      alt="likes"
                    />
                    <img
                      src={sendbutton}
                      alt="share"
                    />
                  </div>
                  <div className="date">{new Date(propos.date).toLocaleDateString}</div>
                </div>
                <span>{propos.likes} likes</span>
                <h2>{propos.description}</h2>
              </footer>
            </section>
            <aside></aside>
          </div>
        </>
        )
      })}
    </>
  );
}
export default Postview;