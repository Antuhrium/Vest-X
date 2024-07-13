import { useState } from "react";
import styles from "./styles.module.scss";
import PeriodDropdown from "../../../../components/PeriodDropdown";
import SmallTokenDropdown from "../../../../components/SmallTokenDropdown";
import { Calendar } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import DeleteConfirmationModal from "../../../../components/DeletePoolConfirmationModal";
import AddCircle from "/images/add-circle.svg";
import DeleteCircle from "/images/delete-circle.svg";

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
        id: Date.now(),
        poolName: "",
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
        <button className={styles.addPoolButton} onClick={addVestingPool}>
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
            <button className={styles.actionButton}>
              <div className={styles.actionButtonInner}>
                <span className={styles.smallBlueCircle}>+</span> Add to cliff
              </div>
            </button>
            <button className={styles.actionButton}>
              <div className={styles.actionButtonInner}>
                <span className={styles.smallBlueCircle}>+</span> Add to vesting
              </div>
            </button>
            <button className={styles.actionButton}>
              <div className={styles.actionButtonInner}>
                <span className={styles.smallBlueCircle}>+</span> Add to TGE
              </div>
            </button>
          </div>
          <div className={styles.flexRow}>
            <div className={styles.formGroup}>
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
              <label
                style={{
                  display: "flex",
                  marginTop: "-1.5rem",
                }}
              >
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
}
