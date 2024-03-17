import "./index.css";
import state from "./state";
import { rerenderEntireTree } from "./render";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App state={state} onShowItem={onShowItem.bind(onShowItem)} />
//   </React.StrictMode>
// );

// reportWebVitals();

// const root = ReactDOM.createRoot(document.getElementById("root"));

// let rerenderEntireTree = () => {
//   root.render(
//     <React.StrictMode>
//       <App state={state} onShowItem={onShowItem} />
//     </React.StrictMode>
//   );
// };

rerenderEntireTree(state);
// reportWebVitals();
