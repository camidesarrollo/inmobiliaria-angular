
# 1. Definición del producto

Product Goal

# Inmobiliaria MEAN

Desarrollar una plataforma inmobiliaria moderna que permita a los usuarios descubrir, comparar y consultar propiedades mediante herramientas de búsqueda inteligentes, información geográfica y funcionalidades orientadas a facilitar la decisión de compra o arriendo.

Stack tecnológico

- Frontend: Angular 22.
- Backend: Node.js + Express 5.
- Base de datos: MongoDB + Mongoose 9.
- Autenticación: JWT.

## Roles del proyecto Scrum

| Rol           | Responsabilidad                                       |
| ------------- | ----------------------------------------------------- |
| Product Owner | Define prioridades y necesidades del negocio.         |
| Scrum Master  | Facilita Scrum y elimina impedimentos.                |
| Developers    | Diseñan, desarrollan, prueban y entregan el producto. |

En un proyecto personal puedes asumir los tres roles, pero conviene mantener separadas sus responsabilidades.

# 2. Estructura del Product Backlog

Vamos a dividir el proyecto en ocho épicas.

| ID    | Épica                                   | Prioridad |
| ----- | --------------------------------------- | --------- |
| EP-01 | Seguridad y gestión de usuarios         | Alta      |
| EP-02 | Gestión y optimización de propiedades   | Alta      |
| EP-03 | Búsqueda geográfica e inteligente       | Alta      |
| EP-04 | Experiencia de usuario                  | Alta      |
| EP-05 | Herramientas financieras                | Media     |
| EP-06 | Inteligencia artificial inmobiliaria    | Media     |
| EP-07 | Notificaciones y conversión de clientes | Media     |
| EP-08 | Analítica y administración              | Media     |

Una épica representa un conjunto de funcionalidades relacionadas. No es una tarea que necesariamente se complete en un solo Sprint.

# 3. Historias de usuario y requerimientos

Esta es la parte más importante. Cada historia debe describir una necesidad desde el punto de vista del usuario.

## EP-01. Seguridad y gestión de usuarios

Prioridad alta

HU-001 — Gestión de roles y permisos

Como administrador, quiero asignar diferentes roles a los usuarios para controlar el acceso a las funcionalidades de la plataforma.

Criterios de aceptación:

- El sistema debe permitir los roles administrador, agente y cliente.
- El administrador puede crear, modificar y eliminar propiedades.
- El agente puede administrar las propiedades que tiene asignadas.
- El cliente solamente puede consultar propiedades y gestionar sus favoritos.
- El backend debe validar los permisos antes de ejecutar operaciones protegidas.
- Un usuario sin autorización debe recibir una respuesta HTTP 403.

HU-002 — Auditoría de operaciones

Como administrador, quiero consultar un historial de operaciones para conocer qué usuarios realizaron modificaciones en el sistema.

Criterios de aceptación:

- Registrar usuario que ejecutó la operación.
- Registrar tipo de acción: creación, modificación o eliminación.
- Registrar entidad afectada e identificador.
- Registrar fecha y hora.
- Permitir consultar los registros desde el panel administrativo.
- Los registros de auditoría no pueden ser modificados por usuarios comunes.

## EP-02. Gestión y optimización de propiedades

Prioridad alta

HU-003 — Optimización de imágenes

Como agente inmobiliario, quiero cargar imágenes optimizadas para mejorar el rendimiento y la experiencia de navegación.

Criterios de aceptación:

- Permitir cargar múltiples imágenes.
- Validar formatos y tamaños permitidos.
- Generar versiones optimizadas WebP o AVIF.
- Generar miniaturas.
- Mostrar imágenes progresivamente.
- Mantener la imagen original cuando corresponda a las políticas de almacenamiento.

HU-004 — Tour virtual de propiedades

Como cliente, quiero recorrer virtualmente una propiedad para conocer sus espacios antes de solicitar una visita presencial.

Criterios de aceptación:

- La propiedad puede tener una galería 360°.
- El usuario puede navegar por la experiencia panorámica.
- Debe existir una alternativa visual cuando la propiedad no tenga contenido 360°.
- La experiencia debe funcionar en dispositivos móviles y escritorio.

## EP-03. Búsqueda geográfica e inteligente

Diferenciadora

HU-005 — Búsqueda de propiedades en mapa

Como cliente, quiero visualizar las propiedades disponibles en un mapa para encontrar alternativas según su ubicación geográfica.

Criterios de aceptación:

- Mostrar propiedades georreferenciadas.
- Cada propiedad debe tener coordenadas válidas.
- Permitir acercar y alejar el mapa.
- Mostrar información resumida al seleccionar una propiedad.
- Permitir filtrar por radio de distancia.
- Sincronizar los resultados del mapa con el listado de propiedades.

