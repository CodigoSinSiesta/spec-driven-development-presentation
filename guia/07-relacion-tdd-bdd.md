# Slide 7 — Metodologías + Ecosistema de herramientas

## Tesis

SDD enmarca, las herramientas amplifican. Ninguna herramienta es universalmente superior; la metodología es el valor real.

## Bloque A — TDD vs BDD vs SDD

Mensaje central: **no compiten**. SDD define el qué (contrato); TDD el cómo del código; BDD el cómo del comportamiento expresado a producto.

- **SDD** = spec primero. Punto de partida del flujo.
- **TDD** = test primero, dentro del marco que define la spec.
- **BDD** = comportamiento en lenguaje ubicuo, traduce la spec a casos verificables con producto.

Un equipo puede combinar las tres: spec en SDD → escenarios en BDD → tests unitarios en TDD.

## Bloque B — Ecosistema SDD (matriz de 5 herramientas)

Las 5 herramientas comparten el bucle `especificar → planificar → ejecutar → verificar` y divergen en tres ejes:

1. Cuánto orquestan la ejecución vs cuánto delegan al agente.
2. Greenfield vs brownfield.
3. Rigidez de gates entre fases.

| Herramienta | Posicionamiento | Mejor para |
|---|---|---|
| **GSD** | Orquestación profunda, paralelismo por oleadas, subagentes (~200k) | Proyectos grandes en Claude Code |
| **Spec Kit** | Oficial GitHub, gates fuertes, ~800 líneas/spec | Greenfield medio-grande con gobierno |
| **OpenSpec ⭐** | Brownfield-first, ~250 líneas/spec, 25+ asistentes | Mantener código legado iterativo |
| **Taskmaster AI** | Descomposición PRD → tareas, integración MCP | Tu entrada natural es un PRD |
| **PAUL** | UNIFY obligatorio, in-session sin subagentes | Disciplina de cierre y AC formales |

**OpenSpec es la recomendación por defecto para Código Sin Siesta**: encaje brownfield-first (la mayoría del trabajo real), specs ligeras, 25+ asistentes (no encierra al usuario en un stack).

## Cross-refs wiki

- `wiki/conceptos/spec-driven-development.md` — definición SDD y matriz herramientas.
- `wiki/conceptos/comparativa-sdd-tools.md` — análisis completo (12 dimensiones por herramienta).
- `wiki/herramientas/openspec.md` — recomendada.
- `wiki/herramientas/gsd.md`, `wiki/herramientas/spec-kit.md`, `wiki/herramientas/taskmaster-ai.md`, `wiki/herramientas/paul.md`.
- `wiki/conceptos/coste-total-tokens.md` — coste real de cada herramienta (no es solo tamaño del prompt).
- `wiki/conceptos/subagentes.md` — debate GSD vs PAUL sobre subagentes (la divergencia filosófica clave).

## Divergencia clave a mencionar

GSD y PAUL son opuestos filosóficos sobre subagentes:
- **GSD**: subagentes como eje de orquestación. Paralelismo por oleadas con contexto aislado (~200k).
- **PAUL**: subagentes como caros (2-3k tokens de arranque) y de menor calidad (~70%). Solo para research.

Ambas posturas pueden ser correctas según contexto.

## Combinaciones probadas

- **OpenSpec** (planificación) + **GSD** (ejecución paralela).
- **PAUL** (AC-first) + **Taskmaster** (research desde PRD).

## Preguntas tipo

- *"¿Por qué OpenSpec y no Spec Kit, siendo Spec Kit oficial de GitHub?"* → Spec Kit es greenfield-first y pesado. La mayoría del trabajo real es brownfield. OpenSpec encaja mejor por defecto. Si arrancas un proyecto nuevo con gobierno fuerte, Spec Kit puede pagar.
- *"¿Y si ya uso TDD/BDD?"* → SDD no las invalida. Las enmarca: la spec es el origen, TDD/BDD son ejecución.
- *"¿Funciona sin agentes IA?"* → Sí. SDD es metodología, las herramientas son una capa. Pero el retorno crece mucho cuando se delega a agentes (la spec reduce alucinaciones).

## Transición

"Veámoslo en un caso concreto: alta de usuario."
