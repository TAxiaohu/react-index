import React, { Component } from 'react';
import styles from "./index.css";

class Content extends Component {
  render() {
    const { Children } = this.props;
    return (
      <div className={styles.Content}>
        <div style={{ background: '#fff',minHeight: 380 }}>
          <Children />
        </div>
      </div>
    );
  }
}

export default Content;