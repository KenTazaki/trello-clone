import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const TrelloCard = ({text}) => {
  return (
    <Card style={style.cardContailer}> 
      <CardContent>
        <Typography gutterBottom>
          {text}
        </Typography>
      </CardContent>
    </Card>
  )
}

const style = {
  cardContailer: {
    marginBottom: 8
  }
}
export default TrelloCard
