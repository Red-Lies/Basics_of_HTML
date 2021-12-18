import Dog from "../Photos/Dog.jpg";
import Insect from "../Photos/Insect.jpg";

function Five() {
  return (
    <div>
      <h1>Images</h1>
      <div id="imagepage">
        <p>
          Adding images can make your web page more appealing. I bet you can
          agree that it is more enjoyable to look at a web page with pictures
          compared to one that doesn't have one.
        </p>
        <p>
          <img
            src={Dog}
            alt="Dog walking in the rain"
            width="430"
            height="290"
          />
          <img src={Insect} alt="A orange butterfly" width="430" height="290" />
        </p>
        <h3>How to add an Image to a page</h3>
        <p>For the images above the HTML code would look like this:</p>
        <h4>Dog image</h4>
        <p>
          Example: &lt;img src="dog.jpg" alt="Dog walking in the rain"
          width="430" height="290"/&gt;
        </p>
        <h4>Butterfly image</h4>
        <p>
          Example: &lt;img src="butterfly.jpg" alt="A orange butterfly"
          width="430" height="290"/&gt;
        </p>
        <h3>HTML &lt;img&gt; tag</h3>
        <p>
          HTML &lt;img&gt; tag are used to add images inside a webpage. Images
          are linked to web pages by using the &lt;img&gt; tag which holds a
          space for the image.
        </p>
        <p>
          The &lt;img&gt; tag is empty, it contains attributes only, and does
          not have a closing tag. The &lt;img&gt; tag has two required
          attributes: src and alt
        </p>
        <h3>The src Attribute</h3>
        The required src attribute specifies the path (URL) to the image.
        <h3>The alt Attribute</h3>
        <p>
          An alt attribute is a text version of an image that describes what the
          image is, if the user for some reason cannot view it.
        </p>
        <h3>Width and Height</h3>
        <p>
          The height and width should be set for a image so that the space
          required for the image is reserved when the page is loaded. Without
          these attributes, the image can still load but the browser does not
          know the size of the image, and cannot reserve the appropriate space
          for it.
        </p>
      </div>
    </div>
  );
}

export default Five;