HU-006 — Búsqueda mediante lenguaje natural

Como cliente, quiero buscar propiedades utilizando frases cotidianas para encontrar alternativas sin tener que completar múltiples filtros.

Ejemplo:

"Busco una casa con jardín, tres dormitorios, en zona norte y con un presupuesto máximo de 200.000".

Criterios de aceptación:

- Permitir ingresar una búsqueda en lenguaje natural.
- Identificar precio máximo, ubicación, dormitorios y características.
- Mostrar los filtros interpretados.
- Permitir modificar los filtros detectados.
- Mostrar resultados que cumplan los criterios.
- Informar cuando no existan coincidencias.
- Si el servicio de IA no está disponible, permitir utilizar los filtros tradicionales.

## EP-04. Experiencia de usuario

Prioridad alta

HU-007 — Comparador de propiedades

Como cliente, quiero comparar diferentes propiedades para evaluar sus características antes de tomar una decisión.

Criterios de aceptación:

- Permitir seleccionar hasta cuatro propiedades.
- Mostrar precio, ubicación, superficie y dormitorios.
- Mostrar características principales en columnas comparables.
- Permitir eliminar propiedades de la comparación.
- Mantener la selección mientras el usuario navega por la plataforma.

HU-008 — Gestión de propiedades favoritas

Como cliente, quiero guardar propiedades favoritas para consultarlas posteriormente.

Criterios de aceptación:

- Permitir agregar una propiedad a favoritos.
- Permitir quitar una propiedad de favoritos.
- Mostrar un listado de favoritos en el perfil.
- Persistir los favoritos para usuarios autenticados.
- Evitar registros duplicados de una misma propiedad por usuario.

## EP-05. Herramientas financieras

HU-009 — Simulador hipotecario

Como cliente, quiero calcular una cuota hipotecaria estimada para conocer si una propiedad se ajusta a mi presupuesto.

Criterios de aceptación:

- Ingresar precio de la propiedad.
- Ingresar monto del pie.
- Ingresar tasa de interés.
- Ingresar plazo del crédito.
- Calcular cuota mensual estimada mediante sistema francés.
- Mostrar el costo total estimado.
- Permitir modificar los parámetros.
- Informar que los resultados son referenciales y no constituyen una oferta bancaria.

## EP-06. Inteligencia artificial inmobiliaria

HU-010 — Asistente inmobiliario

Como cliente, quiero conversar con un asistente virtual para resolver dudas sobre las propiedades disponibles.

Criterios de aceptación:

- Permitir realizar preguntas en lenguaje natural.
- Consultar información de las propiedades registradas.
- Responder utilizando información disponible en la plataforma.
- Identificar las propiedades relacionadas con la consulta.
- Enlazar las propiedades mencionadas.
- Informar cuando no exista información suficiente para responder.
- Evitar inventar características que no estén registradas.

## EP-07. Notificaciones y conversión

HU-011 — Alertas de búsqueda guardada

Como cliente, quiero guardar mis criterios de búsqueda para recibir notificaciones cuando aparezcan nuevas propiedades que coincidan con mis preferencias.

Criterios de aceptación:

- Permitir guardar una búsqueda.
- Permitir modificar y eliminar alertas.
- Detectar nuevas propiedades que coincidan con los filtros.
- Enviar notificaciones al usuario.
- Evitar notificaciones duplicadas por una misma propiedad y alerta.

HU-012 — Agendamiento de visitas

Como cliente, quiero solicitar una visita a una propiedad para coordinar una reunión con un agente inmobiliario.

Criterios de aceptación:

- Seleccionar una propiedad.
- Seleccionar una fecha y horario disponible.
- Registrar los datos de contacto.
- Confirmar la solicitud.
- Notificar al agente correspondiente.
- Permitir consultar el estado de la solicitud.

## EP-08. Analítica y administración

HU-013 — Dashboard administrativo

Como administrador, quiero visualizar indicadores de rendimiento para conocer el comportamiento comercial de la inmobiliaria.

Criterios de aceptación:

- Mostrar cantidad de propiedades publicadas.
- Mostrar propiedades más visitadas.
- Mostrar cantidad de consultas recibidas.
- Mostrar cantidad de visitas agendadas.
- Filtrar indicadores por período.
- Mostrar gráficos con información obtenida desde MongoDB.

# 4. Requerimientos técnicos no funcionales

Además de las historias de usuario, Scrum permite gestionar requerimientos no funcionales, que establecen condiciones de calidad del producto.

Estos requerimientos no representan necesariamente funcionalidades visibles para el usuario.

