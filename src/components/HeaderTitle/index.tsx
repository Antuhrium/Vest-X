import styles from "./style.module.scss";

interface IHeaderTitle {
  children: React.ReactNode;
  className?: string;
}

const HeaderTitle: React.FC<IHeaderTitle> = ({ children, className }) => {
  return <h1 className={`${styles.title} ${className}`}>{children}</h1>;
};

export default HeaderTitle;
