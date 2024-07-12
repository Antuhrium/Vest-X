import { useState } from "react";
import styles from "./styles.module.scss";
import UploadFile from "/images/upload-file.svg";

interface Partner {
  id: number;
  fullName: string;
  partnerImage: File | null;
}

export default function Partner() {
  const [partners, setPartners] = useState<Partner[]>([
    {
      id: 1,
      fullName: "",
      partnerImage: null,
    },
  ]);

  const addPartner = () => {
    setPartners([
      ...partners,
      {
        id: Date.now(),
        fullName: "",
        partnerImage: null,
      },
    ]);
  };

  const updatePartner = (id: number, key: keyof Partner, value: string) => {
    setPartners(
      partners.map((partner) =>
        partner.id === id ? { ...partner, [key]: value } : partner
      )
    );
  };

  const deletePartner = (id: number) => {
    setPartners(partners.filter((partner) => partner.id !== id));
  };

  const handleFileChange = (id: number, file: File) => {
    updatePartner(id, "partnerImage", file.name);
  };

  return (
    <div className={styles.partnersContainer}>
      <div className={styles.header}>
        <h2 className={styles.gradientHeader}>Partner (optional)</h2>
        <button className={styles.addLinkButton} onClick={addPartner}>
          <span className={styles.blueCircle}>+</span> Add partner
        </button>
      </div>
      {partners.map((partner) => (
        <div key={partner.id} className={styles.partner}>
          <div className={styles.formGroup}>
            <label>
              Full name <span className={styles.requiredStar}>*</span>
            </label>
            <input
              type="text"
              value={partner.fullName}
              onChange={(e) =>
                updatePartner(partner.id, "fullName", e.target.value)
              }
              placeholder="Full name / nickname"
            />
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
                    handleFileChange(partner.id, e.target.files[0])
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
            onClick={() => deletePartner(partner.id)}
            className={styles.deleteButton}
          >
            <span className={styles.deleteCircle}>✕</span> Delete partner
          </button>
        </div>
      ))}
    </div>
  );
}
