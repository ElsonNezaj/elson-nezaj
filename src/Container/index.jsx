import { Layout } from "antd";
import styles from "./styles.module.scss";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import Navigation from "../Navigation";

export default function Container() {
  return (
    <div className={styles.container}>
      <Layout className={styles.layout}>
        <Sider className={styles.sideBar}>
          <Navigation />
        </Sider>
        <Content className={styles.mainContent}>Main Content</Content>
      </Layout>
    </div>
  );
}
