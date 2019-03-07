import React, { Component } from 'react';
import styles from './index.less';
import { Carousel } from 'antd';

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sloganBlack: false
    }
  }

   setSloganColor = (index) => {
     if (index === 1) {
      this.setState({
        sloganBlack: true,
      });
     } else {
      this.setState({
        sloganBlack: false,
      });
     }
  };

  render() {
    return (
      <div>
        <div className={styles.wrap}>
          <div className={this.state.sloganBlack ? styles.sloganBlack : styles.slogan}></div>
        </div>
        <Carousel autoplay autoplaySpeed="62" effect="fade" className={styles.carousel} beforeChange={ (current, next) => this.setSloganColor(next) }>
          <div className={styles.carouselImage1}></div>
          <div className={styles.carouselImage2}></div>
          <div className={styles.carouselImage3}></div>
        </Carousel>
      </div>
    );
  }
}
