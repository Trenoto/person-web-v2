import React, { Component } from 'react';
import { Row, Col, Layout, Avatar, Icon, Card, Timeline } from 'antd';
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
              <p style={{ textAlign: 'left', fontSize: '20px' }}>My Interests:</p>
              <Row gutter={16}>
                <Col span={6}>
                  <Card bordered={true} cover={<img alt="spring" src={springLogo} />} style={{ padding: 40, height: 180 }}>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card bordered={true} cover={<img alt="react" src={reactLogo} />} style={{ padding: 40, height: 180 }}>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card bordered={true} cover={<img alt="react" src={mysqlLogo} />} style={{ padding: 40, height: 180 }}>
                  </Card>
                </Col>
              </Row>
            </div>
            <div className={styles.education}>
              <p style={{ textAlign: 'left', fontSize: '20px' }}>My Education:</p>
              <div className={styles.timeline}>
                <Timeline mode="left" className={styles.timeline}>
                  <Timeline.Item color="orange">Junior High School: Wuhan Foreign Languages School <Icon type="environment" />Wuhan, China</Timeline.Item>
                  <Timeline.Item>High School: Wuhan Foreign Languages School <Icon type="environment" />Wuhan, China</Timeline.Item>
                  <Timeline.Item color="green">Bachelor's Degree of Science in Computer Science: Univeristy of California, Irvine <Icon type="environment" />Irvine, California</Timeline.Item>
                  <Timeline.Item dot={<Icon type="clock-circle" style={{ fontSize: '16px'}} />}>Getting a Master Degree in Computer Science <Icon type="environment" />Somewhere in the United States</Timeline.Item>
                </Timeline>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
