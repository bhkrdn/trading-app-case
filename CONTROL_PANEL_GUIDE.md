# Control Panel Guide

## Overview

The Control Panel is a development interface that allows you to dynamically modify the trading app's layout and components. Access it by navigating to `/dev` or clicking the "Development Mode" link on the main page.

## Features

### 🖱️ Drag & Drop Reordering
- **Drag components** using the grip handle (⋮⋮) to reorder them
- **Visual feedback** during dragging
- **Keyboard accessible** - use arrow keys for navigation
- **Touch-friendly** for mobile devices

### 👁️ Component Visibility
- **Toggle visibility** with the eye icon (👁️/👁️‍🗨️)
- **Real-time updates** in the preview
- **Component statistics** show visible/total counts

### ⚙️ Component Configuration
- **Edit component properties** by clicking the settings icon (⚙️)
- **Type-aware editors** for different data types:
  - Text inputs for strings
  - Number inputs for numeric values
  - Dropdowns for booleans
  - JSON editor for complex objects
- **Reset to defaults** option available

### 🎨 Layout Presets
Quick layouts for different use cases:

| Preset | Focus | Components |
|--------|-------|------------|
| **Default** | Complete view | All components |
| **Minimal** | Quick trading | Price, Chart, Position |
| **Analyst** | Research | Analyst estimates, News |
| **Technical** | Charts | Chart, Trends, Statistics |
| **Portfolio** | Management | Position, Related stocks |
| **News** | Research | News, Analyst estimates |

## How to Use

### Basic Controls
1. **Navigate to `/dev`** - Access the control panel
2. **Toggle components** - Click eye icons to show/hide
3. **Reorder components** - Drag and drop using grip handles
4. **Reset layout** - Click "Reset to Default" button

### Advanced Features
1. **Apply presets** - Switch to "Presets" tab and click any preset
2. **Configure components** - Click settings icon to edit properties
3. **Save changes** - All changes persist automatically to localStorage

### Interface Layout
```
┌─────────────────┬─────────────────────┐
│   Control Panel │   Stock Screen      │
│                 │                     │
│ • Components    │   [Live Preview]    │
│   Tab           │                     │
│ • Presets Tab   │                     │
│ • Settings      │                     │
└─────────────────┴─────────────────────┘
```

## Tips

- **Changes are persistent** - Your layout saves automatically
- **Real-time preview** - See changes immediately
- **Multiple presets** - Test different layouts quickly
- **Component isolation** - Configure individual components
- **Mobile responsive** - Works on all screen sizes

## Keyboard Shortcuts

- **Tab** - Navigate between controls
- **Space/Enter** - Toggle component visibility
- **Arrow keys** - Navigate drag & drop items
- **Escape** - Close configuration panels

## Troubleshooting

- **Reset if stuck** - Use "Reset to Default" button
- **Clear storage** - Delete localStorage to start fresh
- **Check console** - Look for any error messages
- **Refresh page** - If controls become unresponsive 