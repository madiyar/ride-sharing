import React from 'react';
import { Card, CardHeader } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export default () => (
  <Card>
    <CardHeader
      avatar={<Skeleton animation="wave" variant="circle" width={40} height={40} />}
      title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}
    />
    <Skeleton animation="wave" variant="rect" height={300}/>
  </Card>
);
