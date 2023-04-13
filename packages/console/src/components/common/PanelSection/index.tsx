import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  detailsPanelCard: {
    paddingBottom: '0px',
  },
  detailsPanelCardContent: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

interface PanelSectionProps {
  children: React.ReactNode;
}

export const PanelSection = (props: PanelSectionProps) => {
  const commonStyles = useStyle();
  return (
    <div className={commonStyles.detailsPanelCard}>
      <div className={commonStyles.detailsPanelCardContent}>
        {props.children}
      </div>
    </div>
  );
};
