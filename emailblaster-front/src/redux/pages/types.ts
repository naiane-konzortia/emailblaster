export enum PagesActionTypes {
    SET_ACTIVE_PAGE = "@@pages/SET_ACTIVE_PAGE",
    SET_ACTIVE_TIMELINE_STEP = "@@pages/SET_ACTIVE_TIMELINE_STEP",
    SET_ACTIVE_SUBSTEP = "@@pages/SET_ACTIVE_SUBSTEP"
  }
  
  export interface PagesState {
    activePage: "company_details" | "company_securities" | "directors_officers" | "securities_holders" | "legal_documents" | "banking";
    isActivePageSet: boolean;
    activeTimelineStep: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    activeSubStep: boolean;
  }
  