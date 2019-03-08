import React, { Component } from 'react';
import { setLocale, getLocale } from 'umi/locale';
import { Icon, Dropdown, Menu } from 'antd';
import styles from './index.less';

export default class SelectLanguage extends Component {
    changeLanguage = ({ key }) => {
        setLocale(key);
    };

    render() {
        const selectedLanguage = getLocale();
        const locales = ['en-US', 'zh-CN'];
        const languageLabels = {
            'en-US': 'English',
            'zh-CN': '简体中文',
        };
        const languageIcons = {
            'en-US': '🇺🇸',
            'zh-CN': '🇨🇳',
        };
        const languageMenu = (
            <Menu className={styles.menu} selectedKeys={[selectedLanguage]} onClick={this.changeLanguage}>
              {locales.map(locale => (
                <Menu.Item key={locale}>
                  <span role="img" aria-label={languageLabels[locale]}>
                    {languageIcons[locale]}
                  </span>
                  {' '}
                  {languageLabels[locale]}
                </Menu.Item>
              ))}
            </Menu>
        );

        return (
            <Dropdown overlay={languageMenu} placement="bottomLeft">
              <span >
                <Icon type="global" className={styles.icon}/>
              </span>
            </Dropdown>
        );
    }
}