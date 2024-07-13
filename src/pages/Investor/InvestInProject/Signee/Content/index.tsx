import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import ArrowBack from "/images/arrow-back.svg";
import ArrowNext from "/images/arrow-next.svg";
import TelegramIcon from "/images/socials/telegram.svg";
import TwitterIcon from "/images/socials/twitter.svg";
import BinanceCoin from "/images/binance-coin.svg";
import FileIcon from "/images/file-icon.svg";
import DownloadIcon from "/images/download-icon.svg";
import QRCode from "/images/qr-code.svg";
import Wallet1 from "/images/wallet-1.svg";
import Wallet2 from "/images/wallet-2.svg";
import Wallet3 from "/images/wallet-3.svg";
import Wallet4 from "/images/wallet-4.svg";
import CheckInProgress from "/images/check-in-progress.svg";
import SimplePDF from "/pdf/simple_pdf.pdf";
import RightBg from "/images/right-bg.png";
import CheckMark from "/images/check.svg";
import CopyIcon from "/images/copy-file.svg";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import { Document, Page, pdfjs } from "react-pdf";
import Sign from "../../../../../components/Sign";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const FifthStep: React.FC = () => {
  return (
    <div className={styles.paymentContainer}>
      <h2 className={styles.gradientHeaderMedium}>Finalize Payment</h2>
      <p className={styles.paymentDescription}>
        Please send the funds to this address or click on "Connect Wallet" to
        provide transaction automatically
      </p>
      <div className={styles.qrCodeWrapper}>
        <img src={QRCode} alt="QR Code" className={styles.qrCode} />
      </div>
      <div className={styles.addressWrapper}>
        <input
          type="text"
          className={styles.addressInput}
          value="0xb0692d4213A9E7889D9AF6D59F05a981E308666"
          readOnly
        />
        <button className={styles.copyButton}>
          <img src={CopyIcon} alt="Copy" className={styles.copyIcon} />
        </button>
      </div>
      <p className={styles.note}>
        <img src={CheckInProgress} alt="check in progress" />
        Please send USDT on BSC Network
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <button className={styles.connectWalletButton}>Connect wallet</button>
        <div className={styles.walletIcons}>
          <img src={Wallet1} alt="Wallet 1" />
          <img src={Wallet2} alt="Wallet 2" />
          <img src={Wallet3} alt="Wallet 3" />
          <img src={Wallet4} alt="Wallet 4" />
        </div>
      </div>
    </div>
  );
};

const FourthStep: React.FC = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  useEffect(() => {
    setPageNumber(1);
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <Document file={SimplePDF} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p className={styles.pageNumber}>
          Page {pageNumber} of {numPages}
        </p>
      </div>
      <div className={styles.fileContainer}>
        <div className={styles.fileInfo}>
          <img src={FileIcon} alt="File Icon" className={styles.fileIcon} />
          <div className={styles.fileDetails}>
            <span className={styles.fileName}>SAFT updated.pdf</span>
            <span className={styles.fileSize}>2 mb</span>
          </div>
        </div>

        <a
          href="/path/to/SAFT_updated.pdf"
          className={styles.downloadLink}
          download
        >
          <img src={DownloadIcon} alt="Download Icon" />
          Download
        </a>
      </div>
      <Sign />
    </div>
  );
};

