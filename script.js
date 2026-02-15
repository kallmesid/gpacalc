// --- DATA CONFIGURATION ---

// ================= SEMESTER 1 ARRAYS (Based on Sem 1 Image) =================

// Group A Sem 1 (CS/IT) -> Physics Cycle
const sem1PhysicsCycle = [
    // Theory
    { name: 'Engineering Mathematics-I', credits: 3, max: 100 },
    { name: 'Engineering Physics', credits: 3, max: 100 },
    { name: 'Engineering Mechanics', credits: 3, max: 100 },
    { name: 'Basic Electronics Engg', credits: 3, max: 100 },
    { name: 'Prob. Solving & Prog. I (PSP-I)', credits: 3, max: 100 },
    
    // Practicals / Term Work
    { name: 'Engg Graphics & CAD (TW)', credits: 1, max: 25 },
    { name: 'Engg Graphics & CAD (Lab)', credits: 1, max: 25 },
    { name: 'PBL Management I', credits: 1, max: 25 },
    { name: 'Engg Mathematics-I (Lab)', credits: 1, max: 25 },
    { name: 'Engineering Physics (Lab)', credits: 1, max: 25 },
    { name: 'Basic Electronics (Lab)', credits: 1, max: 25 }
];

// Group B Sem 1 (Instru/Elec/Entc/AIDS) -> Chemistry Cycle
const sem1ChemistryCycle = [
    // Theory
    { name: 'Engineering Mathematics-I', credits: 3, max: 100 },
    { name: 'Industrial Chemistry', credits: 3, max: 100 },
    { name: 'Engineering Mechanics', credits: 3, max: 100 },
    { name: 'Basic Electrical Engg', credits: 3, max: 100 },
    { name: 'Prob. Solving & Prog. I (PSP-I)', credits: 3, max: 100 },
    
    // Practicals / Term Work
    { name: 'Engg Graphics & CAD (TW)', credits: 1, max: 25 },
    { name: 'Engg Graphics & CAD (Lab)', credits: 1, max: 25 },
    { name: 'PBL Management I', credits: 1, max: 25 },
    { name: 'Engg Mathematics-I (Lab)', credits: 1, max: 25 },
    { name: 'Industrial Chemistry (Lab)', credits: 1, max: 25 },
    { name: 'Basic Electrical (Lab)', credits: 1, max: 25 }
];

// ================= SEMESTER 2 ARRAYS (Based on Sem 2 Image) =================

// Group A Sem 2 (CS/IT) -> Chemistry Cycle Structure
const sem2ChemistryCycle = [
    // Theory
    { name: 'Engineering Mathematics-II', credits: 3, max: 100 },
    { name: 'Industrial Chemistry', credits: 3, max: 100 },
    { name: 'Basics in Mechanical Engg', credits: 2, max: 100 },
    { name: 'Environmental Informatics', credits: 1, max: 50 },
    { name: 'Basic Electrical Engg', credits: 3, max: 100 },
    { name: 'Prob. Solving & Prog. II (PSP-II)', credits: 3, max: 100 },
    
    // Practicals
    { name: 'PBL Management II', credits: 1, max: 25 },
    { name: 'Maths-II (Lab)', credits: 1, max: 25 },
    { name: 'Chemistry (Lab)', credits: 1, max: 25 },
    { name: 'Basic Electrical (Lab)', credits: 1, max: 25 }
];

// Group B Sem 2 (Instru/Elec/Entc/AIDS) -> Physics Cycle Structure
const sem2PhysicsCycle = [
    // Theory
    { name: 'Engineering Mathematics-II', credits: 3, max: 100 },
    { name: 'Engineering Physics', credits: 3, max: 100 },
    { name: 'Basics in Mechanical Engg', credits: 2, max: 100 },
    { name: 'Environmental Informatics', credits: 1, max: 50 },
    { name: 'Basic Electronics Engg', credits: 3, max: 100 },
    { name: 'Prob. Solving & Prog. II (PSP-II)', credits: 3, max: 100 },
    
    // Practicals
    { name: 'PBL Management II', credits: 1, max: 25 },
    { name: 'Maths-II (Lab)', credits: 1, max: 25 },
    { name: 'Physics (Lab)', credits: 1, max: 25 },
    { name: 'Basic Electronics (Lab)', credits: 1, max: 25 }
];


let currentSubjects = [];

// --- LOGIC FUNCTIONS ---

function getGradePointFromPercent(percent) {
    if (percent >= 90) return 10;   // O
    if (percent >= 85) return 9;    // A+
    if (percent >= 75) return 8;    // A
    if (percent >= 65) return 7;    // B+
    if (percent >= 55) return 6;    // B
    if (percent >= 45) return 5;    // C
    if (percent >= 40) return 4;    // D
    return 0;                      // F
}

function updateSubjects() {
    const branch = document.getElementById('branch').value;
    const semester = document.getElementById('semester').value;
    const tbody = document.getElementById('subject-body');
    
    // Clear existing table rows
    tbody.innerHTML = '';

    // Logic to determine which cycle to load
    // CS and IT follow Physics Cycle in Sem 1 (Group A)
    // AIDS, INSTRUMENTATION, ELECTRICAL, ENTC follow Chemistry Cycle in Sem 1 (Group B)
    const isGroupA = (branch === 'CS' || branch === 'IT');
    const isSem1 = (semester === '1');

    if (isGroupA) {
        // Group A
        if (isSem1) currentSubjects = sem1PhysicsCycle;
        else currentSubjects = sem2ChemistryCycle;
    } else {
        // Group B
        if (isSem1) currentSubjects = sem1ChemistryCycle;
        else currentSubjects = sem2PhysicsCycle;
    }

    // Generate HTML rows
    currentSubjects.forEach((sub, index) => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${sub.name}</td>
            <td><input type="number" id="sub-${index}" placeholder="0-${sub.max}" oninput="updateRowGP(${index}, ${sub.max})"></td>
            <td>${sub.max}</td>
            <td>${sub.credits}</td>
            <td id="gp-${index}" class="gp-cell">-</td>
        `;
        
        tbody.appendChild(tr);
    });
    
    // Clear result text when subject changes
    document.getElementById("result").innerText = "";
}

function updateRowGP(index, max) {
    const inputVal = document.getElementById(`sub-${index}`).value;
    const gpCell = document.getElementById(`gp-${index}`);
    
    if (inputVal === "" || inputVal < 0 || inputVal > max) {
        gpCell.innerText = "-";
        return;
    }

    let percent = (parseFloat(inputVal) / max) * 100;
    let gp = getGradePointFromPercent(percent);
    gpCell.innerText = gp;
}

function calculateGPA() {
    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 0; i < currentSubjects.length; i++) {
        let subject = currentSubjects[i];
        let inputId = `sub-${i}`;
        let marksStr = document.getElementById(inputId).value;
        let marks = parseFloat(marksStr);

        // Validation
        if (marksStr === "" || isNaN(marks) || marks < 0 || marks > subject.max) {
            document.getElementById("result").innerText = `Error: Please enter valid marks (0-${subject.max}) for ${subject.name}.`;
            return;
        }

        let percent = (marks / subject.max) * 100;
        let gp = getGradePointFromPercent(percent);

        totalCredits += subject.credits;
        totalPoints += gp * subject.credits;
    }

    if (totalCredits === 0) {
        document.getElementById("result").innerText = "No credits found.";
        return;
    }

    let gpa = (totalPoints / totalCredits).toFixed(2);
    document.getElementById("result").innerText = "Your GPA is: " + gpa;
}

// Initialize table on load
window.onload = updateSubjects;