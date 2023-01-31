import React, { useState } from 'react';
import cs from './index.module.less';

const Popup: React.FC = () => {
  const [logined, setLogined] = useState(false);

  return (
    <div
      className={cs.container}
      style={{
        height: '420px'
        // height: logined ? '218px' : '420px',
      }}>
      <div className={cs.helpContainer}>
        <a className={cs.help} href={'https://www.baidu.com'} target={'_blank'}>
          帮助
        </a>
      </div>
    </div>
  );
};

export default Popup;
