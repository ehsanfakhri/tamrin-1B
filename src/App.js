import mypic from "./mypic.jpg";
import styles from "./styles.module.css";

function App() {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img width={400} height={400} src={mypic} alt="pic" />
      </div>
      <div className={styles.cardTitle}>
        <h1>Ehsan Fakhri</h1>
      </div>
    </div>
  );
}

export default App;
