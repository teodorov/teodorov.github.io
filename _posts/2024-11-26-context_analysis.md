---
layout: post
title: Context Analysis is Discovery with a Touch of Sense-making
description: The key questions to address during context analysis
tags: ["MBSE"]
categories: ["research", "MBSE"]
published: false
---

## Understanding the Context: Questions That Shape Systems

You have to design a system! Before diving into solutions or creating intricate models, it's essential to ask the right questions during **context analysis**. This phase sets the foundation for effective system design by uncovering the needs, constraints, and interactions within the **problem space**.

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

## Classification

Let's now try to build a classification of the tools with respect to each question. To make the analysis simple we will define three criteria:

- Directly Address (✔️): The tool is explicitly designed to answer the question or a key component of it. Using the tool inherently leads to an answer without significant inference or external inputs.
- Helpful (~): The tool provides supportive insights, context, or structure that indirectly contribute to answering the question. The tool’s output needs interpretation or combination with other inputs to fully address the question.
- Does Not Contribute Much: The tool is tangentially related, with minimal relevance to the question. Using the tool yields outputs that are not actionable or insightful in the context of the question.

Based on these criteria let's revisit each question.

### Q1 Systems purpose

| Q / T                 | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 |
|-----------------------|----|----|----|----|----|----|----|----|----|-----|-----|-----|
| Q01 System’s Purpose  | ✔️  |    | ~  | ~  | ~  | ✔️  |    | ~  | ~  |     |     | ~   |

| Tool    | Stabilized Classification | Rationale                                                                                   |
|---------|---------------------------|---------------------------------------------------------------------------------------------|
| **T1**  | Directly Address          | Stakeholder needs and expectations are core to defining the system's purpose.               |
| **T2**  | Not Contributing Much     | SWOT focuses on strengths and opportunities, not directly on defining purpose.              |
| **T3**  | Helpful                   | Contextualizes the purpose by analyzing external factors but doesn’t directly define it.    |
| **T4**  | Helpful                   | Helps define boundaries, which shape but don’t fully answer the question.                   |
| **T5**  | Helpful                   | Highlights external entities and interactions, indirectly clarifying purpose.               |
| **T6**  | Directly Address          | Scenarios inherently frame operational goals tied to the system’s purpose.                  |
| **T7**  | Not Contributing Much     | Risk-focused, not purpose-focused.                                                          |
| **T8**  | Helpful                   | User stories articulate needs and expectations but don’t fully define the system’s mission. |
| **T9**  | Helpful                   | Maps stakeholder experiences, providing indirect insights into purpose.                     |
| **T10** | Not Contributing Much     | Too general; context is too broad to directly define the mission.                           |
| **T11** | Not Contributing Much     | Focused on forces for change, irrelevant for defining purpose.                              |
| **T12** | Helpful                   | Maps the ecosystem, providing contextual insights but not directly defining purpose.        |

---

### Q2 Who are the external stakeholders?

| Q / T             | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 |
|-------------------|----|----|----|----|----|----|----|----|----|-----|-----|-----|
| Q02 Stakeholders  | ✔️  |    | ~  | ~  | ✔️  |    |    | ~  | ✔️  | ~   |     | ~   |

| **Tool**   | **Stabilized Classification** | **Reasoning Based on Objective Criteria**                                                  |
|------------|-------------------------------|--------------------------------------------------------------------------------------------|
| **T1**     | Directly Address              | Stakeholder analysis explicitly identifies stakeholders, making it central to Q2.           |
| **T2**     | Not Contributing Much         | SWOT focuses on system characteristics and external opportunities, not directly on stakeholders. |
| **T3**     | Helpful                       | Provides a broad context (e.g., legal, economic factors) that may hint at relevant stakeholders. |
| **T4**     | Helpful                       | Defines system boundaries, which indirectly clarify which entities interact with the system. |
| **T5**     | Directly Address              | Context diagrams explicitly identify external entities and their interactions.              |
| **T6**     | Not Contributing Much         | Use case scenarios describe interactions but don’t focus on stakeholder identification.      |
| **T7**     | Not Contributing Much         | Risk analysis focuses on external threats, not stakeholder identification.                  |
| **T8**     | Helpful                       | User stories highlight some stakeholders' needs but don’t provide a systematic identification. |
| **T9**     | Directly Address              | Stakeholder journey mapping focuses on stakeholders' interactions and experiences.          |
| **T10**    | Helpful                       | Provides insights into potential stakeholder categories through external environmental analysis. |
| **T11**    | Not Contributing Much         | Focuses on forces driving change, not stakeholder identification.                           |
| **T12**    | Helpful                       | Maps the broader ecosystem, which can hint at stakeholders but doesn’t identify them explicitly. |

