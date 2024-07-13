import { useState } from "react";
import styles from "./styles.module.scss";
import AddCircle from "/images/add-circle.svg";
import DeleteCircle from "/images/delete-circle.svg";

interface Investor {
  id: number;
  fullName: string;
  linkedin: string;
  projectName: string;
  projectLogo: File | null;
}

export default function TopInvestors() {
  const [investors, setInvestors] = useState<Investor[]>([
    {
      id: 1,
      fullName: "",
      linkedin: "",
      projectName: "",
      projectLogo: null,
    },
  ]);

  const addInvestor = () => {
    setInvestors([
      ...investors,
      {
        id: Date.now(),
        fullName: "",
        linkedin: "",
        projectName: "",
        projectLogo: null,
      },
    ]);
  };

  const updateInvestor = (id: number, key: keyof Investor, value: string) => {
    setInvestors(
      investors.map((investor) =>
        investor.id === id ? { ...investor, [key]: value } : investor
      )
    );
  };

  const deleteInvestor = (id: number) => {
    setInvestors(investors.filter((investor) => investor.id !== id));
  };

  const handleFileChange = (id: number, file: File) => {
    updateInvestor(id, "projectLogo", file.name);
  };

  return (
    <div className={styles.topInvestorsContainer}>
      <div className={styles.header}>
        <h2 className={styles.gradientHeader}>Top Investors (optional)</h2>
        <button className={styles.addLinkButton} onClick={addInvestor}>
          <img
            src={AddCircle}
            alt="add circle"
            style={{ marginRight: "0.5rem" }}
          />{" "}
          Add investor
        </button>
      </div>
      {investors.map((investor) => (
        <div key={investor.id} className={styles.investor}>
          <div className={styles.flexRow}>
            <div className={styles.formGroup}>
              <label>
                Full name <span className={styles.requiredStar}>*</span>
              </label>
              <input
                type="text"
                value={investor.fullName}
                onChange={(e) =>
                  updateInvestor(investor.id, "fullName", e.target.value)
                }
                placeholder="Full name / nickname"
              />
            </div>
            <div className={styles.formGroup}>
              <label>
                Link to LinkedIn <span className={styles.requiredStar}>*</span>
              </label>
              <input
                type="text"
                value={investor.linkedin}
                onChange={(e) =>
                  updateInvestor(investor.id, "linkedin", e.target.value)
                }
                placeholder="linktr.com/ProjectName"
              />
            </div>
          </div>
          <div className={styles.flexRow}>
            <div className={styles.formGroup}>
              <label>Project name supported by Investor</label>
              <input
                type="text"
                value={investor.projectName}
                onChange={(e) =>
                  updateInvestor(investor.id, "projectName", e.target.value)
                }
                placeholder="Microsoft"
              />
            </div>
            <div className={styles.formGroup}>
              <label>Project's logo</label>
              <div className={styles.uploadContainer}>
                <div className={styles.uploadBox}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      e.target.files &&
                      handleFileChange(investor.id, e.target.files[0])
                    }
                  />
                  <span>
                    <span className={styles.blueText}>Click to Upload</span> or
                    drag and drop
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => deleteInvestor(investor.id)}
            className={styles.deleteButton}
          >
            <img
              src={DeleteCircle}
              alt="delete circle"
              style={{ marginRight: "0.5rem" }}
            />{" "}
            Delete this member
          </button>
        </div>
      ))}
    </div>
  );
}
