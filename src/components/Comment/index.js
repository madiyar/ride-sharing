import React, { useEffect } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Icon } from 'components';
import LoadingComment from './LoadingComment';

let TIMER;
const INTERVAL = 3000;
const PROD_APPID = 7795948;
const DEV_APPID = 7765923;

const Comment = ({ id }) => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (id) {
      global.VK.init({ apiId: window.location.host === 'localhost' ? DEV_APPID : PROD_APPID, onlyWidgets: true });
      global.VK.Widgets.Comments(
        `vk_comments_${id}`,
        {limit: 10, attach: "*"},
        id
      );
    }
  }, [id]);

  useEffect(() => {
    TIMER = setTimeout(() => {
      setLoading(false);
    }, INTERVAL);
    return () => clearTimeout(TIMER);
  }, []);

  return (
    <Card style={{ marginTop: 16 }}>
      <CardContent>
        <Typography variant="h6" style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <Icon.MessageCircle style={{ marginRight: '8px' }} />
          Пікірлер
        </Typography>
        {loading && <LoadingComment />}
        <div id={`vk_comments_${id}`} style={{ display: loading ? 'none' : 'inherit' }} />
      </CardContent>
    </Card>
  );
};

export default Comment;
