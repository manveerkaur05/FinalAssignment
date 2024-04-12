// src/components/Button.stories.js

import React from 'react';
import { Button } from '@mui/material';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button variant="contained" color="primary">Primary Button</Button>;
export const Secondary = () => <Button variant="contained" color="secondary">Secondary Button</Button>;
export const Disabled = () => <Button variant="contained" disabled>Disabled Button</Button>;
