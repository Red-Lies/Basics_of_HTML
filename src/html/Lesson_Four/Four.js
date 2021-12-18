import Links from "../Photos/links.png";

function Four() {
  return (
    <div>
      <h1>Links</h1>
      <section id="links" class="table-cell">
        <p>HTML links are hyperlinks.</p>
        <p>
          Links are found in just about all web pages. They allow users to click
          from a web page to other web pages.
        </p>
        <h2>These are the most commonly used link types:</h2>
        <ul>
          <li>Link from one website to another</li>
          <li>Link from one page to another on the same website</li>
          <li>Links that open in a new browser window</li>
        </ul>
        <h3>How to write a link?</h3>
        <p>
          To create a links start with an open &lt;a&gt; tag, which is followed
          by the href attribute, then the URL and the text you want the user
          click on, then finish it with the closing tag &lt;/a&gt;.
        </p>
        &nbsp;
        <p>
          <img src={Links} alt=" links" width="200" height="200" />
        </p>
      </section>
      <div id="useLinks" class="table-cell">
        <h3>Linking to other website</h3>
        <p>
          When you create a link to other website, the value of the href
          attribute will be the full web address for the site, called the
          absolute URL.
        </p>
        <p>
          URL stands for Uniform Resource Locator. It is the address of a given
          unique resource that you can type into a browser that will take you to
          that specific web page.
        </p>
        <p>
          Absolute URL is the full URL. It typically contain the (protocol),to
          the (resource name), then to the (path). If no page is specific, the
          site will display the homepage.
        </p>
        <h3>Linking to one page to another on the same website</h3>
        <p>
          For linking a page in the same website you can use Relative URLs.
          Relative URL is a URL that only includes the (path). It is a way to
          tell the browser where a page is in the relation to the current page
          you are on.
        </p>
        <h3>Links that open in a new browser window</h3>
        <p>
          If you want to make a link that will create a new window, you will use
          the target="_blank" attribute in bettwen the opening and closing a
          tags.
        </p>
        <h4> Steps: </h4>
        <ol>
          <li>Opening tag: &lt;a href=</li>
          <li>Resource name, Example: "http://www.html.com"</li>
          <li>target="_blank"&gt;</li>
          <li>The text you want the user to click on</li>
          <li>Closing tag: &lt;/a&gt; </li>
        </ol>
      </div>
    </div>
  );
}

export default Four;
