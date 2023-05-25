type ChangeHandlerType = React.ChangeEventHandler<HTMLInputElement>;

type PropsType =
  | string
  | boolean
  | undefined
  | ChangeHandlerType
  | React.CSSProperties;

export interface SearchFieldProps {
  value: string;
  onChange: ChangeHandlerType;
  className?: string;
  style?: React.CSSProperties;
  autoFocus?: boolean;
  disabled?: boolean;
  placeholder?: string;
  [key: string]: PropsType;
}
