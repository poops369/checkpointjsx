import React from "react";
import photo from "./photo.jpg";
import styles from "./styles.css";
function App() {
    return (
        <div>
            <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
                <h1 className="titlered">Mahmoud</h1>

                <br />

                <img src={photo} alt="photo" />

                <br />

                <img src="/photo2.jpg" alt="photo2" />
            </div>

            <video width="320" height="240" controls>
                <source src="myVideo.mp4" type="video/mp4" />
            </video>
        </div>
    );
}
export default App;
