import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import "./main.layout.scss";

interface IProps {
  children: ReactNode;
}
export const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <div className="main-layout">{children}</div>;
    </Provider>
  );
};
