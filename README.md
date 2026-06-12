# Biblia Focus - page bloquer

Extensión de Chrome que bloquea sitios de entretenimiento y contenido para adultos, reemplazándolos con un versículo aleatorio de la Biblia NVI.

## Características

- **253+ sitios bloqueados** organizados en 12 categorías
- **Versículo aleatorio** de la Biblia completa NVI (31,144 versículos, 1,189 capítulos, 66 libros)
- **Leer capítulo completo** desde cualquier versículo mostrado
- **Habilitar temporalmente** un sitio por 30 minutos
- **No se puede desactivar** sin desinstalar la extensión
- **YouTube Music excluido** del bloqueo
- **Funciona 100% offline** — todos los datos están incluidos
- **Sin recopilación de datos** — no rastrea, no se comunica con servidores

## Categorías de sitios bloqueados

| Categoría | Cantidad | Ejemplos |
|---|---|---|
| SOCIAL | 20 | YouTube, Facebook, Instagram, TikTok, Reddit |
| STREAMING | 19 | Netflix, Hulu, Disney+, Spotify, Twitch |
| ADULT | 58 | PornHub, XVideos, Chaturbate, OnlyFans |
| DATING | 21 | Tinder, Badoo, Bumble, AshleyMadison |
| GAMING | 29 | Steam, Roblox, Fortnite, Epic Games |
| PIRACY | 19 | ThePirateBay, 1337x, Soap2Day |
| ANIME | 24 | Crunchyroll, MyAnimeList, MangaDex, 9anime |
| SPORTS | 16 | ESPN, NBA, NFL, WWE, UFC |
| GOSSIP | 15 | TMZ, E! Online, People, BuzzFeed |
| MEMES | 11 | 9GAG, Imgur, GIPHY, KnowYourMeme |
| GAMBLING | 10 | bet365, DraftKings, FanDuel, 888 |
| CHAT | 11 | Omegle, Chatroulette, 4chan, Discord |

Para modificar la lista, edita las categorías en `background.js`. Se pueden agregar o quitar sitios fácilmente.

## Instalación

### Desde Chrome Web Store
*(Próximamente)*

### Instalación manual (desarrollo)

1. Clona el repositorio o descarga el ZIP
2. Abre Chrome y ve a `chrome://extensions/`
3. Activa **"Modo de desarrollador"** (esquina superior derecha)
4. Haz clic en **"Cargar descomprimida"**
5. Selecciona la carpeta `bloqueador-biblia`

## Uso

Cuando intentes acceder a un sitio bloqueado, verás:

- Un versículo aleatorio de la Biblia NVI
- El nombre del dominio bloqueado
- Botón **"Habilitar este sitio por 30 minutos"** — permite acceso temporal
- Botón **"Leer capítulo completo"** — muestra todo el capítulo del versículo
- Botón **"Otro versículo"** — muestra un versículo aleatorio nuevo

### Exclusiones

- `music.youtube.com` **no se bloquea** — para que puedas escuchar música mientras trabajas

## Estructura del proyecto

```
bloqueador-biblia/
├── manifest.json          # Configuración MV3
├── background.js          # Service worker: bloqueo y permisos de 30 min
├── bible_data.js          # Biblia NVI completa (31,144 versículos)
├── blocked.html           # Página de bloqueo
├── blocked.js             # Lógica: versículo aleatorio, capítulos, habilitar sitio
├── blocked.css            # Estilos visuales
├── icons/                 # Íconos de la extensión (16, 48, 128px)
├── LICENSE                # AGPL-3.0 + licencia comercial
├── PRIVACY_POLICY.md      # Política de privacidad
└── .gitignore
```

## Licencia

Este proyecto utiliza una **licencia dual**:

- **GNU AGPL v3** para uso no comercial — puedes usar, modificar y distribuir libremente, pero debes liberar el código de tus modificaciones bajo la misma licencia.
- **Licencia comercial** — si deseas usar este software con fines comerciales (venta, monetización con ads, inclusión en un producto pago), debes contactar al autor para obtener una licencia comercial con términos de regalías.

Ver el archivo [LICENSE](LICENSE) para más detalles.

## Privacidad

- No se recopilan datos personales
- No se rastrea la navegación
- No se comunica con servidores externos
- Todos los datos funcionan localmente

Ver [PRIVACY_POLICY.md](PRIVACY_POLICY.md) para más información.

## Contribuir

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcion`)
3. Haz commit de tus cambios (`git commit -m 'Agregar nueva función'`)
4. Haz push a la rama (`git push origin feature/nueva-funcion`)
5. Abre un Pull Request

## Autor

Fernando Piedra — [GitHub](https://github.com/PiedraFernando)