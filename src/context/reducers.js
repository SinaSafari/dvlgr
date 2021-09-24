import {
  DARK_MODE,
  LIGHT_MODE,
  FA_LANG,
  EN_LANG,
  SET_TOKEN,
  UNSET_TOKEN,
} from "@/context/constants";

export const langReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case FA_LANG:
      return { ...state, lang: "fa" };
    case EN_LANG:
      return { ...state, lang: "en" };
    default:
      return state;
  }
};

export const themeModeReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIGHT_MODE:
      return { ...state, theme: "light" };
    case DARK_MODE:
      return { ...state, theme: "dark" };
    default:
      return state;
  }
};

export const tokenReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TOKEN:
      return { ...state, token: payload };
    case UNSET_TOKEN:
      return { ...state, token: "" };
    default:
      return state;
  }
};
