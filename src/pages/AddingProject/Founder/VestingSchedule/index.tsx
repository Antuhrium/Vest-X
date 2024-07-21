// @ts-nocheck
import { useState } from "react";
import styles from "./styles.module.scss";
import PeriodDropdown from "../../../../components/PeriodDropdown";
import SmallTokenDropdown from "../../../../components/SmallTokenDropdown";
import { Calendar } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import DeleteConfirmationModal from "../../../../components/DeletePoolConfirmationModal";
import AddCircle from "/images/add-circle.svg";
import DeleteCircle from "/images/delete-circle.svg";
import MobileModifierMenu from "../../../../components/MobileModifierMenu";
import ArrowBack from "/images/arrow-back-chevron.svg";

interface VestingPool {
  id: number;
  poolName: string;
  tokenAmount: string;
  tokenType: string;
  tokenPrice: string;
  cliffPeriodValue: string;
  cliffPeriodUnit: string;
  vestingPeriodValue: string;
  vestingPeriodUnit: string;
  tgeDate: string;
}

const NormalSizedVestingSchedule = ({
  vestingPools,
  updateVestingPool,
  setOpenCalendar,
  deleteVestingPool,
  setDeleteModalOpen,
  deleteModalOpen,
  openCalendar,
}) => {
  return (
    <div className="hidden lg:block">
      {vestingPools.map((pool, index) => (
        <div key={pool.id} className={styles.vestingPool}>
          <div className={styles.flexRow}>
            <div className={styles.formGroup}>
              <label>
                Pool name <span className={styles.requiredStar}>*</span>
              </label>
              <input
                type="text"
                value={pool.poolName}
                onChange={(e) =>
                  updateVestingPool(pool.id, "poolName", e.target.value)
                }
                placeholder="Enter pool name"
              />
            </div>
            <div className={styles.formGroup}>
              <label>
                Token amount for pool{" "}
                <span className={styles.requiredStar}>*</span>
              </label>
              <div className={styles.inputWithUnit}>
                <SmallTokenDropdown
                  tokenAmount={pool.tokenAmount}
                  tokenType={pool.tokenType}
                  onAmountChange={(value) =>
                    updateVestingPool(pool.id, "tokenAmount", value)
                  }
                  onTypeChange={(value) =>
                    updateVestingPool(pool.id, "tokenType", value)
                  }
                />
              </div>
            </div>
          </div>
          <div
            className={styles.formGroup}
            style={{ width: "calc(50% - 1rem)" }}
          >
            <label>
              Token price <span className={styles.requiredStar}>*</span>
            </label>
            <SmallTokenDropdown
              tokenAmount={pool.tokenPrice}
              tokenType={pool.tokenType}
              onAmountChange={(value) =>
                updateVestingPool(pool.id, "tokenPrice", value)
              }
              onTypeChange={(value) =>
                updateVestingPool(pool.id, "tokenType", value)
              }
            />
            <p className={styles.helperText}>Helper text goes here</p>
          </div>
          <div className={styles.flexRow}>
            <button className={`${styles.actionButton} hidden lg:block`}>
              <div className={styles.actionButtonInner}>
                <img src={AddCircle} alt="add circle" /> Add to cliff
              </div>
            </button>
            <button className={`${styles.actionButton} hidden lg:block`}>
              <div className={styles.actionButtonInner}>
                <img src={AddCircle} alt="add circle" /> Add to vesting
              </div>
            </button>
            <button className={`${styles.actionButton} hidden lg:block`}>
              <div className={styles.actionButtonInner}>
                <img src={AddCircle} alt="add circle" /> Add to TGE
              </div>
            </button>
          </div>
          <div className={styles.flexRow}>
            <div className={styles.formGroup}>
              <button className={`${styles.actionButton} block lg:hidden mb-2`}>
                <div className={styles.actionButtonInner}>
                  <img src={AddCircle} alt="add circle" /> Add to cliff
                </div>
              </button>
              <label
                style={{
                  display: "flex",
                }}
              >
                Cliff period <span className={styles.requiredStar}>*</span>
                <span
                  className={styles.smallDeleteCircle}
                  style={{ marginLeft: "auto" }}
                >
                  ✕
                </span>
              </label>

              <div className={styles.inputWithUnit}>
                <PeriodDropdown
                  periodValue={pool.cliffPeriodValue}
                  periodUnit={pool.cliffPeriodUnit}
                  onValueChange={(value) =>
                    updateVestingPool(pool.id, "cliffPeriodValue", value)
                  }
                  onUnitChange={(unit) =>
                    updateVestingPool(pool.id, "cliffPeriodUnit", unit)
                  }
                />
              </div>
              <p className={styles.helperText}>
                Starts from today or sth like that
              </p>
            </div>
            <div className={styles.formGroup}>
              <button className={`${styles.actionButton} block lg:hidden mb-2`}>
                <div className={styles.actionButtonInner}>
                  <img src={AddCircle} alt="add circle" /> Add to vesting
                </div>
              </button>

              <label
                style={{
                  display: "flex",
                }}
              >
                Vesting period <span className={styles.requiredStar}>*</span>
                <span
                  className={styles.smallDeleteCircle}
                  style={{
                    marginLeft: "auto",
                  }}
                >
                  ✕
                </span>
              </label>
              <div className={styles.inputWithUnit}>
                <PeriodDropdown
                  periodValue={pool.vestingPeriodValue}
                  periodUnit={pool.vestingPeriodUnit}
                  onValueChange={(value) =>
                    updateVestingPool(pool.id, "vestingPeriodValue", value)
                  }
                  onUnitChange={(unit) =>
                    updateVestingPool(pool.id, "vestingPeriodUnit", unit)
                  }
                />
              </div>
              <p className={styles.helperText}>
                Starts from today or sth like that
              </p>
            </div>
            <div className={styles.formGroup}>
              <button className={`${styles.actionButton} block lg:hidden mb-2`}>
                <div className={styles.actionButtonInner}>
                  <img src={AddCircle} alt="add circle" /> Add to TGE
                </div>
              </button>
              <label className="flex mt-0 lg:-mt-[1.5rem]">
                Token Generation Event (TGE){" "}
                <span className={styles.requiredStar}>*</span>
                <span
                  className={styles.smallDeleteCircle}
                  style={{ marginLeft: "auto" }}
                >
                  ✕
                </span>
              </label>
              <div
                className={styles.tgeInputContainer}
                onClick={() =>
                  setOpenCalendar((prev) => (prev === pool.id ? null : pool.id))
                }
              >
                {pool.tgeDate ? (
                  <span>{pool.tgeDate}</span>
                ) : (
                  <span
                    onClick={() =>
                      setOpenCalendar((prev) =>
                        prev === pool.id ? null : pool.id
                      )
                    }
                  >
                    Choose Date
                  </span>
                )}
                {openCalendar === pool.id && (
                  <Calendar
                    absolute
                    compact
                    className={styles.datePicker}
                    format="MMM dd, yyyy"
                    onChange={(date) => {
                      updateVestingPool(
                        pool.id,
                        "tgeDate",
                        date ? date.toDateString() : ""
                      );
                      setOpenCalendar(null);
                    }}
                    onClose={() => setOpenCalendar(null)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className={styles.deleteButtonContainer}>
            <DeleteConfirmationModal
              onDelete={() => deleteVestingPool(pool.id)}
              onCancel={() => setDeleteModalOpen(false)}
              isOpen={deleteModalOpen}
            />
            <button
              className={styles.deleteButton}
              onClick={() => setDeleteModalOpen(true)}
            >
              <img
                src={DeleteCircle}
                alt="delete circle"
                style={{ marginRight: "0.5rem" }}
              />{" "}
              {`Delete this pool`}
            </button>
          </div>
          {index < vestingPools.length - 1 && <hr className={styles.divider} />}
        </div>
      ))}
    </div>
  );
};

export const UpdateVestingPoolForm = ({
  pool,
  vestingPools,
  updateVestingPool,
  setOpenCalendar,
  deleteVestingPool,
  setDeleteModalOpen,
  deleteModalOpen,
  openCalendar,
  index,
  setTab,
}) => {
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
          Back to other vesting pools
        </p>
        <span className={styles.selectedElementText}>
          {index}. Vesting Pools ({index} / {vestingPools.length})
        </span>
        <div key={pool.id} className={styles.vestingPool}>
          <div className={styles.flexRow}>
            <div className={styles.formGroup}>
              <label>
                Pool name <span className={styles.requiredStar}>*</span>
              </label>
              <input
                type="text"
                value={pool.poolName}
                onChange={(e) =>
                  updateVestingPool(pool.id, "poolName", e.target.value)
                }
                placeholder="Enter pool name"
              />
            </div>
            <div className={styles.formGroup}>
              <label>
                Token amount for pool{" "}
                <span className={styles.requiredStar}>*</span>
              </label>
              <div className={styles.inputWithUnit}>
                <SmallTokenDropdown
                  tokenAmount={pool.tokenAmount}
                  tokenType={pool.tokenType}
                  onAmountChange={(value) =>
                    updateVestingPool(pool.id, "tokenAmount", value)
                  }
                  onTypeChange={(value) =>
                    updateVestingPool(pool.id, "tokenType", value)
                  }
                />
              </div>
            </div>
          </div>
          <div
            className={styles.formGroup}
            style={{ width: "calc(50% - 1rem)" }}
          >
            <label>
              Token price <span className={styles.requiredStar}>*</span>
            </label>
            <SmallTokenDropdown
              tokenAmount={pool.tokenPrice}
              tokenType={pool.tokenType}
              onAmountChange={(value) =>
                updateVestingPool(pool.id, "tokenPrice", value)
              }
              onTypeChange={(value) =>
                updateVestingPool(pool.id, "tokenType", value)
              }
            />
            <p className={styles.helperText}>Helper text goes here</p>
          </div>
          <div className={styles.flexRow}>
            <button className={`${styles.actionButton} hidden lg:block`}>
              <div className={styles.actionButtonInner}>
                <img src={AddCircle} alt="add circle" /> Add to cliff
              </div>
            </button>
            <button className={`${styles.actionButton} hidden lg:block`}>
              <div className={styles.actionButtonInner}>
                <img src={AddCircle} alt="add circle" /> Add to vesting
              </div>
            </button>
            <button className={`${styles.actionButton} hidden lg:block`}>
              <div className={styles.actionButtonInner}>
                <img src={AddCircle} alt="add circle" /> Add to TGE
              </div>
            </button>
          </div>
          <div className={styles.flexRow}>
            <div className={styles.formGroup}>
              <button className={`${styles.actionButton} block lg:hidden mb-2`}>
                <div className={styles.actionButtonInner}>
                  <img src={AddCircle} alt="add circle" /> Add to cliff
                </div>
              </button>
              <label
                style={{
                  display: "flex",
                }}
              >
                Cliff period <span className={styles.requiredStar}>*</span>
                <span
                  className={styles.smallDeleteCircle}
                  style={{ marginLeft: "auto" }}
                >
                  ✕
                </span>
              </label>

              <div className={styles.inputWithUnit}>
                <PeriodDropdown
                  periodValue={pool.cliffPeriodValue}
                  periodUnit={pool.cliffPeriodUnit}
                  onValueChange={(value) =>
                    updateVestingPool(pool.id, "cliffPeriodValue", value)
                  }
                  onUnitChange={(unit) =>
                    updateVestingPool(pool.id, "cliffPeriodUnit", unit)
                  }
                />
              </div>
              <p className={styles.helperText}>
                Starts from today or sth like that
              </p>
            </div>
            <div className={styles.formGroup}>
              <button className={`${styles.actionButton} block lg:hidden mb-2`}>
                <div className={styles.actionButtonInner}>
                  <img src={AddCircle} alt="add circle" /> Add to vesting
                </div>
              </button>

              <label
                style={{
                  display: "flex",
                }}
              >
                Vesting period <span className={styles.requiredStar}>*</span>
                <span
                  className={styles.smallDeleteCircle}
                  style={{
                    marginLeft: "auto",
                  }}
                >
                  ✕
                </span>
              </label>
              <div className={styles.inputWithUnit}>
                <PeriodDropdown
                  periodValue={pool.vestingPeriodValue}
                  periodUnit={pool.vestingPeriodUnit}
                  onValueChange={(value) =>
                    updateVestingPool(pool.id, "vestingPeriodValue", value)
                  }
                  onUnitChange={(unit) =>
                    updateVestingPool(pool.id, "vestingPeriodUnit", unit)
                  }
                />
              </div>
              <p className={styles.helperText}>
                Starts from today or sth like that
              </p>
            </div>
            <div className={styles.formGroup}>
              <button className={`${styles.actionButton} block lg:hidden mb-2`}>
                <div className={styles.actionButtonInner}>
                  <img src={AddCircle} alt="add circle" /> Add to TGE
                </div>
              </button>
              <label className="flex mt-0 lg:-mt-[1.5rem]">
                Token Generation Event (TGE){" "}
                <span className={styles.requiredStar}>*</span>
                <span
                  className={styles.smallDeleteCircle}
                  style={{ marginLeft: "auto" }}
                >
                  ✕
                </span>
              </label>
              <div
                className={styles.tgeInputContainer}
                onClick={() =>
                  setOpenCalendar((prev) => (prev === pool.id ? null : pool.id))
                }
              >
                {pool.tgeDate ? (
                  <span>{pool.tgeDate}</span>
                ) : (
                  <span
                    onClick={() =>
                      setOpenCalendar((prev) =>
                        prev === pool.id ? null : pool.id
                      )
                    }
                  >
                    Choose Date
                  </span>
                )}
                {openCalendar === pool.id && (
                  <Calendar
                    absolute
                    compact
                    className={styles.datePicker}
                    format="MMM dd, yyyy"
                    onChange={(date) => {
                      updateVestingPool(
                        pool.id,
                        "tgeDate",
                        date ? date.toDateString() : ""
                      );
                      setOpenCalendar(null);
                    }}
                    onClose={() => setOpenCalendar(null)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className={styles.deleteButtonContainer}>
            <DeleteConfirmationModal
              onDelete={() => deleteVestingPool(pool.id)}
              onCancel={() => setDeleteModalOpen(false)}
              isOpen={deleteModalOpen}
            />
            <button
              className={styles.deleteButton}
              onClick={() => setDeleteModalOpen(true)}
            >
              <img
                src={DeleteCircle}
                alt="delete circle"
                style={{ marginRight: "0.5rem" }}
              />{" "}
              {`Delete this pool`}
            </button>
          </div>
          {index < vestingPools.length - 1 && <hr className={styles.divider} />}
        </div>
      </div>
    </div>
  );
};

const PhoneSizedVestingSchedule = ({
  vestingPools,
  addVestingPool,
  deleteVestingPool,
  updateVestingPool,
  deleteModalOpen,
  setDeleteModalOpen,
  openCalendar,
  setOpenCalendar,
}) => {
  return (
    <MobileModifierMenu
      elements={vestingPools}
      addElement={addVestingPool}
      deleteElement={deleteVestingPool}
      updateElement={updateVestingPool}
      mode="vestingSchedule"
      deleteModalOpen={deleteModalOpen}
      setDeleteModalOpen={setDeleteModalOpen}
      openCalendar={openCalendar}
      setOpenCalendar={setOpenCalendar}
    />
  );
};

export default function VestingSchedule() {
  const [vestingPools, setVestingPools] = useState<VestingPool[]>([
    {
      id: 1,
      poolName: "",
      tokenAmount: "",
      tokenType: "USDT",
      tokenPrice: "",
      cliffPeriodValue: "6",
      cliffPeriodUnit: "month",
      vestingPeriodValue: "6",
      vestingPeriodUnit: "month",
      tgeDate: "Feb 24, 2021",
    },
  ]);

  const [openCalendar, setOpenCalendar] = useState<number | null>(null);

  const addVestingPool = () => {
    setVestingPools([
      ...vestingPools,
      {
        id: Math.max(...vestingPools.map((pool) => pool.id)) + 1,
        poolName: "Add vesting pool",
        tokenAmount: "",
        tokenType: "USDT",
        tokenPrice: "",
        cliffPeriodValue: "",
        cliffPeriodUnit: "month",
        vestingPeriodValue: "",
        vestingPeriodUnit: "month",
        tgeDate: "",
      },
    ]);
  };

  const updateVestingPool = (
    id: number,
    key: keyof VestingPool,
    value: string
  ) => {
    setVestingPools(
      vestingPools.map((pool) =>
        pool.id === id ? { ...pool, [key]: value } : pool
      )
    );
  };

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const deleteVestingPool = (id: number) => {
    setVestingPools(vestingPools.filter((pool) => pool.id !== id));
    setDeleteModalOpen(false);
  };

  return (
    <div className={styles.vestingScheduleContainer}>
      <div className={styles.header}>
        <h2 className={styles.gradientHeader}>Vesting Schedule</h2>
        <button
          className={`${styles.addPoolButton} hidden lg:flex gap-[0.1rem]`}
          onClick={addVestingPool}
        >
          <img
            src={AddCircle}
            alt="add circle"
            style={{ marginRight: "0.5rem" }}
          />{" "}
          Add pool
        </button>
      </div>
      <p className={styles.description}>
        Configure token generation parameters and vesting schedule for your
        startup
      </p>
      <NormalSizedVestingSchedule
        vestingPools={vestingPools}
        updateVestingPool={updateVestingPool}
        setOpenCalendar={setOpenCalendar}
        deleteVestingPool={deleteVestingPool}
        setDeleteModalOpen={setDeleteModalOpen}
        deleteModalOpen={deleteModalOpen}
        openCalendar={openCalendar}
      />
      <PhoneSizedVestingSchedule
        vestingPools={vestingPools}
        addVestingPool={addVestingPool}
        deleteVestingPool={deleteVestingPool}
        updateVestingPool={updateVestingPool}
        deleteModalOpen={deleteModalOpen}
        setDeleteModalOpen={setDeleteModalOpen}
        openCalendar={openCalendar}
        setOpenCalendar={setOpenCalendar}
      />
    </div>
  );
}
