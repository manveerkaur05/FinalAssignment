// src/components/Text.stories.js

import React from 'react';
import { Typography } from '@mui/material';

export default {
  title: 'Text',
  component: Typography,
};

export const Primary = () => <Typography variant="body1">This is a primary text.</Typography>;
export const Secondary = () => <Typography variant="body2">This is a secondary text.</Typography>;
export const Heading = () => <Typography variant="h2">This is a heading text.</Typography>;
