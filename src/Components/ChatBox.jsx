import React, { useState } from "react";
import { Stack, Box, TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage, receiveMessage } from "../store/chatSlice";

const ChatBox = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const messages = useSelector((state) => state.chatSlice?.messages || []);
  const handleSendMessage = () => {
    if (!message.trim()) {
      alert("You can't send an empty message!");
      return;
    }
    dispatch(sendMessage({ message }));
    setMessage("");
    setTimeout(() => {
      dispatch(receiveMessage({ message: "This is a bot response!" }));
    }, 1000);
  };

  return (
    <Stack spacing={2} sx={{ width: "400px", margin: "auto", padding: "16px" }}>
      <Box
        sx={{
          height: "300px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          borderRadius: "4px",
        }}
      >
        {messages.map((msg) => (
          <p
            key={msg.id}
            style={{ textAlign: msg.sender === "user" ? "right" : "left" }}
          >
            <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
            <span
              style={{ fontSize: "0.8em", marginLeft: "8px", color: "#888" }}
            >
              {msg.timestamp}
            </span>
          </p>
        ))}
      </Box>

      <Box display="flex" alignItems="center">
        <TextField
          fullWidth
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          sx={{ ml: 2 }}
        >
          Send
        </Button>
      </Box>
    </Stack>
  );
};

export default ChatBox;
