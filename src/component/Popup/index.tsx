import React, { useEffect, useState } from 'react';
import cs from './index.module.less';
import { changeDebugUS, isDebugUS } from '../../common/utils';

const Popup: React.FC = () => {
  const [debugUS, setDebugUS] = useState(false);

  useEffect(() => {
    isDebugUS().then((res) => setDebugUS(res));
  }, []);

  return (
    <div className={cs.container}>
      <div className={cs.item}>
        Pionex.US Debug
        <input
          type='checkbox'
          checked={debugUS}
          onChange={(e) => {
            setDebugUS(e.target.checked);
            changeDebugUS(e.target.checked);
          }}
        />
      </div>
    </div>
  );
};

export default Popup;
