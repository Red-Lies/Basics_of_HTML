import List from "../Photos/list.png";

function Three() {
  return (
    <div>
      <h1>Lists</h1>
      <section id="lists" class="table-cell">
        <p>In HTML there are three different types of list that you can use:</p>
        <ul>
          <li>Ordered Lists</li>
          <li>Unordered Lists</li>
          <li>Definition Lists</li>
        </ul>
        &nbsp;
        <p>
          <img src={List} alt="list" width="200" height="200" />
        </p>
      </section>
      <div id="listTypes" class="table-cell">
        <h2>Ordered Lists</h2>
        <p>
          The &lt;ol&gt; tag, is an (numbered list). Typically used for recipes
          or schedules and etc.
        </p>
        <p>
          The &lt;li&gt; tag, this is where you place the item (the thing you
          want in your list) between an opening &lt;li&gt; and closing
          &lt;/li&gt; tags.
        </p>

        <h2>Unordered Lists</h2>
        <p>The &lt;ul&gt; tag, is an (bulleted list).</p>
        <p>
          The &lt;li&gt; tag, this is where you place the item (the thing you
          want in your list) between an opening &lt;li&gt; and closing
          &lt;/li&gt; tags.
        </p>

        <h2>Definition Lists</h2>
        <p>
          The &lt;dl&gt; tag, crates a definition list that usually consists of
          series of terms and their definitions.
        </p>
        <p>The &lt;dt&gt; tag, contains the term being defined.</p>
        <p>The &lt;dd&gt; tag, used to contain the definition.</p>
      </div>
    </div>
  );
}

export default Three;
