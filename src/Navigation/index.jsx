import { Typography } from "antd";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedNavigation } from "../redux/navigation/navigationSlice";

const NAVIGATION_OBJECT = [
  { label: "Main", value: "main" },
  { label: "Projects", value: "projects" },
  { label: "Contact", value: "contact" },
];

export default function Navigation() {
  const dispatch = useDispatch();
  const selectedNavigation = useSelector(
    (state) => state.navigation.selectedNavigation
  );

  const handleItemClick = (value) => {
    dispatch(setSelectedNavigation(value));
  };

  return (
    <div className={styles.navigationContainer}>
      <div className={styles.nameContainer}>
        <Typography className={styles.mainText}>ELSON</Typography>
        <Typography className={styles.subText}>NEZAJ</Typography>
      </div>
      <div className={styles.navigationItems}>
        {NAVIGATION_OBJECT.map((nav) => (
          <div
            onClick={() => handleItemClick(nav.value)}
            className={`${styles.navigationItem} ${
              selectedNavigation === nav.value && styles.selectedItem
            }`}
          >
            <span className={styles.selectedDot}>
              {selectedNavigation === nav.value && ">"}
            </span>
            <Typography className={styles.navigationLabel}>
              {nav.label}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
