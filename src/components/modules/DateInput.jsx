import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const DateInput = ({ profile, setProfile }) => {
  const changeHandler = (e) => {
    const date = new Date(e);

    setProfile((profile) => ({ ...profile, constructionDate: date }));
  };

  return (
    <div>
      <label htmlFor="date">تاریخ ساخت:</label>

      <DatePicker
        id="date"
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        value={profile.constructionDate}
        onChange={changeHandler}
      />
    </div>
  );
};

export default DateInput;
