import React from "react";
import foto from '../Home/assets/4.jpg'
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function HomeBox(props) {
    return(
        <div style={{
            "margin-left": "1%"
        }}>
        <Card sx={{ maxWidth: 345}}>
        <CardMedia
          component="img"
          height="180"
          image={foto}
          alt="the moon is preety, isn´t it? "
        />
      </Card>
        </div>
    );
}