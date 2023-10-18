import { makeStyles, Theme } from '@material-ui/core';
import { headerGridHeight } from 'components/Tables/constants';
import {
  headerFontFamily,
  listhoverColor,
  tableHeaderColor,
  tablePlaceholderColor,
} from 'components/Theme/constants';
import {
  nodeExecutionsTableColumnWidths,
  workflowVersionsTableColumnWidths,
} from './constants';

export const selectedClassName = 'selected';
export const grayedClassName = 'grayed';

// NOTE: The order of these `makeStyles` calls is important, as it determines
// specificity in the browser. The execution table styles are overridden by
// the columns styles in some cases. So the column styles should be defined
// last.
export const useExecutionTableStyles = makeStyles((theme: Theme) => ({
  filters: {
    paddingLeft: theme.spacing(3),
  },
  [grayedClassName]: {
    color: theme.palette.grey[300],
  },
  borderBottom: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  errorContainer: {
    padding: `0 ${theme.spacing(8)}px ${theme.spacing(2)}px`,
  },
  expander: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: theme.spacing(-4),
    marginRight: theme.spacing(1),
    width: theme.spacing(3),
  },
  headerColumn: {
    marginRight: theme.spacing(1),
    minWidth: 0,
    '&:first-of-type': {
      marginLeft: theme.spacing(2),
    },
  },
  headerColumnVersion: {
    width: theme.spacing(4),
  },
  headerRow: {
    alignItems: 'center',
    borderBottom: `4px solid ${theme.palette.divider}`,
    borderTop: `1px solid ${theme.palette.divider}`,
    color: tableHeaderColor,
    display: 'flex',
    fontFamily: headerFontFamily,
    flexDirection: 'row',
    height: theme.spacing(headerGridHeight),
  },
  noRowsContent: {
    color: tablePlaceholderColor,
    margin: `${theme.spacing(5)}px auto`,
    textAlign: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: listhoverColor,
    },
    [`&.${selectedClassName}`]: {
      backgroundColor: listhoverColor,
    },
    [`&.${grayedClassName}`]: {
      color: theme.palette.grey[300],
    },
  },
  clickableRow: {
    cursor: 'pointer',
  },
  rowColumns: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  rowColumn: {
    marginRight: theme.spacing(1),
    minWidth: 0,
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  scrollContainer: {
    flex: '1 1 0',
    overflowY: 'scroll',
    paddingBottom: theme.spacing(3),
  },
  tableContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const nameColumnLeftMarginGridWidth = 6;
export const useColumnStyles = makeStyles((theme: Theme) => ({
  [`&.${grayedClassName}`]: {
    color: theme.palette.grey[400],
  },
  columnName: {
    flexGrow: 1,
    // We want this to fluidly expand into whatever available space,
    // so no minimum width.
    flexBasis: 0,
    overflow: 'hidden',
    '&:first-of-type': {
      marginLeft: theme.spacing(nameColumnLeftMarginGridWidth),
    },
    [`&.${grayedClassName}`]: {
      color: theme.palette.grey[400],
    },
  },
  columnNodeId: {
    flexBasis: nodeExecutionsTableColumnWidths.nodeId,
    [`&.${grayedClassName}`]: {
      color: theme.palette.grey[400],
    },
  },
  columnType: {
    flexBasis: nodeExecutionsTableColumnWidths.type,
    textTransform: 'capitalize',
    [`&.${grayedClassName}`]: {
      color: theme.palette.grey[400],
    },
  },
  columnStatus: {
    display: 'flex',
    flexBasis: nodeExecutionsTableColumnWidths.phase,
  },
  columnStartedAt: {
    flexBasis: nodeExecutionsTableColumnWidths.startedAt,
    [`&.${grayedClassName}`]: {
      color: theme.palette.grey[400],
    },
  },
  columnDuration: {
    flexBasis: nodeExecutionsTableColumnWidths.duration,
    textAlign: 'right',
    [`&.${grayedClassName}`]: {
      color: theme.palette.grey[400],
    },
  },
  columnLogs: {
    flexBasis: nodeExecutionsTableColumnWidths.logs,
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(2),
    [`&.${grayedClassName}`]: {
      color: theme.palette.grey[400],
    },
  },
  selectedExecutionName: {
    fontWeight: 'bold',
  },
}));

export const useWorkflowVersionsColumnStyles = makeStyles(() => ({
  columnRadioButton: {
    width: workflowVersionsTableColumnWidths.radio,
  },
  columnName: {
    flexBasis: workflowVersionsTableColumnWidths.name,
    whiteSpace: 'normal',
    flexGrow: 1,
  },
  columnCreatedAt: {
    flexBasis: workflowVersionsTableColumnWidths.createdAt,
  },
  columnLastRun: {
    flexBasis: workflowVersionsTableColumnWidths.lastRun,
  },
  columnRecentRun: {
    flexBasis: workflowVersionsTableColumnWidths.recentRun,
  },
}));
