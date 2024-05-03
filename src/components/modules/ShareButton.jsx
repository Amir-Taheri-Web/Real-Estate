"use client";

import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { RiShareFill } from "react-icons/ri";
import styles from "@/styles/ShareButton.module.css";

const ShareButton = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const copyHandler = () => {
    toast.success("آدرس صفحه کپی شد");
  };

  return (
    <CopyToClipboard text={url} onCopy={copyHandler}>
      <button type="button" className={styles.button}>
        <RiShareFill />
        اشتراک گذاری
      </button>
    </CopyToClipboard>
  );
};

export default ShareButton;
