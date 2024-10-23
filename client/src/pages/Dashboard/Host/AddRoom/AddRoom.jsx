import { useState } from "react";
import AddRoomForm from "../../../../components/Dashboard/AddRoomForm/AddRoomForm";
import useAuth from "../../../../hooks/useAuth";
import { uploadImage } from "../../../../api/util";

const AddRoom = () => {
  const { user } = useAuth();

  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });

  const handleDatesRange = (range) => {
    setDates(range.selection);
  };

  const handleAddRoomForm = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const location = form.get("location");
    const category = form.get("category");
    const title = form.get("title");
    const price = form.get("price");
    const total_guest = form.get("total_guest");
    const bedrooms = form.get("bedrooms");
    const bathrooms = form.get("bathrooms");
    const description = form.get("description");
    const date_range = {
      from: dates.startDate,
      to: dates.endDate,
    };

    const host = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
    };

    try {
      const imageUrl = await uploadImage(form);

      const addRoom = {
        location,
        category,
        title,
        image: imageUrl,
        price,
        total_guest,
        bedrooms,
        bathrooms,
        description,
        host,
        date_range,
      };
      console.table(addRoom)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add Room Page..</h1>
      <AddRoomForm
        dates={dates}
        handleDatesRange={handleDatesRange}
        handleAddRoomForm={handleAddRoomForm}
      ></AddRoomForm>
    </div>
  );
};

export default AddRoom;
