import FacebookLike from "@/assets/icons/facebook_ike.svg";
import AmericanFlag from "@/assets/icons/american_flag.svg";
import Favorite0 from "@/assets/icons/favorite.svg";
import Favorite1 from "@/assets/icons/favorite-1.svg";
import Grid from "@/assets/icons/grid.svg";
import GCCoin from "@/assets/icons/gc_coin.svg";
import SCCoin from "@/assets/icons/funz_coin.svg";

import { ViewStyle } from "react-native";

export type IconName =
  | "facebook-like"
  | "american-flag"
  | "favorite0"
  | "favorite1"
  | "grid"
  | "gc-coin"
  | "sc-coin";

const ICONS = {
  "facebook-like": FacebookLike,
  "american-flag": AmericanFlag,
  "favorite0": Favorite0,
  "favorite1": Favorite1,
  "grid": Grid,
  "gc-coin": GCCoin,
  "sc-coin": SCCoin
};

type Props = {
  name: IconName;
  size?: number;
  color?: string;
  style?: ViewStyle;
};

export function Icon({
  name,
  size = 24,
  color = "#000",
  style,
}: Props) {
  const SvgIcon = ICONS[name];

  return (
    <SvgIcon
      width={size}
      height={size}
      color={color}
      style={style}
    />
  );
}
