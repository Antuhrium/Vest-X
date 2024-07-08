import styles from "./styles.module.scss";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onDelete: () => void;
}

export default function DeleteConfirmationModal({
  isOpen,
  onCancel,
  onDelete,
}: DeleteConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <span className={styles.icon}>!</span>
          <button className={styles.closeButton} onClick={onCancel}>
            &times;
          </button>
        </div>
        <div className={styles.modalContent}>
          <h2 className={styles.bigMessage}>This sale has no investors</h2>
          <p>Confirm deleting</p>
        </div>
        <div className={styles.modalActions}>
          <button className={styles.cancelButton} onClick={onCancel}>
            Cancel
          </button>
          <button className={styles.deleteButton} onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
