/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
import './upload.css';

import React, { useEffect, useState } from 'react';
import { Flex, Progress, Tooltip } from 'antd';
import { useSelector } from 'react-redux';

function Uploader() {
  const [perc, setPerc] = useState(33);
  const [visible, setVisible] = useState(true);

  const arrForUpload = [];

  useEffect(() => {
    if (arrForUpload.length) {
      const time = setTimeout(() => {
        setVisible(false);
      }, 500);
      return () => clearTimeout(time);
    }
  }, [arrForUpload]);

  const load = useSelector((state) => {
    const loader = state.fetchTicketId.ticket.length;
    return loader;
  });

  if (load > 0 && load < 600) {
    if (perc !== 66) {
      setPerc(66);
    }
  }
  if (load > 600) {
    if (perc !== 100) {
      setPerc(100);
    }
  }

  if (perc === 100) {
    arrForUpload.push(perc);
  }

  if (!visible) {
    return <div className="divv" />;
  }
  return (
    <Flex gap="small" vertical>
      <Tooltip title="3 done / 3 in progress / 4 to do">
        {visible && (
          <Progress
            percent={perc}
            success={{ percent: { perc }, strokeColor: '#2196f3' }}
            size="small"
            showInfo={false}
          />
        )}
      </Tooltip>
    </Flex>
  );
}
export default Uploader;
