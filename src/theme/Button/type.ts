type ButtonType = "button" | "submit" | "reset";

type ButtonClassType = "btn-outlined" | "";

type ClickHandlerType = React.MouseEventHandler<HTMLButtonElement>;

type PropsType =
  | string
  | boolean
  | undefined
  | ButtonType
  | React.ReactNode
  | ClickHandlerType
  | ButtonClassType
  | React.CSSProperties;

export interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
  onClick?: ClickHandlerType;
  btnClass?: ButtonClassType;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  [key: string]: PropsType;
}
