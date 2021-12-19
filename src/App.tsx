import React from 'react';
import './App.css';
import { Box, AppBar, IconButton, Toolbar, Typography, Button, Container, Card, CardContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CardActionArea } from '@mui/material';
import { fontSize } from '@mui/system';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';




export default function ActionAreaCard() {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ background: '#C4C4C4' }}>
            <AppBar position="static" style={{ background: '#A69090' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        PShop
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Delievery
                    </Typography>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        On Sale
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Order
                    </Typography>
                </Toolbar>
            </AppBar>
            

    



            <Divider orientation="horizontal" flexItem sx={{margin: 2}}/>
    <Grid container rowSpacing={{ xs: 1, md: 1 }} columnSpacing={{ xs: 1, sm: 5, md: 3 }}  sx={{marginBottom: 5}}>
    <Divider orientation="vertical" flexItem sx={{margin: 3}}/>
     <Card sx={{ maxWidth: 300, margin: 1}}>
         
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://i.pinimg.com/564x/f1/e7/3f/f1e73f0c8676442f01391d935c1301fe.jpg"
                  alt="F40"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Название товара
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Power, pace and peerless quality, the legendary F1 is a technological masterpiece. The fastest production car of its time. The finest sports car of its generation. For many, the greatest supercar ever built.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Divider orientation="vertical" flexItem sx={{margin: 0.5}}/>
            <Card sx={{ maxWidth: 300, margin: 1}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://i.pinimg.com/564x/db/fb/f3/dbfbf31b7b438f4305adfcc842aa2929.jpg"
                  alt="F40"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   Название товара
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Power, pace and peerless quality, the legendary F1 is a technological masterpiece. The fastest production car of its time. The finest sports car of its generation. For many, the greatest supercar ever built.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Divider orientation="vertical" flexItem sx={{margin: 0.5}}/>
            <Card sx={{ maxWidth: 300, margin: 1}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://i.pinimg.com/564x/32/3c/03/323c035a2773b438430dd433897cdea5.jpg"
                  alt="F40"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Название товара
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Power, pace and peerless quality, the legendary F1 is a technological masterpiece. The fastest production car of its time. The finest sports car of its generation. For many, the greatest supercar ever built.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Divider orientation="vertical" flexItem sx={{margin: 0.5}}/>
            <Card sx={{ maxWidth: 300, margin: 1}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://i.pinimg.com/564x/32/3c/03/323c035a2773b438430dd433897cdea5.jpg"
                  alt="F40"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Название товара
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Power, pace and peerless quality, the legendary F1 is a technological masterpiece. The fastest production car of its time. The finest sports car of its generation. For many, the greatest supercar ever built.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Divider orientation="vertical" flexItem sx={{margin: 3}}/>
            <Card sx={{ maxWidth: 300, margin: 1}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://i.pinimg.com/564x/32/3c/03/323c035a2773b438430dd433897cdea5.jpg"
                  alt="F40"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Название товара
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Power, pace and peerless quality, the legendary F1 is a technological masterpiece. The fastest production car of its time. The finest sports car of its generation. For many, the greatest supercar ever built.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Divider orientation="vertical" flexItem sx={{margin: 0.5}}/>
            <Card sx={{ maxWidth: 300, margin: 1 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://i.pinimg.com/564x/32/3c/03/323c035a2773b438430dd433897cdea5.jpg"
                  alt="F1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Название товара
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Power, pace and peerless quality, the legendary F1 is a technological masterpiece. The fastest production car of its time. The finest sports car of its generation. For many, the greatest supercar ever built.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Divider orientation="vertical" flexItem sx={{margin: 0.5}}/>
            <Card sx={{ maxWidth: 300, margin: 1 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://i.pinimg.com/564x/32/3c/03/323c035a2773b438430dd433897cdea5.jpg"
                alt="Countach"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Название товара
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Power, pace and peerless quality, the legendary F1 is a technological masterpiece. The fastest production car of its time. The finest sports car of its generation. For many, the greatest supercar ever built.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <AppBar position="static" style={{background: '#A69090'}}>
          <Container maxWidth="md">
            <Toolbar disableGutters>

            <Divider orientation="vertical" color='white' flexItem sx={{margin: 3}}/>
            <Typography 
              variant="subtitle1"
              noWrap
              component="div"
              color='white'
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                PABLO SHOP
                Company develops the best handmade clothes and jewerly in Russia and Ukraine


            </Typography>
            <Divider orientation="vertical" color='white' flexItem sx={{margin: 3}}/>
            </Toolbar>
          </Container>
      </AppBar>
        </Box>
      





    

       
    );
}
