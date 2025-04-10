<!-- Estetica -->

1. dies separats en mati, tarda, vespre

<!-- NORMES DE NEGOCI(front) -->

<!-- Configuracio event -->

- Marcar si no m'importa quedar franja anterior
- Marcar si no m'importa quedar franja seguent

<!-- Coincident si -->

1. ningu ocupat en franja.
2. si franja es mati, ningu opcupat en franges anterior (vespre dia ant.) i seguent (tarda)
   [a menys que estigui marcat no m'importa].
3. si franja es tarda, ningu ocupat en franges anterior (mati) i seguent (vespre)
   [a menys que estigui marcat no m'importa].
4. si franja es vespre, ningu ocupat en franges anterior (tarda) i seguent (mati seguent dia)
   [a menys que estigui marcat no m'importa].

<!-- CONFIGURACIO EVENT -->

- seleccionar franja: single select (mati, tarda, vespre) [per varies franjes entrar varis events]
- auto select dia (clickat) + poder editar dia
- Titol

<!-- ADD ONS -->

- categoria d'event per separar categories personals en colors (feina💼, amics🍺, familia👩🏼‍🧑🏽‍👧🏻, celebracio🎉, oci🎳, ocupat⛔ ...) o potser afegir icones

<!-- Mejoras -->

# Sugerencias de Refactorización y Reestructuración

1. Organización por Dominio o Característica
   Considera estructurar el proyecto por características en lugar de por tipo de archivo. Por ejemplo, podrías crear una carpeta calendar o events que contenga:

- Componentes específicos (Calendar, Events, EventItem, NewEventButton, etc.).

- Hooks personalizados para ese dominio (useCalendar, useEvents).

- Archivos de constantes y estilos relacionados.

_Esto puede ayudar a localizar rápidamente todo lo relacionado con el calendario y los eventos, facilitando el mantenimiento a largo plazo._

2. Uso de Alias para Importaciones
   Si aún no lo haces, configurar alias en el tsconfig.json o en la configuración de webpack/vite ayuda a evitar rutas relativas complejas.
   Por ejemplo, en _tsconfig.json:_

"compilerOptions": {
"baseUrl": "src",
"paths": {
"@hooks/_": ["hooks/_"],
"@components/_": ["components/_"],
"@data/_": ["data/_"],
"@types/_": ["types/_"],
"@utils/_": ["utils/_"],
"@constants/_": ["constants/_"]
}
}
_Esto mejora la legibilidad de los imports._

3. Centralización del Estado de la Pestaña Activa
   Actualmente, _MainApp_ maneja la pestaña activa y la pasa como prop a componentes inferiores. Si crece la complejidad (por ejemplo, sincronizar estados entre calendario y eventos o compartir el estado de la pestaña entre múltiples componentes), podría considerarse el uso de un _Context_ (por ejemplo, _TabsContext_).

   _Esto permitiría acceder y modificar el estado de la pestaña activa desde cualquier nivel del árbol de componentes sin necesidad de prop drilling._

4. Refinar la Gestión del Estado de Eventos

- _Sincronización_: Ya has solucionado el problema de sincronización de storedEvents con la pestaña activa usando useEffect. Asegúrate de que esta lógica esté bien documentada para futuros mantenimientos.

- _División de Funcionalidades_: Si la lógica de edición, creación y eliminación de eventos se vuelve más compleja, podrías separar estas funciones en sub-hooks o incluso en servicios que manejen la comunicación con el backend (en una capa de API).

5. Componentización del Renderizado de Días del Calendario
   La representación de los días (incluyendo celdas vacías, días, y las marcas de eventos por rango) se encuentra en el componente _Calendar.tsx_.

- Podrías considerar extraer componentes menores, por ejemplo, un _CalendarDay_ que maneje el renderizado de cada día, incluidos los indicadores de eventos (mañana, tarde, noche).

_Esto simplificaría el componente principal y facilitaría la prueba unitaria de cada bloque._

6. Optimización en la Presentación de Eventos
   Del mismo modo, el componente _Events_ podría subdividirse en componentes para cada rango de eventos (ejemplo: _MorningEvents_, _AfternoonEvents_, _NightEvents_) o utilizar una función de renderizado que dinamice la visualización según la categoría. De esta forma, se centraliza la lógica de comprobación de si hay eventos y la renderización de un botón para agregar nuevos eventos.
