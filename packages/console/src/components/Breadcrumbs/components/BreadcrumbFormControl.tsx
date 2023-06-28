import React, { useState } from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import { BreadcrumbFormControlInterface } from '../types';
import BreadcrumbPopOver from './BreadcrumbPopover';

/**
 * This component is a wrapper around the Material UI FormControl component.
 * It is used to render a breadcrumb with a popover.
 *
 * These are used in the Breadcrumbs component.
 */
const BreadcrumbFormControl = (props: BreadcrumbFormControlInterface) => {
  const htmlLabel = `breadcrumb-${props.id}`;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <FormControl onClick={handleClick}>
        <InputLabel htmlFor={htmlLabel}>{props.label}</InputLabel>
        <Input
          name={htmlLabel}
          id={htmlLabel}
          value={props.value || props.defaultValue}
        />
      </FormControl>
      {!!anchorEl && (
        <BreadcrumbPopOver
          onClose={handleClose}
          anchorEl={anchorEl}
          open={!!anchorEl}
          {...props}
        />
      )}
    </>
  );
};

export default BreadcrumbFormControl;
