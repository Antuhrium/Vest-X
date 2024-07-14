import styles from "./styles.module.scss";
import SimplePDF from "/pdf/simple_pdf.pdf";
import FileIcon from "/images/file-icon.svg";
import DownloadFile from "/images/chat/file-download.svg";

interface File {
  name: string;
  size: string;
}
interface PDFFileModalProps {
  isOpen: boolean;
  onClose: () => void;
  file: File;
}

export default function PDFFileModal({
  isOpen,
  onClose,
  file,
}: PDFFileModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalContent}>
          <div
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <div className={styles.fileHeader}>
              <img
                src={FileIcon}
                alt="file icon"
                style={{
                  marginRight: "8px",
                }}
              />
              <span>{file.name}</span>
              <span>{file.size}</span>
              <button className={styles.downloadButton}>
                <img src={DownloadFile} alt="download file" />
                Download
              </button>
            </div>
            <iframe
              src={SimplePDF}
              style={{
                width: "100%",
                height: "calc(100% - 50px)",
                border: "none",
              }}
              title="PDF Viewer"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
