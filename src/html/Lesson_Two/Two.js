import Closing from "../Photos/closing_tag.png";

function Two() {
  return (
    <div>
      <h1>Tags and Elements</h1>

      <section id="tags" class="table-cell">
        <p>HTML tags are character or words between brackets.</p>
        <p>This is what it looks like: &lt;p&gt; your content&lt;/p&gt;</p>
        <p>
          For the (Opening Tag) it has a left-angle bracket and right-angle
          bracket with a character in between them.
        </p>
        <p>The characters in the brackets indicate the tag's purpose.</p>
        <p>This is an Opening Tag: &lt;p&gt;</p>
        <p>
          For the (Closing Tag) it has a left-angle bracket, forward slash,
          character, and then right-angle bracket.
        </p>
        <p>This is an Closing Tag: &lt;/p&gt;</p>
        <p>
          If you use an open tag, you sould use a close tag (but not all tags
          need a close tag)
        </p>
        <h2>What are tags?</h2>
        <p>
          An HTML tag is used to define the structure and meaning of the text.
          It also helps web browsers convert HTML documents into web pages.
        </p>
        &nbsp;
        <p>
          <img src={Closing} alt="closing tag" width="200" height="200" />
        </p>
      </section>
      <div id="commonTags" class="table-cell">
        <h2>Most commonly used HTML tags:</h2>
        <p>
          There are over 130 tags but there are just a few, just to get you
          started.
        </p>
        <p>Do not forget to put these tags in brackets.</p>
        <p></p>
        <p>note: closing tag needs forward slash.</p>
        <h3>Document Structure Tags</h3>
        <ul>
          <li>html</li>
          <li>head</li>
          <li>title</li>
          <li>body</li>
        </ul>

        <p>The html tag, opens and closes an HTML document.</p>
        <p>
          The head tag, used to provide information about the document, for
          search engines and browsers.
        </p>
        <p>The title tag, is the title of the document.</p>
        <p>The body tag, contains all the content of the web page.</p>

        <h3>Content Tags</h3>
        <ul>
          <li>h1 to h6</li>
          <li>p</li>
          <li>strong</li>
          <li>em</li>
        </ul>

        <p>The h1 to h6 tags, for headings.</p>
        <p>The p tag, for paragraph.</p>
        <p>The strong tag, shows that the text has strong importance.</p>
        <p>The em tag, contain text emphasis (italics).</p>
      </div>
    </div>
  );
}

export default Two;
