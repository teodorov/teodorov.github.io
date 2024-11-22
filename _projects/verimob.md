---
layout: page
title: "rapid VeriMoB"
description: BPMN Model Verification
img: assets/img/verimob.png
importance: 2
category: past
---

![verimob page de garde](/assets/img/verimob_pagegarde.png){:class="img-fluid rounded z-depth-1"}

| Acronym   | VeriMoB |
| Title     | BPMN Model Verification |
| Funding   | France 2030 (ANR-BPI France)​ |
| Start     | janvier 2018 |
| End       | march 2020 |
| Budget    | 300 k€ |
| Partners  | [PragmaDev](https://www.pragmadev.com/), [ENSTA Bretagne](https://www.ensta-bretagne.fr/) |
| Coordinator| [PragmaDev](https://www.pragmadev.com/) |

---

The VeriMoB project aims to develop an innovative tool, VeriMoB, that enhances the modeling and verification of complex systems using Business Process Model and Notation (BPMN). This project is a collaborative effort between PragmaDev, and ENSTA Bretagne, leveraging their respective expertise in model-based systems engineering, formal verification, and BPMN modeling.  The primary objective is to create a tool that allows users to interactively execute and verify BPMN models, ensuring coherence and correctness across various scenarios. By integrating the capabilities of [PragmaDev Studio](https://www.pragmadev.com/product/studio.html) and the [Observer Based Prover (OBP)](http://obpcdl.org) from ENSTA Bretagne, VeriMoB will enable the generation of execution traces, replay of scenarios for regression testing, and automatic verification of properties. The project benefits from a collaboration with [MEGA International](https://www.mega.com), as subcontractor, for insights on the [HOPEX platform](https://www.mega.com/hopex-platform).
This project complements the "EASE for SE" initiative, extending functionalities to conduct exhaustive simulations and formal verification of architectural models.

## Challenges

Currently (2018), the verification of BPMN models is a manual, time-consuming, and error-prone process. Existing tools lack the capability to automate the execution and verification of these models, leading to incomplete and inefficient validation. The complexity of ensuring coherence across multiple scenarios and the heterogeneity of models from different tools pose significant challenges. Additionally, the need for real-time interaction and feedback during model execution is not adequately addressed by available solutions. The VeriMoB project aims to overcome these challenges by providing a seamless, automated, and interactive environment for BPMN model verification, thereby enhancing the efficiency, accuracy, and reliability of the design and validation process for complex systems.

## Results

The project enabled the development of the initial version of the commercial tool, [PragmaDev Process](https://www.pragmadev.com/product/process.html), that allows the verification of BPMN models for business process descriptions. This verification covers three aspects:

1. **Static verification of the model**, which checks the semantic consistency between the different diagrams.
2. **Dynamic verification**, enabling the user to interactively animate their model step by step. Execution traces are generated and can be replayed interactively or automatically on the model.
3. **Automatic exploration of all possible scenarios.** The number of possible paths provides an indication of the model's complexity. The exploration can also verify whether a property (an invariant) is always (or never) reached. If a property violation is detected, it is possible to replay the scenario that led to the violation for analysis.

Methodologically, the creation of models is done using the [MEGA HOPEX](https://www.mega.com/hopex-platform) tool. The model is exported to **PragmaDev Process** via a customized menu in HOPEX. **PragmaDev Process** automatically imports the models, allowing them to be visualized, statically analyzed, and interactively executed. For exploration, **PragmaDev Process** is coupled with [**OBP**](http://obpcdl.org) from ENSTA Bretagne. This coupling is transparent to the user, who does not interact directly with **OBP**.

In parallel with the development of the Process tool, this project facilitated the maturation of **OBP**, particularly its software interfaces (APIs), enabling both remote control of execution semantics and embedded use of the verification engine.

Initially, the project aimed to *translate* **BPMN** models into **SDL** models to leverage the existing features of the PragmaDev Studio tool. However, it turned out that the semantic translation from one model to the other was very complex or even impossible for certain BPMN language constructs [[1]](#1). Therefore, static semantic analysis and the executor were specifically developed within the scope of the project [[2]](#2).

## References

<a id="1">[1]</a> Mihal Brumbulli and Emmanuel Gaudin. 2020. *An attempt to convert BPMN models to SDL*. In Proceedings of the 12th System Analysis and Modelling Conference (SAM '20). Association for Computing Machinery, New York, NY, USA, 45–53. [https://doi.org/10.1145/3419804.3420265](https://doi.org/10.1145/3419804.3420265)

<a id="2">[2]</a> Mihal Brumbulli, Emmanuel Gaudin, Ciprian Teodorov. *Automatic Verification of BPMN Models*. 10th European Congress on Embedded Real Time Software and Systems (ERTS 2020), Jan 2020, Toulouse, France. ⟨hal-02441878⟩
