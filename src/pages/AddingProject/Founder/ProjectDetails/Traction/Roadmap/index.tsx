// @ts-nocheck
import { useState } from "react";
import styles from "./styles.module.scss";
import CustomDropdown from "../../../../../../components/CustomDropdown";
import AddCircle from "/images/add-circle.svg";
import DeleteCircle from "/images/delete-circle.svg";
import MobileModifierMenu from "../../../../../../components/MobileModifierMenu";
import ArrowBack from "/images/arrow-back-chevron.svg";

interface Task {
  id: number;
  description: string;
}

interface Roadmap {
  id: number;
  quarter: string;
  year: string;
  title: string;
  tasks: Task[];
}

const NormalSizedRoadmap = ({
  roadmaps,
  updateRoadmap,
  updateTask,
  deleteTask,
  addTask,
  quarterOptions,
  yearOptions,
}) => {
  return (
    <div className="hidden lg:block">
      {roadmaps.map((roadmap) => (
        <div key={roadmap.id} className={styles.roadmap}>
          <div className={styles.flexRow}>
            <div className={styles.formGroup}>
              <label>
                Select quarter <span className={styles.requiredStar}>*</span>
              </label>
              <CustomDropdown
                value={roadmap.quarter}
                onChange={(value) =>
                  updateRoadmap(roadmap.id, "quarter", value)
                }
                options={quarterOptions}
                initText="Select a quarter"
              />
            </div>
            <div className={styles.formGroup}>
              <label>
                Select year <span className={styles.requiredStar}>*</span>
              </label>
              <CustomDropdown
                value={roadmap.year}
                onChange={(value) => updateRoadmap(roadmap.id, "year", value)}
                options={yearOptions}
                initText="Select a year"
              />
            </div>
            <div className={styles.formGroup}>
              <label>
                Title of roadmap <span className={styles.requiredStar}>*</span>
              </label>
              <input
                type="text"
                value={roadmap.title}
                onChange={(e) =>
                  updateRoadmap(roadmap.id, "title", e.target.value)
                }
                placeholder="Platform Enhancement"
              />
            </div>
          </div>
          {roadmap.tasks.map((task) => (
            <div key={task.id} className={styles.flexRow}>
              <div className={styles.formGroupFull}>
                <label>
                  {task.id}. Task to this quarter{" "}
                  <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="text"
                  value={task.description}
                  onChange={(e) =>
                    updateTask(roadmap.id, task.id, e.target.value)
                  }
                  placeholder="Launch DeFi features like liquidity pools."
                />
              </div>
              <button
                onClick={() => deleteTask(roadmap.id, task.id)}
                className={styles.deleteButton}
              >
                <img
                  src={DeleteCircle}
                  alt="delete circle"
                  style={{ marginRight: "0.5rem" }}
                />{" "}
                Delete a task
              </button>
            </div>
          ))}
          <button
            onClick={() => addTask(roadmap.id)}
            className={styles.addLinkButton}
            style={{
              fontSize: "14px",
            }}
          >
            <img
              src={AddCircle}
              alt="add circle"
              style={{ marginRight: "0.5rem" }}
            />{" "}
            Add one more task to this quarter
          </button>
        </div>
      ))}
    </div>
  );
};

const PhoneSizedRoadmap = ({
  roadmaps,
  deleteRoadmap,
  addRoadmap,
  updateRoadmap,
  quarterOptions,
  yearOptions,
  addTask,
  deleteTask,
  updateTask,
}) => {
  return (
    <MobileModifierMenu
      elements={roadmaps}
      mode="roadmaps"
      deleteElement={deleteRoadmap}
      addElement={addRoadmap}
      updateElement={updateRoadmap}
      quarterOptions={quarterOptions}
      yearOptions={yearOptions}
      addTask={addTask}
      deleteTask={deleteTask}
      updateTask={updateTask}
    />
  );
};

