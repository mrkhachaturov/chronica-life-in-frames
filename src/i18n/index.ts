import { en } from './en';
import { ru } from './ru';

export type Language = 'en' | 'ru';

export interface I18n {
  // Plugin metadata
  pluginName: string;
  pluginDescription: string;
  
  // Common actions
  save: string;
  cancel: string;
  edit: string;
  delete: string;
  add: string;
  create: string;
  open: string;
  close: string;
  yes: string;
  no: string;
  ok: string;
  
  // Welcome modal
  welcome: {
    title: string;
    subtitle: string;
    getStarted: string;
    birthdateSetup: string;
    birthdateLabel: string;
    openSettings: string;
    saveBirthdate: string;
    skipForNow: string;
    settingsNote: string;
    folderSelection: string;
    weeklyNotesFolder: string;
    eventNotesFolder: string;
    folderWarning: string;
    folderNote: string;
  };
  
  // Event types
  eventTypes: {
    majorLife: string;
    travel: string;
    relationship: string;
    educationCareer: string;
    createNew: string;
    manage: string;
    editNote: string;
    addNew: string;
    noTypesFound: string;
    type: string;
    name: string;
    color: string;
  };
  
  // Event modal
  eventModal: {
    selectDates: string;
    singleDate: string;
    dateRange: string;
    dateHelp: string;
    eventName: string;
    eventDescription: string;
    startDate: string;
    endDate: string;
  };
  
  // Timeline view
  timeline: {
    title: string;
    loading: string;
    loadingEvents: string;
    timelineData: string;
    addEvent: string;
    manageEventTypes: string;
    visualization: string;
    fitToScreen: string;
    displaySettings: string;
    cellShape: string;
    gridOrientation: string;
    legend: string;
    noEventTypes: string;
    period: string;
    cell: string;
    eventNote: string;
    weeklyNote: string;
  };
  
  // Statistics panel
  stats: {
    title: string;
    overview: string;
    events: string;
    timeline: string;
    charts: string;
    lifeProgress: string;
    currentAge: string;
    totalEvents: string;
    birthday: string;
    eventAnalysis: string;
    noEventsRecorded: string;
    eventTypeDistribution: string;
    recentEvents: string;
    noEventsFound: string;
    eventStatisticsSummary: string;
    lifePhases: string;
    lifeMilestones: string;
    milestone: string;
    age: string;
    date: string;
    status: string;
    weekCompletionEvents: string;
    noEventsAdded: string;
    addEventsForCharts: string;
    eventDistributionByType: string;
    seasonalPatterns: string;
    futurePlanningHorizon: string;
    noFutureEvents: string;
    eventDistributionByMonth: string;
    loadingSnippets: string;
  };
  
  // Settings
  settings: {
    title: string;
    subtitle: string;
    coreSetup: string;
    foldersNoteNaming: string;
    fileNamingTemplates: string;
    fileNamingHelp: string;
    appearance: string;
    markerVisibility: string;
    eventTypes: string;
    weekFillingOptions: string;
    otherDisplayOptions: string;
    statisticsPanel: string;
    dataManagement: string;
    tipsShortcuts: string;
    basicNavigation: string;
    eventsPlanning: string;
  };
  
  // Marker settings
  markers: {
    title: string;
    subtitle: string;
  };
  
  // Folder operations
  folder: {
    moveConfirmation: string;
    moveFiles: string;
  };
  
  // Notices
  notices: {
    initialScan: string;
    scanComplete: string;
    rescanning: string;
    rescanComplete: string;
  };
  
  // Commands
  commands: {
    openTimeline: string;
    createWeeklyNote: string;
    rescanEvents: string;
  };
  
  // Tips
  tips: {
    clickWeek: string;
    shiftClickEvent: string;
    hoverCells: string;
    zoomControls: string;
    addEvent: string;
    multiWeekEvents: string;
    manageTypes: string;
  };
  
  // Months
  months: {
    jan: string;
    feb: string;
    mar: string;
    apr: string;
    may: string;
    jun: string;
    jul: string;
    aug: string;
    sep: string;
    oct: string;
    nov: string;
    dec: string;
  };
  
  // Default values
  defaults: {
    quote: string;
  };
}

const translations: Record<Language, I18n> = {
  en,
  ru
};

export class I18nManager {
  private currentLanguage: Language = 'en';
  
  constructor(language?: Language) {
    if (language && translations[language]) {
      this.currentLanguage = language;
    }
  }
  
  setLanguage(language: Language): void {
    if (translations[language]) {
      this.currentLanguage = language;
    }
  }
  
  getLanguage(): Language {
    return this.currentLanguage;
  }
  
  t(): I18n {
    return translations[this.currentLanguage];
  }
  
  getAvailableLanguages(): Language[] {
    return Object.keys(translations) as Language[];
  }
  
  getMonthName(monthIndex: number): string {
    const monthNames = [
      this.t().months.jan,
      this.t().months.feb,
      this.t().months.mar,
      this.t().months.apr,
      this.t().months.may,
      this.t().months.jun,
      this.t().months.jul,
      this.t().months.aug,
      this.t().months.sep,
      this.t().months.oct,
      this.t().months.nov,
      this.t().months.dec
    ];
    return monthNames[monthIndex] || monthNames[0];
  }
}

// Default instance
export const i18n = new I18nManager(); 