# AISSMS Autonomous GPA Calculator 🎓

A responsive, web-based GPA calculator tailored for First Year Engineering students under the AISSMS Autonomous curriculum.

This tool dynamically loads course structures based on Branch and Semester, accurately handling the "Physics Cycle" vs. "Chemistry Cycle" rotation used in engineering colleges.


```aissmscalc.xyz```


## 🚀 Features

*   **Dynamic Subject Loading:** Automatically switches subject lists, credits, and max marks based on the selected **Branch** and **Semester**.
*   **Cycle Logic:** Handles the rotation of Physics and Chemistry groups:
    *   **Group A (CS, IT):** Physics Cycle (Sem 1) → Chemistry Cycle (Sem 2).
    *   **Group B (AIDS, Entc, Instru, Electrical):** Chemistry Cycle (Sem 1) → Physics Cycle (Sem 2).
*   **Real-time Grade Point Display:** Shows the Grade Point (GP) for each subject instantly as you type marks.
*   **Weighted Calculation:** Accurate GPA calculation considering credit weights (3, 2, or 1 credit subjects).
*   **Responsive UI:** Clean, mobile-friendly interface styled with modern CSS.

## 🛠️ Tech Stack

*   **HTML5:** Structure and layout.
*   **CSS3:** Responsive styling and modern aesthetics.
*   **JavaScript (ES6):** Logic for dynamic DOM manipulation and GPA calculation.

## 📂 Project Structure

```text
/
├── index.html      # Main user interface
├── style.css       # Styling and responsive design
├── script.js       # Data arrays for subjects and calculation logic
└── README.md       # Project documentation
```

## 📝 Usage

1.  Select your **Branch** from the dropdown menu (e.g., CS, IT, ENTC).
2.  Select your current **Semester** (1 or 2).
3.  The table will automatically update with your specific subjects.
4.  Enter your **Marks Obtained** for each subject.
    *   *The "GP" column will update automatically as you type.*
5.  Click **"Calculate GPA"** to see your final semester GPA.

## 🤝 Supported Branches

*   Computer Science (CS)
*   Information Technology (IT)
*   Artificial Intelligence & Data Science (AIDS)
*   Instrumentation
*   Electrical Engineering
*   Electronics & Telecommunication (ENTC)
