import styles from "./styles.module.scss";
import Menu from "../../../components/Menu";
import StepList from "../../../components/StepList/StepList";
import { StepProps } from "../../../components/StepList/StepList";
import { useEffect, useState } from "react";
import ArrowBack from "/images/arrow-back.svg";
import ArrowNext from "/images/arrow-next.svg";
import RightBg from "/images/right-bg.png";
import BasicInformation from "./ProjectDetails/BasicInformation/BasicInformation";
import SocialChannels from "./ProjectDetails/SocialChannels";
import TeamDetails from "./ProjectDetails/TeamDetails";
import Images from "./ProjectDetails/Images";
import VestingSchedule from "./VestingSchedule";
import Chat from "./SAFT";

export default function AddingProjectFounder() {
  const [step, setStep] = useState(1);
  const [subStep, setSubStep] = useState(1);
  const [steps, setSteps] = useState<StepProps[]>([
    {
      title: "Project Details",
      status: "in_progress",
      children: [
        { title: "Basic Information", status: "pending" },
        { title: "Social Channels", status: "pending" },
        { title: "Team Details", status: "pending" },
        { title: "Images", status: "pending" },
        { title: "Traction", status: "pending" },
      ],
    },
    { title: "Vesting Schedule", status: "pending" },
    { title: "SAFT", status: "pending" },
    { title: "Additional Questions", status: "pending" },
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

  useEffect(() => {
    if (step === 1) {
      setSteps((prev) =>
        prev.map((item, index) => {
          if (index === 0) {
            return {
              ...item,
              children: item.children?.map((child, i) => {
                if (i < subStep - 1) {
                  return { ...child, status: "completed" };
                } else if (i === subStep - 1) {
                  return { ...child, status: "current" };
                } else {
                  return { ...child, status: "pending" };
                }
              }),
            };
          } else {
            return item;
          }
        })
      );
    }
  }, [subStep]);

  const handlePreviousStep = () => {
    if (step === 1 && subStep > 1) {
      setSubStep((prev) => prev - 1);
    } else {
      setStep((prev) => (prev > 1 ? prev - 1 : prev));
    }
  };

  const handleNextStep = () => {
    if (step === 1 && subStep <= 5) {
      setSubStep((prev) => prev + 1);
    } else {
      setStep((prev) => (prev < 4 ? prev + 1 : prev));
    }
  };

  useEffect(() => {
    if (step === 1 && subStep === 6) {
      setStep(2);
      setSubStep(4);
    }
  }, [step, subStep]);

  useEffect(() => {
    console.log("steps", steps);
  }, [steps]);

  const handleSaveAndFinishLater = () => {
    console.log("Save and finish later");
  };

  return (
    <div className={styles.container}>
      <Menu
        wrapperStyle={{
          margin: "68px 0 auto",
        }}
      />
      <StepList
        steps={steps}
        style={{ height: "100vh", width: "435px" }}
        header="Create a project"
      />
      <div className={styles.contentContainer}>
        {step === 1 && subStep === 1 && <BasicInformation />}
        {step === 1 && subStep === 2 && <SocialChannels />}
        {step === 1 && subStep === 3 && <TeamDetails />}
        {step === 1 && subStep === 4 && <Images />}
        {step === 2 && <VestingSchedule />}
        {(step === 3 || step === 4) && <Chat setStep={setStep} />}
        <img className={styles.rightBg} src={RightBg} alt="right bg" />
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
            Next Step <img src={ArrowNext} alt="arrow next" />
          </button>
        </div>
      </div>
    </div>
  );
}
