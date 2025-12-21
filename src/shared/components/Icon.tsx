import FacebookLike from "@/assets/icons/facebook_ike.svg";
import AmericanFlag from "@/assets/icons/american_flag.svg";
import Favorite0 from "@/assets/icons/favorite.svg";
import Favorite1 from "@/assets/icons/favorite-1.svg";
import Grid from "@/assets/icons/grid.svg";
import GCCoin from "@/assets/icons/gc_coin.svg";
import SCCoin from "@/assets/icons/funz_coin.svg";
import Play from "@/assets/icons/play_arrow.svg";
import FavoriteTab from "@/assets/icons/favorite_tab.svg";
import GreenPlayIcon from "@/assets/icons/play_green.svg";
import ChevronLeftGradient from "@/assets/icons/chevron_left_gradient.svg";
import GameSettings from "@/assets/icons/game_settings.svg";
import GameMute from "@/assets/icons/game_mute.svg";
import GameInfo from "@/assets/icons/game_info.svg";
import GameStartText from "@/assets/icons/game_start_text.svg";

import { ViewStyle } from "react-native";

export type IconName =
  | "facebook-like"
  | "american-flag"
  | "favorite0"
  | "favorite1"
  | "grid"
  | "gc-coin"
  | "sc-coin"
  | "play"
  | "favorite-tab"
  | "green-play"
  | "chevron-left-gradient"
  | "game-settings"
  | "game-mute"
  | "game-info"
  | "game-start-text";

const ICONS = {
  "facebook-like": FacebookLike,
  "american-flag": AmericanFlag,
  "favorite0": Favorite0,
  "favorite1": Favorite1,
  "grid": Grid,
  "gc-coin": GCCoin,
  "sc-coin": SCCoin,
  "play": Play,
  "favorite-tab": FavoriteTab,
  "green-play": GreenPlayIcon,
  "chevron-left-gradient": ChevronLeftGradient,
  "game-settings": GameSettings,
  "game-mute": GameMute,
  "game-info": GameInfo,
  "game-start-text": GameStartText,
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
