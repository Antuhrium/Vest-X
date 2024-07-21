// @ts-nocheck
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import AddCircle from "/images/add-circle.svg";
import DeleteCircle from "/images/delete-circle.svg";
import { UpdateSocialChannelForm } from "../../pages/AddingProject/Founder/ProjectDetails/SocialChannels";
import { UpdateTeamMemberForm } from "./../../pages/AddingProject/Founder/ProjectDetails/TeamDetails/index";
import { UpdateVestingPoolForm } from "../../pages/AddingProject/Founder/VestingSchedule";
import { UpdateInvestorsForm } from "../../pages/AddingProject/Founder/ProjectDetails/Traction/TopInvestors";
import { set } from "rsuite/esm/internals/utils/date";
import { UpdateAdvisorsForm } from "../../pages/AddingProject/Founder/ProjectDetails/Traction/Advisors";
import { UpdatePartnersForm } from "../../pages/AddingProject/Founder/ProjectDetails/Traction/Partners";
import { UpdateRoadmapForm } from "../../pages/AddingProject/Founder/ProjectDetails/Traction/Roadmap";
import { UpdateAdditionalTractionForm } from "../../pages/AddingProject/Founder/ProjectDetails/Traction/AdditionalTraction";

interface Element {
  [key: string]: any;
}

interface MobileModifierMenuProps {
  elements: any;
  deleteElement: any;
  addElement: any;
  updateElement: any;
  mode?: string;
  deleteModalOpen?: boolean;
  setDeleteModalOpen?: any;
  openCalendar?: any;
  setOpenCalendar?: any;
  handleFileChange?: any;
  quarterOptions?: any;
  yearOptions?: any;
  addTask?: any;
  deleteTask?: any;
  updateTask?: any;
}