const ThirdStep: React.FC = () => {
  const [amountToInvest, setAmountToInvest] = useState("");
  const [receivingAddress, setReceivingAddress] = useState("");

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.gradientHeaderMedium}>Receivable Wallet</h2>
      <form>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="amountToInvest">
              Amount to invest <span className={styles.requiredStar}>*</span>
            </label>
            <div className={styles.inputWithIconRight}>
              <input
                type="text"
                id="amountToInvest"
                value={amountToInvest}
                onChange={(e) => setAmountToInvest(e.target.value)}
                placeholder="567,900"
              />
              <div className={styles.rightIcon}>
                <span>BNB</span>
                <img
                  src={BinanceCoin}
                  alt="BNB"
                  className={styles.inputIconRight}
                />
              </div>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="receivingAddress">
              Receiving address <span className={styles.requiredStar}>*</span>
            </label>
            <div className={styles.inputWithIconRight}>
              <input
                type="text"
                id="receivingAddress"
                value={receivingAddress}
                onChange={(e) => setReceivingAddress(e.target.value)}
                placeholder="7890***0737"
              />
              <div className={styles.rightIcon}>
                <span>BNB</span>
                <img
                  src={BinanceCoin}
                  alt="BNB"
                  className={styles.inputIconRight}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const SecondStep: React.FC = () => {
  const [twitterLink, setTwitterLink] = useState("");
  const [telegramLink, setTelegramLink] = useState("");
  const [responses, setResponses] = useState(["", "", ""]);

  const handleInputChange = (index: number, value: string) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  return (
    <div
      className={styles.formContainer}
      // style={{
      //   transform: "scale(0.8)",
      // }}
    >
      <h2 className={styles.gradientHeaderMedium}>Contact details</h2>
      <form>
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <div className={styles.bigFormGroup}>
            <label htmlFor="twitterLink">Twitter link *</label>
            <div className={styles.inputWithIcon}>
              <div className={styles.iconInsideInput}>
                <img src={TwitterIcon} alt="Twitter" />
              </div>
              <input
                type="text"
                id="twitterLink"
                value={twitterLink}
                onChange={(e) => setTwitterLink(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.bigFormGroup}>
            <label htmlFor="telegramLink">Telegram link *</label>
            <div className={styles.inputWithIcon}>
              <div className={styles.iconInsideInput}>
                <img src={TelegramIcon} alt="Telegram" />
              </div>
              <input
                type="text"
                id="telegramLink"
                value={telegramLink}
                onChange={(e) => setTelegramLink(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={styles.bigFormGroup}>
          <label>1. What attracted you to our project?</label>
          <textarea
            value={responses[0]}
            onChange={(e) => handleInputChange(0, e.target.value)}
            placeholder="The expertise and experience of your team members impressed me. Having professionals with such a strong track record gives me confidence in the potential success of this project."
          ></textarea>
          <small>Maximum 500 symbols</small>
        </div>
        <div className={styles.bigFormGroup}>
          <label>
            2. How do you typically support your portfolio companies beyond
            funding?
          </label>
          <textarea
            value={responses[1]}
            onChange={(e) => handleInputChange(1, e.target.value)}
            placeholder="The expertise and experience of your team members impressed me. Having professionals with such a strong track record gives me confidence in the potential success of this project."
          ></textarea>
          <small>Maximum 500 symbols</small>
        </div>
        <div className={styles.bigFormGroup}>
          <label>
            3. Are there any specific challenges or risks you foresee with our
            project?
          </label>
          <textarea
            value={responses[2]}
            onChange={(e) => handleInputChange(2, e.target.value)}
            placeholder="The expertise and experience of your team members impressed me. Having professionals with such a strong track record gives me confidence in the potential success of this project."
          ></textarea>
          <small>Maximum 500 symbols</small>
        </div>
        <div className={styles.formFooter}>
          <a
            href="https://t.me/mikeSmith"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TelegramIcon} alt="Telegram" /> Have questions? Connect
            with the startup owner on Telegram by writing to @mikeSmith.
          </a>
        </div>
      </form>
    </div>
  );
};

const FirstStep: React.FC = () => {
  const [signeeName, setSigneeName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.gradientHeaderSignee}>Signee</h2>
      <form className={styles.form}>
        <div className={styles.bigFormGroup}>
          <label htmlFor="signeeName">
            Signee's name
            <span className={styles.requiredStar}>*</span>
          </label>
          <input
            type="text"
            id="signeeName"
            placeholder="John Doe"
            value={signeeName}
            onChange={(e) => setSigneeName(e.target.value)}
          />
        </div>
        <div className={styles.bigFormGroup}>
          <label htmlFor="companyName">
            Company name
            <span className={styles.requiredStar}>*</span>
          </label>
          <input
            type="text"
            id="companyName"
            placeholder="Too “JohnEvCorparation”"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className={styles.bigFormGroup}>
          <label htmlFor="companyAddress">
            Company address
            <span className={styles.requiredStar}>*</span>
          </label>
          <input
            type="text"
            id="companyAddress"
            placeholder="123 Green Street, Suite 456, Sustainability City"
            value={companyAddress}
            onChange={(e) => setCompanyAddress(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

interface StepAction {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Content: React.FC<StepAction> = ({ step, setStep }) => {
  const handlePreviousStep = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextStep = () => {
    setStep((prev) => (prev < 5 ? prev + 1 : prev));
  };

  const handleSaveAndFinishLater = () => {
    console.log("Save and finish later");
  };

  return (
    <>
      <div className={styles.contentContainer}>
        {step === 1 && <FirstStep />}
        {step === 2 && <SecondStep />}
        {step === 3 && <ThirdStep />}
        {step === 4 && <FourthStep />}
        {step === 5 && <FifthStep />}
        <div
          className={styles.formButtons}
          style={
            {
              // marginTop: step === 2 ? "-4rem" : "auto",
            }
          }
        >
          <button type="button" onClick={handlePreviousStep}>
            <img src={ArrowBack} alt="arrow back" /> Previous Step
          </button>
          <button type="button" onClick={handleSaveAndFinishLater}>
            Save and finish later
          </button>
          <button type="button" onClick={handleNextStep}>
            {step === 5 ? "Complete Payment" : "Next Step"}{" "}
            <img src={step === 5 ? CheckMark : ArrowNext} alt="arrow next" />
          </button>
        </div>
      </div>
      <img className={styles.rightBg} src={RightBg} alt="right bg" />
    </>
  );
};

export default Content;
