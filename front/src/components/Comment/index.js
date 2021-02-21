import React, { useEffect } from 'react';
import LoadingComment from './LoadingComment';

let TIMER;
const INTERVAL = 3000;

const Comment = ({ id }) => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (id) {
      global.VK.init({ apiId: 7765923, onlyWidgets: true });
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
    <>
      {loading && <LoadingComment />}
      <div id={`vk_comments_${id}`} style={{ display: loading ? 'none' : 'inherit' }} />
    </>
  );
};

export default Comment;
