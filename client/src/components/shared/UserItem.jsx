/* eslint-disable react/prop-types */
import {Add as AddIcon} from '@mui/icons-material'
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import React, { memo } from "react";

// eslint-disable-next-line no-unused-vars
const UserItem = ({ user, handler, handlerIsLoading }) => {
  // eslint-disable-next-line no-unused-vars
  const { name, _id, avatar } = user;
  return (
    <ListItem>
        <Stack 
        direction={"row"}
        alignItems={"cemter"}
        spacing={"1rem"}
        width={"100%"}
        >
            <Avatar />
            <Typography
            variant='body1'
            sx={{
                flexGlow:1,
                display:"-webkit-box",
                WebkitLineClamp:1,
                WebkitBoxOrient:"vertical",
                overflow:"hidden",
                textOverflow:"ellipsis",
                width: "100%",
            }}
            >{name}</Typography>

            <IconButton
            size="small"
            sx={{
                bgcolor:"primary.main",
                color: "white",
                "&:hovor":{
                    bgcolor:"primary.dark",
                },
            }}
            onClick={()=>handler(_id)}
            disabled={handlerIsLoading}
            >
                <AddIcon/>
            </IconButton>
                
            
        </Stack>
    </ListItem>
  );
};

export default memo(UserItem);
