import { e2p } from "@/utils/convert";

const TextInput = ({ placeholder, name, value, changeHandler }) => {
  return (
    <div>
      <label htmlFor={name}>{placeholder}:</label>

      {name === "description" && (
        <textArea
          value={e2p(value[name])}
          name={name}
          onChange={changeHandler}
        ></textArea>
      )}

      {name !== "description" && (
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
