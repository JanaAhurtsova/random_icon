import { library } from "@fortawesome/fontawesome-svg-core";
import { fas as fasIcons } from "@fortawesome/free-solid-svg-icons";
import { far as farIcons } from "@fortawesome/free-regular-svg-icons";
import { fab as fabIcons } from "@fortawesome/free-brands-svg-icons";

library.add(fasIcons, farIcons, fabIcons);

const fas = Object.keys(library.definitions.fas);
const far = Object.keys(library.definitions.far);
const fab = Object.keys(library.definitions.fab);

export default {fas, far, fab};
