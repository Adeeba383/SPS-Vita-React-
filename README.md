SPS VITA Compliance Portal
A responsive React application designed to help organizations meet VITA SEC-530 cybersecurity compliance. This project includes a modern Navbar, Banner with pricing plans, an interactive Compliance section, and a professional Footer — all built with React + TailwindCSS.

🚀 Features
Responsive Navbar
Dropdown menus for Compliance, Pricing, and About Us.

Mobile-friendly hamburger menu with toggle (☰ → ✕).

Banner Section
Informational text about VITA SEC-530.

Pricing cards that adapt from grid layout on desktop to stacked on mobile.

Compliance Section
Clickable cards listing compliance topics.

On desktop → details slide in from the right with backdrop overlay.

On mobile/tablet → details expand inline below the cards.

Footer Section
SPS logo and company description.

Quick links to compliance resources.

Fully responsive layout with centered copyright.

🛠️ Tech Stack
React (Frontend framework)

TailwindCSS (Utility-first CSS framework)

JavaScript (ES6+)

Vite (recommended dev server & build tool)

📂 Project Structure
src/ ├── components/ │ ├── Navbar.jsx │ ├── Banner.jsx │ ├── Compliance.jsx │ └── Footer.jsx ├── assets/ │ └── right-arrow.png ├── App.jsx └── main.jsx

⚙️ Installation & Setup
Clone this repository

git clone https://github.com/your-username/vita-compliance-portal.git cd vita-compliance-portal

Install dependencies

npm install

Run the development server

npm run dev

Open your browser at http://localhost:5173/

🔗 Live Demo
🤝 Contributing
Contributions are welcome! To contribute:

Fork the repo

Create a feature branch (git checkout -b feature-name)

Commit your changes (git commit -m "Added new feature")

Push to branch (git push origin feature-name)

Open a Pull Request

📜 License
This project is licensed under the MIT License.
