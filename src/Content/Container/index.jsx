import { Button } from "antd";
import styles from "./styles.module.scss";
import { MenuOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { triggerSideBar } from "../../redux/navigation/navigationSlice";

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
    </div>
  );
}
