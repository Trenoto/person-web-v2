import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { FormattedMessage } from 'umi/locale';
import Link from 'umi/link';
import styles from './Header.less';
import logo from '../assets/logo.svg';
import SelectLanguage from '@/components/SelectLanguage';

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
                    className={styles.menu}
                >
                    <Menu.Item className={styles.navbarItemLeft} key="logo"><Link to="/"><img alt="logo" className={styles.logo} src={logo} /></Link></Menu.Item>
                    <Menu.Item className={styles.navbarItemRight} key="locale"><SelectLanguage /></Menu.Item>
                    <Menu.Item className={styles.navbarItemRight} key="about"><Link to="/about"><FormattedMessage id="header.about" defaultMessage="about" /></Link></Menu.Item>
                    <Menu.Item className={styles.navbarItemRight} key="contact"><Link to="/contact"><FormattedMessage id="header.contact" defaultMessage="contact" /></Link></Menu.Item>
                    <Menu.Item className={styles.navbarItemRight} key="blog"><Link to="/blog"><FormattedMessage id="header.blog" defaultMessage="blog" /></Link></Menu.Item>
                </Menu>
            </AntHeader>
        );
    }
}

export default Header;