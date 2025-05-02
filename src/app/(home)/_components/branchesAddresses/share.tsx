"use client";
import { IconButton, Paper } from "@mui/material";
import Popover from "@mui/material/Popover";
import { AnimatePresence, motion } from "framer-motion";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import React, { useState } from "react";

const ShareLink = ({ url, title, label }: any) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const showSuccess = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  return (
    <>
      <button
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        className="cursor-pointer bg-transparent border-0"
      >
        {label}
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Paper
          elevation={10}
          className="flex px-3 py-1 justify-between gap-10 items-center"
        >
          <div className="grid md:grid-cols-6 grid-cols-3 gap-3">
            <FacebookShareButton url={url} quote={title} hashtag={"#nextshare"}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>{" "}
            <TelegramShareButton url={url} title={title}>
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <TwitterShareButton url={url} title={title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton url={url} title={title} separator=":: ">
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <EmailShareButton url={url} subject={title} body="body">
              <EmailIcon size={32} round />
            </EmailShareButton>
            <LinkedinShareButton url={url}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs">{url}</span>
            <IconButton
              aria-label="copy"
              onClick={() => {
                navigator.clipboard.writeText(url);
                showSuccess();
              }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"></path>
              </svg>
            </IconButton>
          </div>{" "}
        </Paper>
      </Popover>

      <AnimatePresence>
        {showSuccessMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50"
          >
            لینک بلاگ مورد نظر کپی شد
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ShareLink;
