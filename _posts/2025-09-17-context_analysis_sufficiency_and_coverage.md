---
layout: post
title: Sufficiency & Coverage in Context Analysis
description: Evaluate your context analysis
tags: ["MBSE"]
categories: ["research", "MBSE"]
published: true
---

In a [previous post](../context_analysis_questions) I introduced **10 key questions for context analysis**, designed to uncover a system’s purpose, boundaries, and broader implications before diving into design. Those questions serve as *prompts for discovery and sense-making*. Yet, once the answers start to emerge, another challenge arises: **how do we know if our context analysis is “good enough”?**

Two qualities matter most here:

* **Sufficiency** – Have we gone deep enough in our answers to support meaningful design decisions?
* **Coverage** – Have we looked wide enough to ensure no critical stakeholder, assumption, or external factor is left out?

To bring structure to this evaluation, the 10 questions can be grouped into three natural partitions:

1. **Purpose & Value** – why the system exists and for whom (Q1–Q4)
2. **Boundaries & Assumptions** – what constrains it and where it begins/ends (Q5–Q7)
3. **Dynamics & Consequences** – how it evolves, what risks it faces, and what impacts it creates (Q8–Q10)

The table below connects each partition with a pair of guiding checks — one for sufficiency (depth) and one for coverage (breadth). Together, they form a simple canvas for reviewing context analysis work, ensuring that answers to the 10 questions are not only present but also **adequate in depth and complete in scope**.


| **Axes**                                                                   | **Sufficiency<br>(Depth – do we know *enough***                                                                                                                      | **Coverage<br>(Breadth – have we looked *wide enough*?)**                                                                                                                            |
| --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Purpose & Value** (Q1–Q4)  <br> Mission, stakeholders, objectives, necessity                   | ☐ Is the mission clearly stated and justified? <br> ☐ Are stakeholder needs articulated enough to be turned into requirements?                                      | ☐ Have we included *all* stakeholders, not just the obvious ones? <br> ☐ Have we captured diverse motivations for why the system is needed?                                       |
| **2. Boundaries & Assumptions** (Q5–Q7)  <br> Constraints, assumptions, boundaries                  | ☐ Are constraints and assumptions explicit enough to guide design? <br> ☐ Are system boundaries defined so we know what is inside vs. outside?                      | ☐ Have we listed and challenged all major assumptions? <br> ☐ Have we identified *all* relevant interactions, inputs, outputs, and interfaces?                                    |
| **3. Dynamics & Consequences** (Q8–Q10)  <br> Change, risks, societal/ethical/environmental impacts | ☐ Do we understand enough about external change factors to anticipate adaptations? <br> ☐ Are risks and implications identified sufficiently to support trade-offs? | ☐ Have we considered *both* sides of risk (environment→system, system→environment)? <br> ☐ Have we included short-term and long-term societal/ethical/environmental consequences? |
