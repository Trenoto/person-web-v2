import React, { Component } from 'react';
import { Icon, Dropdown, Menu, Popover } from 'antd';
import { FormattedMessage } from 'umi/locale';
import styles from './index.less';
import wechatCode from '../../assets/contact/wechat-code.jpg'

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1076727_ey2czat372r.js',
});

const emailMenu = (
    <Menu>
      <Menu.Item>
        <a href="mailto:faberaldliu@gmail.com"><FormattedMessage id="contact.email" defaultMessage="send a email" /></a>
      </Menu.Item>
    </Menu>
  );

  const wechatContent = (
    <div className={styles.wechatCode}> 
      <img src={wechatCode} alt="wechat-code" />
    </div>
  );

export default class AboutPage extends Component {
    render() {
        return (
            <div className={styles.content}>
                <div className={styles.socialIcons}>
                    <Dropdown overlay={emailMenu} placement="bottomCenter">
                        <IconFont style={{ fontSize: '100px', marginRight: '80px' }} type="icon-email" />
                    </Dropdown>
                    {/* <IconFont style={{ fontSize: '100px', marginRight: '80px' }} type="icon-Facebook" /> */}
                    <a href="https://www.linkedin.com/in/hongtao-liu-885969139" target="_blank">
                        <IconFont style={{ fontSize: '100px', marginRight: '80px' }} type="icon-social-linkedin" />
                    </a>
                    <a href="https://www.instagram.com/faberald/" target="_blank">
                        <IconFont style={{ fontSize: '100px', marginRight: '80px' }} type="icon-social-instagram" />
                    </a>
                    <a href="https://github.com/Trenoto" target="_blank">
                        <IconFont style={{ fontSize: '100px', marginRight: '80px' }} type="icon-github" />
                    </a>
                    <Popover content={wechatContent}>
                        <IconFont style={{ fontSize: '100px', marginRight: '80px' }} type="icon-wechat" />
                    </Popover>
                </div>
            </div>
        );
    }
}