export const UpdateRoadmapForm = ({
  roadmap,
  setTab,
  index,
  roadmaps,
  quarterOptions,
  yearOptions,
  updateRoadmap,
  addTask,
  deleteTask,
  updateTask,
}) => {
  return (
    <div>
      <div key={roadmap.id} className={styles.roadmap}>
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
            Back to other roadmaps
          </p>
          <span className={styles.selectedElementText}>
            {index}. Roadmap ({index} / {roadmaps.length})
          </span>
        </div>
        <div className={styles.flexRow}>
          <div className={styles.formGroup}>
            <label>
              Select quarter <span className={styles.requiredStar}>*</span>
            </label>
            <CustomDropdown
              value={roadmap.quarter}
              onChange={(value) => updateRoadmap(roadmap.id, "quarter", value)}
              options={quarterOptions}
              initText="Select a quarter"
            />
          </div>
          <div className={styles.formGroup}>
            <label>
              Select year <span className={styles.requiredStar}>*</span>
            </label>
            <CustomDropdown
              value={roadmap.year}
              onChange={(value) => updateRoadmap(roadmap.id, "year", value)}
              options={yearOptions}
              initText="Select a year"
            />
          </div>
          <div className={styles.formGroup}>
            <label>
              Title of roadmap <span className={styles.requiredStar}>*</span>
            </label>
            <input
              type="text"
              value={roadmap.title}
              onChange={(e) =>
                updateRoadmap(roadmap.id, "title", e.target.value)
              }
              placeholder="Platform Enhancement"
            />
          </div>
        </div>
        {roadmap.tasks.map((task) => (
          <div key={task.id} className={styles.flexRow}>
            <div className={styles.formGroupFull}>
              <label>
                {task.id}. Task to this quarter{" "}
                <span className={styles.requiredStar}>*</span>
              </label>
              <input
                type="text"
                value={task.description}
                onChange={(e) =>
                  updateTask(roadmap.id, task.id, e.target.value)
                }
                placeholder="Launch DeFi features like liquidity pools."
              />
            </div>
            <button
              onClick={() => deleteTask(roadmap.id, task.id)}
              className={styles.deleteButton}
            >
              <img
                src={DeleteCircle}
                alt="delete circle"
                style={{ marginRight: "0.5rem" }}
              />{" "}
              Delete a task
            </button>
          </div>
        ))}
        <button
          onClick={() => addTask(roadmap.id)}
          className={styles.addLinkButton}
          style={{
            fontSize: "14px",
          }}
        >
          <img
            src={AddCircle}
            alt="add circle"
            style={{ marginRight: "0.5rem" }}
          />{" "}
          Add one more task to this quarter
        </button>
      </div>
    </div>
  );
};

export default function Roadmap() {
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([
    {
      id: 1,
      quarter: "1",
      year: "2024",
      title: "Platform Enhancement",
      tasks: [
        {
          id: 1,
          description: "Add task",
        },
      ],
    },
  ]);

  const addRoadmap = () => {
    setRoadmaps([
      ...roadmaps,
      {
        id: Math.max(...roadmaps.map((roadmap) => roadmap.id)) + 1,
        quarter: "",
        year: "",
        title: "Add roadmap",
        tasks: [],
      },
    ]);
  };

  const addTask = (roadmapId: number) => {
    setRoadmaps((prev) =>
      prev.map((roadmap) =>
        roadmap.id === roadmapId
          ? {
              ...roadmap,
              tasks: [
                ...roadmap.tasks,
                {
                  id: roadmap.tasks[roadmap.tasks.length - 1]
                    ? roadmap.tasks[roadmap.tasks.length - 1].id + 1
                    : 0,
                  description: "",
                },
              ],
            }
          : roadmap
      )
    );
  };

  const updateRoadmap = (id: number, key: keyof Roadmap, value: string) => {
    setRoadmaps(
      roadmaps.map((roadmap) =>
        roadmap.id === id ? { ...roadmap, [key]: value } : roadmap
      )
    );
  };

  const updateTask = (roadmapId: number, taskId: number, value: string) => {
    setRoadmaps(
      roadmaps.map((roadmap) =>
        roadmap.id === roadmapId
          ? {
              ...roadmap,
              tasks: roadmap.tasks.map((task) =>
                task.id === taskId ? { ...task, description: value } : task
              ),
            }
          : roadmap
      )
    );
  };

  const deleteTask = (roadmapId: number, taskId: number) => {
    setRoadmaps(
      roadmaps.map((roadmap) =>
        roadmap.id === roadmapId
          ? {
              ...roadmap,
              tasks: roadmap.tasks.filter((task) => task.id !== taskId),
            }
          : roadmap
      )
    );
  };

  const quarterOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];

  const yearOptions = [
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
  ];

  return (
    <div className={styles.roadmapContainer}>
      <div className={styles.header}>
        <h2 className={styles.gradientHeader}>Roadmap</h2>
        <button
          className={`${styles.addLinkButton} hidden lg:flex gap-[0.1rem]`}
          onClick={addRoadmap}
        >
          <img
            src={AddCircle}
            alt="add circle"
            style={{ marginRight: "0.5rem" }}
          />{" "}
          Add quarter
        </button>
      </div>
      <NormalSizedRoadmap
        roadmaps={roadmaps}
        updateRoadmap={updateRoadmap}
        updateTask={updateTask}
        deleteTask={deleteTask}
        addTask={addTask}
        yearOptions={yearOptions}
        quarterOptions={quarterOptions}
      />
      <PhoneSizedRoadmap
        roadmaps={roadmaps}
        deleteRoadmap={deleteTask}
        addRoadmap={addRoadmap}
        updateRoadmap={updateRoadmap}
        quarterOptions={quarterOptions}
        yearOptions={yearOptions}
        addTask={addTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
}
