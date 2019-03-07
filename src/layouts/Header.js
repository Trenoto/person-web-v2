import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import Link from 'umi/link';
import styles from './Header.less';
import logo from '../assets/logo.svg';

const AntHeader = Layout.Header;

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AntHeader className={this.props.location.pathname === "/" ? styles.header : styles.headerDark} >
                <div className="logo" />
                <Menu
                    mode="horizontal"
                    className={this.props.location.pathname === "/" ? styles.menu : styles.menuDark}
                >
                    <Menu.Item className={styles.navbarItemLeft} key="logo"><Link to="/"><img alt="logo" className={styles.logo} src={logo} /></Link></Menu.Item>
                    <Menu.Item className={styles.navbarItemRight} key="about"><Link to="/about">about</Link></Menu.Item>
                    <Menu.Item className={styles.navbarItemRight} key="contact"><Link to="/contact">contact</Link></Menu.Item>
                    <Menu.Item className={styles.navbarItemRight} key="blog"><Link to="/blog">blog</Link></Menu.Item>
                </Menu>
            </AntHeader>
        );
    }
}

export default Header;