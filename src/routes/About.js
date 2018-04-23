import React, { Component } from 'react';
import { Row, Col } from "antd";
import styles from "./About.less";

class About extends Component {
  render() {
    return (
      <div className={styles.body}>
        <Row gutter={48} style={{ margin: 0 }}>
          <Col span={12} >
            <img src={require('../assets/about.jpg')} alt="" />
          </Col>
          <Col span={12}>
            <h3 className={styles.log}>上海在久实业有限公司</h3>
            <div className={styles.content}>
              <p>
                是一个充满活力和创造力的群体，我们秉承开拓创新、锐意进取、科学管理的理念，竭诚为您服务。我们团队的成员，均已在IT行业服务十年以上，思维活跃、操作规范、具有丰富的服务经验和应变能力。
              </p>
              <p>
                互联网+”的春风已经刮遍大江南北，我们衷心希望：能帮助您充分利用互联网的平台拓展您的事业、实现您的梦想，同时减少您在繁琐的IT事务上的精力消耗，为您事业的腾飞助上一臂之力。
              </p>
              <p>
                上海在久实业有限公司 全体同仁，愿与您的企业一起成长，在协助您崛起于“互联网+”的风口的同时，实现我们自身的价值。
              </p>
            </div>
          </Col>
        </Row>
      </div >
    );
  }
}

export default About;