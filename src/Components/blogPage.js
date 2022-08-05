import "../Style/App.css";
import "../Style/header.css";
import "../Style/Body1.css";
import "../Style/about.css";
import "../Style/skills.css";
import "../Style/tasks.css";
import "../Style/portfolio.css";
import "../Style/faq.css";
import "../Style/profilepic.css";
import "../Style/contact.css";
import "../Style/footer.css";
import Header from "./Header";
import Body1 from "./Body1";
import About from "./About";
import Skills from "./Skills";
import Tasks from "./Tasks";
import Portfolio from "./Portfolio";
import Faq from "./Faq";
import Profilepic from "./Profilepic";
import Contact from "./Contact";
import Footer from "./Footer";
import props from "./Blogprops";

function blogPage() {
  return (
    <>
      //get all elements of the props content
      {/* let n = props.blog.posts.length; */}
      props.blog.posts.forEach(item){" "}
      {
        <div key={props.blog.posts.Id}>
          <h2> {props.blog.posts.title} </h2>{" "}
          <p> {props.blog.posts.description} </p>{" "}
          <p> {props.blog.posts.content} </p>{" "}
        </div>
      }
    </>
  );
}

export default blogPage;
