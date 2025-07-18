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
    selectNotesFolders: string;
    weeklyNotesFolderLabel: string;
    eventNotesFolderLabel: string;
    weeklyNotesPlaceholder: string;
    eventNotesPlaceholder: string;
    createFoldersWarning: string;
    changeFoldersLater: string;
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
    showStatistics: string;
    hideStatistics: string;
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
    // Additional stats content
    weeksLived: string;
    weeksRemaining: string;
    years: string;
    decades: string;
    // Russian plural forms for proper pluralization
    yearsOne: string;
    yearsFew: string;
    yearsMany: string;
    decadesOne: string;
    decadesFew: string;
    decadesMany: string;
    weeksOne: string;
    weeksFew: string;
    weeksMany: string;
    noEventsAddedYet: string;
    addEventsToSeeCharts: string;
    // Life phases
    childhood: string;
    youngAdult: string;
    earlyAdult: string;
    middleAdult: string;
    lateAdult: string;
    currentPhase: string;
    // Milestone statuses
    passed: string;
    upcoming: string;
    // Milestone names
    childhoodEnd: string;
    quarterLife: string;
    halfLife: string;
    retirementAge: string;
    nextBirthdayIn: string;
    days: string;
    // Additional missing keys
    weeks: string;
    noEventsRecordedYet: string;
    addEventsViaSidebar: string;
    threeQuarterLife: string;
    weeksManuallyAutoFilled: string;
    outOfPastWeeks: string;
    eventsRecorded: string;
    eventsPerWeek: string;
    max10: string;
    yearsWithEvents: string;
    averageEventsPerYear: string;
    singleWeekEvents: string;
    multiWeekEvents: string;
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
      // File naming templates
      weekNoteTemplate: string;
      eventNoteTemplate: string;
      rangeEventTemplate: string;
      // Month marker frequency
      monthMarkerFrequency: string;
      monthMarkerFrequencyDesc: string;
      everyMonth: string;
      everyQuarter: string;
      everyHalfYear: string;
      startOfYearOnly: string;
      // Manual fill color
      manualFillColor: string;
      manualFillColorDesc: string;
    // Setting names and descriptions
    birthday: string;
    birthdayDesc: string;
    lifespan: string;
    lifespanDesc: string;
    language: string;
    languageDesc: string;
    weeklyNotesFolder: string;
    weeklyNotesFolderDesc: string;
    useSeparateEventNotesFolder: string;
    useSeparateEventNotesFolderDesc: string;
    eventNotesFolder: string;
    eventNotesFolderDesc: string;
    footerQuote: string;
    footerQuoteDesc: string;
    pastWeeksColor: string;
    pastWeeksColorDesc: string;
    currentWeekColor: string;
    currentWeekColorDesc: string;
    futureWeeksColor: string;
    futureWeeksColorDesc: string;
    cellShape: string;
    cellShapeDesc: string;
    gridOrientation: string;
    gridOrientationDesc: string;
    tooltipDetailLevel: string;
    tooltipDetailLevelDesc: string;
    enableNotePreviewInTooltip: string;
    enableNotePreviewInTooltipDesc: string;
    decadeMarkers: string;
    decadeMarkersDesc: string;
    weekMarkers: string;
    weekMarkersDesc: string;
    monthMarkers: string;
    monthMarkersDesc: string;
    birthdayMarker: string;
    birthdayMarkerDesc: string;
    manageEventTypes: string;
    manageEventTypesDesc: string;
    enableAutoFill: string;
    enableAutoFillDesc: string;
    autoFillDay: string;
    autoFillDayDesc: string;
    clearFilledWeeks: string;
    clearFilledWeeksDesc: string;
    startWeekOnMonday: string;
    startWeekOnMondayDesc: string;
    defaultFitToScreen: string;
    defaultFitToScreenDesc: string;
    defaultZoomLevel: string;
    defaultZoomLevelDesc: string;
    defaultPanelState: string;
    defaultPanelStateDesc: string;
    defaultPanelHeight: string;
    defaultPanelHeightDesc: string;
    defaultPanelWidth: string;
    defaultPanelWidthDesc: string;
    defaultPanelTab: string;
    defaultPanelTabDesc: string;
    // Data management
    clearAllEvents: string;
    clearAllEventsDesc: string;
    clearAllEventsButton: string;
    resetEventTypes: string;
    resetEventTypesDesc: string;
    resetEventTypesButton: string;
    clearAllEventsConfirm: string;
    resetEventTypesConfirm: string;
    clearAllEventsNotice: string;
    resetEventTypesNotice: string;
    // Tips & shortcuts
    customization: string;
    // Button texts
    manageTypes: string;
    clearFilledMarkings: string;
    changeCellShapes: string;
    // Status messages
    autoFillActive: string;
    // Placeholders
    typePathOrSelect: string;
    // Options
    square: string;
    circle: string;
    diamond: string;
    landscape: string;
    portrait: string;
    expanded: string;
    compact: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
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
    markMultiWeek: string;
    manageCustomTypes: string;
    editPresetTypes: string;
    eventsCreateNotes: string;
    switchOrientation: string;
    toggleMarkers: string;
    adjustColors: string;
    customizeQuote: string;
    togglePanel: string;
    resizeVertically: string;
    resizeHorizontally: string;
    exploreDataViews: string;
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
  
  // Month names (full)
  monthNames: {
    january: string;
    february: string;
    march: string;
    april: string;
    may: string;
    june: string;
    july: string;
    august: string;
    september: string;
    october: string;
    november: string;
    december: string;
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

  // Russian pluralization helper
  getRussianPlural(count: number, one: string, few: string, many: string): string {
    if (this.currentLanguage !== 'ru') {
      return count === 1 ? one : many;
    }

    const mod10 = count % 10;
    const mod100 = count % 100;

    if (mod100 >= 11 && mod100 <= 19) {
      return many;
    }

    if (mod10 === 1) {
      return one;
    }

    if (mod10 >= 2 && mod10 <= 4) {
      return few;
    }

    return many;
  }
}

// Default instance
export const i18n = new I18nManager(); 