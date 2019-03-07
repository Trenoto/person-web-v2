import React, { Component } from 'react';
import { Row, Col, Layout, Avatar, Icon, Card } from 'antd';
import styles from './index.less';
import avater from '../../assets/avatar.png';
import springLogo from '../../assets/tech/spring.png';
import reactLogo from '../../assets/tech/react.png';
import mysqlLogo from '../../assets/tech/mysql.png';

const { Content } = Layout;
const { Meta } = Card;

export default class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "rgb(255, 255 ,255)",
    }
  }

  render() {
    return (
      <div className={styles.content}>
        <Row gutter={24}>
          <Col span={6} className={styles.profile}>
            <div className={styles.profileContent}>
              <Avatar size={165} src={avater} />
              <div className={styles.des}>
                <div className={styles.name}>
                  <span>Hongtao Liu</span>
                </div>
                <div className={styles.title}>
                  <span>Software Engineer</span>
                </div>
                <div className={styles.contact}>
                  <span><Icon type="mail" /> : <a href="mailto:faberaldliu@gmail.com">faberaldliu@gmail.com</a></span>
                  <br />
                  <span><Icon type="environment" /> : <a href="https://en.wikipedia.org/wiki/Wuhan" target="_blank">Wuhan, China</a></span>
                </div>
              </div>
            </div>
          </Col>
          <Col span={18} className={styles.biograhy}>
            <div className={styles.tech}>
              <Row gutter={16}>
                <Col span={6}>
                  <Card bordered={true} cover={<img alt="spring" src={springLogo} style={{height: 60, width: 'auto'}}/>} style={{ padding: 40, height: 180}}>
                    <Meta description="Spring MVC Spring Boot"/>
                  </Card>
                </Col>
                <Col span={6}>
                <Card bordered={true} cover={<img alt="react" src={reactLogo} style={{height: 60, width: 'auto'}}/>} style={{ padding: 40, height: 180}}>
                    <Meta description="React"/>
                  </Card>
                </Col>
                <Col span={6}>
                <Card bordered={true} cover={<img alt="react" src={mysqlLogo} style={{height: 60, width: 'auto'}}/>} style={{ padding: 40, height: 180}}>
                    <Meta description="React"/>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
