import styles from "./App.module.scss";
import "./global-recharts.css";
import { routes } from "./routes";
import { RouterProvider } from "react-router-dom";

function App() {
    return (
        <>
            <main className={styles.mainContainer}>
                <RouterProvider router={routes} />
            </main>
        </>
    );
}

export default App;
