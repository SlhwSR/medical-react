import { Breadcrumb, Layout, Menu, Switch } from "antd";

import { useState, createElement, Suspense, memo } from "react";
import { QqOutlined } from "@ant-design/icons";
import { NavLink, useHref, useNavigate, useRoutes } from "react-router-dom";
import routes from "../../router";
import Loading from "@components/loading";
import { ColumnList, navheaer } from "../../common/maplist";
const { Header, Content, Sider } = Layout;
// const Demon=()=>(<div className="w-36 text-center">111</div>)
const Index = memo((props) => {
  const [skin, setskin] = useState(true);
  const navigator = useNavigate();
  const [bread, setbread] = useState("首页");
  const Controlbread = (item, key, value) => {
    console.log(item + "---" + key + "-----" + value);
    navigator(`/${key}`);
    setbread(key);
  };
  const switchtab = (item, key, value) => {
    navigator(`/${key}`);
    setbread(key);
  };
  return (
    <Layout style={{ height: "100%", width: "100%" }}>
      <Header>
        <Menu
          theme={skin ? "dark" : "light"}
          mode="horizontal"
          defaultSelectedKeys={["index"]}
          items={navheaer}
          className="ml-6"
          onClick={({ item, key, keypath }) => switchtab(item, key, keypath)}
        />
        <QqOutlined></QqOutlined>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{ overflow: "hidden" }}
          className="site-layout-background"
        >
          <Menu
            mode="inline"
            theme={skin ? "dark" : "light"}
            defaultSelectedKeys={["plan"]}
            defaultOpenKeys={["bed"]}
            style={{
              height: "100vh",
              borderRight: 0,
            }}
            onClick={({ item, key, keypath }) =>
              Controlbread(item, key, keypath)
            }
            items={ColumnList}
          ></Menu>
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <span>点前定位：</span>
            <Breadcrumb.Item>{bread}</Breadcrumb.Item>
            <div className="absolute right-10">
              <Switch
                className={skin ? "h-8 w-10 bg-black" : "h-8 w-10 bg-cyan-600"}
                onChange={() => setskin(!skin)}
              >
                切换模式
              </Switch>
              <span className="text-xl">换肤</span>
            </div>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 780,
            }}
          >
            <Suspense fallback={<Loading></Loading>}>
              {useRoutes(routes)}
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
});

export default Index;
