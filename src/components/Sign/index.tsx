import React, { useRef, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import SignPlaceholder from "/images/sign-placeholder.svg";
import UploadFile from "/images/upload-file.svg";
import FileIcon from "/images/file-icon.svg"; // Assuming you have this icon

const Sign: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const [mode, setMode] = useState<"draw" | "type" | "upload">("draw");
  const [text, setText] = useState<string>("");
  const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.strokeStyle = "#007BFF";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        isDrawing.current = true;
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDrawing.current && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke();
        setIsCanvasEmpty(false);
      }
    }
  };

  const handleMouseUp = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.closePath();
      }
    }
    isDrawing.current = false;
  };

  const handleErase = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        setIsCanvasEmpty(true);
      }
    }
  };

  const handleRemove = () => {
    setUploadedFile(null);
  };

  const handleClear = () => {
    setText("");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  useEffect(() => {
    if (mode !== "draw") {
      handleErase();
    }
  }, [mode]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>
          Put your sign here <span className={styles.required}>*</span>
        </h2>
        <div className={styles.buttonGroup}>
          <button
            style={{
              backgroundColor: mode === "draw" ? "#0f62fe" : "#101322",
            }}
            className={styles.button}
            onClick={() => setMode("draw")}
          >
            Draw
          </button>
          <button
            style={{
              backgroundColor: mode === "type" ? "#0f62fe" : "#101322",
            }}
            className={styles.button}
            onClick={() => setMode("type")}
          >
            Type
          </button>
          <button
            style={{
              backgroundColor: mode === "upload" ? "#0f62fe" : "#101322",
            }}
            className={styles.button}
            onClick={() => setMode("upload")}
          >
            Upload
          </button>
        </div>
      </div>
      <div className={styles.canvasWrapper}>
        <canvas
          ref={canvasRef}
          width={600}
          height={200}
          className={styles.canvas}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{
            width: "100%",
            minHeight: "200px"
          }}
        />
        {mode === "upload" && !uploadedFile && (
          <div className={styles.uploadContainer} >
            <div className={styles.uploadBox}>
              <img src={UploadFile} alt="Upload file" />
              <input
                type="file"
                className={styles.fileInput}
                onChange={handleFileUpload}
              />
              <div>
                <span className={styles.blueText}>Click to Upload</span> or drag
                and drop
              </div>
              <div>Max File size: 25MB</div>
            </div>
          </div>
        )}
        {mode === "upload" && uploadedFile && (
          <div className={styles.uploadedFile}>
            <img src={FileIcon} alt="File icon" className={styles.fileIcon} />
            <span
              className={styles.blueText}
              style={{
                width: "16rem",
              }}
            >
              {uploadedFile.name}
            </span>
            <span>
              File size: {(uploadedFile.size / (1024 * 1024)).toFixed(1)}MB
            </span>
          </div>
        )}
        {mode === "draw" && isCanvasEmpty && (
          <div className={styles.signPlaceholderContainer} >
            <img
              src={SignPlaceholder}
              alt="Sign Placeholder"
              className={styles.signPlaceholder}
            />
            <span className={styles.signPlaceholderText}>Sign here</span>
          </div>
        )}
      </div>
      <div className={styles.footer}>
        {mode === "type" && (
          <input
            placeholder="Type here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        )}
        <button
          className={styles.eraseButton}
          onClick={
            mode === "draw"
              ? handleErase
              : mode === "type"
              ? handleClear
              : handleRemove
          }
        >
          {mode === "draw" && "Erase"}
          {mode === "type" && "Clear"}
          {mode === "upload" && "Remove"}
        </button>
        <button className={styles.signButton}>Accept and Sign</button>
      </div>
    </div>
  );
};

export default Sign;
