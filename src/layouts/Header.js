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
            backGroundIsLight: false,
            path:  ''
        }
        // this.setNarBarTextStyle.bind(this);
        console.log("header");
    }

    // setNarBarTextStyle() {
    //     console.log("header" + document.body.style.backgroundColor);
    //     if (document.body.style.backgroundColor === "rgb(255, 255, 255)") {
    //         this.setState({
    //             backGroundIsLight: true
    //         });
    //     } else {
    //         this.setState({
    //             backGroundIsLight: false
    //         });
    //     }
    // }

    componentDidMount() {
        this.setState({
            path: this.props.location.pathname
        });
        console.log("header1" + this.props.location.pathname);
    }

    // componentDidMount() {
    //     this.setNarBarTextStyle();
    // }

    // componentWillUnmount() {
    //     this.setNarBarTextStyle();
    // }

    // componentDidMount() {
    //     console.log("headerbgc" + document.body.style.backgroundColor);
    // }

    render() {
        return (
            <AntHeader className={styles.header} >
                <div className="logo" />
                <Menu
                    mode="horizontal"
                    className={this.state.backGroundIsLight ? styles.menuTextDark : styles.menu}
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