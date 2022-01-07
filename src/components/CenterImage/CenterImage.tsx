import "./CenterImage.css";
function CenterImage() {
  return (
    <div>
      <div className="CenterImage">
        <div className="CenterImage__info img">
          <img src="Daisy.png" className="daisyimg" alt="Nintendo" />
        </div>
        <div className="CenterImage__info info">
          <h1 className="peachText">Peach Bot</h1>
          <h2 className="peachText__sub">Have full control over your discord server in a practical way with this bot. Functionality 1| Functionality 2| Functionality 3</h2>
          <img className="peachText__img" src="peach.png" alt="zDouGz" />
        </div>
      </div>
    </div>
  );
}

export default CenterImage;
