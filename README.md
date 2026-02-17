# RPG Prototype – React + Vite + TypeScript (F&H)

Prototipo de videojuego RPG 2D desarrollado con **React, TypeScript y Vite**, inspirado en la ambientación, tono y perspectiva del juego **Fear & Hunger**.

El objetivo del proyecto es construir una **base técnica sólida para un RPG 2D** utilizando tecnologías web modernas, con control por teclado, animaciones por spritesheet, cámara centrada en el jugador y límites de mundo correctamente definidos.

> ⚠️ Este proyecto es **experimental y educativo**, y **no pretende replicar ni reemplazar** el juego Fear & Hunger. Se utiliza únicamente como **referencia artística y conceptual**.

---

## Tecnologías

- React  
- Vite  
- TypeScript  
- TailwindCSS  
- requestAnimationFrame (game loop)  
- Spritesheets (CSS background-position)

---

## Estructura del proyecto

```
public/
 ├─ img/
 │   ├─ characters/
 │   └─ map/
src/
 ├─ pages/
 │   ├─ Menu.tsx
 │   ├─ NewGame.tsx
 │   └─ Game1.tsx
 ├─ hooks/
 │   └─ useEscBack.ts
 ├─ App.tsx
 └─ main.tsx
```

---

## 🎮 Controles

| Tecla | Acción |
|-----|------|
| ⬆️ ⬇️ ⬅️ ➡️ | Movimiento |
| Shift + dirección | Correr |
| Enter | Confirmar |
| Esc | Volver |

---

##  Mundo y cámara

- El mapa es mayor que el viewport
- La cámara sigue al jugador sin salirse del mundo
- El personaje no puede atravesar los límites del mapa

---

## Ejecución

```bash
npm install
npm run dev
```

Abrir en:  
http://localhost:5173

---

## 🛠️ Roadmap

- Sistema de colisiones
- NPCs
- Diálogos
- Combate
- Inventario
- Guardado de partida

---

## 🧠 Autor
- Ramarak
Proyecto personal inspirado en **Fear & Hunger** de Miro Haverinen, desarrollado como base técnica para un RPG 2D en web.
