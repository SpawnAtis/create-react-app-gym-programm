import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

const Footer = ({ muscles, category, onSelect }) => {
  const index = category ? muscles.indexOf(category) + 1 : 0;

  return (
    <Paper>
      <Tabs
        onChange={(e, i) => {
          onSelect(i === 0 ? 'all' : muscles[i - 1]);
        }}
        value={index}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(group => <Tab key={group} label={group} />)}
      </Tabs>
    </Paper>
  );
};

export default Footer;