Notes on Edge Cases:

- **T8 (User Stories)** is classified as "Helpful" rather than "Directly Address". User stories highlight stakeholder needs but lack a systematic or comprehensive approach to identifying all external stakeholders.
- **T3 (PESTLE Analysis)** and **T12 (Ecosystem Mapping)** are "Helpful" because they reveal broader environmental and systemic factors that could imply stakeholders but don’t focus on them explicitly.
- **T5 (Context Diagram)** is "Directly Address" because it systematically identifies external entities interacting with the system, aligning directly with Q2.

**Conclusion**

- **T1 (Stakeholder Analysis Matrix)** and **T9 (Stakeholder Journey Mapping)** are the most relevant tools because stakeholder identification is their core purpose.
- Tools like **T4 (System Boundary Diagram)** and **T12 (Ecosystem Mapping)** are more context-setting and therefore "Helpful."  
- Risk and change-focused tools (**T7**, **T11**) generally don't contribute to stakeholder identification.

---

### Q3 Objectives of Interactions

| Q / T                           | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 |
|---------------------------------|----|----|----|----|----|----|----|----|----|-----|-----|-----|
| Q03 Objectives of Interactions  | ~  |    |    |    | ✔️  | ✔️  |    | ✔️  | ~  | ~   |     | ~   |

| **Tool**   | **Stabilized Classification** | **Reasoning Based on Objective Criteria**                                                  |
|------------|--------------------------------|--------------------------------------------------------------------------------------------|
| **T1**     | Helpful                       | Identifies stakeholders and their interests, indirectly revealing some interaction objectives. |
| **T2**     | Not Contributing Much         | SWOT focuses on external strengths and weaknesses, not on specific interaction objectives.  |
| **T3**     | Not Contributing Much         | PESTLE provides high-level environmental factors but doesn’t focus on interaction objectives. |
| **T4**     | Not Contributing Much         | System boundary diagrams show what interacts with the system but not the objectives of those interactions. |
| **T5**     | Directly Address              | Context diagrams explicitly map interactions between the system and external entities, clarifying objectives. |
| **T6**     | Directly Address              | Use case scenarios describe detailed user goals, directly capturing the objectives of interactions. |
| **T7**     | Not Contributing Much         | Risk analysis focuses on mitigating threats, not defining interaction objectives.           |
| **T8**     | Directly Address              | User stories describe the goals of specific stakeholders in their interactions, making them highly relevant. |
| **T9**     | Helpful                       | Maps stakeholder experiences, which can indirectly provide insights into the objectives of interactions. |
| **T10**    | Helpful                       | Identifies external trends that could shape interaction objectives but doesn’t directly define them. |
| **T11**    | Not Contributing Much         | Force field analysis focuses on drivers and barriers to change, not specific interaction objectives. |
| **T12**    | Helpful                       | Ecosystem mapping provides a broad view of relationships, indirectly highlighting interaction purposes. |

Notes on Edge Cases:

- **T1 (Stakeholder Analysis Matrix)** is "Helpful," not "Directly Address". While it captures stakeholder interests, it doesn’t explicitly analyze the objectives of interactions.
- **T9 (Stakeholder Journey Mapping)** is "Helpful". It captures experiences and pain points, which can suggest objectives, but this is indirect.
- **T8 (User Stories)** is "Directly Address". User stories are explicitly focused on what stakeholders aim to achieve in their interactions.

**Conclusion**

- **T5 (Context Diagram)**, **T6 (Use Case Scenarios)**, and **T8 (User Stories)** are the most relevant because they explicitly explore objectives of interactions.  
- Tools like **T1 (Stakeholder Analysis Matrix)** and **T9 (Stakeholder Journey Mapping)** are "Helpful" since they provide supporting insights into interaction goals.  
- Environmental and risk-focused tools (**T2**, **T3**, **T7**, **T11**) generally don’t address interaction objectives.

