import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import Link from 'umi/link';
import styles from './Header.less';
import logo from '../assets/logo.svg';

const AntHeader = Layout.Header;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarTextIsTransparent: false,
        }
        this.setNarBarTextStyle.bind(this);
    }

    setNarBarTextStyle() {
        let backGroundColor = document.body.style.backGroundColor;
        if (backGroundColor === "rgb(255, 255, 255)") {
            this.setState({
                navBarTextIsTransparent: false
            });
        } else {
            this.setState({
                navBarTextIsTransparent: true
            });
        }
    }

    componentDidMount() {
        this.setNarBarTextStyle();
    }
    render() {
        return (
            <AntHeader className={styles.header} >
                <div className="logo" />
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    className={styles.menu}
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