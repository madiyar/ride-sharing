import React from 'react';
import { Skeleton } from "@material-ui/lab";

const styles = {
  root: {
    border: '1px solid #E3E3E3',
    borderRadius: 5
  },
  header: { marginBottom: 13, borderRadius: '5px 5px 0 0' },
  comment: {
    display: 'flex',
    flexDirection: 'row'
  },
  avatar: {
    marginLeft: 13,
    marginRight: 10
  },
  textarea: {
    flex: 1,
    marginRight: 13,
    marginBottom: 10
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 13,
    marginBottom: 10
  },
  comments: {
    marginLeft: 13,
    marginRight: 13,
    marginTop: 10,
    marginBottom: 10
  }
};

export default () => (
  <>
    <div style={styles.root}>
      <Skeleton animation="wave" variant="rect" height={40} style={styles.header} />
      <div style={styles.comment}>
        <div style={styles.avatar}>
          <Skeleton animation="wave" variant="circle" width={34} height={34} />
        </div>
        <div style={styles.textarea}>
          <Skeleton animation="wave" variant="rect" height={110}/>
        </div>
      </div>
      <div style={styles.button}>
        <Skeleton animation="wave" height={45} width={100} />
      </div>
    </div>
    <div style={styles.comments}>
      <Skeleton animation="wave" height={10} width="80%" />
      <Skeleton animation="wave" height={10} width="50%" />
      <Skeleton animation="wave" height={10} width="20%" style={{ marginBottom: 16 }} />
      <Skeleton animation="wave" height={10} width="80%" />
      <Skeleton animation="wave" height={10} width="50%" />
      <Skeleton animation="wave" height={10} width="20%" style={{ marginBottom: 16 }} />
      <Skeleton animation="wave" height={10} width="80%" />
      <Skeleton animation="wave" height={10} width="50%" />
      <Skeleton animation="wave" height={10} width="20%" style={{ marginBottom: 16 }} />
      <Skeleton animation="wave" height={10} width="80%" />
      <Skeleton animation="wave" height={10} width="50%" />
      <Skeleton animation="wave" height={10} width="20%" style={{ marginBottom: 16 }} />
    </div>
  </>
);
