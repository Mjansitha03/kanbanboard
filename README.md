# 🗂️ Kanban Task Board  
A modern, responsive, and user-friendly task management application built using **React**, **Tailwind CSS v4**, and **react-beautiful-dnd** for drag-and-drop interaction.

This project supports:
- ✅ Dark & Light Mode (with localStorage persistence)  
- ✅ Add, Edit, Delete Tasks  
- ✅ Drag & Drop between columns  
- ✅ Priority & Due-Date Filtering  
- ✅ Smooth Glass-Morphism UI  
- ✅ Fully responsive layout  
- ✅ Vercel ready for deployment  

## 🚀 Features

### ✨ Task Management  
- Add new tasks  
- Edit existing tasks inside a modal  
- Delete tasks instantly  
- Auto-save updates to localStorage  

### 🧩 Columns (Kanban Style)  
- **To Do**  
- **In Progress**  
- **Done**  
- Drag tasks between columns using react-beautiful-dnd  

### 🎨 UI & Design  
- Clean Glass-Morphism components  
- Animated Modals  
- Smooth transitions  
- Tailwind v4 Scrollbar plugin  
- Fully dark-mode-compatible design  

### 🌓 Dark Mode Support  
- Supports **dark and light theme switching**  
- Theme saved in `localStorage`  
- Automatic theme detection  

---

## 🛠️ Tech Stack

| Technology              | Purpose               |
|-------------------------|-----------------------|
| **React**               | Frontend UI           |
| **React Router**        | Page navigation       |
| **Tailwind CSS v4**     | Styling               |
| **react-beautiful-dnd** | Drag & drop           |
| **localStorage**        | Persist tasks & theme |
| **Vercel**              | Deployment            |

---

## 📁 Folder Structure

```

src/
├── assets/
|    ├── favicon.png
│    ├── hero-image.png
|
├── Components/
│    ├── AddTaskForm.jsx
|    ├── Column.jsx
|    ├── FilterBar.jsx
|    ├── Navbar.jsx
│    ├── TaskCard.jsx
│    └──  TaskModal.jsx
│
├── Context/
|    ├── TaskContext.jsx
│    └── TaskProvider.jsx
│
├── Pages/
|    ├── AddTaskPage.jsx
│    ├── BoardPage.jsx
│    └── HomePage.jsx
│
├── Router/
|   └── AppRouter.jsx
|
├── index.css
├── App.jsx
├── main.jsx


## ⚙️ Installation
    
### 1️⃣ Clone the repository

```sh
git clone https://github.com/Mjansitha03/kanbanboard.git.
cd kanban-board
````

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Start development server

```sh
npm run dev
```

### 4️⃣ Build for production

```sh
npm run build
```

---

## ✨ Future Improvements

* Task search bar
* User authentication
* Subtasks
* Drag-to-resize columns
* Firebase backend integration






