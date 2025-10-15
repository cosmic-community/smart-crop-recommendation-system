# 🌾 Smart Crop Recommendation System

![App Preview](https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=300&fit=crop&auto=format)

A comprehensive agricultural intelligence platform for Indian farmers and researchers, providing data-driven crop recommendations based on soil parameters, climate data, and real-time market pricing across six key Indian states.

## ✨ Features

- **Intelligent Crop Recommendations**: Advanced recommendation engine analyzing soil parameters (N, P, K, pH) and climate data
- **State-Specific Analytics**: Priority display for Telangana with comprehensive data for UP, MP, Punjab, West Bengal, and Haryana
- **Real-Time Market Pricing**: Live market prices in INR for all recommended crops
- **Yield Predictor Score (YPS)**: Proprietary business viability metric (1-100) combining market price and predicted yield
- **Interactive Data Tables**: Sortable, filterable tables for crop yield records across all states
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Dynamic Content**: Real-time updates from Cosmic CMS without code deployment

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68efa42a54ebfd2038dfee33&clone_repository=68efbb3a5826bf8f4eb73e05)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "**PROJECT TITLE:** State-Specific Smart Crop Recommendation System (India)
> 
> **I. PROJECT GOAL & CONTEXT**
> 1.  **Primary Objective:** To develop a dynamic, data-driven web application that provides precise crop recommendations and real-time market data (including current weather and marketing price in INR) for specific Indian states, based on a historical Kaggle dataset and generated soil parameters.
> 2.  **Target Audience:** Indian farmers, agricultural students, and academic researchers focused on crop yield optimization.
> 3.  **Success Metric:** The application must successfully generate a recommendation based on imputed N, P, K, pH, and weather data, and clearly display all required output fields (including image and pricing) upon clicking the "Get recommendation" button.
> 4.  **Platform/Technology Context:** This app is being built using a [Web App Builder / AI Coding Assistant]. The output must be a clear, step-by-step **Project Plan** outlining the data ingestion, ML/logic layer implementation, database structure, and modern component setup.
> 
> **II. CORE FEATURES & FUNCTIONALITY**
> The application will operate with a single Public/Guest user flow, driven by two key buttons:
> 
> 1.  **"Select state" Button Functionality (Data Display):**
>     * **Action:** When clicked, the main display area of the application must prioritize the crop data for the state **"Telangana"**.
>     * **Output Layout:** Immediately below the distinct data display for Telangana, the system must show a summarized or filtered view of the crop data for the **remaining 5 required states:** Uttar Pradesh, Madhya Pradesh, Punjab, West Bengal, and Haryana.
>     * **Dataset Filter Constraint:** The entire app must only process data related to these six states: **Telangana, Uttar Pradesh, Madhya Pradesh, Punjab, West Bengal, and Haryana.**
> 
> 2.  **"Get recommendation" Button Functionality (ML/Logic Trigger):**
>     * **Action:** Triggers the underlying machine learning/logic model to process the current state/user inputs (or simulated/auto-generated inputs) and generate a single optimal crop recommendation.
>     * **Recommendation Output:** The output must be presented in a visually appealing, auto-generated card format for the recommended crop, including:
>         * **Crop Image:** A real-life image of the recommended crop .
>         * **Soil/Climate Metrics:** Display predicted or optimal values for **N, P, K, and pH value** (simulated soil data), and **Humidity and Annual Rainfall** (simulated/real-time weather data).
>         * **Real-time Metrics:** Display the current **Marketing Price** for the recommended crop, fetched using a real-life API, and clearly stated in **Indian Rupees (INR)**.
>         * **Real-time Weather:** Display the current **Weather API data** (e.g., Temperature, Weather Condition) for the recommended state.
> 
> **III. DATA STRUCTURE (The Database & Logic Layer)**
> The application must manage data using the following logic and structure:
> 
> 1.  **Source Data Table (Based on `crop_yield.csv`):** Columns: `Crop`, `Crop_Year`, `Season`, `State`, `Area`, `Production`, `Annual_Rainfall`, `Fertilizer`, `Pesticide`, `Yield`. *Data must be filtered for the 6 required states only.*
> 2.  **ML/Logic Layer:** A crucial component must be implemented to automatically impute or look up the required missing parameters based on the existing data.
> 3.  **Recommendation Table (Inferred/Calculated):** Must store/calculate the optimal data points for a given Crop and State: `Crop_Name`, **`N_Value`**, **`P_Value`**, **`K_Value`**, **`pH_Value`**, **`Optimal_Humidity`**, **`Optimal_Annual_Rainfall`**.
> 
> **IV. DATA CONSTRAINTS & REQUIREMENTS (Critical)**
> * **Non-Negative Values:** The output values for N, P, K, Humidity, and Annual Rainfall must **never be negative**. They must be generated or processed to be $\ge 0$.
> * **pH Constraint:** The pH value must strictly range between **0 and 10**. Values from 0 to 9 can be floating-point numbers (e.g., 6.5, 7.1), and 10 is the maximum final integer value.
> * **API Integration:** Reserve clear placeholders for API keys for Weather Data and Marketing Price. Ensure the Marketing Price output is clearly formatted in **Indian Rupees (INR)**.
> 
> **V. USER INTERFACE (UI) & EXPERIENCE (UX)**
> 1.  **Design Style:** **Clean and modern**. Use a professional, vibrant, and engaging color palette suitable for an agricultural technology application.
> 2.  **Required Screens:** [Landing Page / Main Dashboard] - All functionality must be accessible on a single, clean page without sign-up/login.
> 3.  **Mandatory Components:**
>     * A prominent, centralized **Output Card** for the "Get recommendation" result.
>     * Two distinct, primary action buttons: **"Select state"** and **"Get recommendation"**.
>     * A dedicated section/table to display the **Telangana data** prominently.
>     * A secondary section/table to display the **Other 5 States' data**.
> 
> **VI. VALUE ADDITION (The "Interesting" Factor)**
> * **Risk/Reward Metric:** After the primary recommendation output, add a simple, auto-generated metric called **"Yield Predictor Score (YPS)"** (e.g., a value from 1 to 100) that factors in the current market price (INR) and the predicted yield from the CSV data. This provides a single, instant business-viability rating for the recommended crop.
> 
> **VII. FINAL OUTPUT REQUEST**
> Generate a complete, structured **Project Plan**. This plan must include:
> 1.  A confirmation of the **Data Schema** (Source and Recommendation Tables, including all N, P, K, pH, and constraint notes).
> 2.  A detailed list of the **Components/Blocks** needed for the main screen (e.g., *Header, Recommendation Card Component, State Data Table Component, two Button Components*).
> 3.  A suggested **development timeline** (e.g., *Phase 1: Data Ingestion and Filtering; Phase 2: ML/Logic Layer Implementation (NPK Imputation); Phase 3: UI/UX and API Integration*)."

