import React from 'react';
import "./posts.css";

const Posts = () => {
    return (
     <main>
        <div className="post-container1">
            <img src="icon.png" alt="post1" className='post1-img'/>
            <h1 className='post1'>Post1</h1>
            <p className='post1-description'>Lorem ipsum dolor sit amet</p>
            <a href="https://www.instagram.com/p/C-sVPCnqt18/" className='link1'>Go To Post</a>
        </div>

        <div className="post-container2">
            <img src="icon.png" alt="post2" className='post2-img'/>
            <h1 className='post2'>Post2</h1>
            <p className='post2-description'>Lorem ipsum dolor sit amet</p>
            <a href="https://www.instagram.com/p/C20DbsBseqe/" className='link2'>Go To Post</a>
        </div>
     </main>   
        

    );

}
export default Posts;