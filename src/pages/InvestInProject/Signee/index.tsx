import React, { useEffect, useState } from "react";
import StepList, { StepProps } from "../../../components/StepList/StepList"; // Adjust the import path according to your project structure
import Menu from "../../../components/Menu";
import styles from "./styles.module.scss";
import Content from "./Content";

const Signee: React.FC = () => {
  const [step, setStep] = useState(1);
  const [steps, setSteps] = useState<StepProps[]>([
    {
      title: "Signee",
      status: "in_progress",
    },
    { title: "Contact Details", status: "pending" },
    { title: "Receivable Wallet", status: "pending" },
    { title: "Sign SAFT", status: "pending" },
    { title: "Finalize Payment", status: "pending" },
  ]);

  useEffect(() => {
    setSteps((prev) =>
      prev.map((item, index) => {
        if (index < step - 1) {
          return { ...item, status: "completed" };
        } else if (index === step - 1) {
          return { ...item, status: "in_progress" };
        } else {
          return { ...item, status: "pending" };
        }
      })
    );
  }, [step]);

  return (
    <div className={styles.pageContainer}>
      <Menu
        menuStyle={{
          padding: "26px 45px",
          height:
            step === 1
              ? "100vh"
              : step === 2
              ? "122vh"
              : step === 5
              ? "105vh"
              : "100vh",
        }}
        wrapperStyle={{
          margin: "68px 0 auto",
        }}
      />
      <StepList
        steps={steps}
        style={{
          height:
            step === 1
              ? "100vh"
              : step === 2
              ? "122vh"
              : step === 5
              ? "105vh"
              : "100vh",
        }}
      />
      <Content step={step} setStep={setStep} />
    </div>
  );
};

export default Signee;
