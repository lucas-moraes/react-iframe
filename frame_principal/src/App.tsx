import { useState } from "react";
import Iframe from "react-iframe";
import "./App.css";

function App() {
  const [fromFrameOneButton, setFromFrameOneButton] = useState<number>(0);
  const [fromFrameOneInput, setFromFrameOneInput] = useState<any>("");
  const [fromFrameTwoButton, setFromFrameTwoButton] = useState<number>(0);
  const [fromFrameTwoInput, setFromFrameTwoInput] = useState<any>("");

  function FrameOne() {
    const frameOne = document.getElementById("frameOne") as HTMLIFrameElement;
    const frameOneContent = frameOne?.contentWindow;

    const frameOneButton = frameOneContent?.document.querySelector(
      "#buttonFrameOne"
    ) as HTMLButtonElement;
    frameOneButton.addEventListener("click", () =>
      setFromFrameOneButton(fromFrameOneButton + 1)
    );

    const frameOneInput = frameOneContent?.document.querySelector(
      "#inputFrameOne"
    ) as any;
    frameOneInput.addEventListener("keyup", (event: { target: any }) =>
      setFromFrameOneInput(event?.target.value)
    );
  }

  function FrameTwo() {
    const frameTwo = document.getElementById("frameTwo") as HTMLIFrameElement;
    const frameTwoContent = frameTwo?.contentWindow;

    const frameTwoButton = frameTwoContent?.document.querySelector(
      "#buttonFrameTwo"
    ) as HTMLButtonElement;
    frameTwoButton.addEventListener("click", () =>
      setFromFrameTwoButton(fromFrameTwoButton + 1)
    );

    const frameTwoInput = frameTwoContent?.document.querySelector(
      "#inputFrameTwo"
    ) as any;
    frameTwoInput.addEventListener("keyup", (event: { target: any }) =>
      setFromFrameTwoInput(event?.target.value)
    );
  }

  return (
    <div className="App">
      <h1>Componente pai</h1>
      <h3 style={{ color: "blue" }}>
        From frame_1 = Button {fromFrameOneButton} e Input {fromFrameOneInput}
      </h3>
      <h3 style={{ color: "green" }}>
        From frame_2 = Button {fromFrameTwoButton} e Input {fromFrameTwoInput}
      </h3>
      <div style={{ display: "flex" }}>
        <Iframe
          id="frameOne"
          url="http://127.0.0.1:3001/"
          width="500px"
          height="500px"
          display="block"
          position="relative"
          onLoad={() => FrameOne()}
          sandbox={"allow-scripts"}
        />
        <Iframe
          id="frameTwo"
          url="http://127.0.0.1:3002/"
          width="500px"
          height="500px"
          className=""
          display="block"
          position="relative"
          onLoad={() => FrameTwo()}
        />
      </div>
    </div>
  );
}

export default App;