| ID      | Requerimiento       | Criterio de cumplimiento                                                                       |
| ------- | ------------------- | ---------------------------------------------------------------------------------------------- |
| RNF-001 | Seguridad           | Los endpoints privados deben validar JWT y permisos.                                           |
| RNF-002 | Rendimiento         | Las consultas de propiedades deben utilizar paginación e índices adecuados.                    |
| RNF-003 | Disponibilidad      | Los errores de servicios externos no deben provocar la caída de la aplicación.                 |
| RNF-004 | Compatibilidad      | La plataforma debe funcionar en dispositivos móviles y escritorio.                             |
| RNF-005 | Mantenibilidad      | El código debe mantener una separación clara entre controladores, servicios y modelos.         |
| RNF-006 | Escalabilidad       | Las operaciones de búsqueda deben soportar un crecimiento progresivo de propiedades.           |
| RNF-007 | Accesibilidad       | Los componentes principales deben permitir navegación mediante teclado y lectores de pantalla. |
| RNF-008 | Protección de datos | Los datos personales deben tener acceso restringido y una política de tratamiento definida.    |

# 5. Priorización del Product Backlog

No todas las historias deben desarrollarse inmediatamente.

Utilizaremos tres criterios:

- Valor de negocio: cuánto aporta la funcionalidad.
- Impacto en el usuario: cuánto mejora su experiencia.
- Dependencias técnicas: si necesita otra funcionalidad previamente implementada.

Para estimar esfuerzo utilizaremos Story Points y la escala Fibonacci:

`1 - 2 - 3 - 5 - 8 - 13`

Son estimaciones relativas de complejidad, esfuerzo y riesgo, no horas de desarrollo.

## Backlog priorizado inicial

| Historia                      | Prioridad | Puntos |
| ----------------------------- | --------- | ------ |
| HU-001 Roles y permisos       | Alta      | 8      |
| HU-002 Auditoría              | Media     | 5      |
| HU-003 Optimización imágenes  | Alta      | 5      |
| HU-004 Tour virtual           | Baja      | 8      |
| HU-005 Mapa geográfico        | Alta      | 8      |
| HU-006 Búsqueda con IA        | Media     | 13     |
| HU-007 Comparador             | Alta      | 5      |
| HU-008 Favoritos              | Alta      | 3      |
| HU-009 Simulador hipotecario  | Media     | 5      |
| HU-010 Asistente inmobiliario | Media     | 13     |
| HU-011 Alertas                | Media     | 8      |
| HU-012 Agendamiento           | Alta      | 8      |
| HU-013 Dashboard              | Media     | 8      |

Estimaciones iniciales ilustrativas. Se deben validar con el equipo durante el refinamiento.

# 6. Planificación de Sprints

Propongo trabajar con Sprints de dos semanas.

El roadmap original contempla funcionalidades complejas de IA, geolocalización y notificaciones. Para un proyecto de 2-3 meses, recomiendo entregar primero una versión funcional y dejar algunas funcionalidades avanzadas para una segunda etapa.

## Roadmap de 6 Sprints

1. Sprint 1 — Seguridad y usuarios

   Fundamentos
   - HU-001: Roles y permisos.
   - HU-002: Auditoría de operaciones.
   Objetivo: establecer un control de acceso seguro y trazabilidad de las operaciones.
2. Sprint 2 — Optimización de propiedades
   - HU-003: Optimización de imágenes.
   - Mejoras en la gestión de archivos.
   - Pruebas de rendimiento.
   Objetivo: mejorar la carga y visualización de las propiedades.
3. Sprint 3 — Búsqueda geográfica

   Diferenciación
   - HU-005: Mapa interactivo.
   - Índices geoespaciales MongoDB.
   - Filtros por radio.
   Objetivo: permitir descubrir propiedades según su ubicación.
4. Sprint 4 — Experiencia de usuario
   - HU-007: Comparador.
   - HU-008: Favoritos.
   Objetivo: facilitar la evaluación y selección de propiedades.
5. Sprint 5 — Conversión comercial
   - HU-009: Simulador hipotecario.
   - HU-012: Agendamiento de visitas.
   Objetivo: transformar las consultas de usuarios en oportunidades comerciales.
6. Sprint 6 — Inteligencia artificial

   Innovación
   - HU-006: Búsqueda en lenguaje natural.
   - Primera versión de HU-010: Asistente inmobiliario.
   Objetivo: incorporar IA para mejorar la búsqueda y atención de clientes.

Importante: este roadmap es una propuesta, no un compromiso de entrega. El equipo debe comprobar la capacidad real de cada Sprint. Las historias de IA podrían necesitar dividirse en historias más pequeñas. Las alertas, el dashboard y el tour virtual quedarían en el siguiente ciclo de desarrollo.

# 7. Cómo convertir una historia en tareas de desarrollo

Aquí hay una distinción fundamental: una historia de usuario no es lo mismo que una tarea técnica.

Por ejemplo:

HU-008 — Gestión de favoritos

Como cliente, quiero guardar propiedades favoritas para consultarlas posteriormente.

