// @ts-nocheck
import React, { useState } from "react";
import styles from "./styles.module.scss";
import SocialChannelDropdown from "../../../../../components/SocialChannelDropdown";
import PositionDropdown from "../../../../../components/PositionDropdown";
import UploadFile from "/images/upload-file.svg";
import AddCircle from "/images/add-circle.svg";
import DeleteCircle from "/images/delete-circle.svg";
import MobileModifierMenu from "../../../../../components/MobileModifierMenu";
import ArrowBack from "/images/arrow-back-chevron.svg";

interface TeamMember {
  id: number;
  fullName: string;
  position: string;
  socialChannel: string;
  link: string;
  description: string;
}

interface NormalSizedTeamDetailsProps {
  teamMembers: TeamMember[];
  updateTeamMember: (id: number, key: keyof TeamMember, value: string) => void;
  deleteTeamMember: (id: number) => void;
}

const PhoneSizedTeamDetails = ({
  teamMembers,
  addTeamMember,
  deleteTeamMember,
  updateTeamMember,
}) => {
  return (
    <MobileModifierMenu
      elements={teamMembers}
      addElement={addTeamMember}
      deleteElement={deleteTeamMember}
      updateElement={updateTeamMember}
      mode="teamDetails"
    />
  );
};

export const UpdateTeamMemberForm = ({
  member,
  teamMembers,
  index,
  updateTeamMember,
  deleteTeamMember,
  setTab,
}) => {
  const handleDelete = () => {
    deleteTeamMember(member.id);
    setTab(0);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <p
          className={styles.grayText}
          style={{
            display: "flex",
            gap: "0.5rem",
            marginBottom: "1rem",
          }}
          onClick={() => setTab(0)}
        >
          <img src={ArrowBack} alt="arrow back" />
          Back to other team members
        </p>
        <span className={styles.selectedElementText}>
          {index}. Team Details ({index} / {teamMembers.length})
        </span>
      </div>
      <div key={member.id} className={styles.teamMember}>
        <div className={styles.flexRow}>
          <div className={styles.formGroup}>
            <label>
              Full name <span className={styles.requiredStar}>*</span>
            </label>
            <input
              type="text"
              value={member.fullName}
              onChange={(e) =>
                updateTeamMember(member.id, "fullName", e.target.value)
              }
              placeholder="Anel Askarkyzy"
            />
          </div>
          <div className={styles.formGroup}>
            <label>
              Position <span className={styles.requiredStar}>*</span>
            </label>
            <PositionDropdown
              value={member.position}
              onChange={(value) =>
                updateTeamMember(member.id, "position", value)
              }
            />
          </div>
        </div>
        <div className={styles.flexRow}>
          <div className={styles.formGroup}>
            <label>
              Choose social channel{" "}
              <span className={styles.requiredStar}>*</span>
            </label>
            <SocialChannelDropdown
              value={member.socialChannel}
              onChange={(value) =>
                updateTeamMember(member.id, "socialChannel", value)
              }
            />
          </div>
          <div className={styles.formGroup} style={{ marginTop: "-0.25rem" }}>
            <label>
              Link <span className={styles.requiredStar}>*</span>
            </label>
            <input
              type="text"
              value={member.link}
              onChange={(e) =>
                updateTeamMember(member.id, "link", e.target.value)
              }
              placeholder="linktr.com/ProjectName"
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>
            Upload an image of member{" "}
            <span className={styles.requiredStar}>*</span>
          </label>
          <div className={styles.uploadContainer}>
            <div className={styles.uploadBox}>
              <img src={UploadFile} alt="Upload file" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <span className={styles.blueText}>Click to Upload</span> or drag
                and drop
              </div>
              <span>Max File size: 25MB</span>
            </div>
          </div>
        </div>
        <div className={styles.formGroupFull}>
          <label>Description</label>
          <textarea
            value={member.description}
            onChange={(e) =>
              updateTeamMember(member.id, "description", e.target.value)
            }
            placeholder="Experienced UX/UI designer with over a year of experience in creating intuitive and attractive interfaces. Recognized for implementing a design system that improved development consistency and efficiency. Ready to bring creativity and user-centricity to your team by delivering innovative interfaces to improve user experience and achieve business goals."
          />
        </div>
        <div className={styles.deleteButtonContainer}>
          <button
            onClick={() => handleDelete()}
            className={styles.deleteButton}
          >
            <img
              src={DeleteCircle}
              alt="delete circle"
              style={{ marginRight: "0.5rem" }}
            />{" "}
            {`Delete this member`}
          </button>
        </div>
        {index < teamMembers.length - 1 && <hr className={styles.divider} />}
      </div>
    </div>
  );
};

