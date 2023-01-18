import React, { useEffect, useState }from 'react';
import "./Feed.css";
import InputOption from "./InputOption"
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from "./Post";
import{ db } from "./firebase";

function Feed() {
        const[posts, setPosts]= useState([]);

        useEffect(() => {
            db.collection("posts").onSnapshot((snapshot) => 
                setPosts(
                    snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data: doc.data(),
                        }))
                    )
            
        );
        }, []);

        const sendPost = e => {
            e.preventDefault();

            db.collection('posts').add({
                name: 'D Prashant',
                description: 'This the test',
                message: 
            })
            };
  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input value={input} type="text" />
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                <InputOption Icon={NewspaperIcon} title="Write article" color="#7FC15E" />

            </div>
        </div>

        <Post 
        name='D Prashant'
        description = 'This is a test'
        message='WOW THis worked!!' />
     
    </div>
  )
}

export default Feed
