import { Button } from "antd";
import styles from "./styles.module.scss";
import { MenuOutlined } from "@ant-design/icons";

export default function ContentContainer() {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.menuButtonContainer}>
        <Button className={styles.menuButton}>
          <MenuOutlined />
        </Button>
      </div>
    </div>
  );
}
