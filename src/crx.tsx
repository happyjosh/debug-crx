import { isDebugUS } from './common/utils';

function runContent() {
  isDebugUS().then((res) => {
    if (!res) {
      return;
    }

    if (
      location.hostname === 'www.pionexusdev.com' &&
      location.pathname.endsWith('/sign')
    ) {
      window.location.replace(
        `http://localhost:3000/en-US/sign${location.search}`
      );
    }
  });
}

runContent();
