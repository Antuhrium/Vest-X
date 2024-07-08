import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import SimplePDF from "../../pages/InvestInProject/Signee/Content/simple_pdf.pdf";
import FileIcon from "/images/file-icon.svg";
import DownloadFile from "/images/chat/file-download.svg";

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
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
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  useEffect(() => {
    setPageNumber(1);
  }, []);
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
                alt="download file"
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
            <Document file={SimplePDF} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
