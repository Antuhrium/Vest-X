import React, { useEffect, useState } from "react";
import StepList, { StepProps } from "../../../../components/StepList/StepList"; // Adjust the import path according to your project structure
import Menu from "../../../../components/Menu";
import styles from "./styles.module.scss";
import Content from "./Content";

const Signee: React.FC = () => {
  const [step, setStep] = useState(1);
  const [steps, setSteps] = useState<StepProps[]>([
    { order: 1, title: "Signee", mobileTitle: "Signee", status: "in_progress" },
    { order: 2, title: "Contact Details", mobileTitle: "Contact", status: "pending" },
    { order: 3, title: "Receivable Wallet", mobileTitle: "Wallet", status: "pending" },
    { order: 4, title: "Sign SAFT", mobileTitle: "SAFT", status: "pending" },
    { order: 5, title: "Finalize Payment", mobileTitle: "Payment", status: "pending" },
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
          height: "100vh",
        }}
        wrapperStyle={{
          margin: "68px 0 auto",
        }}
      />
      <StepList
        steps={steps}
        style={{
          width: "435px",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: "140px",
        }}
        header="Invest in project"
      />
      <Content step={step} setStep={setStep} />
    </div>
  );
};

export default Signee;
