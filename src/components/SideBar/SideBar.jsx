import {
  InfoCircleOutlined,
  PieChartOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { Drawer, Layout, Menu } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Link, NavLink, useLocation } from 'react-router-dom'; // Import useLocation
import img from '../../constants/img';
import { GeneralData } from '../../context/General';
import '../style.scss';

const { Sider } = Layout;

function getItem(label, key, icon, children, path) {
  return {
    key,
    icon,
    children,
    label: path ? <NavLink to={path} activeClassName="active-link">{label}</NavLink> : label,
  };
}

const SideBar = ({ collapsed }) => {
  const { i18n, t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { setCollapsed, visible, setVisible } = useContext(GeneralData);
  const location = useLocation(); // Get the current URL location
  const [selectedKey, setSelectedKey] = useState('1');

  // Update selected key based on the current route
  useEffect(() => {
    setSelectedKey(location.pathname); // Set the current path as selectedKey
  }, [location.pathname]); // Re-run this effect when location changes

  const items = [
    getItem(t('menu.dashboard'), '/', <PieChartOutlined />, null, '/'),
   
  ];

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <>
      {isMobile ? (
        <div>
          <Drawer
            title="Moon Light "
            placement="left"
            onClose={closeDrawer}
            visible={visible}
            bodyStyle={{ padding: 0 }}
            size='small'
          >
            <Menu
              theme="light"
              selectedKeys={[selectedKey]} // Set selected key for mobile view
              mode="inline"
              items={items}
            />
          </Drawer>
        </div>
      ) : (
        <Sider
          className="sider"
          style={{
            padding: 0,
            background: '#fff',
            position: 'fixed',
            height: '100vh',
            transition: 'width 0.2s ease-in-out',
            overflowY: 'scroll',
          }}
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth={60}
          onCollapse={(collapse) => setCollapsed(collapse)}
        >
          <div className="demo-logo-vertical">
            <Link to={'/'}>
              <img src={!collapsed ? img.logo : img.logo} alt="" width={!collapsed ? 100:40} />
            </Link>
          </div>
          <Menu
            theme="light"
            selectedKeys={[selectedKey]} // Set selected key based on the path
            mode="inline"
            items={items}
          />
        </Sider>
      )}
    </>
  );
};

export default SideBar;