---

### Q4 External Constraints

| Q / T                     | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 |
|---------------------------|----|----|----|----|----|----|----|----|----|-----|-----|-----|
| Q04 External Constraints  | ~  | ✔️  | ✔️  |    | ~  |    | ✔️  |    | ~  | ~   | ~   | ~   |

| **Tool**   | **Stabilized Classification** | **Reasoning Based on Objective Criteria**                                                   |
|------------|--------------------------------|---------------------------------------------------------------------------------------------|
| **T1**     | Helpful                       | Identifies stakeholders and their influence, which may reveal some external constraints.     |
| **T2**     | Directly Address              | SWOT highlights weaknesses and threats, often derived from external constraints.             |
| **T3**     | Directly Address              | PESTLE systematically analyzes external constraints such as legal, regulatory, and economic factors. |
| **T4**     | Not Contributing Much         | System boundary diagrams focus on separating internal and external factors, not their constraints. |
| **T5**     | Helpful                       | Context diagrams map external entities and their inputs, indirectly suggesting constraints.   |
| **T6**     | Not Contributing Much         | Use case scenarios focus on user goals and actions, not on constraints imposed by stakeholders. |
| **T7**     | Directly Address              | Risk analysis directly evaluates potential constraints like regulatory or environmental risks. |
| **T8**     | Not Contributing Much         | User stories capture user goals, not constraints imposed by external entities.               |
| **T9**     | Helpful                       | Stakeholder journey mapping may reveal pain points and challenges imposed by external constraints. |
| **T10**    | Helpful                       | Environmental scanning identifies external factors, some of which may impose constraints.     |
| **T11**    | Helpful                       | Force field analysis considers resisting forces, which often include external constraints.    |
| **T12**    | Helpful                       | Ecosystem mapping identifies relationships and dependencies, some of which could represent constraints. |

Notes on Edge Cases:

- **T1 (Stakeholder Analysis Matrix)** is "Helpful," not "Directly Address". It identifies stakeholder influences but doesn’t systematically analyze constraints.
- **T5 (Context Diagram)** is "Helpful," not "Directly Address". It maps entities interacting with the system, which could hint at constraints but doesn’t focus on them.
- **T6 (Use Case Scenarios)** and **T8 (User Stories)** are "Not Contributing Much". These tools prioritize user actions and goals over constraints imposed by external entities.

**Conclusion**

- **T2 (SWOT Analysis)**, **T3 (PESTLE Analysis)**, and **T7 (Risk Analysis)** directly analyze or evaluate external constraints.  
- Mapping tools like **T9 (Stakeholder Journey Mapping)**, **T10 (Environmental Scan)**, **T11 (Force Field Analysis)**, and **T12 (Ecosystem Mapping)** are "Helpful," providing indirect insights into constraints.  
- Goal-oriented tools like **T6 (Use Case Scenarios)** and **T8 (User Stories)** don’t contribute much to identifying external constraints.

---

### Q5 Changes in External Conditions

| Q / T                              | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 |
|------------------------------------|----|----|----|----|----|----|----|----|----|-----|-----|-----|
| Q05 Changes in External Conditions | ~  | ✔️  | ✔️  |    |    | ~  | ✔️  | ~  | ~  | ✔️   | ~   | ~   |

| **Tool**   | **Classification** | **Reasoning**                                                                                  |
|------------|---------------------|----------------------------------------------------------------------------------------------|
| **T1**     | Helpful             | Stakeholder interests and influence might shift due to external changes, impacting system requirements. |
| **T2**     | Directly Address    | SWOT directly examines opportunities and threats stemming from external conditions.          |
| **T3**     | Directly Address    | PESTLE focuses specifically on external political, economic, social, and technological changes. |
| **T4**     | Not Contributing Much | System boundaries are relatively static and don't explore changing external conditions.        |
| **T5**     | Not Contributing Much | Context diagrams focus on existing interactions but don’t examine how they might evolve.      |
| **T6**     | Helpful             | Use cases explore how users achieve goals, which can inform responses to external changes indirectly. |
| **T7**     | Directly Address    | Risk analysis explicitly identifies potential impacts of external threats and opportunities.  |
| **T8**     | Helpful             | User stories reflect user needs, which might evolve with external changes.                  |
| **T9**     | Helpful             | Stakeholder journeys reveal how external conditions affect stakeholder experiences.          |
| **T10**    | Directly Address    | Environmental scans systematically analyze trends and shifts in the external environment.    |
| **T11**    | Helpful             | Force field analysis examines driving and restraining forces that might change external conditions. |
| **T12**    | Helpful             | Ecosystem mapping uncovers dynamic interrelations that might shift with external changes.    |

