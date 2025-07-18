export const en = {
  // Plugin metadata
  pluginName: "Chronica – Life in Frames",
  pluginDescription: "Chronica: Life in Frames — visualize, navigate, and reflect on your life across multiple time scales",
  
  // Common actions
  save: "Save",
  cancel: "Cancel",
  edit: "Edit",
  delete: "Delete",
  add: "Add",
  create: "Create",
  open: "Open",
  close: "Close",
  yes: "Yes",
  no: "No",
  ok: "OK",
  
  // Welcome modal
  welcome: {
    title: "Welcome to Chronica",
    subtitle: "Visualize, navigate, and reflect on your life across multiple time scales.",
    getStarted: "Let's get started",
    birthdateSetup: "To create your personal timeline, Chronica needs your birthdate. Let's set that up first.",
    birthdateLabel: "Your birthdate:",
    openSettings: "Open Settings",
    saveBirthdate: "Save Birthdate",
    skipForNow: "Skip for Now",
    settingsNote: "You can always change these settings later by going to Settings > Chronica Timeline.",
    folderSelection: "Select Notes Folders",
    weeklyNotesFolder: "Weekly Notes Folder:",
    eventNotesFolder: "Event Notes Folder:",
    folderWarning: "Please create your dedicated folders in your vault before selecting them here.",
    folderNote: "You can change these folders later under Settings → Chronica: Life in Frames.",
    selectNotesFolders: "Select Notes Folders",
    weeklyNotesFolderLabel: "Weekly Notes Folder:",
    eventNotesFolderLabel: "Event Notes Folder:",
    weeklyNotesPlaceholder: "e.g. Weekly Notes",
    eventNotesPlaceholder: "e.g. Event Notes",
    createFoldersWarning: "Please create your dedicated folders in your vault before selecting them here.",
    changeFoldersLater: "You can change these folders later under Settings → Chronica: Life in Frames."
  },
  
  // Event types
  eventTypes: {
    majorLife: "Major Life",
    travel: "Travel",
    relationship: "Relationship",
    educationCareer: "Education/Career",
    createNew: "Create New Event Type",
    manage: "Manage Event Types",
    editNote: "Edit names/colors. Presets cannot be deleted.",
    addNew: "Add New Custom Type",
    noTypesFound: "No event types found. Resetting to defaults.",
    type: "Type:",
    name: "Name",
    color: "Color"
  },
  
  // Event modal
  eventModal: {
    selectDates: "Select Date(s)",
    singleDate: "Single Date",
    dateRange: "Date Range",
    dateHelp: "Select the date(s). The system determines the week(s) automatically.",
    eventName: "Event Name",
    eventDescription: "Event Description",
    startDate: "Start Date",
    endDate: "End Date"
  },
  
  // Timeline view
  timeline: {
    title: "life in frames",
    loading: "Chronica is initializing and scanning events. Please wait a moment...",
    loadingEvents: "Chronica: Loading event data...",
    timelineData: "TIMELINE DATA",
    addEvent: "Add Event",
    manageEventTypes: "Manage Event Types",
    visualization: "VISUALIZATION",
    fitToScreen: "Fit to Screen",
    displaySettings: "DISPLAY SETTINGS",
    cellShape: "Cell Shape",
    gridOrientation: "Grid Orientation",
    legend: "LEGEND",
    noEventTypes: "No event types defined.",
    period: "Period (ISO):",
    cell: "Cell:",
    eventNote: "Event Note:",
    weeklyNote: "Weekly Note:"
  },
  
  // Statistics panel
  stats: {
    title: "Statistics",
    showStatistics: "Show Statistics",
    hideStatistics: "Hide Statistics",
    overview: "Overview",
    events: "Events",
    timeline: "Timeline",
    charts: "Charts",
    lifeProgress: "Life Progress",
    currentAge: "Current Age",
    totalEvents: "Total Events Recorded",
    birthday: "Birthday",
    eventAnalysis: "Event Analysis",
    noEventsRecorded: "No events recorded yet. Add events via the sidebar or by shift-clicking weeks.",
    eventTypeDistribution: "Event Type Distribution",
    recentEvents: "Recent Events (Max 10)",
    noEventsFound: "No events found",
    eventStatisticsSummary: "Event Statistics Summary",
    lifePhases: "Life Phases",
    lifeMilestones: "Life Milestones",
    milestone: "Milestone",
    age: "Age",
    date: "Date",
    status: "Status",
    weekCompletionEvents: "Week Completion & Events",
    noEventsAdded: "No events added yet",
    addEventsForCharts: "Add events to see charts and visualizations",
    eventDistributionByType: "Event Distribution by Type",
    seasonalPatterns: "Seasonal Patterns",
    futurePlanningHorizon: "Future Planning Horizon",
    noFutureEvents: "No future events planned yet",
    eventDistributionByMonth: "Event Distribution by Month",
    loadingSnippets: "Loading snippets...",
    // Additional stats content
    weeksLived: "weeks lived",
    weeksRemaining: "weeks remaining",
    years: "years",
    decades: "decades",
    // Russian plural forms for proper pluralization (same as base for English)
    yearsOne: "year",
    yearsFew: "years", 
    yearsMany: "years",
    decadesOne: "decade",
    decadesFew: "decades",
    decadesMany: "decades",
    weeksOne: "week",
    weeksFew: "weeks",
    weeksMany: "weeks",
    noEventsAddedYet: "No events added yet",
    addEventsToSeeCharts: "Add events to see charts and visualizations",
    // Life phases
    childhood: "Childhood",
    youngAdult: "Young Adult",
    earlyAdult: "Early Adult",
    middleAdult: "Middle Adult",
    lateAdult: "Late Adult",
    currentPhase: "Current phase",
    // Milestone statuses
    passed: "Passed",
    upcoming: "Upcoming",
    // Milestone names
    childhoodEnd: "Childhood End",
    quarterLife: "Quarter Life",
    halfLife: "Half Life",
    retirementAge: "Retirement Age",
    nextBirthdayIn: "Next birthday in",
    days: "days",
    // Additional missing keys
    weeks: "weeks",
    noEventsRecordedYet: "No events recorded yet. Add events via the sidebar or by shift-clicking weeks.",
    addEventsViaSidebar: "Add events via the sidebar or by shift-clicking weeks.",
    threeQuarterLife: "Three-Quarter Life",
    weeksManuallyAutoFilled: "weeks manually/auto filled",
    outOfPastWeeks: "out of",
    eventsRecorded: "events recorded",
    eventsPerWeek: "events/week",
    max10: "Max 10",
    yearsWithEvents: "Years with Events",
    averageEventsPerYear: "Average Events/Year",
    singleWeekEvents: "Single-Week Events",
    multiWeekEvents: "Multi-Week Events"
  },
  
  // Settings
  settings: {
    title: "Chronica Timeline Settings",
    subtitle: "Customize your life timeline visualization.",
    coreSetup: "Core Setup",
    foldersNoteNaming: "Folders & Note Naming",
    fileNamingTemplates: "File Naming Templates",
    fileNamingHelp: "Customize how Chronica names your week and event note files.",
    appearance: "Appearance",
    markerVisibility: "Marker Visibility",
    eventTypes: "Event Types",
    weekFillingOptions: "Week Filling Options",
    otherDisplayOptions: "Other Display Options",
    statisticsPanel: "Statistics Panel",
    dataManagement: "Data Management",
    tipsShortcuts: "Tips & Shortcuts",
    basicNavigation: "Basic Navigation",
    eventsPlanning: "Events & Planning",
    // File naming templates
    weekNoteTemplate: "Week Note Template",
    eventNoteTemplate: "Event Note Template (Single)",
    rangeEventTemplate: "Range Event Template",
    // Month marker frequency
    monthMarkerFrequency: "Month Marker Frequency",
    monthMarkerFrequencyDesc: "How often month markers appear (requires Month Markers ON).",
    everyMonth: "Every Month",
    everyQuarter: "Every Quarter",
    everyHalfYear: "Every Half Year",
    startOfYearOnly: "Start of Year Only",
    // Manual fill color
    manualFillColor: "Manual Fill Color",
    manualFillColorDesc: "Color for manually filled weeks (requires Auto-Fill OFF).",
    // Setting names and descriptions
    birthday: "Birthday",
    birthdayDesc: "Your date of birth (YYYY-MM-DD)",
    lifespan: "Lifespan",
    lifespanDesc: "Maximum age in years to display on the timeline grid.",
    language: "Language",
    languageDesc: "Interface language for the plugin.",
    weeklyNotesFolder: "Weekly Notes Folder",
    weeklyNotesFolderDesc: "Folder to store weekly notes (leave blank for vault root). Path will be processed after you finish typing and click outside the box.",
    useSeparateEventNotesFolder: "Use Separate Event Notes Folder",
    useSeparateEventNotesFolderDesc: "Store event-specific notes in a different folder from weekly notes.",
    eventNotesFolder: "Event Notes Folder",
    eventNotesFolderDesc: "Folder for event notes (if separate). Path processed on exiting input.",
    footerQuote: "Footer Quote",
    footerQuoteDesc: "Inspirational quote for the sidebar footer.",
    pastWeeksColor: "Past Weeks Color",
    pastWeeksColorDesc: "Background color for weeks that have passed.",
    currentWeekColor: "Current Week Color",
    currentWeekColorDesc: "Background color for the current week.",
    futureWeeksColor: "Future Weeks Color",
    futureWeeksColorDesc: "Background color for weeks in the future.",
    cellShape: "Cell Shape",
    cellShapeDesc: "Visual shape of the week cells.",
    gridOrientation: "Grid Orientation",
    gridOrientationDesc: "How years and weeks are arranged.",
    tooltipDetailLevel: "Tooltip Detail Level",
    tooltipDetailLevelDesc: "Choose how much information is shown in the grid cell tooltips.",
    enableNotePreviewInTooltip: "Enable Note Preview in Tooltip",
    enableNotePreviewInTooltipDesc: "Show note filenames & snippets in the tooltip. This option is only available when 'Tooltip Detail Level' is 'Expanded'.",
    decadeMarkers: "Decade Markers",
    decadeMarkersDesc: "Show age markers every 10 years.",
    weekMarkers: "Week Markers",
    weekMarkersDesc: "Show markers for weeks 10, 20, 30, 40, 50.",
    monthMarkers: "Month Markers",
    monthMarkersDesc: "Show abbreviated month names.",
    birthdayMarker: "Birthday Marker",
    birthdayMarkerDesc: "Show a cake icon near your birthday week.",
    manageEventTypes: "Manage Event Types",
    manageEventTypesDesc: "Add custom types, or edit the names and colors of any type (including presets).",
    enableAutoFill: "Enable Auto-Fill",
    enableAutoFillDesc: "Automatically mark past weeks as 'filled' on a chosen day. If OFF, you can mark future weeks manually by right-clicking them.",
    autoFillDay: "Auto-Fill Day",
    autoFillDayDesc: "Day of the week when auto-fill should occur (requires Auto-Fill ON).",
    clearFilledWeeks: "Clear Filled Weeks",
    clearFilledWeeksDesc: "Remove all manual/auto filled week markings (does not delete notes or events).",
    startWeekOnMonday: "Start Week On Monday",
    startWeekOnMondayDesc: "Use Monday as the first day of the week (ISO standard).",
    defaultFitToScreen: "Default Fit to Screen",
    defaultFitToScreenDesc: "Automatically zoom to fit the grid when opening the view.",
    defaultZoomLevel: "Default Zoom Level",
    defaultZoomLevelDesc: "Manual zoom level if 'Fit to Screen' is OFF (1 = 100%).",
    defaultPanelState: "Default Panel State",
    defaultPanelStateDesc: "Have the statistics panel open when Chronica view loads.",
    defaultPanelHeight: "Default Panel Height",
    defaultPanelHeightDesc: "Initial height of the statistics panel in pixels.",
    defaultPanelWidth: "Default Panel Width",
    defaultPanelWidthDesc: "Initial width of the statistics panel in pixels.",
    defaultPanelTab: "Default Panel Tab",
    defaultPanelTabDesc: "Which tab the statistics panel opens to.",
    // Data management
    clearAllEvents: "Clear All Events",
    clearAllEventsDesc: "Permanently delete all recorded events. This does NOT delete notes. Event type definitions will remain.",
    clearAllEventsButton: "Clear All Events",
    resetEventTypes: "Reset Event Types & Events",
    resetEventTypesDesc: "Reset event types to the default presets (Major Life, etc.). This will ALSO CLEAR ALL RECORDED EVENTS because their type links will become invalid.",
    resetEventTypesButton: "Reset Types & Clear Events",
    clearAllEventsConfirm: "DANGER: Are you sure you want to delete ALL recorded events from Chronica's settings? This will NOT delete your notes, but the links in Chronica will be gone. This cannot be undone.",
    resetEventTypesConfirm: "DANGER: Are you sure you want to reset event types to default? This will also DELETE ALL recorded events from Chronica's settings. This cannot be undone.",
    clearAllEventsNotice: "All recorded events have been cleared from Chronica settings.",
    resetEventTypesNotice: "Event types reset to default. All events cleared.",
    // Tips & shortcuts
    customization: "Customization",
    // Button texts
    manageTypes: "Manage Types",
    clearFilledMarkings: "Clear Filled Markings",
    changeCellShapes: "Change cell shapes (square, circle, diamond)",
    // Status messages
    autoFillActive: "Auto-fill is active.",
    // Placeholders
    typePathOrSelect: "Type path or select...",
    // Options
    square: "Square",
    circle: "Circle",
    diamond: "Diamond",
    landscape: "Landscape (Years as Columns)",
    portrait: "Portrait (Years as Rows)",
    expanded: "Expanded (Default - more details)",
    compact: "Compact (Less details)",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday"
  },
  
  // Marker settings
  markers: {
    title: "Timeline Marker Settings",
    subtitle: "Choose which timeline markers are visible"
  },
  
  // Folder operations
  folder: {
    moveConfirmation: "Would you like to move these notes to the new folder?",
    moveFiles: "Move Files"
  },
  
  // Notices
  notices: {
    initialScan: "Chronica: Performing initial event scan...",
    scanComplete: "Chronica: Event scan complete. Views updated.",
    rescanning: "Chronica: Re-scanning vault for events...",
    rescanComplete: "Chronica: Event scan complete. Views refreshed."
  },
  
  // Commands
  commands: {
    openTimeline: "Open Chronica Timeline",
    createWeeklyNote: "Create/Open Current Week Note",
    rescanEvents: "Re-scan Vault for Chronica Events"
  },
  
  // Tips
  tips: {
    clickWeek: "• Click on any week cell to create or open its note.",
    shiftClickEvent: "• Shift+Click on a week cell to quickly add an event for that date.",
    hoverCells: "• Hover over cells for week number and date range.",
    zoomControls: "• Use sidebar zoom controls or 'Fit to Screen'.",
    addEvent: "• Use 'Add Event' button or Shift+Click.",
    markMultiWeek: "• Mark multi-week events using 'Date Range'.",
    manageCustomTypes: "• Manage custom event types (names/colors) via the button.",
    editPresetTypes: "• Edit preset type names/colors via 'Manage Types'.",
    eventsCreateNotes: "• Events create/link to notes with YAML frontmatter.",
    switchOrientation: "• Switch between Landscape/Portrait grid orientation.",
    toggleMarkers: "• Toggle visibility of Decade, Week, Month, Birthday markers.",
    adjustColors: "• Adjust colors for Past/Present/Future cells.",
    customizeQuote: "• Customize the footer quote.",
    togglePanel: "• Click handle at screen bottom to toggle panel.",
    resizeVertically: "• Drag top handle to resize vertically.",
    resizeHorizontally: "• Drag side handles or header (not buttons) to resize/move horizontally.",
    exploreDataViews: "• Explore different data views in the tabs."
  },
  
  // Months
  months: {
    jan: "Jan",
    feb: "Feb",
    mar: "Mar",
    apr: "Apr",
    may: "May",
    jun: "Jun",
    jul: "Jul",
    aug: "Aug",
    sep: "Sep",
    oct: "Oct",
    nov: "Nov",
    dec: "Dec"
  },
  
  // Month names (full)
  monthNames: {
    january: "January",
    february: "February",
    march: "March",
    april: "April",
    may: "May",
    june: "June",
    july: "July",
    august: "August",
    september: "September",
    october: "October",
    november: "November",
    december: "December"
  },
  
  // Default values
  defaults: {
    quote: "the only true luxury is time."
  }
}; 