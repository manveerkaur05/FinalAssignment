// src/components/Label.stories.js

import React from 'react';
import { Typography } from '@mui/material';

export default {
  title: 'Label',
  component: Typography,
};

export const Default = () => <Typography variant="body1">Default Label</Typography>;
export const Success = () => <Typography variant="body1" style={{ color: 'green' }}>Success Label</Typography>;
export const Error = () => <Typography variant="body1" style={{ color: 'red' }}>Error Label</Typography>;
