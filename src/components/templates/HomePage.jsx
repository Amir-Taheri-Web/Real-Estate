import { cities } from "@/constants/cities";
import SliderComponent from "@/modules/Slider";

const HomePage = () => {
  return (
    <div>
      <div>
        <h2>شهرهای پر طرفدار</h2>
        <SliderComponent>
          {cities.map((city, index) => (
            <div key={index}>
              <span>{city}</span>
            </div>
          ))}
        </SliderComponent>
      </div>
    </div>
  );
};

export default HomePage;
