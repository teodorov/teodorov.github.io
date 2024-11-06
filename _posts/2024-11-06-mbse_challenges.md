---
layout: post
title: MBSE Challenges
description: Challenges when considering MBSE as a subject of study
tags: ["MBSE"]
categories: ["research", "MBSE"]
published: true
---

MBSE promises to facilitate communication via technology (models & tools) amongst stakeholders, and different engineering disciplines in the system engineering process.

In the following I want to point out 10 challenges that need to be addressed if we want to achieve the full potential of Model-Based Systems Engineering (MBSE).

In focusing on MBSE, we delve into challenges that are distinct from broader systems engineering concerns, as MBSE itself becomes the subject of study rather than the system being designed. 

MBSE challenges pertain to refining the methodologies, tools, and frameworks that make MBSE robust, scalable, and applicable across various domains, while traditional systems engineering challenges center on the practicalities of designing, developing, and delivering complex systems in response to specific stakeholder requirements. 

By addressing MBSE-specific challenges, we aim to strengthen MBSE as a discipline, ensuring it can effectively support and enhance systems engineering practices. At the same time, applying MBSE in real-world scenarios provides valuable insights into its limitations, revealing areas where further refinement is necessary to maximize its impact in complex system development.

![challenges diagram](/assets/img/mbse_challenges.svg){:class="img-fluid rounded z-depth-1"}

These challenges emerge from studying and developing MBSE as a discipline. They focus on the theoretical, methodological, and practical aspects that make MBSE effective and scalable as an approach to complex system design.

### <a id="C1">C1</a>. Formalization of Models and Languages & Their Composition
   
At its core, MBSE relies on rigorous model formalization to enable consistency, composability, and correctness across complex systems. Yet, without a solid formal foundation for models and their languages, MBSE can devolve into fragmented representations that lack robustness. Formalized syntax and semantics across modeling languages, alongside methods for safe model composition, are fundamental to creating resilient, interoperable MBSE frameworks. Ensuring these fundamentals is crucial, especially in high-stakes domains where ambiguities in model definitions can lead to critical system vulnerabilities and operational breakdowns.

### <a id="C2">C2</a>. Breaking Through Model Heterogeneity and Tool Fragmentation

