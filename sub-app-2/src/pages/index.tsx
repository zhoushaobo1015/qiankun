import React, { useState, useEffect } from 'react';
import styles from './index.less';

export default function IndexPage(props: any) {
  useEffect(() => {
    console.log(window.localStorage, 'window', props);
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Child 2</h1>
    </div>
  );
}
