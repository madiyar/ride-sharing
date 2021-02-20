import { Avatar } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser } from 'store/helpers/actions';

const User = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(userId));
  }, [userId, dispatch]);

  const { user, userLoading: loading } = useSelector(state => state.helpers);

  return (
    <>
      {loading ? "Loading" : user?.firstName}
      <Avatar src={user?.avatar} />
    </>
  );
};

export default User;