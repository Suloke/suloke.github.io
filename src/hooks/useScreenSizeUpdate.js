import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateScreenSize } from "../redux/slices/screenSizeSlice";

const useScreenSizeUpdate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(
        updateScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);
};

export default useScreenSizeUpdate;
