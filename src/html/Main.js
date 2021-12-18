import Background from "./Photos/Background.png";

function Main() {
  return (
    <div>
      <p>
        <div class="container">
          <img class="resize" src={Background} alt="Background" />
          <div class="center">
            <input
              class="start here"
              type="button"
              value="Start Here"
              onClick={() =>
                (document.location.href = "./html/Lessons/Lessons.html")
              }
            />
          </div>
        </div>
      </p>
    </div>
  );
}

export default Main;
