import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments, deleteComment, addComment } from 'store/helpers/actions';
import { currentUser } from 'lib/helpers';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, TextField, makeStyles, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Button, ButtonBase, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Icon } from 'components';
import LoadingComment from './LoadingComment';

const useStyles = makeStyles({
  root: { width: '100%' },
  textarea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  divider: { margin: `16px auto` },
  comment: {
    '& div': {
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 0 8px',
    }
  }
});

const Comments = ({ type, targetId }) => {
  const [comment, setComment] = useState('');
  const user = currentUser();
  const classes = useStyles();
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { comments, commentsLoading: loading } = useSelector(state => state.helpers);

  useEffect(() => {
    if (!comments) {
      dispatch(getComments({ type, targetId }));
    }
  }, [comments, targetId, type, dispatch]);

  const reply = user => {
    inputRef.current.focus();
    setComment(s => `${s}${user.firstName} ${user.lastName}, `);
  }
  
  const submitComment = () => {
    if (comment.trim() && user?.id) {
      dispatch(addComment({
        userId: user?.id,
        targetId: +targetId,
        type,
        msg: comment
      }));
      setComment('');
    }
  };

  const handleDeleteComment = comment => {
    if (user?.id === comment?.userId) {
      dispatch(deleteComment(comment?.id))
    }
  };

  return (
    <Card style={{ marginTop: 16 }}>
      <CardContent>
        <Typography variant="h6" style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <Icon.MessageCircle style={{ marginRight: '8px' }} />
          Пікірлер
        </Typography>
        {loading ? <LoadingComment /> : (
          <>
            <div className={classes.textarea}>
              <TextField
                id="comment"
                label="Пікір"
                multiline
                rows={4}
                margin="normal"
                variant="outlined"
                value={comment}
                onChange={e => setComment(e.target.value)}
                inputRef={inputRef}
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={submitComment}
                disabled={!comment.trim()}
              >
                Жіберу
              </Button>
            </div>
            {comments?.length ? (
              <>
                <Divider className={classes.divider} />
                <List className={classes.root}>
                  {comments?.map(comment => (
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt={comment?.user?.firstName} src={comment?.user?.avatar} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={<Link to={`/user/${comment.userId}`} component={ButtonBase}>{comment?.user?.firstName} {comment?.user?.lastName}</Link>}
                        secondary={
                          <div className={classes.comment}>
                            <Typography
                              component="div"
                              variant="body2"
                              color="textPrimary"
                            >
                              {comment.msg}
                            </Typography>
                            {user?.id !== comment?.userId && (
                              <Button
                                size="small"
                                startIcon={<Icon.CornerDownRight />}
                                onClick={() => reply(comment?.user)}
                              >
                                Жауап беру
                              </Button>
                            )}
                            <Divider style={{ marginTop: 8 }} />
                          </div>
                        }
                      />
                      {user?.id === comment.userId && (
                        <ListItemSecondaryAction>
                          <IconButton edge="end" onClick={() => handleDeleteComment(comment)}>
                            <Icon.Trash />
                          </IconButton>
                        </ListItemSecondaryAction>
                      )}
                    </ListItem>
                  ))}
                </List>
              </>
            ) : null}
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default Comments;