Edge Case Notes:

- **T1 (Stakeholder Analysis Matrix)**: While stakeholders’ influence might shift due to external factors, this tool is not designed to forecast such shifts. It provides a static snapshot unless combined with trend analysis. Its **Helpful** classification relies on interpreting shifts indirectly.
- **T6 (Use Case Scenarios)** vs. **T8 (User Stories)**:  
  - **T6** is **Helpful** because it reflects the system's current use, with some potential to adapt based on hypothetical scenarios.  
  - **T8** is **Helpful**, as evolving user stories often capture direct responses to external changes in needs or conditions.  
- **T4 (System Boundary Diagram)** vs. **T5 (Context Diagram)**: Both focus on static definitions of boundaries and interactions. They lack inherent mechanisms to address dynamic external changes.
- **T11 (Force Field Analysis)**: This tool helps identify external drivers and barriers, but its utility depends heavily on how thoroughly external dynamics are included in the analysis. While **Helpful**, it borders on **Directly Address** when used in an advanced capacity.

**Conclusion**

- **Directly Address**: **T2 (SWOT Analysis)** and **T3 (PESTLE Analysis)** remain consistent as primary tools for explicitly analyzing external conditions. **T7 (Risk Analysis)** and **T10 (Environmental Scan)** consistently focus on external threats and trends, warranting **Directly Address**.

- **Helpful**: Tools like **T1 (Stakeholder Matrix)** and **T9 (Stakeholder Journey Mapping)** indirectly highlight shifts but don’t directly address external changes.

- **Not Contributing Much**: Static tools such as **T4 (System Boundary Diagram)** and **T5 (Context Diagram)** fail to consider dynamic conditions, justifying their **Not Contributing Much** classification.

---

### Q6 Safety and Security Considerations

| Q / T                    | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 |
|--------------------------|----|----|----|----|----|----|----|----|----|-----|-----|-----|
| Q06 Safety and Security  | ~  |    | ~  |    | ~  | ~  | ✔️  | ~  | ~  | ~   | ~   | ~   |

| **Tool**   | **Classification** | **Reasoning**                                                                                  |
|------------|---------------------|----------------------------------------------------------------------------------------------|
| **T1**     | Helpful             | Identifying stakeholders helps surface safety and security concerns relevant to their interactions. |
| **T2**     | Not Contributing Much | SWOT indirectly considers threats but is not specific to safety or security issues.             |
| **T3**     | Helpful             | PESTLE captures legal and regulatory aspects related to safety and security.                  |
| **T4**     | Not Contributing Much | Boundaries do not inherently analyze risks or propose safeguards.                             |
| **T5**     | Helpful             | Context diagrams identify external entities and flows, supporting safety and security analysis. |
| **T6**     | Helpful             | Use cases reveal scenarios that can expose vulnerabilities or safety-critical interactions.   |
| **T7**     | Directly Address    | Risk analysis is central to identifying and prioritizing safety and security concerns.        |
| **T8**     | Helpful             | User stories capture stakeholder safety concerns and expectations for secure interactions.    |
| **T9**     | Helpful             | Stakeholder journeys uncover critical safety or security pain points in their interactions.   |
| **T10**    | Helpful             | Environmental scans highlight emerging threats or trends affecting safety and security.       |
| **T11**    | Helpful             | Force field analysis identifies forces promoting or resisting improvements in safety.         |
| **T12**    | Helpful             | Ecosystem mapping reveals interdependencies that may introduce or mitigate safety risks.      |

Notes on Edge Cases:

