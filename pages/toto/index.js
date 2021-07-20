// import React from "react";
// import { SwitchTransition, CSSTransition } from "react-transition-group";

// import { useState } from "react";

// export default function App() {
//   const [val, setVal] = useState("true");

//   return (
//     <>
//       <div className="label">Mode:</div>

//       <div className="main">
//         <SwitchTransition mode={"out-in"}>
//           <CSSTransition
//             key={val}
//             addEndListener={(node, done) => {
//               node.addEventListener("transitionend", done, false);
//             }}
//             classNames="fade"
//           >
//             <div className="button-container">{val}</div>
//           </CSSTransition>
//         </SwitchTransition>
//         <div className="button-container">{val}</div>
//         <button onClick={() => setVal("true")}>true</button>
//         <button onClick={() => setVal("coucou")}>coucou</button>
//       </div>
//     </>
//   );
// }

import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
// import "./styles.css";

const modes = ["out-in", "in-out"];

export default function App() {
  const [mode, setMode] = React.useState("out-in");
  const a = ["true", "coucou"];
  const [state, setState] = React.useState(a[0]);

  return <>coucou</>;
}
