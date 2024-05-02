import styles from "@/styles/ImageInput.module.css";

const ImageInput = ({ setProfile }) => {
  const changeHandler = (e) => {
    const { files } = e.target;

    setProfile((profile) => ({ ...profile, images: files }));
  };

  return (
    <div className={styles.container}>
      <label htmlFor="images">افزودن عکس:</label>
      <input type="file" id="images" multiple onChange={changeHandler} />
    </div>
  );
};

export default ImageInput;