- **T1 (Stakeholder Matrix)**: While it highlights stakeholder-specific safety concerns, it lacks the depth to analyze risks. It's **Helpful** but not **Directly Address**.
- **T3 (PESTLE Analysis)**: PESTLE contributes to identifying regulatory and legal safety requirements but does not actively analyze risks. Due to its broader contextual role we consider it **Helpful**.
- **T5 (Context Diagram)**: Context diagrams focus on relationships and data flows, which are foundational for safety and security assessments. While **Helpful**, their static nature prevents them from being **Directly Address**.
- **T9 (Stakeholder Journey Mapping)**: This tool uncovers stakeholder vulnerabilities during interactions. While not explicitly a safety tool, due to its contextual insights we consider it **Helpful**.
- **T11 (Force Field Analysis)**: This tool supports analyzing barriers to implementing safety measures, though its indirect nature places it in **Helpful** rather than **Directly Address**.

**Conclusion**

- **Directly Address**: **T7 (Risk Analysis)** is the only tool explicitly designed to address safety and security risks comprehensively.
- **Helpful**: Tools like **T6 (Use Case Scenarios)** and **T9 (Stakeholder Journey Mapping)** consistently uncover safety-related insights without directly analyzing risks. **T3 (PESTLE Analysis)** and **T10 (Environmental Scan)** remain **Helpful** by revealing external safety-related influences.
- **Not Contributing Much**: **T4 (System Boundary Diagram)** and **T2 (SWOT Analysis)** are static or high-level tools that provide minimal value for this question.

### Q7 System's Boundaries

| Q / T                    | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 |
|--------------------------|----|----|----|----|----|----|----|----|----|-----|-----|-----|
| Q07 System's Boundaries  | ~  |    | ~  | ✔️  | ~  | ~  |    | ~  | ~  | ~   |     | ~   |

| **Tool**   | **Classification** | **Reasoning**                                                                 |
|------------|---------------------|-------------------------------------------------------------------------------|
| **T1**     | Helpful             | Stakeholder identification indirectly aids in defining boundaries.            |
| **T2**     | Not Contributing Much | SWOT does not explicitly address boundaries.                                   |
| **T3**     | Helpful             | PESTLE highlights external factors influencing boundary considerations.       |
| **T4**     | Directly Address    | System Boundary Diagram explicitly focuses on defining and visualizing boundaries. |
| **T5**     | Helpful             | Context diagrams clarify external interactions and system limits.             |
| **T6**     | Helpful             | Use cases illustrate functional boundaries through specific scenarios.         |
| **T7**     | Not Contributing Much | Risk analysis focuses on threats, not boundary definition.                     |
| **T8**     | Helpful             | User stories provide insights into the scope and limits of system functionality. |
| **T9**     | Helpful             | Stakeholder journeys highlight transitions at system boundaries.              |
| **T10**    | Helpful             | Environmental scans reveal external factors impacting or influenced by boundaries. |
| **T11**    | Not Contributing Much | Force field analysis doesn’t explicitly address boundary definition.           |
| **T12**    | Helpful             | Ecosystem mapping identifies external systems and interactions affecting boundaries. |

**Conclusion:**

- **Directly Address**: **T4 (System Boundary Diagram)** is uniquely focused on this question, maintaining stability in its classification.
- **Helpful**: Tools like **T3 (PESTLE Analysis)**, **T5 (Context Diagram)**, and **T12 (Ecosystem Mapping)** consistently support understanding boundaries through external influences and interactions. **T9 (Stakeholder Journey Mapping)** provides boundary insights by capturing transitions at interface points.
- **Not Contributing Much**: **T7 (Risk Analysis)** and **T11 (Force Field Analysis)** are less relevant for explicitly defining boundaries.  

### Q8 Assumptions

| Q / T                    | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 |
|--------------------------|----|----|----|----|----|----|----|----|----|-----|-----|-----|
| Q08 Assumptions          | ✔️  |    | ~  | ~  | ~  | ~  |    | ✔️  | ~  | ~   |     | ~   |

