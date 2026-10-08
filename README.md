<div align="center">

<img src="https://raw.githubusercontent.com/BrookeFloyd10/Harmonotes-FullStack-Brooke-F/main/docs/screenshots/hero.png" alt="Harmonotes" width="100%" />

# 🎵 Harmonotes: Front-End Prototype

**Where practice meets progress.**

[![Live Demo](https://img.shields.io/badge/🎤_Live_Demo-355367?style=for-the-badge)](https://harmonotesapp.netlify.app/)
[![Full-Stack Version](https://img.shields.io/badge/🎹_Full--Stack_Version-9E3845?style=for-the-badge)](https://github.com/BrookeFloyd10/Harmonotes-FullStack-Brooke-F)

![React](https://img.shields.io/badge/React_19-355367?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-9E3845?style=flat-square&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-E0AF3A?style=flat-square&logo=reactrouter&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-355367?style=flat-square&logo=javascript&logoColor=white)
![CSS3](https://img.shields.io/badge/Hand--written_CSS-9E3845?style=flat-square&logo=css3&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-E0AF3A?style=flat-square&logo=netlify&logoColor=black)

</div>

<img src="https://raw.githubusercontent.com/BrookeFloyd10/Harmonotes-FullStack-Brooke-F/main/docs/dividers/divider-blue-gold.png" width="100%" />

> 🎼 **This is where Harmonotes started.** I built the entire React front end first, running on mock JSON data, to get the user experience right before adding a database. This repo powers the live demo.
>
> 👉 **Looking for the full app, with the Spring Boot + MySQL backend?** It's over at **[Harmonotes-FullStack-Brooke-F](https://github.com/BrookeFloyd10/Harmonotes-FullStack-Brooke-F)**.

## 🎹 What it does

Harmonotes helps music students hold onto what they learn between weekly lessons: one place to log practice, work through assigned exercises, and find learning materials.

🎵 **Practice dashboard:** log practice sessions and watch an XP tracker fill up (with a confetti celebration when you hit your goal 🎉)<br>
🎵 **Library:** songs with sheet music and play-along tracks at different tempos, plus exercises and theory guides, all filterable by instrument<br>
🎵 **Contact form:** with field-by-field validation<br>
🎵 **Custom artwork:** hand-built SVG music-note icons and a homepage illustration

<img src="https://raw.githubusercontent.com/BrookeFloyd10/Harmonotes-FullStack-Brooke-F/main/docs/dividers/divider-gold-maroon.png" width="100%" />

## 🎸 How it's built

| | |
|---|---|
| ⚛️ **Components** | Reusable layout (Header, NavBar, Footer) and shared pieces (Button, FormField, Loading, ErrorMessage) |
| 🧭 **Routing** | React Router pages: Home, Dashboard, Library, About |
| 📦 **Data** | Mock JSON for the library and practice log, which made it easy to swap in a real REST API later |
| ✅ **Validation** | Hand-written validators in `utils/validators.js`, no form library |
| 🚀 **Deployment** | Netlify, building straight from this repo |

## 🥁 From prototype to full stack

Building the front end first meant I could design the UI around how students would actually use it, then shape the database to fit. In the [full-stack version](https://github.com/BrookeFloyd10/Harmonotes-FullStack-Brooke-F), the mock JSON was replaced with a Spring Boot REST API and MySQL, plus login, full CRUD on practice sessions and server-side library filtering.

<img src="https://raw.githubusercontent.com/BrookeFloyd10/Harmonotes-FullStack-Brooke-F/main/docs/dividers/divider-maroon-blue.png" width="100%" />

## 🎻 Run it locally

```bash
git clone https://github.com/BrookeFloyd10/Harmonotes-BrookeF.git
cd Harmonotes-BrookeF/harmonotes
npm install
npm run dev
```

Then open `http://localhost:5173`. No backend or database needed.

<div align="center">

<br/>

**Built with 🎶 by [Brooke Floyd](https://github.com/BrookeFloyd10)** · [LinkedIn](https://www.linkedin.com/in/brooke-floyd10)

</div>
