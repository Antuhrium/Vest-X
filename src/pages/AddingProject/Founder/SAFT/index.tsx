import React, { useState } from "react";
import styles from "./styles.module.scss";
import UserProfilePic from "/images/chat/user-profile-pic.svg";
import BotProfilePic from "/images/chat/bot-profile-pic.svg";
import AttachFile from "/images/chat/attach-file.svg";
import SendMessage from "/images/chat/send-message.svg";
import FilePreview from "/images/chat/file-preview.png";
import DownloadFile from "/images/chat/file-download.svg";
import PDFFileModal from "../../../../components/PDFFileModal";

interface Message {
  id: number;
  role: "user" | "bot";
  content: string;
  type?: "text" | "file";
  fileName?: string;
  fileSize?: string;
  date: string;
}

interface StepAction {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function Chat({ setStep }: StepAction) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "bot",
      content:
        "Hi, I'm the VestAI. I will help you to generate the SAFT. Please send me Signee name",
      type: "text",
      date: "2.03 PM, 15 Nov",
    },
    {
      id: 2,
      role: "user",
      content: "Example of Signee name",
      type: "text",
      date: "2.03 PM, 15 Nov",
    },
    {
      id: 3,
      role: "bot",
      content:
        "Would you like me to add in specific conditions and clauses? (write : YES or NO)",
      type: "text",
      date: "2.03 PM, 15 Nov",
    },
    {
      id: 4,
      role: "user",
      content: "Yes",
      type: "text",
      date: "2.03 PM, 15 Nov",
    },
    {
      id: 5,
      role: "bot",
      content:
        "Please write the first condition or clause that you would like to add",
      type: "text",
      date: "2.03 PM, 15 Nov",
    },
    {
      id: 6,
      role: "user",
      content: "Some conditions",
      type: "text",
      date: "2.03 PM, 15 Nov",
    },
    {
      id: 7,
      role: "bot",
      content: "SAFT preview.pdf",
      type: "file",
      fileName: "SAFT preview.pdf",
      fileSize: "2 mb",
      date: "2.03 PM, 15 Nov",
    },
    {
      id: 8,
      role: "bot",
      content: "Thanks, would you like to add more ?",
      type: "text",
      date: "2.03 PM, 15 Nov",
    },
    {
      id: 9,
      role: "user",
      content: "No",
      type: "text",
      date: "2.03 PM, 15 Nov",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleFileClick = (fileName: string) => {
    setSelectedFile(fileName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFile(null);
  };

  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    setMessages((prev) => [
      ...prev,
      {
        id: prev[prev.length - 1].id + 1,
        role: "user",
        content: message,
        type: "text",
        date: "2.03 PM, 15 Nov",
      },
    ]);
    setStep((prev) => (prev < 4 ? prev + 1 : prev));
  };

  return (
    <div className={styles.chatContainer}>
      {messages.map((message) => (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.75rem",
          }}
        >
          {message.role === "bot" && (
            <img src={BotProfilePic} alt="bot profile pic" />
          )}
          <div
            key={message.id}
            className={`${styles.message} ${
              message.role === "bot" ? styles.botMessage : styles.userMessage
            }`}
          >
            {message.type === "file" ? (
              <div
                className={styles.fileMessage}
                onClick={() => handleFileClick(message.fileName!)}
              >
                <img
                  src={FilePreview}
                  alt="file preview"
                  className={styles.filePreview}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    margin: "auto 0",
                  }}
                >
                  <span>{message.content}</span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span className={styles.greyText}>{message.fileSize}</span>
                    <button className={styles.downloadButton}>
                      <img src={DownloadFile} alt="download file" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <span
                  className={styles.date}
                  style={{
                    marginLeft: message.role === "bot" ? "0" : "auto",
                  }}
                >
                  {message.date}
                </span>
                <span className={styles.messageBox}>{message.content}</span>
              </>
            )}
          </div>
          {message.role === "user" && (
            <img src={UserProfilePic} alt="user profile pic" />
          )}
        </div>
      ))}
      <div className={styles.inputWithIcons}>
        <img
          src={AttachFile}
          alt="attach file"
          className={styles.attachFileIcon}
        />
        <input
          className={styles.messageInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <img
          src={SendMessage}
          alt="send message"
          className={styles.sendMessageIcon}
          onClick={handleSendMessage}
        />
      </div>
      {isModalOpen && (
        <PDFFileModal
          isOpen={isModalOpen}
          onClose={closeModal}
          file={{
            name: selectedFile!,
            size: "2 mb",
          }}
        />
      )}
    </div>
  );
}
