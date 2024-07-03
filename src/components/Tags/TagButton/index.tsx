import React from "react";
import styles from "./style.module.scss";
import { Tag } from "../types";

interface CustomizableTabButtonProps {
  buttonStyle?: React.CSSProperties;
  tagStyle?: React.CSSProperties;
  useCountStyle?: React.CSSProperties;
}

interface TagButtonProps {
  tag: Tag;
  style?: CustomizableTabButtonProps;
}

const TagButton: React.FC<TagButtonProps> = ({ tag, style = {} }) => {
  return (
    <div className={styles.tabButton} style={{ ...style.buttonStyle }}>
      <span className={styles.tagName} style={{ ...style.tagStyle }}>
        {tag.name}
      </span>
      {tag.useCount && (
        <span className={styles.useCount} style={{ ...style.useCountStyle }}>
          ({tag.useCount})
        </span>
      )}
    </div>
  );
};

export default TagButton;
