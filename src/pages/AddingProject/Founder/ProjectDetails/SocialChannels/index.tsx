// @ts-nocheck
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import SocialChannelDropdown from "../../../../../components/SocialChannelDropdown";
import AddCircle from "/images/add-circle.svg";
import DeleteCircle from "/images/delete-circle.svg";
import MobileModifierMenu from "../../../../../components/MobileModifierMenu";
import ArrowBack from "/images/arrow-back-chevron.svg";

interface SocialLink {
  id: number;
  channel: string;
  linkName: string;
  link: string;
}

export const UpdateSocialChannelForm = ({
  link,
  index,
  socialLinks,
  updateSocialLink,
  deleteSocialLink,
  setTab,
}: {
  link: SocialLink;
  index: number;
  socialLinks: SocialLink[];
  updateSocialLink: (id: number, key: keyof SocialLink, value: string) => void;
  deleteSocialLink: (id: number) => void;
  setTab: any;
}) => {
  console.log("link", link);

  const handleDelete = () => {
    deleteSocialLink(link.id);
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
          Back to other social channels
        </p>
        <span className={styles.selectedElementText}>
          {index}. Social channels ({index} / {socialLinks.length})
        </span>
      </div>
      <div key={link.id} className={styles.socialLink}>
        <div className={styles.flexRow}>
          <div className={styles.formGroup}>
            <label>
              Choose social channel{" "}
              <span className={styles.requiredStar}>*</span>
            </label>
            <SocialChannelDropdown
              value={link.channel}
              onChange={(value) => updateSocialLink(link.id, "channel", value)}
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
          className={`${styles.formGroup} ${styles.halfContainer}`}
          style={{}}
        >
          <label>
            Link <span className={styles.requiredStar}>*</span>
          </label>
          <input
            type="text"
            value={link.link}
            onChange={(e) => updateSocialLink(link.id, "link", e.target.value)}
            placeholder="linktr.com/ProjectName"
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
            />
            {`Delete this social channel`}
          </button>
        </div>
        {index < socialLinks.length - 1 && <hr className={styles.divider} />}
      </div>
    </div>
  );
};

const NormalSizedSocialChannels = ({
  socialLinks,
  updateSocialLink,
  deleteSocialLink,
}: {
  socialLinks: SocialLink[];
  updateSocialLink: (id: number, key: keyof SocialLink, value: string) => void;
  deleteSocialLink: (id: number) => void;
}) => {
  return (
    <div className={"hidden lg:block"}>
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
            className={`${styles.formGroup} ${styles.halfContainer}`}
            style={{}}
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
};

const PhoneSizedSocialChannels = ({
  socialLinks,
  addSocialLink,
  updateSocialLink,
  deleteSocialLink,
}) => {
  return (
    <MobileModifierMenu
      elements={socialLinks}
      addElement={addSocialLink}
      updateElement={updateSocialLink}
      deleteElement={deleteSocialLink}
      mode="socialLinks"
    />
  );
};

export default function SocialChannels() {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([
    {
      id: 1,
      channel: "Twitter",
      linkName: "@anel_ask",
      link: "linktr.com/ProjectName",
    },
    { id: 2, channel: "Twitter", linkName: "", link: "linktr.com/ProjectName" },
  ]);

  const addSocialLink = () => {
    setSocialLinks([
      ...socialLinks,
      {
        id: Math.max(...socialLinks.map((link) => link.id)) + 1,
        channel: "Add social channel",
        linkName: "",
        link: "",
      },
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

  useEffect(() => {
    console.log("socialLinks", socialLinks);
  }, [socialLinks]);

  return (
    <div className={styles.socialChannelsContainer}>
      <div className={styles.header}>
        <h2 className={styles.gradientHeader}>Social Channels</h2>
        <button
          className={`${styles.addLinkButton} hidden lg:flex gap-[0.1rem]`}
          onClick={addSocialLink}
        >
          <img src={AddCircle} alt="add circle" className="mr-[0.5rem]" /> Add
          link
        </button>
      </div>
      <NormalSizedSocialChannels
        socialLinks={socialLinks}
        updateSocialLink={updateSocialLink}
        deleteSocialLink={deleteSocialLink}
      />
      <PhoneSizedSocialChannels
        socialLinks={socialLinks}
        addSocialLink={addSocialLink}
        updateSocialLink={updateSocialLink}
        deleteSocialLink={deleteSocialLink}
      />
    </div>
  );
}
