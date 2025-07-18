# Internationalization (i18n) Support

This document describes the internationalization system implemented in the Chronica Life in Frames plugin.

## Overview

The plugin now supports multiple languages through a comprehensive i18n system. Currently supported languages:
- English (en) - Default
- Russian (ru)

## Architecture

### File Structure
```
src/i18n/
├── index.ts      # Main i18n manager and types
├── en.ts         # English translations
└── ru.ts         # Russian translations
```

### Core Components

1. **I18nManager Class** (`src/i18n/index.ts`)
   - Manages language switching
   - Provides type-safe access to translations
   - Handles month name localization

2. **Translation Files** (`src/i18n/en.ts`, `src/i18n/ru.ts`)
   - Structured translation objects
   - Organized by UI sections
   - Type-safe with TypeScript interfaces

3. **Plugin Integration**
   - Language setting in plugin settings
   - Automatic initialization on plugin load
   - Dynamic language switching

## Usage

### In Plugin Code

```typescript
// Access translations
const t = this.i18nManager.t();

// Use translations
new Notice(t.notices.initialScan);
containerEl.createEl("h1", { text: t.settings.title });
```

### Adding New Languages

1. Create a new translation file `src/i18n/[lang].ts`
2. Export a translation object matching the `I18n` interface
3. Add the language to the `translations` object in `src/i18n/index.ts`
4. Update the `Language` type to include the new language code
5. Add the language option to the settings dropdown

### Adding New Translation Keys

1. Add the key to the `I18n` interface in `src/i18n/index.ts`
2. Add translations for all supported languages
3. Use the new key in your code

## Translation Categories

### Common Actions
- `save`, `cancel`, `edit`, `delete`, etc.

### Welcome Modal
- Welcome screen text and setup instructions

### Event Types
- Event type names and management UI

### Event Modal
- Event creation/editing interface

### Timeline View
- Main timeline interface elements

### Statistics Panel
- Statistics and analysis UI

### Settings
- Settings page sections and descriptions

### Notices
- System notifications and messages

### Commands
- Command names and descriptions

### Tips
- Help text and user guidance

### Months
- Localized month abbreviations

## Language Detection

The plugin uses the language setting stored in user preferences. Users can change the language through:
1. Settings → Chronica Timeline → Language
2. Available options: English, Русский

## Best Practices

1. **Always use the i18n system** for user-facing text
2. **Don't hardcode strings** in the UI
3. **Use descriptive key names** that indicate the context
4. **Keep translations organized** by UI section
5. **Test with different languages** to ensure proper text fitting
6. **Consider text length** - some languages may need more space

## Technical Details

### Type Safety
All translations are fully typed with TypeScript, providing:
- Autocomplete for translation keys
- Compile-time checking for missing translations
- IntelliSense support in IDEs

### Performance
- Translations are loaded once on plugin initialization
- Language switching is instant
- No runtime translation lookups

### Extensibility
The system is designed to easily add:
- New languages
- New translation categories
- Dynamic content formatting
- Pluralization rules (if needed)

## Contributing Translations

To add or improve translations:

1. Fork the repository
2. Add/update translation files
3. Test the changes with the target language
4. Submit a pull request

### Translation Guidelines

- Maintain consistent terminology
- Use appropriate formality levels
- Consider cultural context
- Test UI layout with translated text
- Keep translations concise but clear 