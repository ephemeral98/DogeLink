import { ReactElement } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { TRouterBefore } from './routes';

let tempElement: ReactElement | null = null;

function Guard({
  element,
  meta,
  handleRouteBefore,
}: {
  element: ReactElement;
  meta: Object;
  handleRouteBefore: TRouterBefore;
}) {
  meta = meta || {};
  // console.log('element...', element, meta, handleRouteBefore);
  const location = useLocation();
  const { pathname } = location;

  const navigate = useNavigate();

  if (handleRouteBefore) {
    if (tempElement === element) {
      return element;
    }
    const pathRes = handleRouteBefore({ pathname, meta });

    const pathResType = Object.prototype.toString.call(pathRes).match(/s(w+)]/)?.[1];
    if (pathResType === 'Promise') {
      pathRes!.then((res: string) => {
        if (res && res !== pathname) {
          navigate(res, { replace: true });
        }
      });
    } else {
      if (pathRes && pathRes !== pathname) {
        element = <Navigate to={pathRes} replace={true} />;
      }
    }
  }

  tempElement = element;
  return element;
}

export default Guard;
