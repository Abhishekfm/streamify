# Streamify Analytics Dashboard

A modern music streaming analytics dashboard built with React, Tailwind CSS, and Chart.js. Provides insights into user activity, revenue streams, and content performance.

## Features

- **Key Metrics Overview**:

  - Total Users
  - Active Users
  - Total Streams
  - Revenue
  - Top Artist

- **Interactive Data Visualizations**:

  - User Growth Line Chart
  - Revenue Distribution Pie Chart
  - Top Songs Bar Chart
  - Recent Streams Data Table

- **User Interactions**:

  - Table Sorting (Date/Stream Count)
  - Artist/Song Filtering
  - Chart Tooltips and Hover Effects
  - Responsive Design

- **Bonus Features**:
  - CSV Export for Table Data
  - Loading States
  - Client-Side Pagination

## Installation & Usage

### Prerequisites

- Node.js v16+
- npm v8+

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Abhishekfm/streamify.git
cd streamify
```

2. Install dependencies:

```bash
npm install
```

### Running the Application

1. Start the development server and mock API:

```bash
npm start
```

2. Access the application:

- Dashboard: http://localhost:5173
- Mock API: http://localhost:3001

## Project Structure

```
src/
├── components/       # React components
├── context/          # Data management
├── services/         # API service layer
├── App.jsx           # Main application
└── main.jsx          # Entry point
```

## Thought Process & Design Decisions

### Architecture Choices

- **React**: Chosen for component-based architecture and ecosystem
- **Tailwind CSS**: Rapid styling with utility-first approach
- **Chart.js**: Balanced between customization and ease of use
- **JSON Server**: Simple mock API implementation
- **Context API**: Lightweight state management solution

### Key Trade-offs

1. **Client-Side Filtering**:

   - Pros: Simple implementation, fast for small datasets
   - Cons: Not scalable for large datasets (would need server-side filtering)

2. **Mock Data Strategy**:

   - Used JSON Server instead of real API for rapid development
   - Generated realistic but static dataset

3. **Charting Library**:

   - Chose Chart.js over D3 for faster implementation
   - Sacrificed some customization for development speed

4. **Testing Strategy**:
   - Focused on core functionality testing
   - Postponed comprehensive test coverage for faster delivery

## Performance Optimizations

1. **Component Memoization**:

```javascript
const MemoizedChart = React.memo(RevenuePieChart);
```

2. **Data Fetching**:

- Parallel API requests using `Promise.all`
- Debounced filter inputs

3. **Code Splitting**:

- Dynamic imports for heavy components

```javascript
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));
```

## Technologies Used

- **Frontend**:

  - React v18
  - Tailwind CSS v3
  - Chart.js v4
  - Mui

- **Development Tools**:
  - Vite
  - JSON Server
  - ESLint