const NormalSizedTeamDetails: React.FC<NormalSizedTeamDetailsProps> = ({
  teamMembers,
  updateTeamMember,
  deleteTeamMember,
}) => {
  return (
    <div className="hidden lg:block">
      {teamMembers.map((member, index) => (
        <div key={member.id} className={styles.teamMember}>
          <div className={styles.flexRow}>
            <div className={styles.formGroup}>
              <label>
                Full name <span className={styles.requiredStar}>*</span>
              </label>
              <input
                type="text"
                value={member.fullName}
                onChange={(e) =>
                  updateTeamMember(member.id, "fullName", e.target.value)
                }
                placeholder="Anel Askarkyzy"
              />
            </div>
            <div className={styles.formGroup}>
              <label>
                Position <span className={styles.requiredStar}>*</span>
              </label>
              <PositionDropdown
                value={member.position}
                onChange={(value) =>
                  updateTeamMember(member.id, "position", value)
                }
              />
            </div>
          </div>
          <div className={styles.flexRow}>
            <div className={styles.formGroup}>
              <label>
                Choose social channel{" "}
                <span className={styles.requiredStar}>*</span>
              </label>
              <SocialChannelDropdown
                value={member.socialChannel}
                onChange={(value) =>
                  updateTeamMember(member.id, "socialChannel", value)
                }
              />
            </div>
            <div className={styles.formGroup} style={{ marginTop: "-0.25rem" }}>
              <label>
                Link <span className={styles.requiredStar}>*</span>
              </label>
              <input
                type="text"
                value={member.link}
                onChange={(e) =>
                  updateTeamMember(member.id, "link", e.target.value)
                }
                placeholder="linktr.com/ProjectName"
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>
              Upload an image of member{" "}
              <span className={styles.requiredStar}>*</span>
            </label>
            <div className={styles.uploadContainer}>
              <div className={styles.uploadBox}>
                <img src={UploadFile} alt="Upload file" />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <span className={styles.blueText}>Click to Upload</span> or
                  drag and drop
                </div>
                <span>Max File size: 25MB</span>
              </div>
            </div>
          </div>
          <div className={styles.formGroupFull}>
            <label>Description</label>
            <textarea
              value={member.description}
              onChange={(e) =>
                updateTeamMember(member.id, "description", e.target.value)
              }
              placeholder="Experienced UX/UI designer with over a year of experience in creating intuitive and attractive interfaces. Recognized for implementing a design system that improved development consistency and efficiency. Ready to bring creativity and user-centricity to your team by delivering innovative interfaces to improve user experience and achieve business goals."
            />
          </div>
          <div className={styles.deleteButtonContainer}>
            <button
              onClick={() => deleteTeamMember(member.id)}
              className={styles.deleteButton}
            >
              <img
                src={DeleteCircle}
                alt="delete circle"
                style={{ marginRight: "0.5rem" }}
              />{" "}
              {`Delete this member`}
            </button>
          </div>
          {index < teamMembers.length - 1 && <hr className={styles.divider} />}
        </div>
      ))}
    </div>
  );
};
export default function TeamDetails() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      fullName: "Add team member",
      position: "UX / UI designer",
      socialChannel: "Twitter",
      link: "",
      description: "",
    },
  ]);

  const addTeamMember = () => {
    setTeamMembers([
      ...teamMembers,
      {
        id: Math.max(...teamMembers.map((member) => member.id)) + 1,
        fullName: "Add team member",
        position: "",
        socialChannel: "Twitter",
        link: "",
        description: "",
      },
    ]);
  };

  const updateTeamMember = (
    id: number,
    key: keyof TeamMember,
    value: string
  ) => {
    setTeamMembers(
      teamMembers.map((member) =>
        member.id === id ? { ...member, [key]: value } : member
      )
    );
  };

  const deleteTeamMember = (id: number) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };

  return (
    <div className={styles.teamDetailsContainer}>
      <div className={styles.header}>
        <h2 className={styles.gradientHeader}>Team Details</h2>
        <button
          className={`${styles.addLinkButton} hidden lg:flex gap-[0.1rem]`}
          onClick={addTeamMember}
        >
          <img
            src={AddCircle}
            alt="add circle"
            style={{
              marginRight: "0.5rem",
            }}
          />{" "}
          Add member
        </button>
      </div>
      <NormalSizedTeamDetails
        teamMembers={teamMembers}
        updateTeamMember={updateTeamMember}
        deleteTeamMember={deleteTeamMember}
      />
      <PhoneSizedTeamDetails
        teamMembers={teamMembers}
        updateTeamMember={updateTeamMember}
        deleteTeamMember={deleteTeamMember}
        addTeamMember={addTeamMember}
      />
    </div>
  );
}
