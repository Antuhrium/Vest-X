// @ts-nocheck
import { useState } from "react";
import styles from "./styles.module.scss";
import UploadFile from "/images/upload-file.svg";
import AddCircle from "/images/add-circle.svg";
import DeleteCircle from "/images/delete-circle.svg";
import MobileModifierMenu from "../../../../../../components/MobileModifierMenu";
import ArrowBack from "/images/arrow-back-chevron.svg";

interface Partner {
  id: number;
  fullName: string;
  partnerImage: File | null;
}

const NormalSizedPartners = ({
  partners,
  updatePartner,
  deletePartner,
  handleFileChange,
}) => {
  return (
    <div className="hidden lg:block">
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
            <img
              src={DeleteCircle}
              alt="delete circle"
              style={{ marginRight: "0.5rem" }}
            />{" "}
            Delete partner
          </button>
        </div>
      ))}
    </div>
  );
};

const PhoneSizedPartners = ({
  partners,
  updatePartner,
  deletePartner,
  addPartner,
}) => {
  return (
    <MobileModifierMenu
      elements={partners}
      addElement={addPartner}
      updateElement={updatePartner}
      deleteElement={deletePartner}
      mode="partners"
    />
  );
};

export const UpdatePartnersForm = ({
  partner,
  updatePartner,
  deletePartner,
  handleFileChange,
  partners,
  index,
  setTab,
}) => {
  return (
    <div key={partner.id} className={styles.partner}>
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
          Back to other advisors
        </p>
        <span className={styles.selectedElementText}>
          {index}. Partners ({index} / {partners.length})
        </span>
      </div>
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
              <span className={styles.blueText}>Click to Upload</span> or drag
              and drop
            </span>
            <span>Max File size: 25MB</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => deletePartner(partner.id)}
        className={styles.deleteButton}
      >
        <img
          src={DeleteCircle}
          alt="delete circle"
          style={{ marginRight: "0.5rem" }}
        />{" "}
        Delete partner
      </button>
    </div>
  );
};

export default function Partners() {
  const [partners, setPartners] = useState<Partner[]>([
    {
      id: 1,
      fullName: "Add partner",
      partnerImage: null,
    },
  ]);

  const addPartner = () => {
    setPartners([
      ...partners,
      {
        id: Math.max(...partners.map((partner) => partner.id)) + 1,
        fullName: "Add partner",
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
        <h2 className={styles.gradientHeader}>Partners (optional)</h2>
        <button
          className={`${styles.addLinkButton} hidden lg:flex gap-[0.1rem]`}
          onClick={addPartner}
        >
          <img
            src={AddCircle}
            alt="add circle"
            style={{ marginRight: "0.5rem" }}
          />{" "}
          Add partner
        </button>
      </div>
      <NormalSizedPartners
        partners={partners}
        updatePartner={updatePartner}
        deletePartner={deletePartner}
        handleFileChange={handleFileChange}
      />
      <PhoneSizedPartners
        partners={partners}
        updatePartner={updatePartner}
        deletePartner={deletePartner}
        addPartner={addPartner}
      />
    </div>
  );
}
