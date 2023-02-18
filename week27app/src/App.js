import Tariff from "./components/Tariff/Tariff";
import data from "./components/Tariff/data.json";
import styles from "./App.css";

//console.log(props.tariff);

function App() {
  return (
    <div className={styles.App}>
      {data.map((tariff, index) => (
        <Tariff
          key={index}
          color={tariff.color}
          name={tariff.name}
          price={tariff.price}
          speed={tariff.speed}
          text={tariff.text}
        ></Tariff>
      ))}
    </div>
  );
}

export default App;
