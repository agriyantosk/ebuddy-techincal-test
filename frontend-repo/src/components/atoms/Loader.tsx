import { CircularProgress } from "@mui/material";

type LoaderProps = {
  visible: boolean;
};

const Loader = ({ props }: { props: LoaderProps }) => {
  return props.visible ? <CircularProgress /> : <></>;
};

export default Loader;
