# Slide 5 — Cuándo SDD paga

## Tesis

La pregunta no es "¿podemos usar SDD?" sino "¿el coste de no tenerla supera el coste de mantenerla?". Si la respuesta es sí, paga.

## 4 contextos donde paga

1. **Dominios complejos** — pagos, inventario, compliance: invariantes que un test aislado no protege.
2. **Squads múltiples** — handoffs frecuentes donde la "interpretación de pasillo" se pierde.
3. **Features de alto coste de fallo** — compliance, dinero, reputación.
4. **Roadmaps largos** — productos longevos donde "por qué" importa tanto como "qué".

## Cross-refs wiki

- `wiki/conceptos/spec-driven-development.md` — sección "Cuándo conviene".
- `wiki/conceptos/comparativa-sdd-tools.md` — tabla "Mejor caso de uso" por herramienta.

## Mensajes a reforzar

- El criterio es **cuantitativo, no ideológico**. SDD no es "lo correcto siempre", es "lo correcto cuando la matemática del riesgo dice que paga".
- Es frecuente que **partes de un mismo sistema apliquen SDD y otras no**. P. ej. core de pagos sí, dashboard interno no.

## Preguntas tipo

- *"¿Mi equipo es muy pequeño, también aplica?"* → El criterio "squads múltiples" importa menos en equipos de 2-3 personas. Pero "alto coste de fallo" o "dominio complejo" sí. Decidir por dimensión, no por tamaño.
- *"¿Y un microservicio nuevo en greenfield?"* → Si tiene contrato API hacia consumidores externos, paga (la spec es el contrato). Si es interno y exploratorio, ver slide 6.

## Transición

"Y al revés: hay contextos donde SDD se vuelve burocracia. Cuáles son."
