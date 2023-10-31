export const IMG_PATH = process.env.PUBLIC_URL + "/img/";

const USE_LOCATION = window.location.href;

const API_POST_PATH = "data";

export const API_PATH = USE_LOCATION.indexOf("localhost") < 0 ? "https://port-0-node-learning-12fhqa2llo7zh36o.sel5.cloudtype.app/" + API_POST_PATH : "http://localhost:3333/" + API_POST_PATH;
// export const API_PATH = "https://port-0-node-learning-12fhqa2llo7zh36o.sel5.cloudtype.app/" + "data";

export const MOBILE_PX = 768;

export const ABOUT_ACTION = "getAbout";
export const WORK_ACTION = "getWork";
export const SKILL_ACTION = "getSkill";
export const SKILL_FIELD_ACTION = "getSkillField";