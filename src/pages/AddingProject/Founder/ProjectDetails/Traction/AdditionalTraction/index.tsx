// @ts-nocheck
import { useState } from "react";
import styles from "./styles.module.scss";
import AddCircle from "/images/add-circle.svg";
import DeleteCircle from "/images/delete-circle.svg";
import MobileModifierMenu from "../../../../../../components/MobileModifierMenu";
import ArrowBack from "/images/arrow-back-chevron.svg";

interface Traction {
  id: number;
  description: string;
}

const NormalSizedAdditionalTraction = ({
  tractions,
  updateTraction,
  deleteTraction,
}) => {
  return (
    <div className="hidden lg:block">
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
};

const PhoneSizedAdditionalTraction = ({
  tractions,
  addTraction,
  updateTraction,
  deleteTraction,
}) => {
  return (
    <MobileModifierMenu
      elements={tractions}
      updateElement={updateTraction}
      addElement={addTraction}
      deleteElement={deleteTraction}
      mode="additionalTraction"
    />
  );
};

export const UpdateAdditionalTractionForm = ({
  tractions,
  index,
  setTab,
  updateTraction,
  deleteTraction,
  traction,
}) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <p
          className={styles.grayText}
          style={{
            display: "flex",
            gap: "0.5rem",
            marginBottom: "1rem",
          }}
          onClick={() => setTab(0)}
        >
          <img src={ArrowBack} alt="arrow back" />
          Back to other tractions
        </p>
        <span className={styles.selectedElementText}>
          {index}. Additional Tractions ({index} / {tractions.length})
        </span>
      </div>
      <div key={traction.id} className={styles.traction}>
        <div className={styles.flexRow}>
          <div className={styles.formGroupFull}>
            <label>
              Additional Traction <span className={styles.requiredStar}>*</span>
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
    </div>
  );
};

export default function AdditionalTraction() {
  const [tractions, setTractions] = useState<Traction[]>([
    {
      id: 1,
      description: "Add traction",
    },
  ]);

  const addTraction = () => {
    setTractions([
      ...tractions,
      {
        id: Math.max(...tractions.map((traction) => traction.id)) + 1,
        description: "Add traction",
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
        <button
          className={`${styles.addLinkButton} hidden lg:flex gap-[0.1rem]`}
          onClick={addTraction}
        >
          <img
            src={AddCircle}
            alt="add circle"
            style={{ marginRight: "0.5rem" }}
          />{" "}
          Add additional traction
        </button>
      </div>
      <NormalSizedAdditionalTraction
        tractions={tractions}
        updateTraction={updateTraction}
        deleteTraction={deleteTraction}
      />
      <PhoneSizedAdditionalTraction
        tractions={tractions}
        addTraction={addTraction}
        updateTraction={updateTraction}
        deleteTraction={deleteTraction}
      />
    </div>
  );
}
