import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import { editMyEvent, newEvent} from "../../services/eventService.js";
import {addEvent, editEvent} from "../../store/event/eventSlice.js";

export const CreateAndEditEvent = ({onHide, selectedEvent}) => {
  const dispatch = useDispatch()
  const categories = [
    { name: "Conference" },
    { name: "Workshop" },
    { name: "Seminar" },
    { name: "Webinar" },
    { name: "Networking" }
  ];
  const {user} = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: selectedEvent || {}
  });

  const onSubmit = async (data) => {
    if (!selectedEvent){
      const event = {...data, uid: user.uid, id: Date.now(), participants: []}
      newEvent(event);
      dispatch(addEvent(event));
      reset();
      onHide(false);
    }else {
      const event = {...selectedEvent, ...data}
      editMyEvent(event)
      dispatch(editEvent(event));
      reset();
      onHide(false);
    }

  }


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-full p-6">
        <div className="mb-4">
            <input
              type="text"
              placeholder="Event Title"
              className="w-full border border-gray-500 rounded px-4 py-2"
              {...register("title", { required: true })}
            />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="location"
            className="w-full border border-gray-500 rounded px-4 py-2"
            {...register("location", { required: true })}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <select
              className="w-full border border-gray-500 rounded px-4 py-2"
              {...register("category", { required: true })}
            >
              {categories.map(category => (
                <option value={category.name} key={category.name}>{category.name}</option>
              ))}
            </select>
          </div>
          <div>
            <input
              type="date"
              placeholder="Enter date"
              className="w-full border border-gray-500 rounded px-4 py-2"
              {...register("date", { required: true })}
            />
          </div>
          <div>
            <div>
              <input
                type="time"
                placeholder="Event start time"
                className="w-full border border-gray-500 rounded px-4 py-2"
                {...register("time", { required: true })}
              />
            </div>
          </div>
          <div>
            <input
              type="number"
              placeholder="Available slots"
              min={3}
              defaultValue={3}
              className="w-full border border-gray-500 rounded px-4 py-2"
              {...register("capacity", { required: true })}
            />
          </div>
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Description"
            className="w-full border border-gray-500 rounded px-4 py-2"
            {...register("description", { required: true })}
          ></textarea>
        </div>
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-sm focus:outline-none focus:shadow-outline">
            Save change
          </button>
        </div>
      </form>
    </>
  );
}
