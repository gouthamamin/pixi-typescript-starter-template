interface iAsset {
  alias: string,
  src: string
};
interface iButtonProps {
  text: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
  textColor?: string;
  onClick?: () => void | Promise<void>;
};