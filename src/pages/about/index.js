import React, { Component } from 'react';
import { Row, Col, Avatar, Icon, Card, Timeline } from 'antd';
import { formatMessage } from 'umi/locale';
import styles from './index.less';
import avater from '../../assets/avatar.png';
import springLogo from '../../assets/tech/spring.png';
import reactLogo from '../../assets/tech/react.png';
import mysqlLogo from '../../assets/tech/mysql.png';

export default class AboutPage extends Component {
  render() {
    return (
      <div className={styles.content}>
        <Row type="flex">
          <Col md={6} className={styles.profile}>
            <div className={styles.profileContent}>
              <Avatar size={165} src={avater} />
              <div className={styles.des}>
                <div className={styles.name}>
                  <h1><span>{formatMessage({ id: 'about.profile.name' })}</span></h1>
                </div>
                <div className={styles.title}>
                  <span>{formatMessage({ id: 'about.profile.title' })}</span>
                </div>
                <div className={styles.contact}>
                  <span><Icon type="mail" /> : <a href="mailto:hongtao@nyu.edu">{formatMessage({ id: 'about.profile.email' })}</a></span>
                  <br />
                  <span><Icon type="environment" /> : <a href="https://en.wikipedia.org/wiki/New_York_City" target="_blank" rel="noopener noreferrer">{formatMessage({ id: 'about.profile.location' })}</a></span>
                </div>
              </div>
            </div>
          </Col>
          <Col md={18} className={styles.biograhy}>
              <div className={styles.rightBlockOne}>
                  <p styles={{textAlign: 'left'}}>MS Candidates in Computing, Entrepreneurship and Innovation<br/>New York University<br/>Courant Institue of Mathmatical Sciences</p>
                  <p styles={{textAlign: 'left'}}>I come from <a href="https://en.wikipedia.org/wiki/New_York_City" target="_blank" rel="noopener noreferrer">Wuhan, China</a>.<br/>I recieved my bachelor's degree in computer science from University of California, Irvine.<br/>I am now running a startup with a group of talented people.</p>
              </div>
            {/* <div className={styles.tech}>
              <p style={{ textAlign: 'left', fontSize: '20px' }}>{formatMessage({ id: 'about.biography.interest.title' })}</p>
              <Row gutter={16}>
                <Col md={2} xl={6}>
                  <Card bordered={true} cover={<img alt="spring" src={springLogo} style={{ marginTop: 20}} />} style={{ padding: 40, height: 180 }}>
                  </Card>
                </Col>
                <Col md={2} xl={6}>
                  <Card bordered={true} cover={<img alt="react" src={reactLogo} style={{ marginTop: 20}} />} style={{ padding: 40, height: 180 }}>
                  </Card>
                </Col>
                <Col md={2} xl={6}>
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
            </div> */}
          </Col>
        </Row>
      </div>
    );
  }
}
