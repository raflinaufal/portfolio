export interface NavLink {
  menu: boolean;
  label: string;
  link: string;
  icon: JSX.Element | React.ReactElement | any;
}

export interface SkillIconProps {
  icon: JSX.Element | React.ReactElement | any;
  text: string;
  color: string;
}
