---
layout: post
title: Multiverse Debugging

description: a brief introduction to multiverse debugging
tags: debugging
categories: research
---

**Multiverse debugging** offers a powerful toolset for addressing the inherent complexity and non-determinism in concurrent systems. It opens new possibilities for developers and researchers to understand, analyze, optimize, and improve system reliability and performance.

The concept of the *multiverse*, though controversial in philosophy [[1]](#1) and physics [[2]](#2), has gained traction in psychology [[3]](#3) and neurology [[4]](#4), where multiverse analysis addresses the researcher’s degrees of freedom issue [[5]](#5). In mathematics, the multiverse framework is seen in foundational interpretations of set theory [[6]](#6). In engineering, Leslie Lamport’s Temporal Logic of Actions (TLA) [[7]](#7) conceptualizes system specifications within an implicit underlying universe. This framework complements Edward Lee's view on engineering models [[8]](#8), where engineers are seen as creators of their design universes.

In computer science, the multiverse concept was first introduced in [[10]](#10) to address challenges in debugging concurrent actor programs. **Multiverse debugging** proposes to explore all potential program behaviors, paralleling modal temporal logics and Kripke’s possible worlds interpretations [[9]](#9). The idea of **multiverse debugging** was extended to the formal analysis of behavioral specifications [[11]](#11)[[12]](#12)[[13]](#13), where it served as a cohesive metaphor for integrating debugging and model-checking [[11]](#11). This integration enhances breakpoint expressivity [[11]](#11) and facilitates interactive analysis of complex systems [[13]](#13). Early scalability concerns [[10]](#10) were mitigated by M. Pasquier et al. in [[12]](#12), who demonstrated that **multiverse debugging** could be optimized through the integration of a variety of under-approximation techniques [[14]](#14).

## References

<a id="1">[1]</a>  S. Friederich, Multiverse Theories: A Philosophical Perspective. Cambridge: Cambridge University Press, 2021.

<a id="2">[2]</a> John F. Donoghue. The multiverse and particle physics. Annual Review of Nuclear and Particle Science, 66(Volume 66, 2016):1–21, 2016.

<a id="3">[3]</a> Steegen, S., Tuerlinckx, F., Gelman, A., & Vanpaemel, W. (2016). Increasing Transparency Through a Multiverse Analysis. Perspectives on Psychological Science, 11(5), 702-712. https://doi.org/10.1177/1745691616658637 

<a id="4">[4]</a> Clayson, Peter E. (2024-03-01). "Beyond single paradigms, pipelines, and outcomes: Embracing multiverse analyses in psychophysiology". International Journal of Psychophysiology. 197: 112311. doi:10.1016/j.ijpsycho.2024.112311. ISSN 0167-8760

<a id="5">[5]</a> Wicherts, Jelte M.; Veldkamp, Coosje L. S.; Augusteijn, Hilde E. M.; Bakker, Marjan; van Aert, Robbie C. M.; van Assen, Marcel A. L. M. (2016). "Degrees of Freedom in Planning, Running, Analyzing, and Reporting Psychological Studies: A Checklist to Avoid p-Hacking". Frontiers in Psychology. 7: 1832. doi:10.3389/fpsyg.2016.01832. PMC 5122713. PMID 27933012.

<a id="6">[6]</a> D. Hamkins, “The Set-theoretic Multiverse,” The Review of Symbolic Logic, vol. 5, no. 3, pp. 416–449, 2012. doi:10.1017/S1755020311000359

<a id="7">[7]</a> Leslie Lamport. 1994. The temporal logic of actions. ACM Trans. Program. Lang. Syst. 16, 3 (May 1994), 872–923. https://doi.org/10.1145/177492.177726

<a id="8">[8]</a> Edward A. Lee. 2018. Modeling in engineering and science. Commun. ACM 62, 1 (January 2019), 35–36. https://doi.org/10.1145/3231590.

<a id="9">[9]</a> Raymond D. Bradley, Norman Swartz, Possible Worlds – An Introduction to Logic and its Philosophy, Hackett Publishing (1979).

<a id="10">[10]</a> Carmen Torres Lopez, Robbert Gurdeep Singh, Stefan Marr, Elisa Gonzalez Boix, and Christophe Scholliers. Multiverse Debugging: Non-Deterministic Debugging for Non-Deterministic Programs (Brave New Idea Paper). In 33rd European Conference on Object-Oriented Programming (ECOOP 2019). Leibniz International Proceedings in Informatics (LIPIcs), Volume 134, pp. 27:1-27:30, Schloss Dagstuhl – Leibniz-Zentrum für Informatik (2019) https://doi.org/10.4230/LIPIcs.ECOOP.2019.27

<a id="11">[11]</a> Matthias Pasquier, **Ciprian Teodorov**, Frédéric Jouault , Matthias Brun , Luka Le Roux. Temporal Breakpoints for Multiverse Debugging. Software Language Engineering 2023, Oct 2023, Lisbonne, Portugal.

<a id="12">[12]</a> Matthias Pasquier, **Ciprian Teodorov**, Frédéric Jouault , Matthias Brun , Luka Le Roux. Practical multiverse debugging through user-defined reductions. MODELS '22: ACM/IEEE 25th International Conference on Model Driven Engineering Languages and Systems, Oct 2022, Montreal Quebec Canada, Canada. pp.87-97, ⟨10.1145/3550355.3552447⟩.

<a id="13">[13]</a> Matthias Pasquier, **Ciprian Teodorov**, Frédéric Jouault , Matthias Brun , Loïc Lagadec. Debugging Paxos in the UML Multiverse. MODELS-C/MoDeVVa, Oct 2023, Västerås, Sweden.

<a id="14">[14]</a> Radek Pelanek. Reduction and Abstraction Techniques for Model Checking. Ph.D. Thesis, Masaryk University, 2006.
