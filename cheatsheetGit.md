# 🧠 Git Cheatsheet – Comandos útiles

## 📦 Inicializar repositorio
git init

---
🔄 Subir proyecto a GitHub

git remote add origin https://github.com/usuario/repositorio.git
git branch -M main
git push -u origin main

---
🌱 Ramas

git checkout -b nombre-rama       # Crear y moverse a rama nueva
git checkout main                 # Volver a rama principal
git merge nombre-rama             # Unir rama a main


---

💾 Guardar cambios

git add .
git commit -m "Mensaje del commit"
git push origin nombre-rama

---

🗑️ Revertir cambios antes del commit

git restore archivo

---

🧽 Resetear staging (deshacer git add)

git reset

---

🪓 Borrar una rama local

git branch -d nombre-rama

