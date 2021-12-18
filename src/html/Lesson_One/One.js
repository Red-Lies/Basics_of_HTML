import Hypertext from "../Photos/hypertext.jpg";
import { Link } from "react-router-dom";

function One() {
  return (
    <div>
      <h1>What is HTML?</h1>
      <div id="whatIsHTML">
        <p>
          HTML is a programming language that stands for Hypertext Markup
          Language. It is used for creating the content layer and structure of a
          web page.
        </p>
        <p>Let's break down what Hypertext Markup Language is.</p>

        <p>Hypertext refers to text which contains links to other texts.</p>
        <p>
          <img src={Hypertext} alt="Hypertext" width="400" height="280" />
        </p>
        <p>
          In the image above, imagine the numbers in the circles are pages of
          texts. Hypertext documents are interconnected by hyperlinks. Clicking
          on a hyperlink brings the user to another page of texts.
        </p>
        <p>This is a hyperlink that will bring you back to the Lessons page.</p>
        <Link to="../Lessons/Lessons.html">Back to the lessons page </Link>
        <p>
          Markup Language, provides tags to text in a document that describe how
          text should be structured.
        </p>
        <p>
          For English papers, we have all written a titles, headings and bodies
          before, for html we will use tags to store our information.
        </p>
        <p>We will learn what tages are in the next lesson.</p>
      </div>
    </div>
  );
}

export default One;
