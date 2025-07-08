# Piyasalar Page Recreation Plan

## 1. Overview
Recreate the 'Piyasalar' (Markets) page as shown in the provided screenshot, matching the layout, navigation, and data presentation. The page includes:
- A top navigation bar with time and icons
- A main title ('Piyasalar')
- Tab navigation (ABD Borsası, BIST, Fonlar, Kripto)
- Market summary cards (S&P 500, NASDAQ, DOW, ABD Doları, BIST 100, etc.)
- Section: 'Günün Öne Çıkanları' (Today's Highlights)
  - Sub-tabs: Popüler, Hacim, Yükselen, Düşen
  - Table of stocks with rank, symbol, name, and daily change
- Bottom navigation bar (Yatırım, Kripto, Keşfet, Piyasalar, Menü)

---

## 2. UI Structure & Components

### a. Top Bar
- Time (e.g., 00:47)
- Mute/notification icon
- Status icons (WiFi, battery, etc.)

### b. Main Title
- Large, bold 'Piyasalar' text

### c. Tab Navigation
- Tabs: ABD Borsası (active), BIST, Fonlar, Kripto
- Underline for active tab

### d. Market Summary Cards
- Horizontal scroll or grid of cards
- Each card: Ticker, Name, Change % (color-coded)

### e. Highlights Section
- Title: 'Günün Öne Çıkanları'
- Sub-tabs: Popüler (active), Hacim, Yükselen, Düşen
- Table/List:
  - Rank
  - Stock symbol (with logo)
  - Name/description
  - Daily change (color-coded)

### f. Bottom Navigation Bar
- 5 icons with labels: Yatırım, Kripto, Keşfet, Piyasalar (active), Menü

---

## 3. Data Requirements
- Market summary data (tickers, names, % change)
- Highlights data (rank, symbol, name, logo, daily change)
- Tab and navigation state

---

## 4. Component Breakdown
- `MarketsPage` (main page)
  - `TopBar`
  - `MainTabs`
  - `MarketSummaryCards`
  - `HighlightsSection`
    - `HighlightsTabs`
    - `HighlightsTable`
  - `BottomNavBar`

---

## 5. Implementation Steps
1. **Set up routing/page for 'Piyasalar'**
2. **Create layout structure** (flex/column)
3. **Implement TopBar**
4. **Add MainTabs**
5. **Build MarketSummaryCards**
6. **Create HighlightsSection with sub-tabs and table**
7. **Implement BottomNavBar**
8. **Style for mobile-first, match screenshot**
9. **Add mock data for initial version**
10. **(Optional) Add interactivity for tabs and navigation**

---

## 6. Notes
- Use existing UI components from `src/components/ui` where possible (tabs, cards, table, etc.)
- Focus on mobile layout and spacing
- Use color coding for positive/negative changes
- Use placeholder images/icons for logos
- Turkish language for all labels and text

---

**Next step:** Confirm plan, then scaffold the main page and components. 