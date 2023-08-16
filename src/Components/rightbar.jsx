import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import * as React from 'react';

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display : {xs: "none", sm: "block"}}}>
      <Box position="fixed" width={350}>
        <Typography variant='h6' fontWeight={200}>Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/2167673/pexels-photo-2167673.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/2097475/pexels-photo-2097475.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/2262810/pexels-photo-2262810.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/2180287/pexels-photo-2180287.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={200} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={200} mt={2} mb={2}>Latest Conversations</Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3812924/pexels-photo-3812924.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/9618174/pexels-photo-9618174.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/4584579/pexels-photo-4584579.jpeg?auto=compress&cs=tinysrgb&w=600" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      </Box>
    </Box>
  )
}
