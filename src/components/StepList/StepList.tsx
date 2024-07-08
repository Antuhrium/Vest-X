import React from "react";
import styles from "./style.module.scss";
import ChildCheckmark from "/images/child-checkmark.svg";

export interface StepProps {
  title: string;
  status: "completed" | "in_progress" | "pending";
  children?: StepChildrenProps[];
}

interface StepChildrenProps {
  title: string;
  status: "completed" | "current" | "pending";
}

export interface StepListProps {
  steps: StepProps[];
  style?: React.CSSProperties;
}

const StepHeader: React.FC<StepProps> = ({ title, status }) => {
  //here only we render steps icons and step title
  const getIconClass = () => {
    switch (status) {
      case "completed":
        return styles.iconCompleted;
      case "in_progress":
        return styles.iconInProgress;
      case "pending":
        return styles.iconPending;
    }
  };

  return (
    <div className={styles.step}>
      <div className={styles.stepHeader}>
        <div className={`${styles.stepIconWrapper} ${styles[status]}`}>
          <div className={`${styles.stepIcon} ${getIconClass()}`}></div>
        </div>
        <span className={`${styles.stepTitle} ${styles[status]}`}>{title}</span>
      </div>
    </div>
  );
};

const StepChildren: React.FC<{ children?: StepChildrenProps[] }> = ({
  children,
}) => {
  if (!children || children.length === 0) return null;

  return (
    <div className={styles.childSteps}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`${styles.childStep} ${styles[child.status]}`}
        >
          {child.status === "completed" && (
            <img
              src={ChildCheckmark}
              alt="Completed"
              className={styles.childCheckmark}
            />
          )}
          <span className={styles.childTitle}>{child.title}</span>
        </div>
      ))}
    </div>
  );
};

const StepList: React.FC<StepListProps> = ({ steps, style = {} }) => {
  return (
    <div className={styles.stepList} style={{ ...style }}>
      {steps.map((step, index) => (
        <div key={index} className={styles.stepWrapper}>
          <div className={styles.stepContent}>
            <StepHeader {...step} />
            {step.children && <StepChildren children={step.children} />}
          </div>
          {index < steps.length - 1 && (
            <div className={styles.stepLineWrapper}>
              <div
                className={`${styles.stepLine} ${
                  step.status === "completed" ? styles.completedLine : ""
                }`}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default StepList;

// const [steps, setSteps] = useState<StepProps[]>([
//   {
//     title: "Project Details",
//     status: "in_progress",
//     children: [
//       { title: "Basic Information", status: "completed" },
//       { title: "Social Channels", status: "completed" },
//       { title: "Team Details", status: "in_progress" },
//       { title: "Images", status: "pending" },
//     ]
//   },
//   { title: "Vesting Schedule", status: "pending" },
//   { title: "SAFT", status: "pending" },
//   { title: "Additional questions", status: "pending" },
// ]);
//
// const [signeeSteps, setSigneeSteps] = useState<StepProps[]>([
//   { title: "Signee", status: "completed" },
//   { title: "Contact Details", status: "in_progress" },
//   { title: "Receivable Wallet", status: "pending" },
//   { title: "Sign SAFT", status: "pending" },
//   { title: "Finalize Payment", status: "pending" },
// ]);

// return (
//   <div>
//     <StepList steps={steps} />
//     <StepList steps={signeeSteps} />
//   </div>
// );
