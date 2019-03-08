import React, { Component } from 'react';
import { Row, Col, Layout, Avatar, Icon, Card, Timeline } from 'antd';
import { formatMessage } from 'umi/locale';
import styles from './index.less';
import avater from '../../assets/avatar.png';
import springLogo from '../../assets/tech/spring.png';
import reactLogo from '../../assets/tech/react.png';
import mysqlLogo from '../../assets/tech/mysql.png';

const { Content } = Layout;

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
                  <span>{formatMessage({ id: 'about.profile.name' })}</span>
                </div>
                <div className={styles.title}>
                  <span>{formatMessage({ id: 'about.profile.title' })}</span>
                </div>
                <div className={styles.contact}>
                  <span><Icon type="mail" /> : <a href="mailto:faberaldliu@gmail.com">{formatMessage({ id: 'about.profile.email' })}</a></span>
                  <br />
                  <span><Icon type="environment" /> : <a href="https://en.wikipedia.org/wiki/Wuhan" target="_blank">{formatMessage({ id: 'about.profile.location' })}</a></span>
                </div>
              </div>
            </div>
          </Col>
          <Col span={18} className={styles.biograhy}>
            <div className={styles.tech}>
              <p style={{ textAlign: 'left', fontSize: '20px' }}>{formatMessage({ id: 'about.biography.interest.title' })}</p>
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
              <p style={{ textAlign: 'left', fontSize: '20px' }}>{formatMessage({ id: 'about.biography.education.title' })}</p>
              <div className={styles.timeline}>
                <Timeline mode="left" className={styles.timeline}>
                  <Timeline.Item color="orange">{formatMessage({ id: 'about.biography.education.juniorhighschool.name' })}<Icon type="environment" />{formatMessage({ id: 'about.biography.education.juniorhighschool.location' })}</Timeline.Item>
                  <Timeline.Item>{formatMessage({ id: 'about.biography.education.highschool.name' })}<Icon type="environment" />{formatMessage({ id: 'about.biography.education.highschool.location' })}</Timeline.Item>
                  <Timeline.Item color="green">{formatMessage({ id: 'about.biography.education.college.name' })}<Icon type="environment" />{formatMessage({ id: 'about.biography.education.college.location' })}</Timeline.Item>
                  <Timeline.Item dot={<Icon type="clock-circle" style={{ fontSize: '16px'}} />}>{formatMessage({ id: 'about.biography.education.graduateschool.name' })}<Icon type="environment" />{formatMessage({ id: 'about.biography.education.graduateschool.location' })}</Timeline.Item>
                </Timeline>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
