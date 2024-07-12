import { useState } from "react";
import styles from "./styles.module.scss"; // Assuming you named your styles file YourStyles.module.css
import CustomDropdown from "../../../../../../components/CustomDropdown";

const TractionInner = () => {
  const [auditor, setAuditor] = useState("");
  const auditorOptions = [
    { label: "Auditor 1", value: "Auditor 1" },
    { label: "Auditor 2", value: "Auditor 2" },
    { label: "Auditor 3", value: "Auditor 3" },
  ];

  const [centralizedExchange, setCentralizedExchange] = useState("");
  const centralizedExchangeOptions = [
    { label: "Exchange 1", value: "Exchange 1" },
    { label: "Exchange 2", value: "Exchange 2" },
    { label: "Exchange 3", value: "Exchange 3" },
  ];

  const [stage, setStage] = useState("");
  const stageOptions = [
    { label: "Early stage", value: "Early stage" },
    { label: "Idea", value: "Idea" },
    { label: "Prototype", value: "Prototype" },
    { label: "MVP", value: "MVP" },
    { label: "Product", value: "Product" },
    { label: "Growth", value: "Growth" },
  ];

  const [completion, setCompletion] = useState(100);

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2 className={styles.gradientHeader}>Traction</h2>
        <div className={styles.formContainer}>
          <div className={styles.formGroupFull}>
            <label className={styles.label}>
              Current Project Progress{" "}
              <span className={styles.requiredStar}>*</span>
            </label>
            <CustomDropdown
              value={stage}
              onChange={setStage}
              options={stageOptions}
              initText="Select a stage"
            />
          </div>
          <div className={styles.formGroupFull}>
            <label className={styles.label}>
              Description of current project progress (additional)
            </label>
            <textarea className={styles.textarea} maxLength={500}>
              EcoSwap is a decentralized marketplace and community platform that
              connects environmentally-conscious consumers with sustainable
              brands and eco-friendly products. Our platform aims to promote
              sustainability and reduce carbon footprints by offering a wide
              range of environmentally-friendly alternatives to everyday
              products.
            </textarea>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              CEX Exchanges <span className={styles.requiredStar}>*</span>
            </label>
            <CustomDropdown
              value={centralizedExchange}
              initText="Select a centralized exchanges"
              options={centralizedExchangeOptions}
              onChange={setCentralizedExchange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Auditors <span className={styles.requiredStar}>*</span>
            </label>
            <CustomDropdown
              value={auditor}
              initText="Select auditor"
              options={auditorOptions}
              onChange={setAuditor}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Market makers (optional)</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Write market maker"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Product Completion <span className={styles.requiredStar}>*</span>
            </label>
            <div
              style={{
                display: "flex",
                gap: "1rem",
              }}
            >
              <div className={styles.completion}>
                completion <span>{completion}%</span>
              </div>
              <input
                className={styles.input}
                type="range"
                min="0"
                max="100"
                value={completion}
                onChange={(e) => setCompletion(parseInt(e.target.value, 10))}
              />
            </div>
          </div>
          <div className={styles.formGroupFull}>
            <label className={styles.label}>
              Product Showcase Link (optional)
            </label>
            <input
              className={styles.input}
              type="text"
              placeholder="Link to product showcase"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TractionInner;
