/* =========================================================
   चित्रमाला प्रश्नोत्तरी
   Picture Quiz - Question Database
   ========================================================= */


/* ================= QUESTION DATABASE ================= */

const pictureQuestions = {

    1: {
        q: "इस भग्नावशेष दुर्ग का क्या नाम है? What is the name of this ruined citadel?",
        img: "./image/im-1.webp",
        a: "माचू पिच्चू (Machu Picchu)"
    },

    2: {
        q: "इस जानवर का नाम क्या है? What is the name of this animal?",
        img: "./image/im-2.2.jpeg",
        a: "मीरकैट (Meerkat)"
    },

    3: {
        q: "यह कौन सा शहर है? Which city is this?",
        img: "./image/im-33.jpeg",
        a: "वेनिस (Venice, the City of Canals)"
    },

    4: {
        q: "यह कौन सा प्रसिद्ध मंदिर है? Which famous temple is this?",
        img: "./image/im-44.jpeg",
        a: "बृहदेश्वर मंदिर (तंजावुर) – Brihadeeswara Temple"
    },

    5: {
        q: "यह किस कंपनी का लोगो है? Which company's logo is this?",
        img: "./image/im-5.jpg.jpeg",
        a: "SAIL"
    },

    6: {
        q: "इस फूल का नाम क्या है? What is the name of this flower?",
        img: "./image/im-6.png",
        a: "ब्रह्म कमल (Brahma Kamal)"
    },

    7: {
        q: "इस प्राचीन एम्फीथिएटर का नाम बताएं। Name this ancient amphitheatre.",
        img: "./image/im-7.jpg.jpeg",
        a: "कोलोसियम (Colosseum)"
    },

    8: {
        q: "इस यंत्र (मशीन) का नाम क्या है? What is the name of this machine?",
        img: "./image/im-9.jpg",
        a: "बायोस्कोप (Bioscope)"
    },

    9: {
        q: "इस पेंटिंग का नाम बताएं। Name this painting.",
        img: "./image/im-10.jpg",
        a: "बनी ठनी (Bani Thani)"
    },

    10: {
        q: "यह किस रासायनिक यौगिक की संरचना है? Which chemical compound's structure is this?",
        img: "./image/im-12.jpg",
        a: "बेंजीन (Benzene)"
    },

    11: {
        q: "यह लोगो किस कंपनी का है? Which company's logo is this?",
        img: "./image/im-11.png",
        a: "मित्सुबिशी (Mitsubishi)"
    },

    12: {
        q: "इस पेड़ का नाम बताएं। Name this tree.",
        img: "./image/im-4.jpg.jpeg",
        a: "बाओबैब (Baobab)"
    },

    13: {
        q: "यह कौन सी एयरलाइन है? Which airline is this?",
        img: "./image/im-13.jpg.jpeg",
        a: "टर्किश एयरलाइन (Turkish Airline)"
    },

    14: {
        q: "इस प्रसिद्ध पेंटिंग को किसने बनाया? Who painted this famous painting?",
        img: "./image/im-14.jpg",
        a: "राजा रवि वर्मा (Raja Ravi Varma)"
    },

    15: {
        q: "इस प्रतिमा का नाम बताएं। Name this statue.",
        img: "./image/im-15.jpeg",
        a: "क्राइस्ट द रिडीमर (Christ the Redeemer)"
    },

    16: {
        q: "इस प्रतीक का क्या नाम है? What is the name of this symbol?",
        img: "./image/im-16.jpg",
        a: "यिन और यांग (Yin and Yang)"
    },

    17: {
        q: "इस टावर का नाम बताएं। Name this tower.",
        img: "./image/im-17.jpeg",
        a: "ओरिएंटल पर्ल टावर (शंघाई) (Oriental Pearl Tower)"
    },

    18: {
        q: "इस उपकरण का नाम बताएं। What is the name of this instrument?",
        img: "./image/im-18.webp",
        a: "ऑटोस्कोप (Autoscope)"
    },

    19: {
        q: "इस कार्टून कैरेक्टर का नाम क्या है? What is the name of this cartoon character?",
        img: "./image/im-19.png",
        a: "जैक (ओगी एंड द कॉकरोच) – Jack"
    },

    20: {
        q: "इस बेकरी आइटम का नाम क्या है? What is the name of this bakery item?",
        img: "./image/im-200.jpeg",
        a: "क्रोइसेंट (Croissant)"
    }

};


/* ================= CURRENT LEVEL ================= */

let currentLevel = 1;


/* ================= VISITED LEVELS ================= */

const completedLevels = new Set();


/* ================= SCREEN REFERENCES ================= */

