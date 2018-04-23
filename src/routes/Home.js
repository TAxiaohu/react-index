import React, { Component } from 'react';
import { Carousel, Row, Col } from "antd";

import ServicePage from "../components/ServicePage";
import CasePage from "../components/CasePage";
import Consultation from "../components/Consultation";

import styles from "./Home.less";

const introduce = [
  {
    key: 'A',
    tyconZh: '方案合理、质量可靠',
    tyconEn: 'REASONABLE SCHEME',
    describe: '以上百家成功案例经验，量身定制最合理的开发方案；遵照全球公认的ISO质量体系，精细打磨产品每一个细节； 经过我们的努力，给用户带来即舒适又美观的体验，同时又能章显其商业价值~',
  },
  {
    key: 'B',
    tyconZh: '互相沟通、面面俱到',
    tyconEn: 'REASONABLE SCHEME',
    describe: '以上百家成功案例经验，量身定制最合理的开发方案；遵照全球公认的ISO质量体系，精细打磨产品每一个细节； 经过我们的努力，给用户带来即舒适又美观的体验，同时又能章显其商业价值~',
  },
  {
    key: 'C',
    tyconZh: '交付准时、服务贴心',
    tyconEn: 'DELIVERY ON TIME',
    describe: '以上百家成功案例经验，量身定制最合理的开发方案；遵照全球公认的ISO质量体系，精细打磨产品每一个细节； 经过我们的努力，给用户带来即舒适又美观的体验，同时又能章显其商业价值~',
  }
];

const images = ['', '', '', ''];

class Home extends Component {
  next = (e) => {
    console.log(23);
  }
  render() {
    return (
      <div>
        <div className={styles.carousel}>
          {/* <a className={styles.prev} onClick={this.prev}><Icon type="left" /></a> */}
          {/* <a className={styles.next} onClick={this.next}><Icon type="right" /></a> */}
          <Carousel autoplay>
            {images.map((item, index) => (
              <div key={index}><img className={styles.Img} src={require(`../assets/banner${index + 1}.jpg`)} alt="" /></div>
            ))}
          </Carousel>
        </div>
        <div className={styles.introduce}>
          <h2>公司介绍</h2>
          <div className={styles.detail}>
            <Row type="flex" justify="space-around">
              {introduce.map((item, index) => (
                <Col key={index} lg={{ span: 7 }}>
                  <div className={styles.Card}>
                    <div className={styles.ty}><span>{item.key}</span></div>
                    <div className={styles.tycon}>
                      <h3>{item.tyconZh}</h3>
                      <p>{item.tyconEn}</p>
                    </div>
                    <p className={styles.footer}>{item.describe}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div className={styles.strength}>
          <div className={styles.container}>
            <Row>
              <Col lg={{ span: 8 }} style={{ padding: '0 15px' }}>
                <div className={styles.exhibition}>
                  <h3>全面服务助企业迈向辉煌</h3>
                  <ul>
                    <li className={styles.clearfix}>
                      <div>
                        <span>A</span>
                      </div>
                      <p>
                        汇聚全方位技术人员于一体
									</p>
                    </li>
                    <li className={styles.clearfix}>
                      <div>
                        <span>B</span>
                      </div>
                      <p>汇聚全方位技术人员于一体</p>
                    </li>
                    <li className={styles.clearfix}>
                      <div>
                        <span>C</span>
                      </div>
                      <p>汇聚全方位技术人员于一体</p>
                    </li>
                    <li className={styles.clearfix}>
                      <div>
                        <span>D</span>
                      </div>
                      <p>汇聚全方位技术人员于一体</p>
                    </li>
                  </ul>
                  <p><a href="">立即联系我们</a></p>
                </div>
              </Col>
              <Col lg={{ span: 12, offset: 4 }}>
                <div className={styles.strengthBrief}>
                  <h2>我们的实力</h2>
                  <div className={styles.charIntr}>
                    <p>
                      我们的实力：公司融合策划、设计、创新、制作、技术研发于一
                   体，汇集了一批资深的交互设计、策划、高级程序开发人员、公
                   司以专业的技术、国际水准的设计理念、突破性的创意思维和丰
                   富的设计经验与逻辑思维，为客户提供最佳的解决方案。
                  </p>
                    {/* <a href="">查看更多</a> */}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <ServicePage />
        <CasePage />
        <Consultation />
      </div>
    );
  }
}

export default Home;