import Lesson_One from "../Numbers/Lesson_One.png";
import Lesson_Two from "../Numbers/Lesson_Two.png";
import Lesson_Three from "../Numbers/Lesson_Three.png";
import Lesson_Four from "../Numbers/Lesson_Four.png";
import Lesson_Five from "../Numbers/Lesson_Five.png";

import Rat from "../Photos/ratWithCheese.png";
import w3schools from "../Photos/W3Schools.jpeg";
import MDN from "../Photos/MDN.jpeg";

import ThumbnailLink from "../ThumbnailLink.js";

function Lessons() {
  return (
    <div>
      <h1>Basics of HTML for Kids</h1>
      <section id="learn" class="table-cell">
        <h2>Do you want to learn how to make a website?</h2>
        <p>
          If your answer was <em>yes!</em> Lets start making a website together.
        </p>
        <h3>Lessons</h3>
        <p>
          Click on the numbers below (the animal numbers), it will take you to
          each lesson.{" "}
        </p>
        <p class="Numbers">
          <ThumbnailLink
            lowResThumb={Lesson_One}
            width={90}
            height={100}
            alt="Lesson One"
            pageName="Lesson_One/One.html"
          />

          <ThumbnailLink
            lowResThumb={Lesson_Two}
            width={90}
            height={100}
            alt="Lesson Two"
            pageName="Lesson_Two/Two.html"
          />

          <ThumbnailLink
            lowResThumb={Lesson_Three}
            width={90}
            height={100}
            alt="Lesson Three"
            pageName="Lesson_Three/Three.html"
          />

          <ThumbnailLink
            lowResThumb={Lesson_Four}
            width={90}
            height={100}
            alt="Lesson Four"
            pageName="Lesson_Four/Four.html"
          />

          <ThumbnailLink
            lowResThumb={Lesson_Five}
            width={90}
            height={100}
            alt="Lesson Five"
            pageName="Lesson_Five/Five.html"
          />
        </p>

        <p id="aboutWebsite">
          This website will teach the basics of HTML. Just click on a lesson
          every single day and you will be on your way to making your very own
          website. What makes this website so special is that it will teach you
          step by step the skills necessary to explore the world of HTLM.
        </p>

        <h2>Other Wesites</h2>
        <p>
          Theses are other websites that can help you learn more about HTML:
        </p>
        <div id="imagelink1">
          <a
            href="https://www.w3schools.com/html/default.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={w3schools} alt="HTML tutorial" width="200" height="150" />
          </a>
        </div>
        <div id="imagelink2">
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={MDN} alt="HTML tutorial" width="200" height="150" />
          </a>
        </div>
      </section>

      <section id="content" class="table-cell">
        <h2>Content:</h2>
        <h3>Everything you will be learning about in this website includes:</h3>
        <ul>
          <li>What is HTML?</li>
          <li>Tags and Elements</li>
          <li>Lists</li>
          <li>Links</li>
          <li>Images</li>
        </ul>

        <h2> Who should be using this website?</h2>
        <p>
          This website was made to teach the basics of HTLM to to kids who have
          never used HTML and want to get familiar the language. If you have
          used HTML before this website may not help further your skills but it
          can be used to refresh your knowledge.
        </p>
        <p id="rat">
          <img src={Rat} alt="Rat" width="320" height="310" />
        </p>
      </section>
    </div>
  );
}

export default Lessons;
