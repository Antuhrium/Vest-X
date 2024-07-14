import styles from "./style.module.scss";

interface IHeaderTitle {
  children: React.ReactNode;
  className?: string;
  style?: Record<string, string>;
}

const HeaderTitle: React.FC<IHeaderTitle> = ({
  children,
  className,
  style = {},
}) => {
  return (
    <h1 className={`${styles.title} ${className}`} style={{ ...style }}>
      {children}
    </h1>
  );
};

export default HeaderTitle;
