import { Button, Typography } from "antd";
import styles from "./styles.module.scss";
import { MenuOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { triggerSideBar } from "../../redux/navigation/navigationSlice";
import { Header } from "antd/es/layout/layout";

export default function ContentContainer() {
  const dispatch = useDispatch();
  return (
    <div className={styles.contentContainer}>
      <div className={styles.menuButtonContainer}>
        <Button
          onClick={() => dispatch(triggerSideBar(true))}
          className={styles.menuButton}
        >
          <MenuOutlined />
        </Button>
      </div>
      <Header className={styles.header}>
        <div className={styles.nameContainer}>
          <Typography className={styles.mainTitle}>Elson</Typography>
          <Typography className={styles.subTitle}>Nezaj</Typography>
        </div>
      </Header>
    </div>
  );
}
