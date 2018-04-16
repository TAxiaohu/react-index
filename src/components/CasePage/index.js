import React, { Component } from 'react';
import { Row, Col } from "antd";
import { Link } from 'dva/router';
import styles from "./index.less";

const Images = ['', '', '', '', '', ''];

class CasePage extends Component {
  render() {
    return (
      <div className={styles.case}>
        <div className={styles.container}>
          <h2>成功案例</h2>
          <Row gutter={16} className={styles.pd60}>
            {Images.map((item, index) => (
              <Col key={index} span={8} style={{ overflow: 'hidden' }}>
                <Link className={styles.CaseImg} style={{ padding: '0 15px' }} to="/case-detail">
                  <img width="100%" src={require(`../../assets/case${index + 1}.jpg`)} alt="" />
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default CasePage;