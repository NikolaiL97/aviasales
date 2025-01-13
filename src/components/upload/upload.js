/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */

import React, { useEffect, useState } from 'react';
import { Flex, Progress, Tooltip } from 'antd';

import UseStore from '../utilits';

import classes from './upload.module.scss';

function Uploader() {
  const [perc, setPerc] = useState(30);
  const [visible, setVisible] = useState(true);
  const [inter, setInter] = useState(null);

  const { error, stop } = UseStore();

  if (stop && perc !== 100) setPerc(100);

  useEffect(() => {
    if (perc === 30) {
      const interval = setInterval(() => {
        setPerc((s) => s + 5);
        setInter(interval);
      }, 500);
    } else if (perc === 100 || error) {
      clearInterval(inter);
      const time = setTimeout(() => {
        setVisible(false);
      }, 500);
      return () => clearTimeout(time);
    }
  }, [perc]);

  return visible ? (
    <Flex gap="small" vertical>
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress
          percent={perc}
          success={{ percent: { perc }, strokeColor: '#2196f3' }}
          size="small"
          showInfo={false}
        />
      </Tooltip>
    </Flex>
  ) : (
    <div className={classes.divv} />
  );
}

export default Uploader;
