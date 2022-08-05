import React from 'react';
// import blogPage from './blogPage.js';
import ReactDOM from 'react-dom';
import Blog from './Blog';
// export default function Blog() {
//   return (
//     <div>
//         {props.blog.posts.map(post => (
//             <div key={post.Id}>
//                 <h2>{post.title}</h2>
//                 <p>{post.description}</p>
//                 <p>{post.content}</p>
//             </div>
//                 )
//         )}
//     </div>
//   )
// }
ReactDOM.render( 
    <React.StrictMode >
    <blogPage />
    </React.StrictMode>,
    document.getElementById('root')
);

export default Blog;