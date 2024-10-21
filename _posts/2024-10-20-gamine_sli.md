---
layout: post
title: G∀min∃ Semantic Language Interface
description: a brief introduction to the G∀min∃ Semantic Language Interface
tags: ["operational semantics", "semantics", "executable models"]
categories: ["research", "semantics"]
---

<style>body {text-align: justify}</style>

The G∀min∃ Semantic Language Interface (SLI) is a framework designed to bridge the gap between executable specifications and behavior analysis tools. It captures the operational semantics of programming languages, called subject language in the following. Two key particularities of the SLI are:
- **exposes all non-determinism** that might be present in the subject language; 
- requires the definition of a **step evaluation** function, used to query the execution steps based on a *diagnosis language*.

```scala
SLI ≜
    semantics(C A) ≜
        initial: set C              //the set of initial configurations
        actions: C → set A          //the set of actions executable from a configuration
        execute: A → C → set C      //execute one action in one configuration
    evaluate: E → (C x A x C) → V   // questions on steps
    reduce: R → C → ⍺               // configuration reductions
    π (C A V ⍺ T) ≜ ⋯               // projections of the semantical entities
```

 Let’s explore the key components of the SLI as defined:

## Semantics Definition

At the heart of the SLI lies the subject language semantics, which are captured through 3 functions:

```scala
semantics (C A) ≜
    initial: set C
    actions: C → set A
    execute: A → C → set C
```
where:
- ```C```: is a type capturing the semantic *configurations* (the execution state) of the subject language;
- ```A```: is an *action* type, that classifies all the transition rules of the underlying semantics. In general, an action can be thought as a function from configurations to sets of configurations ```action: C → set C```; 
- ```initial: set C```: This function defines a set of initial configurations from which the system can start. Allowing multiple initial configurations, allow to capture the *initial non-determinism* that might be present in the subject language. If the subject language does not have *initial non-determinism* one can always return a singleton.
- ```actions: C → set A```: This mapping relates each configuration to a set of executable actions, the set of functions ```C → set C``` that can be executed in a configuration ```c ∈ C```. Allowing multiple actions to be enabled in a configuration, allows capturing the potential *action non-determinism* of the subject language. This is typically the case for concurrent languages, where two threads (actors, state-machines) have enabled actions in a given configuration (execution state). A singleton can be returned, when only one action is available;
- ```execute: A → C → set C```: This functions executes an action ```a ∈ A``` in a specific configuration to obtain the set of resulting configurations. *Execution non-determinism* is captured by the production of multiple configurations during the action execution. This typically arises when the subject language semantics choses to allow non-deterministic actions (rules). While in principle it is possible to flatten *execution non-determinism* to *action non-determinism*, it is sometimes advantageous for a subject language semantics to hide some low-level operational steps in the action functions.

## Step Evaluation

The execution of a subject language semantics, captured through the SLI semantic functions, gives rise to **execution steps**. An **execution step** is a triplet (c₁, a, c₂) from the ternary relation ```Steps ⊆ (C x A x C)``` of execution steps allowed by the semantics. The steps are usually not explicitly captured by a specification (the exception being raw graphs, in [TGF](https://en.wikipedia.org/wiki/Trivial_Graph_Format) format for instance), but they arise during the execution of the semantics. 

The SLI proposes to use an ```evaluate: E → (C x A x C) → V``` function on *execution steps*, to isolate the language specific encoding of the configurations and actions from the tools needing to reason about the execution of a semantics. This function hides the implementation details by offering the means to answer queries on an *execution step* through subject-language specific expressions, in a **diagnosis language**. The ```evaluate``` function evaluates an expression e ∈ E in the context of an *execution step* (c₁, a, c₂) to produce a value v ∈ V, where ```V``` is a type classifying the set of values used in the subject-language semantics.

Note, however, that the values from ```V``` are specific to the subject-language semantics, and that usage-specific transformations might be needed to convert these values to the domain of values needed by the caller of the ```evaluate``` function.

The reader, can think of this evaluation function as an extension of an typical ```eval``` function, pioneered by LISP and present in a number of programming languages today. This extension of the typical ```eval``` is necessary to allow richer *diagnosis queries* without the need to flatten the state-space to a lower-level [Kripke structure]( https://en.wikipedia.org/wiki/Kripke_structure_(model_checking)), which would push the actions, and the valuation of (source, target) predicates from the edges to the target configuration view.

## Reduction

The ```reduce: R → C → ⍺``` function, of the G∀min∃ SLI, simplifies or collapses configurations into a more abstract representation, denoted by ⍺. This capability aids in analyzing the behavior of the system by simplifying the state-representation. This function allows implementing multiple state-space reduction strategies ranging from precise abstractions like symmetry reduction, and predicate abstraction to brutal under-approximations like bitstate hashing and hashcompaction.

## Projections of Semantical Entities

Lastly, the SLI provides a way to project various semantical entities:

```π (C A V ⍺ T)```: This set of functions represent the projections of semantical entities, including configurations (```C```), actions (```A```), evaluation results (```V```), reduced forms (```⍺```). These projections allow users map the language specific values to a target value domain ```T``` either for user consumption (through pretty-printing) or for further processing in the client context (through data transformations).

## Conclusion

The G∀min∃ Semantic Language Interface (SLI) offers a robust framework for modeling operational semantics, making it a powerful tool for analyzing system behavior. By capturing non-determinism and providing structured methods for evaluation and reduction, the SLI enhances the process of formal verification, ultimately contributing to the development of reliable and well-designed systems.

This interface can be viewed as an operational implementation of the more theoretical approach presented in Omnisemantics [[1]](#1). In contrast to this approach, the SLI requires the existence of computable interpretation of the predicates that relate each state to a set of target states. This may seem like a very strong limitation compared to Omnisemantics, but it reflects the constraints imposed on language semantics by execution environments. Another manifestation of this constraint can be found in the context of TLA [[2]](#2), which also imposes the existence of a computable interpretation of predicates to enable the execution, debugging, and model checking of specifications [[3]](#3).


# References

<a id="1">[1]</a> Arthur Charguéraud, Adam Chlipala, Andres Erbsen, and Samuel Gruetter. 2023. Omnisemantics: Smooth Handling of Nondeterminism. ACM Trans. Program. Lang. Syst. 45, 1, Article 5 (March 2023), 43 pages. https://doi.org/10.1145/3579834

<a id="1">[2]</a> Leslie Lamport. 1994. The temporal logic of actions. ACM Trans. Program. Lang. Syst. 16, 3 (May 1994), 872–923. https://doi.org/10.1145/177492.177726

<a id="1">[3]</a> Yuan Yu, Panagiotis Manolios, and Leslie Lamport. 1999. Model Checking TLA+ Specifications. In Proceedings of the 10th IFIP WG 10.5 Advanced Research Working Conference on Correct Hardware Design and Verification Methods (CHARME '99). Springer-Verlag, Berlin, Heidelberg, 54–66.
