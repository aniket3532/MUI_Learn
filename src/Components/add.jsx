import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material"
import { useState } from 'react'

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})

export const Add = () => {

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }

  return (
    <>
        <Tooltip onClick={e => setOpen(true)} title="Add" sx={{position: "fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30}}}>
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
        </Tooltip>
        <StyledModal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={4}>
                <Typography variant='h5' color="gray" textAlign="center">Create Post</Typography>
                <UserBox>
                    <Avatar sx={{width: 30, height: 30}} src="https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <Typography fontWeight={500} variant="span">Marry Jane</Typography>
                </UserBox>
                <TextField
                    sx={{width: "100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    placeholder="What's on your mind?"
                    variant="standard"
                />
                <Stack direction="row" gap={1} mt={2} mb={3}>
                    <EmojiEmotions color="primary"/>
                    <Image color='success'/>
                    <VideoCameraBack color='secondary'/>
                    <PersonAdd color='error'/>
                </Stack>
                <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                    <Button>Post</Button>
                    <Button sx={{width: "100px"}}><DateRange /></Button>
                </ButtonGroup>
            </Box>
        </StyledModal>
    </>
  )
}
