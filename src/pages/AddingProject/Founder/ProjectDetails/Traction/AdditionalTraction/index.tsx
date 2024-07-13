import { useState } from "react";
import styles from "./styles.module.scss";
import AddCircle from "/images/add-circle.svg";
import DeleteCircle from "/images/delete-circle.svg";

interface Traction {
  id: number;
  description: string;
}

export default function AdditionalTraction() {
  const [tractions, setTractions] = useState<Traction[]>([
    {
      id: 1,
      description: "",
    },
  ]);

  const addTraction = () => {
    setTractions([
      ...tractions,
      {
        id: Date.now(),
        description: "",
      },
    ]);
  };

  const updateTraction = (id: number, value: string) => {
    setTractions(
      tractions.map((traction) =>
        traction.id === id ? { ...traction, description: value } : traction
      )
    );
  };

  const deleteTraction = (id: number) => {
    setTractions(tractions.filter((traction) => traction.id !== id));
  };

  return (
    <div className={styles.additionalTractionContainer}>
      <div className={styles.header}>
        <h2 className={styles.gradientHeader}>
          Additional Traction (optional)
        </h2>
        <button className={styles.addLinkButton} onClick={addTraction}>
          <img
            src={AddCircle}
            alt="add circle"
            style={{ marginRight: "0.5rem" }}
          />{" "}
          Add additional traction
        </button>
      </div>
      {tractions.map((traction) => (
        <div key={traction.id} className={styles.traction}>
          <div className={styles.flexRow}>
            <div className={styles.formGroupFull}>
              <label>
                Additional Traction{" "}
                <span className={styles.requiredStar}>*</span>
              </label>
              <input
                type="text"
                value={traction.description}
                onChange={(e) => updateTraction(traction.id, e.target.value)}
                placeholder="Secured additional capital to fuel platform development and expansion."
              />
            </div>
          </div>
          <button
            onClick={() => deleteTraction(traction.id)}
            className={styles.deleteButton}
          >
            <img
              src={DeleteCircle}
              alt="delete circle"
              style={{ marginRight: "0.5rem" }}
            />{" "}
            Delete a task
          </button>
        </div>
      ))}
    </div>
  );
}
