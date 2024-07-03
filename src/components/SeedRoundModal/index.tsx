import React, { ReactNode, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.scss"; // Ensure this path is correct
import DropdownIcon from "/images/dropdown-icon.svg";
import TotalTokens from "/images/total-tokens.svg";
import TokensClaimed from "/images/tokens-claimed.svg";
import NextClaim from "/images/next-claim.svg";
import NextClaimAmount from "/images/next-claim-amount.svg";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  modalRootRef: React.RefObject<HTMLElement>;
}

const SeedRoundModal: React.FC<ModalProps> = ({
  children,
  onClose,
  modalRootRef,
}) => {
  if (!modalRootRef.current) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.aroundModalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>,
    modalRootRef.current
  );
};

const SeedRoundDetails: React.FC = () => {
  return (
    <div className={styles.detailsContainer}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        <div className={styles.detailItem}>
          <span className={styles.propNameText}>
            <img
              src={TotalTokens}
              alt="total tokens"
              className={styles.propIcon}
            />
            Total amount of tokens
          </span>
          <span>1,000,000</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.propNameText}>
            <img
              src={TokensClaimed}
              alt="tokens claimed"
              className={styles.propIcon}
            />
            Tokens claimed
          </span>
          <span>500,000</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "2rem",
          marginTop: "1.5rem",
        }}
      >
        <div className={styles.detailItem}>
          <span className={styles.propNameText}>
            <img src={NextClaim} alt="next claim" className={styles.propIcon} />
            Next claim
          </span>
          <span>21.05.2024 19:00 UTC</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.propNameText}>
            <img
              src={NextClaimAmount}
              alt="next claim amount"
              className={styles.propIcon}
            />
            Next claim amount
          </span>
          <span>250,000</span>
        </div>
      </div>
      <button className={styles.claimButton}>Claim tokens</button>
    </div>
  );
};

const SeedRoundModalButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRootRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className={styles.menuContainer}>
      <button onClick={handleOpenModal} className={styles.openModalButton}>
        Open Modal
      </button>
      <div ref={modalRootRef} />
      {isModalOpen && (
        <SeedRoundModal onClose={handleCloseModal} modalRootRef={modalRootRef}>
          <h2 className={styles.modalTitle}>
            Seed round
            <img
              src={DropdownIcon}
              className={styles.bigArrowUp}
              alt="dropdown icon"
            />
          </h2>
          <SeedRoundDetails />
          <div className={styles.collapsedSection}>
            <h2 className={styles.collapsedTitle}>
              Private round
              <img
                src={DropdownIcon}
                className={styles.bigArrowDown}
                alt="dropdown icon"
              />
            </h2>
          </div>
        </SeedRoundModal>
      )}
    </div>
  );
};

export default SeedRoundModalButton;
