import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss"; // Ensure this path is correct
import TagButton from "./TagButton";
import { Tag } from "./types"; // Ensure this path is correct
import NextTagIcon from "/images/next-tag.svg";

const Tags: React.FC = () => {
  const [tags] = useState<Tag[]>([
    { name: "All" },
    { name: "Gaming", useCount: 67 },
    { name: "Artificial Intelligence", useCount: 67 },
    { name: "NFT", useCount: 32 },
    { name: "Metaverse", useCount: 69 },
    { name: "NFT 2.0", useCount: 32 },
  ]);

  const [selectedTag, setSelectedTag] = useState<Tag | null>(null);

  useEffect(() => {
    setSelectedTag(tags[0]);
  }, [tags]);

  useEffect(() => {
    console.log(selectedTag);
  }, [selectedTag]);

  return (
    <div className={styles.tagContainer}>
      {tags.map((tag, index) => (
        <div
          style={{
            width: "max-content",
            height: "max-content",
          }}
          onClick={() => {
            setSelectedTag(tag); // Assign the entire tag object
          }}
          key={index}
        >
          <TagButton
            tag={tag}
            style={{
              buttonStyle: {
                backgroundColor:
                  tag.name === selectedTag?.name ? "#0F62FE" : "transparent",
              },
            }}
          />
        </div>
      ))}
      <img src={NextTagIcon} alt="Next Tag" />
    </div>
  );
};

export default Tags;
