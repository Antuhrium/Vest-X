import styles from "./styles.module.scss";
import TokenNetworkDropdown from "../../../../../components/TokenNetworkDropdown";
import SmartContractAuditorDropdown from "../../../../../components/SmartContractAuditorDropdown";
import CategoryDropdown from "../../../../../components/CategoryDropdown";

export default function BasicInformation() {
  return (
    <div className={styles.container}>
      <h2 className={styles.gradientHeader}>Basic Information</h2>
      <div className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Project name <span className={styles.requiredStar}>*</span>
          </label>
          <input className={styles.input} type="text" placeholder="EcoSwap" />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Token name <span className={styles.requiredStar}>*</span>
          </label>
          <input className={styles.input} type="text" placeholder="MyToken" />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Token symbol <span className={styles.requiredStar}>*</span>
          </label>
          <input className={styles.input} type="text" placeholder="MYT" />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Network of token <span className={styles.requiredStar}>*</span>
          </label>
          <TokenNetworkDropdown />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Token smart contract address{" "}
            <span className={styles.requiredStar}>*</span>
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="0x1a5FdBdC6eEF406abCC0550F7eef50aE310ede6C"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Smart contract auditor{" "}
            <span className={styles.requiredStar}>*</span>
          </label>
          <SmartContractAuditorDropdown />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Token smart contract audit link{" "}
            <span className={styles.requiredStar}>*</span>
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="0x1a5FdBdC6eEF406abCC0550F7eef50aE310ede6C"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Category of project <span className={styles.requiredStar}>*</span>
          </label>
          <CategoryDropdown />
          <span>Select max 3</span>
        </div>
        <div className={styles.formGroupFull}>
          <label className={styles.label}>
            Description for your project
            <span className={styles.requiredStar}>*</span>
          </label>
          <textarea
            className={styles.textarea}
            maxLength={500}
            placeholder="EcoSwap is a decentralized marketplace and community platform that connects environmentally-conscious consumers with sustainable brands and eco-friendly products. Our platform aims to promote sustainability and reduce carbon footprints by offering a wide range of environmentally-friendly alternatives to everyday products."
          />
          <span>Maximum 500 symbols</span>
        </div>
      </div>
    </div>
  );
}
