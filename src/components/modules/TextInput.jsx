import { e2p } from "@/utils/convert";

const TextInput = ({
  placeholder,
  name,
  value,
  textArea = false,
  changeHandler,
}) => {
  return (
    <div>
      <label htmlFor={name}>{placeholder}:</label>
      {textArea ? (
        <textArea
          value={e2p(value[name])}
          name={name}
          onChange={changeHandler}
        ></textArea>
      ) : (
        <input
          type="text"
          value={e2p(value[name])}
          name={name}
          onChange={changeHandler}
        />
      )}
    </div>
  );
};

export default TextInput;
