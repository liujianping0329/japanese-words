import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function WordCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: '24px auto' }}>
      <CardMedia
        component="img"
        height="140"
        image="/placeholder.png"
        alt="apple"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Apple
        </Typography>
        <Typography variant="body2" color="text.secondary">
          苹果，一种常见水果。<br />
          <strong>例句：</strong> She ate an apple for breakfast.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">下一词</Button>
        <Button size="small">加入收藏</Button>
      </CardActions>
    </Card>
  );
}