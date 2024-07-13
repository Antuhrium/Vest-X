import { useState } from "react";
import styles from "./styles.module.scss";
import UploadFile from "/images/upload-file.svg";
import AddCircle from "/images/add-circle.svg";
import DeleteCircle from "/images/delete-circle.svg";

interface Advisor {
  id: number;
  fullName: string;
  linkedin: string;
  advisorImage: File | null;
}

export default function Advisors() {
  const [advisors, setAdvisors] = useState<Advisor[]>([
    {
      id: 1,
      fullName: "",
      linkedin: "",
      advisorImage: null,
    },
  ]);

  const addAdvisor = () => {
    setAdvisors([
      ...advisors,
      {
        id: Date.now(),
        fullName: "",
        linkedin: "",
        advisorImage: null,
      },
    ]);
  };

  const updateAdvisor = (id: number, key: keyof Advisor, value: string) => {
    setAdvisors(
      advisors.map((advisor) =>
        advisor.id === id ? { ...advisor, [key]: value } : advisor
      )
    );
  };

  const deleteAdvisor = (id: number) => {
    setAdvisors(advisors.filter((advisor) => advisor.id !== id));
  };

  const handleFileChange = (id: number, file: File) => {
    updateAdvisor(id, "advisorImage", file.name);
  };

  return (
    <div className={styles.advisorsContainer}>
      <div className={styles.header}>
        <h2 className={styles.gradientHeader}>Advisors (optional)</h2>
        <button className={styles.addLinkButton} onClick={addAdvisor}>
          <img
            src={AddCircle}
            alt="add circle"
            style={{ marginRight: "0.5rem" }}
          />{" "}
          Add advisor
        </button>
      </div>
      {advisors.map((advisor) => (
        <div key={advisor.id} className={styles.advisor}>
          <div className={styles.flexRow}>
            <div className={styles.formGroup}>
              <label>
                Full name <span className={styles.requiredStar}>*</span>
              </label>
              <input
                type="text"
                value={advisor.fullName}
                onChange={(e) =>
                  updateAdvisor(advisor.id, "fullName", e.target.value)
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
                value={advisor.linkedin}
                onChange={(e) =>
                  updateAdvisor(advisor.id, "linkedin", e.target.value)
                }
                placeholder="linktr.com/ProjectName"
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Upload image of advisor</label>
            <div className={styles.uploadContainer}>
              <div className={styles.uploadBox}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    e.target.files &&
                    handleFileChange(advisor.id, e.target.files[0])
                  }
                />
                <img src={UploadFile} alt="Upload file" />
                <span>
                  <span className={styles.blueText}>Click to Upload</span> or
                  drag and drop
                </span>
                <span>Max File size: 25MB</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => deleteAdvisor(advisor.id)}
            className={styles.deleteButton}
          >
            <img
              src={DeleteCircle}
              alt="delete circle"
              style={{ marginRight: "0.5rem" }}
            />{" "}
            Delete this advisor
          </button>
        </div>
      ))}
    </div>
  );
}
