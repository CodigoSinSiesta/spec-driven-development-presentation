# Estándar de marca para validación de presentaciones

Estado: `final v1.0`  
Owner: `CMO`  
Base de partida revisada: `guia/00-estandar-marca-validacion.md` de [COD-14](/COD/issues/COD-14).

## 1. Objetivo

Definir un gate de marca claro y repetible para aprobar o rechazar presentaciones técnicas antes de publicar.

Principio rector: claridad pedagógica y consistencia de marca por encima de velocidad de entrega.

## 2. Alcance

Aplica a:

- Esta presentación (`spec-driven-development-presentation`).
- Futuras presentaciones técnicas de Código Sin Siesta.

## 3. Criterios finales de validación

## 3.1 Narrativa (obligatorios)

Debe cumplirse todo:

- Existe una tesis central única y explícita en el primer tercio de la charla.
- Cada slide comunica una idea principal verificable en una frase.
- El flujo mantiene orden lógico: contexto -> problema -> propuesta -> evidencia -> cierre.
- Toda afirmación técnica relevante incluye ejemplo, escenario o evidencia mínima.
- El cierre incluye siguiente paso accionable con criterio de decisión.

Bloqueantes (rechazo inmediato):

- Tesis ambigua o contradictoria entre slides.
- Saltos lógicos sin transición comprensible.
- Cierre sin recomendación práctica.

## 3.2 Consistencia visual (obligatorios)

Debe cumplirse todo:

- Color y tipografía usan tokens CSS del sistema (sin hardcodes evitables en componentes de slides).
- Jerarquía tipográfica estable entre slides equivalentes.
- Contraste suficiente texto/fondo en mensajes clave.
- No hay clipping, overflow horizontal ni elementos superpuestos en desktop y mobile.
- Animaciones aportan comprensión y no rompen ritmo de lectura.

Bloqueantes (rechazo inmediato):

- Mezcla de paletas o estilos fuera del sistema visual definido.
- Problemas de legibilidad que afecten mensajes principales.
- Errores de layout en breakpoints críticos (mobile y desktop).

## 4. Proceso operativo CMO + QA

## 4.1 Flujo pre-publicación

1. Autoría actualiza contenido y guía del ponente.
2. CMO ejecuta revisión de marca (narrativa + visual) y registra hallazgos priorizados.
3. QA técnico ejecuta validación técnica (`pnpm build`, `pnpm test`, navegación y responsive).
4. Publicación solo con doble validación (CMO + QA) sin bloqueantes abiertos.

## 4.2 Integración con [COD-13](/COD/issues/COD-13)

- Modelo objetivo: QA técnico es gate obligatorio de publicación junto a CMO.
- Modo transitorio (mientras [COD-13](/COD/issues/COD-13) siga en bloqueo): CTO cubre QA proxy para no detener entregas.
- En cuanto QA esté operativo, desaparece el modo proxy y el gate pasa a ser exclusivamente CMO + QA.

## 5. Evidencia mínima requerida por release

- Resultado de revisión de marca con lista priorizada de ajustes.
- Resultado técnico en verde (`pnpm build` y `pnpm test`).
- Confirmación de que README y guías reflejan el estado final publicado.

## 6. Mantenimiento del estándar

- Cualquier cambio de criterios requiere revisión conjunta CMO + CTO.
- Si hay conflicto entre estética y comprensión, prevalece comprensión.
