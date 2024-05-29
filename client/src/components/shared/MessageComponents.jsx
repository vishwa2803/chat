import { Box, Typography } from "@mui/material";
import React, { memo } from "react";
import { lightBlue } from "../../constants/color";
import moment from "moment";
import {motion} from "framer-motion";

const MessageComponents = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;

  const sameSender = sender._id === user._id;

  const timeAgo = moment(createdAt).fromNow();

  return (
    <motion.div
    initial={{ opacity: 0, x: "-100%" }}
    whileInView={{ opacity: 1, x: 0 }}
    style={{
      alignSelf: sameSender ? "flex-end" : "flex-start",
      backgroundColor: "white",
      color: "black",
      borderRadius: "5px",
      padding: "0.5rem",
      width: "fit-content",
    }}
    >
      {!sameSender && (
        <Typography color={lightBlue} fontWeight={"600"} variant="caption">
          {sender.name}
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}

      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = "asd";

          return (
            <Box key={index}>
              <a
                href=""
                target="_blank"
                download
                style={{
                  color: "black",
                }}
              ></a>
            </Box>
          );
        })}
      <Typography variant="caption" color={"text.secondary"}>
        {timeAgo}
      </Typography>
    </motion.div>
  );
};

export default memo(MessageComponents);