### Code Generation Prompt

> Based on the content model I created for the State-Specific Smart Crop Recommendation System, now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content Management**: Cosmic CMS
- **Package Manager**: Bun
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Bun 1.0 or higher
- A Cosmic account with bucket credentials

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd smart-crop-recommendation
```

2. Install dependencies
```bash
bun install
```

3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching All States
```typescript
const response = await cosmic.objects
  .find({ type: 'states' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Fetching Crops with Details
```typescript
const response = await cosmic.objects
  .find({ type: 'crops' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Fetching Yield Records with State and Crop Data
```typescript
const response = await cosmic.objects
  .find({ type: 'crop-yield-records' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1); // Includes nested state and crop objects
```

## 🌐 Cosmic CMS Integration

This application uses Cosmic CMS for all content management with three main object types:

### States Object Type
- **State Name**: Full state name
- **State Code**: 2-letter code (e.g., TG, UP)
- **Climate Zone**: Tropical, Sub-Tropical, Semi-Arid, Temperate
- **Average Rainfall**: Annual rainfall in millimeters
- **Featured**: Boolean flag for priority display (Telangana)

### Crops Object Type
- **Crop Name**: Name of the crop
- **Crop Image**: Real-life crop image
- **Category**: Cereal, Pulse, Oilseed, Cash Crop, Vegetable
- **N/P/K Values**: Optimal nutrient requirements (kg/ha)
- **pH Value**: Optimal soil pH (0-10 range)
- **Optimal Humidity**: Relative humidity percentage
- **Optimal Rainfall**: Annual rainfall requirement (mm)
- **Growing Season**: Kharif, Rabi, Zaid, Whole Year
- **Market Price**: Current price in INR per quintal

### Crop Yield Records Object Type
- **State**: Reference to States object
- **Crop**: Reference to Crops object
- **Crop Year**: Year of data
- **Season**: Growing season
- **Area**: Cultivated area in hectares
- **Production**: Total production in tonnes
- **Yield**: Production per hectare
- **Fertilizer/Pesticide Usage**: Input quantities

## 🚀 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Click the "Deploy with Vercel" button above
2. Connect your GitHub repository
3. Add your environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Environment Variables for Production

Set these in your Vercel project settings:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## 📱 Features in Detail

### State Selection
- Click "Select State" to view comprehensive crop data
- Telangana data displayed prominently at the top
- Other 5 states (UP, MP, Punjab, WB, Haryana) shown in organized sections

### Crop Recommendation
- Click "Get Recommendation" to receive AI-powered suggestions
- Displays optimal crop based on current data
- Shows complete nutrient profile (N, P, K, pH)
- Real-time market price in INR
- Yield Predictor Score (YPS) for business viability

### Data Tables
- Interactive sortable tables for all yield records
- Filter by state, crop, season, and year
- Comprehensive metrics including area, production, and yield

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

<!-- README_END -->