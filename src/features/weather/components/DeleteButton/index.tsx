import { FC } from "react";
import { useTypeDispatch } from "@/shared/hooks/useTypeDispatch";
import { deleteCity } from "../../slice/weatherSlice";

import IconTrash from "@/shared/assets/icons/IconTrash";
import "./delete.button.scss";

interface IProps {
  id: string;
}
export const DeleteButton: FC<IProps> = ({ id }) => {
  const dispatch = useTypeDispatch();
  const onDeleteCity = () => dispatch(deleteCity(id));
  return (
    <button onClick={onDeleteCity} className="weather-delete-button">
      <IconTrash />
    </button>
  );
};
