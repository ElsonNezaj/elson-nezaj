import { Layout } from "antd";
import styles from "./styles.module.scss";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import Navigation from "../Navigation";
import { useDispatch, useSelector } from "react-redux";
import { triggerSideBar } from "../redux/navigation/navigationSlice";
import ContentContainer from "../Content/Container";

export default function Container() {
  const dispatch = useDispatch();
  const sideBarState = useSelector((state) => state.navigation.sideBarState);
  return (
    <div className={styles.container}>
      <Layout className={styles.layout}>
        <Sider hidden={sideBarState} className={styles.sideBar}>
          <Navigation />
        </Sider>
        <Content
          onClick={() => dispatch(triggerSideBar(true))}
          className={styles.mainContent}
        >
          {sideBarState === false && <div className={styles.backDrop} />}
          <ContentContainer />
        </Content>
      </Layout>
    </div>
  );
}
