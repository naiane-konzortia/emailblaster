import { PagesActionTypes, PagesState } from "./types";

export const INIT_STATE: PagesState = {
  isActivePageSet: false,
  activePage:"company_details",
  activeTimelineStep: 1,
  activeSubStep: false
};

const Pages = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case PagesActionTypes.SET_ACTIVE_PAGE: {
      console.log(action.payload)
      return {
        ...state,
        isActivePageSet: true,
        activePage:action.payload.activePage
      };
    }
    case PagesActionTypes.SET_ACTIVE_TIMELINE_STEP: {
      return {
        ...state,
        activeTimelineStep:action.payload.activeStep
      };
    }
    case PagesActionTypes.SET_ACTIVE_SUBSTEP: {
      console.log(action.payload)
      return {
        ...state,
        activeSubStep:action.payload.activeSubStep
      };
    }
    default:
      return { ...state };
  }
};

export default Pages;
