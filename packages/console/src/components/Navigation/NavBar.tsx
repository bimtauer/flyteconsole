import * as React from 'react';
import { Suspense, lazy } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { navBarContentId } from 'common/constants';
import { FlyteNavigation } from '@flyteorg/common';
import { useExternalConfigurationContext } from 'basics/ExternalConfigurationProvider';
import { makeStyles } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { getFlyteNavigationData } from './utils';
import { useTopLevelLayoutContext } from './TopLevelLayoutState';

export interface NavBarProps {
  useCustomContent?: boolean;
  navigationData?: FlyteNavigation;
}

const DefaultAppBarContent = lazy(() => import('./DefaultAppBarContent'));

/** Contains all content in the top navbar of the application. */
export const NavBar = (props: NavBarProps) => {
  const navData = props.navigationData ?? getFlyteNavigationData();
  const layoutState = useTopLevelLayoutContext();

  const styles = makeStyles(theme => ({
    spacer: theme.mixins.toolbar as CSSProperties,
    navBar: {
      color: navData?.color,
      background: navData?.background,
      top: 0,
    },
    inlineToolBar: {
      padding: `${theme.spacing(2)}px 0 ${theme.spacing(4)}px 0`,
      height: '100%',
    },
  }))();

  const navBarContent = props.useCustomContent ? (
    <div id={navBarContentId} />
  ) : (
    <Suspense fallback={null}>
      <DefaultAppBarContent
        items={navData?.items ?? []}
        console={navData?.console}
      />
    </Suspense>
  );

  const { registry } = useExternalConfigurationContext();

  const ExternalNav = registry?.nav;

  return ExternalNav ? (
    <ExternalNav {...layoutState} />
  ) : (
    <>
      <div className={styles.spacer} />
      <AppBar
        color="secondary"
        elevation={0}
        id="navbar"
        className={`
          ${styles.navBar} 
        `}
      >
        <Toolbar id={navBarContentId}>{navBarContent}</Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