MBSE promises unified, coherent design, yet current practices often force engineers to juggle disparate tools and muddled abstractions, compromising model coherence. Systems built with SysML, NAF, BPMN, and specialized simulations too often form disconnected silos, diluting MBSE’s potential. Effective MBSE demands an integrated ecosystem, where models interoperate seamlessly across domains and tools, replacing chaotic handoffs with a cohesive model federation. In defense and other high-stakes contexts, this alignment is essential to avoid costly errors and ensure mission coherence. Model federation approaches [[1]](#1), such as [OpenFlexo](https://openflexo.org/) [[2]](#2) tackle this problem by embraching heterogeneity and focusing on building semantic links between the abstractions and the tools. In my work, [G∀min∃](/_pages/hdr.md), around behavioral analysis of *potentially* heterogeneous specification I argue towards establishing these semantics links at the semantic-level (not a syntactic level) by using the language semantics as 'inteligent' mediators that brings meaning to data, viewed as a syntactic structure.

### <a id="C3">C3</a>. Ensuring End-to-End Traceability for Evolving Requirements

Traceability is more than a documentation task—it’s the backbone of MBSE’s adaptability, linking evolving requirements with every design decision and system component. In fast-paced, operationally intense fields, traceability is essential to maintain coherence as systems grow and adapt. Without a robust framework to track these dependencies, MBSE risks drifting from stakeholder needs. Clear lineage tracking transforms MBSE models from static plans to dynamic, responsive roadmaps, ensuring every change is justified, verifiable, and strategically aligned. The notion of tracability here goes beyond the tracability as a system-centric requirement evolution technology, focusing on the evolutionary nature of the whole set of design artifacts, tools, practices leading to the even bigger challenge of mastering evolution [[2]](#2).

### <a id="C4">C4</a>. Embedding Validation and Verification (V&V) in Experimental and Validity Frames

MBSE’s strength is in validating and verifying system behavior before real-world deployment, but too many approaches fall short. Experimental and validity frames [[3]](#3) provide structured ways to assess whether model results match real-world scenarios—an especially critical factor in defense, where accuracy can impact mission success. This is more than a checkbox—it’s a methodical framework for aligning simulations with practical, real-world applications. Without explicit validation frames, MBSE models risk becoming isolated theoretical exercises, detached from operational relevance. At a conceptual level we can say that the validity frames reify and finely caracterise a link between the reality, the model that abstract it, and the modeling intentions (the questions that need to be answered by the model). From this perspective a validity frame tels us when it is sound to trust the answers that we get from the model. The presence of ad-hoc heterogeneity [C2](#C2), in today's MBSE approaches, renders the model verification and validation even more challenging.

### <a id="C5">C5</a>. Establishing a Reliable Authoritative Source of Truth (ASoT)

MBSE requires a single, authoritative source of truth (ASoT) to prevent outdated or misaligned models from sabotaging projects. Yet, many frameworks lack the model management strategy to uphold this, risking breakdowns in coherence. A strong ASoT enables teams to work confidently with validated, up-to-date models, ensuring every iteration cascades systematically across the design landscape. Without rigorous ASoT, engineering teams are left wrestling with fragmented updates and misaligned versions, particularly perilous in mission-critical systems. This problem is significantly agravated by the lack of crisp formalization [C1](#C1), the ad-hoc heterogeneity management [C2](#C2), the insuffient understanding of model & tool evolution [C3](#C3), and the missing solutions to the verification and validations challenges [C4](#C4).

### <a id="C7">C6</a>. Scaling MBSE for Complex Systems without Model Overload

As systems grow more complex, MBSE must scale to handle intricate details without overwhelming teams. Techniques like modularization, abstraction layers, and model reduction can keep teams from drowning in detail, even as they tackle sprawling, interconnected subsystems. In defense, the stakes are even higher, as model overload can lead to operational blind spots. Smart, scalable practices in MBSE help teams maintain focus on the big picture while keeping track of critical details.

### <a id="C6">C7</a>. Achieving a Unified MBSE Methodology to Replace Fragmented Practices

Too often, MBSE implementation is fragmented, forcing engineers to juggle incompatible tools and shifting paradigms. This fragmentation undermines collaboration, confuses stakeholders, and drains resources as teams attempt to reconcile mismatched frameworks. A unified MBSE methodology—one that harmonizes interoperability, traceability, and model validation—enables engineers to focus on system-specific reasoning rather than grappling with clashing tools. In critical fields like defense, where system coherence can make or break a mission, harmonization is essential to transform MBSE from a patchwork of tools into a cohesive, high-impact methodology.

### <a id="C8">C8</a>. Education and Adoption: Overcoming the Steep Learning Curve

MBSE demands a fresh mindset in systems development, but the learning curve is steep, and expertise is limited. Educating engineers in MBSE practices, transitioning teams from traditional approaches, and fostering interdisciplinary understanding are all significant barriers to MBSE adoption. As MBSE permeates industries like defense, where roles are often highly specialized, bridging knowledge gaps and building interdisciplinary MBSE fluency are essential to harnessing its full potential. Without effective education and adoption strategies, MBSE risks remaining a niche approach, out of reach for many teams who could benefit from its structured, model-driven approach. In [[2]](#2), the authors identifies the **preservation of existing practices** as a technological challenge that requires a shift in focus from *the users need to adopt tools* towards *the tool provider need to accomodate existing user practices*. From this perspective the *interoperability* challenge become *how to ensure semantic interoperability while striving to preserve existing practices*. While the authors of [[2]](#2) emphasize on preserving *all* existing practices, rationality dictates that we should preserve only the benefic existing practices, and facilitate the elimination of detrimental ones.

### <a id="C9">C9</a>. Balancing Formal Rigor with Human-Centered Qualitative Aspects

MBSE traditionally emphasizes formal rigor to ensure precision, correctness, and reliability. However, this focus can unintentionally stifle creativity and frustrate users, especially when the tools and methods become overly constraining. Striking a balance between formal rigor and qualitative insights allows MBSE to embrace a more human-centered approach, one that empowers rather than limits engineers. By incorporating flexibility and fostering interpretative thinking, MBSE can evolve to support not only structured, repeatable processes but also the intuition and creativity essential to complex system design. This balance is critical to making MBSE both robust and adaptable to the nuanced needs of its users.

### <a id="C10">C10</a>. Absence of Benchmarking Standards for Objective Evaluation

The vast diversity of systems, domains, and stakeholder cultures makes it challenging to establish standardized benchmarks for evaluating MBSE practices and tools. This lack of benchmarking hinders both research and industry by clouding our view of the state of the art and impeding clear comparisons between methodologies and technologies. Researchers struggle to gauge what progress has been made and what gaps remain, while practitioners face subjective, often arbitrary decisions when selecting tools and technologies. Without clear benchmarks, choices are too often based on marketing, personal preferences, or past experiences, rather than an objective assessment of each tool’s capabilities relative to specific project needs. Establishing benchmarking frameworks would enable both the academic and industrial communities to make more informed, strategic decisions about MBSE solutions.

The absence of clear benchmarks and foundational focus traps MBSE research in an endless cycle of reinventing the wheel with each new tool or abstraction. Instead of advancing core methodologies, the community often chases superficial differences, losing sight of the deeper challenges that would empower tool vendors to handle system-specific diversity with precision and adaptability.

These challenges underscores the foundational need for formalized models and model composition, highlighting how MBSE can only reach its potential through rigorous structure, coherence, and a unified methodology that cuts through complexity.

## References

<a id="1">[1]</a> Moussa Amrani, Rakshit Mittal, Miguel Goulão, Vasco Amaral, Sylvain Guérin, Salvador Martínez, Dominique Blouin, Anish Bhobe, and Yara Hallak. 2024. A Survey of Federative Approaches for Model Management in MBSE. In Proceedings of the ACM/IEEE 27th International Conference on Model Driven Engineering Languages and Systems (MODELS Companion '24). Association for Computing Machinery, New York, NY, USA, 990–999. https://doi.org/10.1145/3652620.3688221

<a id="2">[2]</a> Jean-Christophe Bach, Antoine Beugnard, Joël Champeau, Fabien Dagnat, Sylvain Guérin, and Salvador Martínez. 2024. 10 years of Model Federation with Openflexo: Challenges and Lessons Learned. In Proceedings of the ACM/IEEE 27th International Conference on Model Driven Engineering Languages and Systems (MODELS '24). Association for Computing Machinery, New York, NY, USA, 25–36. https://doi.org/10.1145/3640310.3674084

<a id="3">[3]</a> R. Mittal, R. Eslampanah, L. Lima, H. Vangheluwe and D. Blouin, "Towards an Ontological Framework for Validity Frames," 2023 ACM/IEEE International Conference on Model Driven Engineering Languages and Systems Companion (MODELS-C), Västerås, Sweden, 2023, pp. 801-805, doi: 10.1109/MODELS-C59198.2023.00128.