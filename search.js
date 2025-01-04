<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FAQ Search</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        #faq-list {
            list-style-type: none;
            padding: 0;
        }
        #faq-list li {
            margin: 10px 0;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        #faq-list li h3 {
            margin: 0 0 5px;
        }
        #faq-list li p {
            margin: 0;
        }
        #no-match {
            color: red;
            font-weight: bold;
            margin-top: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>FAQ Search</h1>
    <label for="search-input">Search FAQs:</label>
    <input 
        type="text" 
        id="search-input" 
        placeholder="Search for questions or answers..." 
        onkeyup="searchFAQs()" 
        aria-label="Search FAQs"
    >
    
    <ul id="faq-list">
        <li>
            <h3>What is CampusConnect?</h3>
            <p>CampusConnect is a platform to help students prepare for college with resources, tips, and guidance.</p>
        </li>
        <li>
            <h3>How do I get started with CampusConnect?</h3>
            <p>You can start by exploring the main sections of the website or using the search bar to find specific topics.</p>
        </li>
        <li>
            <h3>Is CampusConnect free to use?</h3>
            <p>Yes, CampusConnect is completely free for all users.</p>
        </li>
        <li>
            <h3>How can I contact CampusConnect support?</h3>
            <p>You can reach our support team at support@campusconnect.com for assistance.</p>
        </li>
        <li>
            <h3>Is my personal information safe on CampusConnect?</h3>
            <p>We prioritize your privacy and have implemented strong security measures.</p>
        </li>
    </ul>

    <p id="no-match" style="display: none;">No FAQs match your search.</p>

    <script>
        function searchFAQs() {
            // Get the search input value
            const input = document.getElementById("search-input").value.toLowerCase();

            // Get all FAQ list items
            const faqs = document.querySelectorAll("#faq-list li");
            let hasMatch = false;

            // Loop through the FAQ list items
            faqs.forEach((faq) => {
                const question = faq.querySelector("h3").textContent.toLowerCase();
                const answer = faq.querySelector("p").textContent.toLowerCase();

                // Check if input matches question or answer
                if (input === "" || question.includes(input) || answer.includes(input)) {
                    faq.style.display = "block"; // Show matching FAQ
                    hasMatch = true;
                } else {
                    faq.style.display = "none"; // Hide non-matching FAQ
                }
            });

            // Show or hide the "no match" message
            const noMatchMessage = document.getElementById("no-match");
            noMatchMessage.style.display = hasMatch ? "none" : "block";
        }
    </script>
</body>
</html>
