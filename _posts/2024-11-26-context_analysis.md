---
layout: post
title: Context Analysis is Discovery with a Touch of Sense-making
description: The key questions to address during context analysis
tags: ["MBSE"]
categories: ["research", "MBSE"]
published: false
---

## Understanding the Context: Questions That Shape Systems

You have to design a system! Before diving into solutions or creating intricate models, it’s essential to ask the right questions during **context analysis**. This phase sets the foundation for effective system design by uncovering the needs, constraints, and interactions within the **problem space**.

Models are powerful tools for making sense of complex systems, but they are only as useful as the questions they help answer. By focusing on the "what," "why," and "who" of context analysis, we pave the way for clarity, alignment, and informed decision-making. This post explores the critical questions every context analysis should address — and, maybe, what models can help answering them.

{% figure caption:"The Double Diamond Process by [the Design Council](https://www.designcouncil.org.uk/)" class:"img-fluid rounded z-depth-1 mx-auto d-block" %}
![fi](https://www.designcouncil.org.uk/fileadmin/uploads/dc/Photos/banners/Double_Diamond.png){:class="img-fluid"}
{% endfigure %}{:style="width:50%"}

**Context analysis** is a mix of **discovery** and **sense-making**. It begins as a diverging phase in the problem space, as illustrated in the double diamond design model, with a focus on broad exploration — uncovering insights, defining boundaries, and identifying opportunities. From there, it transitions into organizing information and aligning perspectives (sense-making), narrowing the focus to set the stage for clearly defining the core problem to address.

## 10 Key Questions To Ask

Technically, context analysis is about defining the system’s boundaries, understanding the external environment (actors, systems, inputs, outputs), and identifying constraints, assumptions, and risks.

A quick list of 10 context analysis questions:

1. What is the **system’s purpose** or mission?

   *What is the primary function or goal of the system within its operational environment?*

2. Who are the external **stakeholders**?

   *Which individuals, groups, or organizations interact with the system?*

3. What are the objectives of the **interactions**?

   *What specific needs or goals do external stakeholders seek to fulfil through their interaction with the system?*

4. What are the **constraints** imposed by external entities?

   *Are there specific regulations, standards, or expectations from stakeholders that the system must adhere to?*

5. How might **changes** in **external** conditions affect the system?
   - *What external factors (e.g., market conditions, regulatory changes) could influence the interaction with the system?*
   - *How might the system need to adapt and evolve to shifts in external factors (e.g., technological advancements, shifts in user needs, or emerging regulatory requirements)?*

6. What **safety and security** considerations arise during interactions?

   *What measures must be taken to ensure the safety of external entities when interacting with the system?*

7. What are the system **boundaries**?

   - *Where does the system begin and end?*
   - *What functionalities are internal (under your control) versus external (outside of your control - belonging to other entities)?*

8. What **assumptions** are made about external actors or systems?

   *Are there assumptions about how external entities (people or systems) will behave or interact with the system?*

9. How do **external** systems or actors **impact** system performance?

    *Are there dependencies on external systems or entities that could influence the system’s functionality or reliability?*

10. What are the **risks** associated with the system’s **external** context?

    *Are there external threats (e.g., cybersecurity, environmental, supply chain risks) that could affect the system?*

Ideally, these questions are addressed in a more structured manner by following a robust context analysis methodology.

## Some Models / Tools

1. **Stakeholder Analysis Matrix**: A table or matrix that identifies stakeholders, their interests, and their influence on the system. This helps in understanding who the key players are and how they interact with the system.
2. **SWOT Analysis**: A strategic planning tool that identifies the Strengths, Weaknesses, Opportunities, and Threats related to the system within its external environment. It provides insights into how external factors may affect the system's success.
3. **PESTLE Analysis**: Analyzes the Political, Economic, Social, Technological, Legal, and Environmental factors that can influence the system. This helps in understanding the broader context in which the system operates.
4. **System Boundary Diagram**: A visual representation that defines the system's boundaries and identifies what is inside (the system) and outside (the environment). This model clarifies what external factors interact with the system.
5. **Context Diagram**: A high-level visual representation showing the system, its external entities (actors), and their interactions. It illustrates the flow of information, inputs, and outputs between the system and its environment.
6. **Use Case Scenarios**: Detailed narratives that describe how users interact with the system to achieve specific goals. These scenarios can help identify the context and objectives of user interactions.
7. **Risk Analysis Model**: A model to assess risks associated with external factors that could impact the system, such as regulatory changes or environmental challenges. This can help prioritize mitigation strategies.
8. **User Stories**: Short, narrative descriptions that articulate the needs, goals, and interactions of stakeholders or users with the system. User stories help uncover contextual needs, highlight user expectations, and guide the identification of external interactions and system objectives.
9. **Stakeholder Journey Mapping**: A visual tool that maps out the experiences, pain points, and touchpoints of stakeholders as they interact with the system or its environment over time. This model provides insight into the complete lifecycle of interactions, helping to identify key moments that influence stakeholder experience and system effectiveness.
10. **Environmental Scan**: A method for systematically gathering, analyzing, and interpreting information about the external environment to identify trends, threats, and opportunities that could impact the system. This tool helps to gather real-time insights from the broader environment, facilitating proactive decision-making in response to shifts in market, technological, or social conditions. In other words, it is a *literature review* that goes beyond academic literature.
11. **Force Field Analysis**: A tool that helps analyze the forces driving and resisting change in the system’s environment. It visually maps out positive and negative forces, helping stakeholders understand the drivers and barriers to change, which can impact the system’s viability and success.
12. **Ecosystem Mapping**: A tool for mapping out all the interconnected systems, stakeholders, technologies, and factors that interact with the system. This model helps identify indirect influences and relationships that might not be immediately obvious, providing a more holistic view of the system’s context.

Now the time to reflect has come.

Did we miss any question ? 
Did we miss any tool ? 

Do these tools cover all the questions from the previous section ?

<style>table :is(td, th) {border: 1px solid silver; padding: 0.3em;}</style>

| **Q / T**                             | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 |
|---------------------------------------|----|----|----|----|----|----|----|----|----|-----|-----|-----|
| **Q01 System’s Purpose**              |    |    |    |    |    | ✔️  |    | ✔️  |    |     |     |     |
| **Q02 Stakeholders**                  | ✔️  |    |    |    |    |    |    |    | ✔️  |     |     |     |
| **Q03 Objectives of Interactions**    |    |    |    |    |    | ✔️  |    | ✔️  | ✔️  |     |     |     |
| **Q04 Constraints**                   |    | ✔️  | ✔️  |    |    |    |    |    |    |     |     |     |
| **Q05 Changes in External Conditions**|    | ✔️  | ✔️  |    |    |    |    |    |    | ✔️   | ✔️   | ✔️   |
| **Q06 Safety and Security**           |    |    |    |    |    | ✔️  | ✔️  |    |    |     |     |     |
| **Q07 System Boundaries**             |    |    |    | ✔️  | ✔️  |    |    |    |    |     |     | ✔️   |
| **Q08 Assumptions**                   | ✔️  | ✔️  |    |    |    |    |    |    |    |     |     |     |
| **Q09 Impact on Performance**         |    | ✔️  | ✔️  |    |    |    |    |    |    |     | ✔️   | ✔️   |
| **Q10 Risks**                         |    | ✔️  |    |    |    |    | ✔️  |    |    |     | ✔️   |     |

<hr/>

| **Q / T**                             | T1 | T2  | T3  | T4  | T5  | T6  | T7  | T8  | T9  | T10 | T11 | T12 |
|---------------------------------------|----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| **Q01 System’s Purpose**              |    |     |     |     |     |     |     |     |     |     |     |     |
| **Q02 Stakeholders**                  | ✔️  |     |     |     | ✔️   |     |     | ✔️   | ✔️   |     |     |     |
| **Q03 Objectives of Interactions**    |    |     |     |     | ✔️   | ✔️   |     | ✔️   |     |     |     |     |
| **Q04 Constraints**                   | ✔️  | ✔️   | ✔️   | ✔️   | ✔️   |     | ✔️   |     |     |     |     |     |
| **Q05 Changes in External Conditions**|    | ✔️   | ✔️   | ✔️   | ✔️   |     | ✔️   |     | ✔️   | ✔️   |     |     |
| **Q06 Safety and Security**           |    |     |     | ✔️   |     | ✔️   |     |     | ✔️   |     |     |     |
| **Q07 System Boundaries**             |    |     |     | ✔️   | ✔️   |     |     |     |     |     |     |     |
| **Q08 Assumptions**                   | ✔️  |     |     |     |     |     |     | ✔️   |     |     |     |     |
| **Q09 Impact on Performance**         |    | ✔️   |     | ✔️   |     |     |     |     |     | ✔️   | ✔️   | ✔️   |
| **Q10 Risks**                         |    | ✔️   | ✔️   |     | ✔️   |     | ✔️   |     | ✔️   | ✔️   | ✔️   | ✔️   |

- Q1 (System’s Purpose): This is not directly answered by most of the tools, but indirectly stakeholders (T1), boundary diagrams (T4), and context diagrams (T5) could help.
- Q2 (Stakeholders): Stakeholder Analysis Matrix (T1), Context Diagram (T5), and Stakeholder Journey Mapping (T9) are essential for identifying stakeholders.
- Q3 (Objectives of Interactions): Use Case Scenarios (T6), Context Diagram (T5), and User Stories (T8) help capture the interactions and goals of stakeholders.
- Q4 (Constraints): SWOT Analysis (T2), PESTLE Analysis (T3), System Boundary Diagram (T4), Context Diagram (T5), and Risk Analysis Model (T7) cover constraints.
- Q5 (Changes in External Conditions): SWOT Analysis (T2), PESTLE Analysis (T3), and Risk Analysis Model (T7) cover how external changes may affect the system.
- Q6 (Safety and Security): Use Case Scenarios (T6) and Risk Analysis Model (T7) address safety and security considerations.
- Q7 (System Boundaries): System Boundary Diagram (T4), Context Diagram (T5), and Ecosystem Mapping (T12) help visualize boundaries.
- Q8 (Assumptions): Stakeholder Analysis Matrix (T1) and User Stories (T8) address assumptions about actors or systems.
- Q9 (Impact on Performance): SWOT Analysis (T2), PESTLE Analysis (T3), Risk Analysis Model (T7), and Force Field Analysis (T11) cover the impact of external systems on performance.
- Q10 (Risks): Risk Analysis Model (T7), PESTLE Analysis (T3), Environmental Scan (T10), Force Field Analysis (T11), and Ecosystem Mapping (T12) address risks from the external context.
