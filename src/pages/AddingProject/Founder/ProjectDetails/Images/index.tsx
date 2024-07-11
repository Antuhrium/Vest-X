import { useState } from "react";
import styles from "./styles.module.scss";
import UploadFile from "/images/upload-file.svg";
import FileIcon from "/images/file-icon.svg";

interface ImageUpload {
  id: number;
  type: string;
  file: File | null;
}

export default function Images() {
  const [uploads, setUploads] = useState<ImageUpload[]>([
    {
      id: 1,
      type: "logo",
      file: new File([""], "Anel_Askarkyzy.jpg", { type: "image/jpeg" }),
    },
    { id: 2, type: "banner", file: null },
    { id: 3, type: "preview", file: null },
    { id: 4, type: "Tokenomics", file: null },
  ]);

  const handleFileChange = (id: number, file: File | null) => {
    setUploads(
      uploads.map((upload) =>
        upload.id === id ? { ...upload, file: file } : upload
      )
    );
  };

  return (
    <div className={styles.imagesContainer}>
      <h2 className={styles.gradientHeader}>Images</h2>
      <div className={styles.imagesGrid}>
        {uploads.map((upload) => (
          <div key={upload.id} className={styles.uploadContainer}>
            <label className={styles.label}>
              Upload {upload.type}{" "}
              <span className={styles.requiredStar}>*</span>
            </label>
            <div className={styles.uploadBox}>
              {upload.file ? (
                <div className={styles.uploadedFile}>
                  <img
                    src={FileIcon}
                    alt="File icon"
                    className={styles.fileIcon}
                  />
                  <span className={styles.blueText}>{upload.file.name}</span>
                  <span>
                    File size: {(upload.file.size / (1024 * 1024)).toFixed(1)}MB
                  </span>
                </div>
              ) : (
                <div className={styles.uploadBox}>
                  <img src={UploadFile} alt="Upload file" />
                  <input
                    type="file"
                    className={styles.fileInput}
                    onChange={(e) =>
                      handleFileChange(
                        upload.id,
                        e.target.files ? e.target.files[0] : null
                      )
                    }
                  />
                  <div>
                    <span className={styles.blueText}>Click to Upload</span> or
                    drag and drop
                  </div>
                  <div>Max File size: 25MB</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
