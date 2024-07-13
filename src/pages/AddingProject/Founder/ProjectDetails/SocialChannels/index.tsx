import { useState } from "react";
import styles from "./styles.module.scss";
import SocialChannelDropdown from "../../../../../components/SocialChannelDropdown";
import AddCircle from "/images/add-circle.svg";
import DeleteCircle from "/images/delete-circle.svg";

interface SocialLink {
  id: number;
  channel: string;
  linkName: string;
  link: string;
}

export default function SocialChannels() {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([
    {
      id: 1,
      channel: "Twitter",
      linkName: "",
      link: "",
    },
    { id: 2, channel: "Twitter", linkName: "", link: "linktr.com/ProjectName" },
  ]);

  const addSocialLink = () => {
    setSocialLinks([
      ...socialLinks,
      { id: Date.now(), channel: "Twitter", linkName: "", link: "" },
    ]);
  };

  const updateSocialLink = (
    id: number,
    key: keyof SocialLink,
    value: string
  ) => {
    setSocialLinks(
      socialLinks.map((link) =>
        link.id === id ? { ...link, [key]: value } : link
      )
    );
  };

  const deleteSocialLink = (id: number) => {
    setSocialLinks(socialLinks.filter((link) => link.id !== id));
  };

  return (
    <div className={styles.socialChannelsContainer}>
      <div className={styles.header}>
        <h2 className={styles.gradientHeader}>Social Channels</h2>
        <button className={styles.addLinkButton} onClick={addSocialLink}>
          <img
            src={AddCircle}
            alt="add circle"
            style={{
              marginRight: "0.5rem",
            }}
          />{" "}
          Add link
        </button>
      </div>
      {socialLinks.map((link, index) => (
        <div key={link.id} className={styles.socialLink}>
          <div className={styles.flexRow}>
            <div className={styles.formGroup}>
              <label>
                Choose social channel{" "}
                <span className={styles.requiredStar}>*</span>
              </label>
              <SocialChannelDropdown
                value={link.channel}
                onChange={(value) =>
                  updateSocialLink(link.id, "channel", value)
                }
              />
            </div>
            <div className={styles.formGroup}>
              <label>
                Link name <span className={styles.requiredStar}>*</span>
              </label>
              <input
                type="text"
                value={link.linkName}
                onChange={(e) =>
                  updateSocialLink(link.id, "linkName", e.target.value)
                }
                placeholder="@anel_ask"
              />
            </div>
          </div>
          <div
            className={styles.formGroup}
            style={{ width: "calc(50% - 1rem)", marginTop: "1rem" }}
          >
            <label>
              Link <span className={styles.requiredStar}>*</span>
            </label>
            <input
              type="text"
              value={link.link}
              onChange={(e) =>
                updateSocialLink(link.id, "link", e.target.value)
              }
              placeholder="linktr.com/ProjectName"
            />
          </div>
          <div className={styles.deleteButtonContainer}>
            <button
              onClick={() => deleteSocialLink(link.id)}
              className={styles.deleteButton}
            >
              <img
                src={DeleteCircle}
                alt="delete circle"
                style={{ marginRight: "0.5rem" }}
              />
              {`Delete ${link.channel.toLowerCase()} link`}
            </button>
          </div>
          {index < socialLinks.length - 1 && <hr className={styles.divider} />}
        </div>
      ))}
    </div>
  );
}
