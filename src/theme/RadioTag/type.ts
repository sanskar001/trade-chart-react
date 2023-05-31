type ChangeHandlerType = React.ChangeEventHandler<HTMLInputElement>;

export interface RadioTagProps {
  value: string;
  name: string;
  checked?: boolean;
  onChange?: ChangeHandlerType;
  label?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}
