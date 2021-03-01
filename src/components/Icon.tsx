import { USIcon, ArgentineIcon, BrazilIcon, EuroIcon } from "../icons";

type IconProps = {
  symbol: string;
};

export const Icon = ({ symbol }: IconProps) => {
  switch (symbol) {
    case "USD":
      return <USIcon />;
    case "ARS":
      return <ArgentineIcon />;
    case "BRL":
      return <BrazilIcon />;
    default:
      return <EuroIcon />;
  }
};
