import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import Link from 'umi/link';
import styles from './Header.less';

const AntHeader = Layout.Header;

class Header extends Component {
    render() {
        return (
            <AntHeader className={styles.header} >
                <div className="logo" />
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    className={styles.menu}
                >
                    <Menu.Item className={styles.navbarItem} key="about"><Link to="/about">about</Link></Menu.Item>
                    <Menu.Item className={styles.navbarItem} key="contact"><Link to="/contact">contact</Link></Menu.Item>
                    <Menu.Item className={styles.navbarItem} key="blog"><Link to="/blog">blog</Link></Menu.Item>
                </Menu>
            </AntHeader>
        );
    }
}

export default Header;