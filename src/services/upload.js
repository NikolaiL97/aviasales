import './upload.css';

import React, { useState } from 'react';
import { Flex, Progress, Tooltip } from 'antd';
import { useSelector } from 'react-redux';

function Uploader() {
  const [perc, setPerc] = useState(33);
  const load = useSelector((state) => {
    const loader = state.fetchTicketId.ticket.length;
    return loader;
  });

  // console.log(load);

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
    return <div />;
  }
  return (
    <Flex gap="small" vertical>
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress
          percent={perc}
          success={{ percent: { perc }, strokeColor: 'blue' }}
          size="small"
          showInfo={false}
        />
      </Tooltip>
    </Flex>
  );
}
export default Uploader;
