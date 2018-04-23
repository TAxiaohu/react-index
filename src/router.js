import React from 'react';
import { LocaleProvider } from 'antd'
import { Route, Switch, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
import Home from './routes/Home';
import BaseLayout from "./layout/BaseLayout";

import zhCN from 'antd/lib/locale-provider/zh_CN';

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/about',
      comopnent: dynamic({
        component: () => import('./routes/About'),
      }),
    },
    {
      path: '/case',
      comopnent: dynamic({
        component: () => import('./routes/Case'),
      }),
    },
    {
      path: '/contact',
      comopnent: dynamic({
        component: () => import('./routes/Contact'),
      }),
    }
  ];

  return (
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <BaseLayout Children={() => (
          <Switch>
            <Route path="/" exact component={Home} />
            {
              routes.map(({ path, comopnent }, key) => (
                <Route key={key}
                  exact
                  path={path}
                  component={comopnent}
                />
              ))
            }
          </Switch>
        )} />
      </ConnectedRouter>
    </LocaleProvider>
  );
}

export default RouterConfig;