Durante el Sprint Planning, el equipo puede descomponerla en tareas:

| ID    | Tarea técnica                            | Capa     |
| ----- | ---------------------------------------- | -------- |
| T-001 | Crear modelo Favorite en Mongoose        | Backend  |
| T-002 | Crear servicio de favoritos              | Backend  |
| T-003 | Crear endpoint POST de favoritos         | Backend  |
| T-004 | Crear endpoint DELETE de favoritos       | Backend  |
| T-005 | Crear endpoint GET de favoritos          | Backend  |
| T-006 | Crear servicio Angular de favoritos      | Frontend |
| T-007 | Crear componente de favoritos            | Frontend |
| T-008 | Integrar favoritos con el perfil         | Frontend |
| T-009 | Crear pruebas unitarias y de integración | QA       |

Así puedes organizar el trabajo por capas de tu arquitectura MEAN.

# 8. Definition of Ready y Definition of Done

Estos dos conceptos son importantes para mantener la calidad del trabajo.

## Definition of Ready (DoR)

Una historia está preparada para ingresar a un Sprint cuando:

- Tiene una historia de usuario clara.
- Tiene criterios de aceptación definidos.
- Está priorizada por el Product Owner.
- Tiene dependencias identificadas.
- El equipo entiende el alcance.
- Puede estimarse en Story Points.
- No existen dudas importantes que impidan comenzar.

## Definition of Done (DoD)

Una historia se considera terminada cuando:

- El desarrollo está implementado.
- Cumple todos los criterios de aceptación.
- Se realizaron pruebas unitarias.
- Se realizaron pruebas de integración cuando corresponda.
- No existen errores críticos conocidos.
- El código pasó revisión (Code Review).
- Se integró correctamente a la rama correspondiente.
- La documentación técnica fue actualizada cuando corresponde.
- QA validó el comportamiento.
- El incremento está integrado y cumple las condiciones de calidad del equipo.

# 9. Ceremonias Scrum

| Ceremonia            | Frecuencia        | Propósito                                      |
| -------------------- | ----------------- | ---------------------------------------------- |
| Sprint Planning      | Inicio del Sprint | Definir qué se desarrollará y cómo.            |
| Daily Scrum          | Diaria            | Inspeccionar el progreso hacia el Sprint Goal. |
| Backlog Refinement   | Durante el Sprint | Aclarar y preparar historias futuras.          |
| Sprint Review        | Final del Sprint  | Mostrar el incremento y obtener feedback.      |
| Sprint Retrospective | Final del Sprint  | Identificar mejoras en la forma de trabajar.   |

La Daily Scrum no es una reunión para rendir cuentas al Scrum Master. Es una instancia para que los Developers inspeccionen el avance y adapten su plan.

# 10. Plantilla para documentar cada requerimiento

Te recomiendo utilizar esta estructura para todas las historias del proyecto:

# HU-XXX — Nombre de la funcionalidad

**Épica:** Nombre de la épica\
**Prioridad:** Alta / Media / Baja\
**Estimación:** Story Points\
**Sprint:** Pendiente de planificación\
**Estado:** Product Backlog

## Historia de usuario

Como [tipo de usuario], quiero [funcionalidad], para [beneficio o necesidad].

## Descripción funcional

Explicar qué debe hacer el sistema y cuál es el comportamiento esperado.

## Criterios de aceptación

- Dado que [contexto inicial], cuando [acción], entonces [resultado esperado].
- Dado que [contexto inicial], cuando [acción], entonces [resultado esperado].
- Dado que [contexto inicial], cuando [acción], entonces [resultado esperado].

## Reglas de negocio

- RB-001:
- RB-002:

## Consideraciones técnicas

**Frontend:**

- Componentes y servicios Angular involucrados.

**Backend:**

- Endpoints Express.
- Servicios y modelos Mongoose.

**Base de datos:**

- Colecciones y relaciones necesarias.

## Tareas técnicas

- Tarea de frontend.
- Tarea de backend.
- Tarea de base de datos.
- Pruebas unitarias.
- Pruebas de integración.

## Definition of Done

La historia cumple los criterios de aceptación y la Definition of Done del proyecto.

# 11. Cómo te recomiendo continuar

Mi recomendación es no comenzar todavía a programar todas las funcionalidades. Primero debemos dejar un Product Backlog bien definido.

Podemos trabajar de forma iterativa:

1. Fase de análisis: definir todas las épicas y requerimientos funcionales.
2. Refinamiento: convertir cada requerimiento en historias de usuario completas.
3. Diseño técnico: definir endpoints, modelos MongoDB y componentes Angular.
4. Estimación: asignar Story Points y dependencias.
5. Sprint Planning: seleccionar historias y establecer el Sprint Goal.
6. Desarrollo y validación: implementar y probar cada incremento.