const screens = {

    home: document.getElementById("screen-home"),

    levels: document.getElementById("screen-levels"),

    preview: document.getElementById("screen-question-preview"),

    answer: document.getElementById("screen-answer-page")

};


/* ================= SHOW SCREEN ================= */

function showScreen(screenName) {

    Object.values(screens).forEach((screen) => {

        screen.classList.remove("active");

    });

    screens[screenName].classList.add("active");

}


/* ================= LEVEL GRID ================= */

const grid = document.getElementById("level-grid");


/* ================= RENDER LEVELS ================= */

function renderLevels() {

    grid.innerHTML = "";

    // Create Level 1 to Level 20

    for (let level = 1; level <= 20; level++) {

        const button = document.createElement("button");

        button.className = "level-btn";

        button.textContent = level;

        button.setAttribute(
            "aria-label",
            `Level ${level}`
        );


        // Previously visited levels become RED

        if (completedLevels.has(level)) {

            button.classList.add("completed");

            button.setAttribute(
                "aria-label",
                `Level ${level} - visited`
            );

        }


        // LEVEL CLICK EVENT

        button.addEventListener("click", function () {

            // Mark level as visited

            completedLevels.add(level);

            // Change button color to RED

            button.classList.add("completed");

            // Open selected question

            openQuestionPreview(level);

        });


        // Add button to grid

        grid.appendChild(button);

    }

}


/* ================= PAGE 3: QUESTION PREVIEW ================= */

function openQuestionPreview(level) {

    currentLevel = level;

    const data = pictureQuestions[currentLevel];


    // Check question availability

    if (!data) {

        console.error(
            "Question not found:",
            currentLevel
        );

        return;

    }


    // Get HTML elements

    const questionText =
        document.getElementById("preview-q-text");

    const questionImage =
        document.getElementById("preview-q-image");


    // Set question text

    questionText.textContent = data.q;


    // Set question image

    questionImage.src = data.img;

    questionImage.alt = "Question " + currentLevel;


    // Image error detection

    questionImage.onerror = function () {

        console.error(
            "IMAGE NOT FOUND:",
            data.img
        );

    };


    // Display question screen

    showScreen("preview");

}


/* ================= PAGE 4: SHOW ANSWER ================= */

function openAnswerPage() {

    const data = pictureQuestions[currentLevel];


    // Check question availability

    if (!data) {

        console.error(
            "Question not found:",
            currentLevel
        );

        return;

    }


    // Get answer page elements

    const answerQuestionText =
        document.getElementById("answer-q-text");

    const answerImage =
        document.getElementById("answer-q-image");

    const answerCard =
        document.getElementById("answer-card-text");


    // Set question text

    answerQuestionText.textContent = data.q;


    // Set image

    answerImage.src = data.img;

    answerImage.alt = "Question " + currentLevel;


    // Image error detection

    answerImage.onerror = function () {

        console.error(
            "IMAGE NOT FOUND:",
            data.img
        );

    };


    // Display answer

    answerCard.textContent = data.a;


    // Show answer screen

    showScreen("answer");

}


/* ================= START BUTTON ================= */
/* HOME → LEVELS */

document
    .getElementById("btn-start")
    .addEventListener("click", function () {

        renderLevels();

        showScreen("levels");

    });


/* ================= ANSWER BUTTON ================= */
/* QUESTION → ANSWER */

document
    .getElementById("btn-show-answer")
    .addEventListener("click", function () {

        openAnswerPage();

    });


/* ================= LEVEL PAGE BACK BUTTON ================= */
/* LEVELS → HOME */

document
    .getElementById("btn-back-to-home")
    .addEventListener("click", function () {

        showScreen("home");

    });


/* ================= QUESTION PAGE BACK BUTTON ================= */
/* QUESTION → LEVELS */

document
    .getElementById("btn-back-to-levels-3")
    .addEventListener("click", function () {

        showScreen("levels");

    });


/* ================= QUESTION PAGE HOME BUTTON ================= */
/* QUESTION → LEVELS */

document
    .getElementById("btn-home-from-question")
    .addEventListener("click", function () {

        showScreen("levels");

    });


/* ================= ANSWER PAGE BACK BUTTON ================= */
/* ANSWER → QUESTION */

document
    .getElementById("btn-back-to-preview-4")
    .addEventListener("click", function () {

        showScreen("preview");

    });


/* ================= ANSWER PAGE HOME BUTTON ================= */
/* ANSWER → LEVELS */

document
    .getElementById("btn-home-from-answer")
    .addEventListener("click", function () {

        showScreen("levels");

    });


/* ================= INITIALIZE ================= */

renderLevels();