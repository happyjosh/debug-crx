import React, { useEffect, useState } from 'react';
import cs from './index.module.less';

const DEBUG_US_KEY = 'debug_us';

const Popup: React.FC = () => {
  const [debugUS, setDebugUS] = useState(false);

  useEffect(() => {
    chrome.storage.local.get([DEBUG_US_KEY]).then((result) => {
      setDebugUS(!!result[DEBUG_US_KEY]);
    });
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
            chrome.storage.local.set({ [DEBUG_US_KEY]: true }).then(() => {});
          }}
        />
      </div>
    </div>
  );
};

export default Popup;
