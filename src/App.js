import * as React from "react";
import Modal from "react-modal";
import { on } from "./events";
import "./style.css";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    on("openButton:click", () => setIsOpen(true));
  });

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <h1>Trigger modal outside React</h1>
      <p>Custom events are AWESOME!</p>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <p>I was opened by a modal outside of React. How cool is that?</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}
