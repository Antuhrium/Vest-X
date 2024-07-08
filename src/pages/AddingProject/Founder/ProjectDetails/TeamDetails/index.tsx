import { useState } from "react";
import styles from "./styles.module.scss";
import SocialChannelDropdown from "../../../../../components/SocialChannelDropdown";
import PositionDropdown from "../../../../../components/PositionDropdown";
import UploadFile from "/images/upload-file.svg";

interface TeamMember {
  id: number;
  fullName: string;
  position: string;
  socialChannel: string;
  link: string;
  description: string;
}

export default function TeamDetails() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      fullName: "Anel Askarkyzy",
      position: "UX / UI designer",
      socialChannel: "Twitter",
      link: "linktr.com/ProjectName",
      description:
        "Experienced UX/UI designer with over a year of experience in creating intuitive and attractive interfaces. Recognized for implementing a design system that improved development consistency and efficiency. Ready to bring creativity and user-centricity to your team by delivering innovative interfaces to improve user experience and achieve business goals.",
    },
  ]);

  const addTeamMember = () => {
    setTeamMembers([
      ...teamMembers,
      {
        id: Date.now(),
        fullName: "",
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
        <button className={styles.addLinkButton} onClick={addTeamMember}>
          <span className={styles.blueCircle}>+</span> Add member
        </button>
      </div>
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
                placeholder="Enter full name"
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
                placeholder="Enter link"
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
                <span>
                  <span className={styles.blueText}>Click to Upload</span> or
                  drag and drop
                </span>
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
              placeholder="Enter description"
            />
          </div>
          <div className={styles.deleteButtonContainer}>
            <button
              onClick={() => deleteTeamMember(member.id)}
              className={styles.deleteButton}
            >
              <span className={styles.deleteCircle}>✕</span>{" "}
              {`Delete this member`}
            </button>
          </div>
          {index < teamMembers.length - 1 && <hr className={styles.divider} />}
        </div>
      ))}
    </div>
  );
}
