export interface IChildrenProps {
  children: React.ReactNode;
}

export interface IThemeContextProps {
  theme: string;
  darkOn: boolean;
  switchTheme: () => void;
}

export interface ITextTransformContextProps {
  text: string;
  updateText: (value: string) => void;
  normal: () => void;
  uppercase: () => void;
  lowercase: () => void;
  capitalize: () => void;
  clearTextBox: () => void;
}