| **Tool**   | **Classification** | **Notes**                                                                 |
|------------|---------------------|---------------------------------------------------------------------------|
| **T1**     | Directly Address    | Stakeholder analysis identifies assumptions about stakeholder behavior.   |
| **T2**     | Not Contributing Much | SWOT does not focus on specific assumptions about external entities.       |
| **T3**     | Helpful             | PESTLE reveals broader contextual assumptions about external factors.     |
| **T4**     | Helpful             | System boundary diagrams clarify assumptions about included vs excluded.  |
| **T5**     | Helpful             | Context diagrams highlight expected behaviors and interactions.           |
| **T6**     | Helpful             | Use cases capture assumptions within scenarios of external interactions.  |
| **T7**     | Not Contributing Much | Risk analysis identifies threats, not assumptions explicitly.             |
| **T8**     | Directly Address    | User stories frequently encode assumptions about users and external actors. |
| **T9**     | Helpful             | Stakeholder journeys reveal assumptions through expected pain points.     |
| **T10**    | Helpful             | Environmental scans provide insights into systemic assumptions.           |
| **T11**    | Not Contributing Much | Force field analysis focuses on forces of change, not direct assumptions. |
| **T12**    | Helpful             | Ecosystem mapping uncovers implicit assumptions about external systems.   |

**Conclusion:**

- **Directly Address**: **T1 (Stakeholder Analysis)** and **T8 (User Stories)** consistently focus on identifying assumptions about external entities.
- **Helpful**: Contextual tools like **T3 (PESTLE)** and **T12 (Ecosystem Mapping)** support assumption identification but indirectly.
- **Edge Cases**: Tools like **T9 (Stakeholder Journey Mapping)** may not explicitly define assumptions but expose them through user experiences.

### Q9 Performance

| Q / T                    | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 |
|--------------------------|----|----|----|----|----|----|----|----|----|-----|-----|-----|
| Q09 Performance          | ~  |    | ~  | ~  | ✔️  | ~  | ✔️  | ✔️  | ~  | ~   |     | ✔️   |

| **Tool**   | **Classification** | **Notes**                                                               |
|------------|---------------------|-------------------------------------------------------------------------|
| **T1**     | Helpful             | Stakeholder analysis identifies critical external actors.               |
| **T2**     | Not Contributing Much | SWOT focuses more on strengths and weaknesses than performance impacts. |
| **T3**     | Helpful             | PESTLE highlights external factors that could influence performance.    |
| **T4**     | Helpful             | Boundary diagrams clarify dependencies on external entities.            |
| **T5**     | Directly Address    | Context diagrams explicitly map interactions and their potential impact.|
| **T6**     | Helpful             | Use cases outline performance-critical external interactions.           |
| **T7**     | Directly Address    | Risk analysis identifies risks tied to external system dependencies.    |
| **T8**     | Helpful             | User stories expose performance dependencies through stakeholder needs. |
| **T9**     | Not Contributing Much | Journey mapping focuses more on experience than performance.            |
| **T10**    | Helpful             | Environmental scans reveal systemic influences affecting performance.    |
| **T11**    | Helpful             | Force field analysis maps external forces that drive or hinder performance.|
| **T12**    | Directly Address    | Ecosystem mapping visualizes interconnected dependencies.               |

**Conclusion:**

- **Directly Address**: Context diagrams (T5), risk analysis (T7), and ecosystem mapping (T12) explicitly uncover performance-critical external impacts.
- **Helpful**: Tools like use cases (T6) and environmental scans (T10) provide indirect insights into external influences.  
- **Edge Cases**: Stakeholder journey mapping (T9) is less relevant here but may indirectly touch on performance in specific scenarios.

### Q10 Risks

| Q / T                    | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 |
|--------------------------|----|----|----|----|----|----|----|----|----|-----|-----|-----|
| Q10 Risks                | ~  | ~  | ~  |    | ~  | ~  | ✔️  | ~  |    | ✔️   | ~   | ✔️   |

| **Tool**   | **Classification** | **Notes**                                                                   |
|------------|---------------------|-----------------------------------------------------------------------------|
| **T1**     | Helpful             | Stakeholder analysis can highlight risks tied to stakeholder influence.    |
| **T2**     | Helpful             | SWOT analysis identifies external threats and internal vulnerabilities.    |
| **T3**     | Helpful             | PESTLE uncovers risks across political, legal, and environmental domains.  |
| **T4**     | Not Contributing Much | Boundary diagrams focus on defining scope rather than identifying risks.    |
| **T5**     | Helpful             | Context diagrams provide insights into risk-laden external interactions.   |
| **T6**     | Helpful             | Use cases can reveal risks in user-system interactions.                    |
| **T7**     | Directly Address    | Risk analysis is specifically designed for identifying and mitigating risks.|
| **T8**     | Helpful             | User stories can expose specific risks tied to user needs and scenarios.   |
| **T9**     | Not Contributing Much | Journey mapping emphasizes experience over explicit risk identification.    |
| **T10**    | Directly Address    | Environmental scans help identify broad external risks and emerging threats.|
| **T11**    | Helpful             | Force field analysis reveals opposing forces that can be framed as risks.  |
| **T12**    | Directly Address    | Ecosystem mapping visualizes risk-prone dependencies and indirect threats. |

