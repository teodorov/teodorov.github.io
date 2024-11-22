---
layout: page
title: "DGAC ONEWAY"
description: Modeling & Analyzing the Product Development Plan
img: assets/img/emirates-airbus-a380-aircraft-science-technology-d6643c.jpg
importance: 1
category: past
---

| Acronym | ONEWAY |
| Funding | The French Civil Aviation Authority (DGAC) |
| Start | may 2021 |
| End | may 2023 |
| Budget | 28 million € |
| Partners | Airbus, Dassault Aviation, Liebherr Aerospace, Safran Electrical & Power, Safran Aerotechnics, Thales, Altran Technologies, Cap Gemini, Sopra Steria, CIMPA, IMT Mines Ales, University of Rennes 1, **ENSTA Bretagne**, and PragmaDev |
| Coordinator | Airbus |

---

In the fierce landscape of global economic competition, France stands out for its formidable aeronautics industry, which serves as a pillar of national strength. Comprising major corporations, mid-sized enterprises, and SMEs, the sector is one of only two worldwide, alongside the United States, capable of fully developing, producing, and marketing both civil and military aircraft. To safeguard this critical asset and advance ecological transformation, the French government has introduced a comprehensive support plan. This strategy not only seeks to protect the nation’s expertise and skill set but also accelerates the transition to more sustainable, low-carbon air travel.

Renowned for its sophisticated expertise, the French aeronautics sector excels in managing complex products, programs, and the intricacies of its value chain. Yet, it faces pressing challenges: the need for streamlined cycles, more efficient engineering activities, and ongoing enhancement of product and support system performance. Additionally, rapid integration of technological innovations and leveraging advances in emerging digital technologies are crucial. These challenges underscore an urgent need for a fundamental overhaul of engineering methodologies within the industry, laying the groundwork for the **ONEWAY project**.

The **ONEWAY project** is designed to advance digital capabilities in the following areas:

- Comprehensive digitalization of **Model-Based Systems Engineering (MBSE)** to enable analysis of design and validation data from multiple perspectives within an extended enterprise, covering the complete aircraft system and all levels of decomposition.
- Versatile and scalable **configuration management** throughout product lifecycles, encompassing products, support systems, and product lines, enabling interactive collaboration across extended enterprises.
- Enhanced decision-making support for the initiation and management of **Product Development Plans**, facilitating interactive project oversight within complex enterprise ecosystems.
- Improved efficiency of **Integration, Verification, Validation, and Qualification (IVVQ)** activities, focusing on streamlined operations, testing, data processing, and massive testing capabilities.

## Flux 3: Product Development Plan

In the highly competitive field of aircraft systems design, the **Program Preparation Phase (PPP)** is essential for evaluating numerous potential configurations and performance indicators, like time-to-market and resource optimization. This phase lays the groundwork for key decisions on program launches, relying heavily on a robust **Product Development Plan (PDP)** to support both decision-making and detailed program planning. However, the lack of formalized tools and methodologies limits the efficacy of PDP exploitation, creating a critical gap in efficient and informed program development.

The current state of PDP management lacks a formal, structured model, making it difficult to navigate the dynamic complexities of product development effectively. Without an executable and scalable framework, stakeholders face challenges in simulating, analyzing, and iterating on the PDP to meet evolving requirements and constraints. This deficiency in formalization and tooling obstructs the seamless creation and manipulation of PDPs, particularly when dealing with extensive data on timelines, resources, and development strategies.

**Flux 3 of the ONEWAY project** addresses this gap by introducing a model-driven engineering approach, harnessing off-the-shelf libraries, design patterns, and product-line engineering techniques to streamline the PDP creation phase. This approach includes a BPMN-based model that captures the PDP’s dynamic aspects, enriched with temporal and resource constraints, allowing for accurate simulation of process flows. By focusing on process simulation and an extensible execution engine, **ONEWAY** transforms PDP exploitation from a static planning document into an interactive, adaptive tool for decision-making.

The structured approach developed within **Flux 3** demonstrates significant improvements in PDP clarity, scalability, and usability. Preliminary results indicate enhanced capacity for design-space exploration and simulation, enabling project stakeholders to assess a wider range of configurations and make informed decisions with greater agility. The enriched BPMN model offers a concrete framework, not only facilitating a more rigorous PDP analysis but also setting the foundation for future advancements in automated and predictive program planning. Through these innovations, ONEWAY advances the field of complex system design, empowering teams to navigate the intricacies of aircraft system development with unprecedented precision and adaptability.

### Contributions to Flux 3 from the Lab-STICC P4S Team at ENSTA Bretagne

**PDP System Development**: The *P4S Team at ENSTA Bretagne* played a key role in the ONEWAY project's Flux 3 by focusing on formal validation and verification of the Product Development Plan (PDP) model. This involved two primary activities: the extension of the [OBP2](http://www.obpcdl.org) model checker and the formalization of properties aligned with Airbus's system requirements and "**Top Program Objectives**". 

![amnesiac_oxen](/assets/img/oneway_amnesiac_oxen.png){:class="img-fluid rounded z-depth-1"}

To enhance OBP2, the ENSTA Bretagne team integrated **advanced statistical model-checking algorithms** that facilitate partial exploration of the PDP's vast state space (exceeding \\(10^{24}\\) states), enabling **efficient testing** for large-scale models where exhaustive exploration is infeasible. This partial exploration approach allows for targeted validation of the PDP model, demonstrating the feasibility of ENSTA Bretagne's methodology at [TRL 4](https://en.wikipedia.org/wiki/Technology_readiness_level).


![pdp_vision](/assets/img/oneway_pdp_vision.png){:class="img-fluid rounded z-depth-1"}

![pdp_interpreter](/assets/img/oneway_results.png){:class="img-fluid rounded z-depth-1"}

In addition to extending OBP2, ENSTA Bretagne developed a **prototype BPMN interpreter** capable of handling **temporal constraints** within PDP models. This interpreter, achieving TRL 3, supports *continuous time intervals* and ensures compatibility with OBP2’s exploration algorithms. Significantly, the temporal model was designed to be language-agnostic, making it adaptable to any domain-specific language (DSL) by interfacing through a [Semantic Language Interface (SLI)](/blog/2024/gamine_sli), a feature also integrated with Pragmadev Process for direct application on simulated PDP models.

![federation](/assets/img/oneway_federation.png){:class="img-fluid rounded z-depth-1"}

For the formal property expression, ENSTA Bretagne introduced an abstraction layer, based on the [OpenFlexo](https://openflexo.org/) to streamline the translation of textual requirements into temporal logic properties. Using Dwyer's patterns, they provided a template-driven approach for expressing complex requirements in a structured manner. This **federated** approach—combining BPMN task attributes, [Dwyer's temporal patterns](https://matthewbdwyer.github.io/psp/), and system objectives—allows for seamless property generation in the [Generic Property Specification Language (GPSL)](http://www.obpcdl.org/gpsl/), which OBP2 can verify. This tooling was evaluated on Airbus's anonymized PDP models, proving that a heterogeneous model federation can efficiently address complex property verification needs for the PDP system, setting the foundation for more robust, requirement-aligned PDP development.