export default function MobileModifierMenu({
  elements,
  deleteElement,
  addElement,
  updateElement,
  mode,
  deleteModalOpen,
  setDeleteModalOpen,
  openCalendar,
  setOpenCalendar,
  handleFileChange,
  quarterOptions,
  yearOptions,
  addTask,
  deleteTask,
  updateTask,
}: MobileModifierMenuProps) {
  const [tab, setTab] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [itemIndex, setItemIndex] = useState<number | null>(null);
  const [mainProp, setMainProp] = useState("");
  const [extraProp, setExtraProp] = useState("");
  const [addText, setAddText] = useState("");

  useEffect(() => {
    if (mode === "socialLinks") {
      setAddText("Add social channel");
      setMainProp("channel");
      setExtraProp("linkName");
    } else if (mode === "teamDetails") {
      setAddText("Add team member");
      setMainProp("fullName");
      setExtraProp("position");
    } else if (mode === "vestingSchedule") {
      setAddText("Add vesting schedule");
      setMainProp("poolName");
      setExtraProp("tokenType");
    } else if (mode === "topInvestors") {
      setAddText("Add investor");
      setMainProp("fullName");
      setExtraProp("projectName");
    } else if (mode === "advisors") {
      setAddText("Add advisor");
      setMainProp("fullName");
      setExtraProp("linkedin");
    } else if (mode === "partners") {
      setAddText("Add partner");
      setMainProp("fullName");
      setExtraProp("");
    } else if (mode === "roadmaps") {
      setAddText("Add roadmap");
      setMainProp("title");
      setExtraProp("year");
    } else if (mode === "additionalTraction") {
      setAddText("Add traction");
      setMainProp("description");
      setExtraProp("description");
    }
  }, [mode]);

  const isRealRecord = (element: Element): boolean => {
    const keys: (keyof Element)[] = Object.keys(element) as (keyof Element)[];
    console.log("element", element);
    console.log("keys", keys);
    for (const key of keys) {
      if (!element[key]) return false;
    }
    return true;
  };

  const handleSmallCircleClick = (
    clickedElement: Element,
    index: number,
    itemInd: number
  ) => {
    setTab(1);
    setActiveIndex(index);
    setItemIndex(itemInd + 1);
  };

  const handleDelete = (id: number) => {
    if (elements.length === 1) {
      return;
    }
    deleteElement(id);
  };

  return tab === 0 ? (
    <div className={`${styles.container} flex lg:hidden`}>
      {elements.map((element, itemInd) => (
        <div className={styles.element} key={element.id}>
          <p
            onClick={(e) => {
              handleSmallCircleClick(element, element.id, itemInd);
              e.stopPropagation();
            }}
          >
            {`${itemInd + 1}. ${element[mainProp]}`}{" "}
          </p>
          {!isRealRecord(element) && itemInd !== 0 ? (
            <span className={styles.optionalText}>(optional)</span>
          ) : (
            mode !== "advisors" &&
            mode !== "partners" &&
            mode !== "roadmaps" &&
            mode !== "additionalTraction" && <span>({element[extraProp]})</span>
          )}
          <div className={styles.actionCircleContainer}>
            {isRealRecord(element) ? (
              <img
                src={DeleteCircle}
                className={styles.actionCircle}
                alt="delete"
                onClick={() => handleDelete(element.id)}
              />
            ) : (
              <img
                src={AddCircle}
                className={styles.actionCircle}
                alt="add"
                onClick={() =>
                  handleSmallCircleClick(element, element.id, itemInd)
                }
              />
            )}
          </div>
        </div>
      ))}
      <button className={styles.addOneMoreButton} onClick={addElement}>
        <img src={AddCircle} alt="add" />
        {addText}
      </button>
    </div>
  ) : activeIndex && itemIndex && mode === "socialLinks" ? (
    <UpdateSocialChannelForm
      link={elements.find((element: Element) => element.id === activeIndex)}
      index={itemIndex}
      socialLinks={elements}
      updateSocialLink={updateElement}
      deleteSocialLink={handleDelete}
      setTab={setTab}
    />
  ) : activeIndex && itemIndex && mode === "teamDetails" ? (
    <UpdateTeamMemberForm
      member={elements.find((element: Element) => element.id === activeIndex)}
      index={itemIndex}
      teamMembers={elements}
      updateTeamMember={updateElement}
      deleteTeamMember={handleDelete}
      setTab={setTab}
    />
  ) : activeIndex && itemIndex && mode === "vestingSchedule" ? (
    <UpdateVestingPoolForm
      pool={elements.find((element: Element) => element.id === activeIndex)}
      index={itemIndex}
      vestingPools={elements}
      updateVestingPool={updateElement}
      deleteVestingPool={handleDelete}
      setTab={setTab}
      openCalendar={openCalendar}
      setOpenCalendar={setOpenCalendar}
      deleteModalOpen={deleteModalOpen}
      setDeleteModalOpen={setDeleteModalOpen}
    />
  ) : activeIndex && itemIndex && mode === "topInvestors" ? (
    <UpdateInvestorsForm
      investor={elements.find((element: Element) => element.id === activeIndex)}
      index={itemIndex}
      investors={elements}
      updateInvestor={updateElement}
      deleteInvestor={handleDelete}
      setTab={setTab}
      handleFileChange={handleFileChange}
    />
  ) : activeIndex && itemIndex && mode === "advisors" ? (
    <UpdateAdvisorsForm
      advisor={elements.find((element: Element) => element.id === activeIndex)}
      index={itemIndex}
      advisors={elements}
      updateAdvisor={updateElement}
      deleteAdvisor={handleDelete}
      setTab={setTab}
      handleFileChange={handleFileChange}
    />
  ) : activeIndex && itemIndex && mode === "partners" ? (
    <UpdatePartnersForm
      partner={elements.find((element: Element) => element.id === activeIndex)}
      index={itemIndex}
      partners={elements}
      updatePartner={updateElement}
      handleFileChange={handleFileChange}
      deletePartner={handleDelete}
      setTab={setTab}
    />
  ) : activeIndex && itemIndex && mode === "roadmaps" ? (
    <UpdateRoadmapForm
      roadmap={elements.find((element: Element) => element.id === activeIndex)}
      index={itemIndex}
      roadmaps={elements}
      updateRoadmap={updateElement}
      setTab={setTab}
      quarterOptions={quarterOptions}
      yearOptions={yearOptions}
      addTask={addTask}
      deleteTask={deleteTask}
      updateTask={updateTask}
    />
  ) : activeIndex && itemIndex && mode === "additionalTraction" ? (
    <UpdateAdditionalTractionForm
      traction={elements.find((element: Element) => element.id === activeIndex)}
      index={itemIndex}
      tractions={elements}
      updateTraction={updateElement}
      deleteTraction={handleDelete}
      setTab={setTab}
    />
  ) : (
    <></>
  );
}
