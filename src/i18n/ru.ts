export const ru = {
  // Plugin metadata
  pluginName: "Chronica – Жизнь в кадрах",
  pluginDescription: "Chronica: Жизнь в кадрах — визуализируйте, навигация и размышления о вашей жизни в различных временных масштабах",
  
  // Common actions
  save: "Сохранить",
  cancel: "Отмена",
  edit: "Редактировать",
  delete: "Удалить",
  add: "Добавить",
  create: "Создать",
  open: "Открыть",
  close: "Закрыть",
  yes: "Да",
  no: "Нет",
  ok: "ОК",
  
  // Welcome modal
  welcome: {
    title: "Добро пожаловать в Chronica",
    subtitle: "Визуализируйте, навигация и размышления о вашей жизни в различных временных масштабах.",
    getStarted: "Начнем",
    birthdateSetup: "Для создания вашей персональной временной шкалы Chronica нужна ваша дата рождения. Давайте настроим это в первую очередь.",
    birthdateLabel: "Ваша дата рождения:",
    openSettings: "Открыть настройки",
    saveBirthdate: "Сохранить дату рождения",
    skipForNow: "Пропустить пока",
    settingsNote: "Вы всегда можете изменить эти настройки позже, перейдя в Настройки > Chronica Timeline.",
    folderSelection: "Выберите папки для заметок",
    weeklyNotesFolder: "Папка для еженедельных заметок:",
    eventNotesFolder: "Папка для заметок о событиях:",
    folderWarning: "Пожалуйста, создайте выделенные папки в вашем хранилище перед их выбором здесь.",
    folderNote: "Вы можете изменить эти папки позже в Настройки → Chronica: Жизнь в кадрах.",
    selectNotesFolders: "Выберите папки для заметок",
    weeklyNotesFolderLabel: "Папка еженедельных заметок:",
    eventNotesFolderLabel: "Папка заметок о событиях:",
    weeklyNotesPlaceholder: "например, Еженедельные заметки",
    eventNotesPlaceholder: "например, Заметки о событиях",
    createFoldersWarning: "Пожалуйста, создайте выделенные папки в вашем хранилище перед их выбором здесь.",
    changeFoldersLater: "Вы можете изменить эти папки позже в Настройки → Chronica: Жизнь в кадрах."
  },
  
  // Event types
  eventTypes: {
    majorLife: "Важные события жизни",
    travel: "Путешествия",
    relationship: "Отношения",
    educationCareer: "Образование/Карьера",
    createNew: "Создать новый тип события",
    manage: "Управление типами событий",
    editNote: "Редактируйте названия/цвета. Предустановленные типы нельзя удалить.",
    addNew: "Добавить новый пользовательский тип",
    noTypesFound: "Типы событий не найдены. Сброс к значениям по умолчанию.",
    type: "Тип:",
    name: "Название",
    color: "Цвет"
  },
  
  // Event modal
  eventModal: {
    selectDates: "Выберите дату(ы)",
    singleDate: "Одна дата",
    dateRange: "Диапазон дат",
    dateHelp: "Выберите дату(ы). Система автоматически определяет недели.",
    eventName: "Название события",
    eventDescription: "Описание события",
    startDate: "Дата начала",
    endDate: "Дата окончания"
  },
  
  // Timeline view
  timeline: {
    title: "жизнь в кадрах",
    loading: "Chronica инициализируется и сканирует события. Пожалуйста, подождите...",
    loadingEvents: "Chronica: Загрузка данных событий...",
    timelineData: "ДАННЫЕ ВРЕМЕННОЙ ШКАЛЫ",
    addEvent: "Добавить событие",
    manageEventTypes: "Управление типами событий",
    visualization: "ВИЗУАЛИЗАЦИЯ",
    fitToScreen: "Подогнать под экран",
    displaySettings: "НАСТРОЙКИ ОТОБРАЖЕНИЯ",
    cellShape: "Форма ячеек",
    gridOrientation: "Ориентация сетки",
    legend: "ЛЕГЕНДА",
    noEventTypes: "Типы событий не определены.",
    period: "Период (ISO):",
    cell: "Ячейка:",
    eventNote: "Заметка о событии:",
    weeklyNote: "Еженедельная заметка:"
  },
  
  // Statistics panel
  stats: {
    title: "Статистика",
    showStatistics: "Показать статистику",
    hideStatistics: "Скрыть статистику",
    overview: "Обзор",
    events: "События",
    timeline: "Временная шкала",
    charts: "Графики",
    lifeProgress: "Прогресс жизни",
    currentAge: "Текущий возраст",
    totalEvents: "Всего записанных событий",
    birthday: "День рождения",
    eventAnalysis: "Анализ событий",
    noEventsRecorded: "События еще не записаны. Добавьте события через боковую панель или Shift+клик по неделям.",
    eventTypeDistribution: "Распределение по типам событий",
    recentEvents: "Недавние события (Макс. 10)",
    noEventsFound: "События не найдены",
    eventStatisticsSummary: "Сводка статистики событий",
    lifePhases: "Жизненные фазы",
    lifeMilestones: "Жизненные вехи",
    milestone: "Веха",
    age: "Возраст",
    date: "Дата",
    status: "Статус",
    weekCompletionEvents: "Завершение недель и события",
    noEventsAdded: "События еще не добавлены",
    addEventsForCharts: "Добавьте события для просмотра графиков и визуализаций",
    eventDistributionByType: "Распределение событий по типам",
    seasonalPatterns: "Сезонные паттерны",
    futurePlanningHorizon: "Горизонт планирования будущего",
    noFutureEvents: "Будущие события еще не запланированы",
    eventDistributionByMonth: "Распределение событий по месяцам",
    loadingSnippets: "Загрузка фрагментов...",
    // Additional stats content
    weeksLived: "недель прожито",
    weeksRemaining: "недель осталось",
    years: "года",
    decades: "десятилетия",
    // Russian plural forms for proper pluralization
    yearsOne: "год",
    yearsFew: "года", 
    yearsMany: "лет",
    decadesOne: "десятилетие",
    decadesFew: "десятилетия",
    decadesMany: "десятилетий",
    weeksOne: "неделя",
    weeksFew: "недели",
    weeksMany: "недель",
    noEventsAddedYet: "События еще не добавлены",
    addEventsToSeeCharts: "Добавьте события для просмотра графиков и визуализаций",
    // Life phases
    childhood: "Детство",
    youngAdult: "Молодость",
    earlyAdult: "Ранняя зрелость",
    middleAdult: "Средняя зрелость",
    lateAdult: "Поздняя зрелость",
    currentPhase: "Текущая фаза",
    // Milestone statuses
    passed: "Прошло",
    upcoming: "Предстоит",
    // Milestone names
    childhoodEnd: "Конец детства",
    quarterLife: "Четверть жизни",
    halfLife: "Половина жизни",
    retirementAge: "Пенсионный возраст",
    nextBirthdayIn: "Следующий день рождения через",
    days: "дней",
    // Additional missing keys
    weeks: "недель",
    noEventsRecordedYet: "События еще не записаны. Добавьте события через боковую панель или нажав Shift+клик на недели.",
    addEventsViaSidebar: "Добавьте события через боковую панель или нажав Shift+клик на недели.",
    threeQuarterLife: "Три четверти жизни",
    weeksManuallyAutoFilled: "недель заполнено вручную/автоматически",
    outOfPastWeeks: "из",
    eventsRecorded: "событий записано",
    eventsPerWeek: "событий/неделю",
    max10: "Макс 10",
    yearsWithEvents: "Лет с событиями",
    averageEventsPerYear: "Среднее событий/год",
    singleWeekEvents: "События одной недели",
    multiWeekEvents: "Многонедельные события"
  },
  
  // Settings
  settings: {
    title: "Настройки Chronica Timeline",
    subtitle: "Настройте визуализацию вашей жизненной временной шкалы.",
    coreSetup: "Основная настройка",
    foldersNoteNaming: "Папки и именование заметок",
    fileNamingTemplates: "Шаблоны именования файлов",
    fileNamingHelp: "Настройте, как Chronica называет ваши файлы еженедельных заметок и заметок о событиях.",
    appearance: "Внешний вид",
    markerVisibility: "Видимость маркеров",
    eventTypes: "Типы событий",
    weekFillingOptions: "Опции заполнения недель",
    otherDisplayOptions: "Другие опции отображения",
    statisticsPanel: "Панель статистики",
    dataManagement: "Управление данными",
    tipsShortcuts: "Советы и горячие клавиши",
    basicNavigation: "Основная навигация",
    eventsPlanning: "События и планирование",
    // File naming templates
    weekNoteTemplate: "Шаблон еженедельной заметки",
    eventNoteTemplate: "Шаблон заметки о событии (Одиночное)",
    rangeEventTemplate: "Шаблон диапазонного события",
    // Month marker frequency
    monthMarkerFrequency: "Частота маркеров месяцев",
    monthMarkerFrequencyDesc: "Как часто появляются маркеры месяцев (требует включенных маркеров месяцев).",
    everyMonth: "Каждый месяц",
    everyQuarter: "Каждый квартал",
    everyHalfYear: "Каждые полгода",
    startOfYearOnly: "Только начало года",
    // Manual fill color
    manualFillColor: "Цвет ручного заполнения",
    manualFillColorDesc: "Цвет для недель, заполненных вручную (требует выключенного авто-заполнения).",
    // Setting names and descriptions
    birthday: "День рождения",
    birthdayDesc: "Ваша дата рождения (ГГГГ-ММ-ДД)",
    lifespan: "Продолжительность жизни",
    lifespanDesc: "Максимальный возраст в годах для отображения на временной шкале.",
    language: "Язык",
    languageDesc: "Язык интерфейса для плагина.",
    weeklyNotesFolder: "Папка для еженедельных заметок",
    weeklyNotesFolderDesc: "Папка для хранения еженедельных заметок (оставьте пустым для корня хранилища). Путь будет обработан после завершения ввода и клика вне поля.",
    useSeparateEventNotesFolder: "Использовать отдельную папку для заметок о событиях",
    useSeparateEventNotesFolderDesc: "Хранить заметки о событиях в папке, отличной от еженедельных заметок.",
    eventNotesFolder: "Папка для заметок о событиях",
    eventNotesFolderDesc: "Папка для заметок о событиях (если отдельно). Путь обрабатывается при выходе из поля ввода.",
    footerQuote: "Цитата в футере",
    footerQuoteDesc: "Вдохновляющая цитата для футера боковой панели.",
    pastWeeksColor: "Цвет прошедших недель",
    pastWeeksColorDesc: "Цвет фона для недель, которые прошли.",
    currentWeekColor: "Цвет текущей недели",
    currentWeekColorDesc: "Цвет фона для текущей недели.",
    futureWeeksColor: "Цвет будущих недель",
    futureWeeksColorDesc: "Цвет фона для недель в будущем.",
    cellShape: "Форма ячеек",
    cellShapeDesc: "Визуальная форма ячеек недель.",
    gridOrientation: "Ориентация сетки",
    gridOrientationDesc: "Как расположены годы и недели.",
    tooltipDetailLevel: "Уровень детализации подсказок",
    tooltipDetailLevelDesc: "Выберите, сколько информации показывать в подсказках ячеек сетки.",
    enableNotePreviewInTooltip: "Включить предварительный просмотр заметок в подсказках",
    enableNotePreviewInTooltipDesc: "Показывать имена файлов заметок и фрагменты в подсказке. Эта опция доступна только когда 'Уровень детализации подсказок' установлен в 'Расширенный'.",
    decadeMarkers: "Маркеры десятилетий",
    decadeMarkersDesc: "Показывать маркеры возраста каждые 10 лет.",
    weekMarkers: "Маркеры недель",
    weekMarkersDesc: "Показывать маркеры для недель 10, 20, 30, 40, 50.",
    monthMarkers: "Маркеры месяцев",
    monthMarkersDesc: "Показывать сокращенные названия месяцев.",
    birthdayMarker: "Маркер дня рождения",
    birthdayMarkerDesc: "Показывать иконку торта рядом с неделей дня рождения.",
    manageEventTypes: "Управление типами событий",
    manageEventTypesDesc: "Добавить пользовательские типы или редактировать названия и цвета любого типа (включая предустановленные).",
    enableAutoFill: "Включить авто-заполнение",
    enableAutoFillDesc: "Автоматически отмечать прошедшие недели как 'заполненные' в выбранный день. Если ВЫКЛ, вы можете отмечать будущие недели вручную, щелкнув правой кнопкой мыши.",
    autoFillDay: "День авто-заполнения",
    autoFillDayDesc: "День недели, когда должно происходить авто-заполнение (требует включенного авто-заполнения).",
    clearFilledWeeks: "Очистить заполненные недели",
    clearFilledWeeksDesc: "Удалить все ручные/автоматические отметки заполненных недель (не удаляет заметки или события).",
    startWeekOnMonday: "Начинать неделю с понедельника",
    startWeekOnMondayDesc: "Использовать понедельник как первый день недели (стандарт ISO).",
    defaultFitToScreen: "По умолчанию подогнать под экран",
    defaultFitToScreenDesc: "Автоматически масштабировать для подгонки сетки при открытии представления.",
    defaultZoomLevel: "Уровень масштабирования по умолчанию",
    defaultZoomLevelDesc: "Ручной уровень масштабирования, если 'Подогнать под экран' ВЫКЛ (1 = 100%).",
    defaultPanelState: "Состояние панели по умолчанию",
    defaultPanelStateDesc: "Открывать панель статистики при загрузке представления Chronica.",
    defaultPanelHeight: "Высота панели по умолчанию",
    defaultPanelHeightDesc: "Начальная высота панели статистики в пикселях.",
    defaultPanelWidth: "Ширина панели по умолчанию",
    defaultPanelWidthDesc: "Начальная ширина панели статистики в пикселях.",
    defaultPanelTab: "Вкладка панели по умолчанию",
    defaultPanelTabDesc: "На какую вкладку открывается панель статистики.",
    // Data management
    clearAllEvents: "Очистить все события",
    clearAllEventsDesc: "Навсегда удалить все записанные события. Это НЕ удаляет заметки. Определения типов событий останутся.",
    clearAllEventsButton: "Очистить все события",
    resetEventTypes: "Сбросить типы событий и события",
    resetEventTypesDesc: "Сбросить типы событий к значениям по умолчанию (Важные события жизни и т.д.). Это ТАКЖЕ ОЧИСТИТ ВСЕ ЗАПИСАННЫЕ СОБЫТИЯ, потому что их связи с типами станут недействительными.",
    resetEventTypesButton: "Сбросить типы и очистить события",
    clearAllEventsConfirm: "ОПАСНОСТЬ: Вы уверены, что хотите удалить ВСЕ записанные события из настроек Chronica? Это НЕ удалит ваши заметки, но связи в Chronica исчезнут. Это нельзя отменить.",
    resetEventTypesConfirm: "ОПАСНОСТЬ: Вы уверены, что хотите сбросить типы событий по умолчанию? Это также УДАЛИТ ВСЕ записанные события из настроек Chronica. Это нельзя отменить.",
    clearAllEventsNotice: "Все записанные события были очищены из настроек Chronica.",
    resetEventTypesNotice: "Типы событий сброшены по умолчанию. Все события очищены.",
    // Tips & shortcuts
    customization: "Настройка",
    // Button texts
    manageTypes: "Управление типами",
    clearFilledMarkings: "Очистить заполненные отметки",
    changeCellShapes: "Изменить форму ячеек (квадрат, круг, ромб)",
    // Status messages
    autoFillActive: "Авто-заполнение активно.",
    // Placeholders
    typePathOrSelect: "Введите путь или выберите...",
    // Options
    square: "Квадрат",
    circle: "Круг",
    diamond: "Ромб",
    landscape: "Ландшафт (Годы как столбцы)",
    portrait: "Портрет (Годы как строки)",
    expanded: "Расширенный (По умолчанию - больше деталей)",
    compact: "Компактный (Меньше деталей)",
    monday: "Понедельник",
    tuesday: "Вторник",
    wednesday: "Среда",
    thursday: "Четверг",
    friday: "Пятница",
    saturday: "Суббота",
    sunday: "Воскресенье"
  },
  
  // Marker settings
  markers: {
    title: "Настройки маркеров временной шкалы",
    subtitle: "Выберите, какие маркеры временной шкалы видны"
  },
  
  // Folder operations
  folder: {
    moveConfirmation: "Хотите переместить эти заметки в новую папку?",
    moveFiles: "Переместить файлы"
  },
  
  // Notices
  notices: {
    initialScan: "Chronica: Выполняется первоначальное сканирование событий...",
    scanComplete: "Chronica: Сканирование событий завершено. Представления обновлены.",
    rescanning: "Chronica: Повторное сканирование хранилища для событий...",
    rescanComplete: "Chronica: Сканирование событий завершено. Представления обновлены."
  },
  
  // Commands
  commands: {
    openTimeline: "Открыть Chronica Timeline",
    createWeeklyNote: "Создать/Открыть заметку текущей недели",
    rescanEvents: "Повторно сканировать хранилище для событий Chronica"
  },
  
  // Tips
  tips: {
    clickWeek: "• Кликните на любую ячейку недели, чтобы создать или открыть ее заметку.",
    shiftClickEvent: "• Shift+клик на ячейку недели для быстрого добавления события на эту дату.",
    hoverCells: "• Наведите курсор на ячейки для номера недели и диапазона дат.",
    zoomControls: "• Используйте элементы управления масштабированием в боковой панели или 'Подогнать под экран'.",
    addEvent: "• Используйте кнопку 'Добавить событие' или Shift+клик.",
    markMultiWeek: "• Отмечайте многонедельные события, используя 'Диапазон дат'.",
    manageCustomTypes: "• Управляйте пользовательскими типами событий (названия/цвета) через кнопку.",
    editPresetTypes: "• Редактируйте названия/цвета предустановленных типов через 'Управление типами'.",
    eventsCreateNotes: "• События создают/связывают заметки с YAML frontmatter.",
    switchOrientation: "• Переключайтесь между ландшафтной/портретной ориентацией сетки.",
    toggleMarkers: "• Переключайте видимость маркеров десятилетий, недель, месяцев, дней рождения.",
    adjustColors: "• Настройте цвета для прошедших/текущих/будущих ячеек.",
    customizeQuote: "• Настройте цитату в футере.",
    togglePanel: "• Нажмите на ручку внизу экрана, чтобы переключить панель.",
    resizeVertically: "• Перетащите верхнюю ручку для изменения размера по вертикали.",
    resizeHorizontally: "• Перетащите боковые ручки или заголовок (не кнопки) для изменения размера/перемещения по горизонтали.",
    exploreDataViews: "• Изучите различные представления данных во вкладках."
  },
  
  // Months
  months: {
    jan: "Янв",
    feb: "Фев",
    mar: "Мар",
    apr: "Апр",
    may: "Май",
    jun: "Июн",
    jul: "Июл",
    aug: "Авг",
    sep: "Сен",
    oct: "Окт",
    nov: "Ноя",
    dec: "Дек"
  },
  
  // Month names (full)
  monthNames: {
    january: "Январь",
    february: "Февраль",
    march: "Март",
    april: "Апрель",
    may: "Май",
    june: "Июнь",
    july: "Июль",
    august: "Август",
    september: "Сентябрь",
    october: "Октябрь",
    november: "Ноябрь",
    december: "Декабрь"
  },
  
  // Default values
  defaults: {
    quote: "единственная настоящая роскошь — это время."
  }
}; 