**Conclusion:**

- **Directly Address**: Risk analysis (T7), environmental scans (T10), and ecosystem mapping (T12) are tailored for identifying external risks.  
- **Helpful**: Tools like SWOT (T2) and PESTLE (T3) provide a broader understanding of external risk factors.  
- **Edge Cases**: Stakeholder journey mapping (T9) contributes minimally unless specific touchpoints have associated risks. Boundary diagrams (T4) are generally less risk-focused but could highlight boundary-related vulnerabilities in some contexts.

## Overview of the Results

| **Q / T**                             | T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 |
|---------------------------------------|----|----|----|----|----|----|----|----|----|-----|-----|-----|
| **Q01 System’s Purpose**              | ✔️  |    | ~  | ~  | ~  | ✔️  |    | ~  | ~  |     |     | ~   |
| **Q02 Stakeholders**                  | ✔️  |    | ~  | ~  | ✔️  |    |    | ~  | ✔️  | ~   |     | ~   |
| **Q03 Objectives of Interactions**    | ~  |    |    |    | ✔️  | ✔️  |    | ✔️  | ~  | ~   |     | ~   |
| **Q04 Constraints**                   | ~  | ✔️  | ✔️  |    | ~  |    | ✔️  |    | ~  | ~   | ~   | ~   |
| **Q05 Changes in External Conditions**| ~  | ✔️  | ✔️  |    |    | ~  | ✔️  | ~  | ~  | ✔️   | ~   | ~   |
| **Q06 Safety and Security**           | ~  |    | ~  |    | ~  | ~  | ✔️  | ~  | ~  | ~   | ~   | ~   |
| **Q07 System Boundaries**             | ~  |    | ~  | ✔️  | ~  | ~  |    | ~  | ~  | ~   |     | ~   |
| **Q08 Assumptions**                   | ✔️  |    | ~  | ~  | ~  | ~  |    | ✔️  | ~  | ~   |     | ~   |
| **Q09 Impact on Performance**         | ~  |    | ~  | ~  | ✔️  | ~  | ✔️  | ✔️  | ~  | ~   |     | ✔️   |
| **Q10 Risks**                         | ~  | ~  | ~  |    | ~  | ~  | ✔️  | ~  |    | ✔️   | ~   | ✔️   |




## Key dimensions

## Key Dimensions of Societal and Ethical Impacts

1. Safety and Well-being
   
   Question: Does the system pose risks to human life or health?
   Example: In an autonomous vehicle system, how does it ensure pedestrian safety, especially in unpredictable environments?

2. Environmental Impact
   
   Question: Does the system contribute to pollution, resource depletion, or ecological harm? Can it be designed to minimize its carbon footprint?
   Example: A manufacturing system might evaluate its energy consumption and waste management policies.

3. Privacy and Data Protection

Question: Does the system handle sensitive data responsibly, respecting user privacy and compliance with regulations like GDPR?
Example: For a smart city monitoring system, ensuring citizens’ data is anonymized and protected is crucial.

4. Equity and Accessibility

Question: Does the system serve all relevant stakeholders fairly, including marginalized or underrepresented groups?
Example: A public transportation system should consider accessibility for people with disabilities or those in low-income communities.

5. Bias and Fairness

Question: Could the system unintentionally reinforce biases or inequalities?
Example: Machine learning systems for hiring decisions might perpetuate biases in training data unless actively addressed.

6. Accountability and Governance

Question: Who is accountable if the system causes harm or fails? Are governance mechanisms in place?
Example: A financial algorithm causing market instability needs clear accountability and robust safeguards.

7. Long-term Societal Effects

Question: Could the system disrupt societal norms, cultural practices, or economic stability in unintended ways?
Example: Automation might increase efficiency but also displace workers, requiring strategies to mitigate economic inequality.