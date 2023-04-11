---
layout: post
title: 'From Zero to Model-Checking'
description: Building a language-independent model-checker from scratch.
tags: z2mc
categories: formal
published: true
comments: true
---

***...The makers make...*

In this series, we will look at incrementally building a temporal logic model-checker from scratch.
This is a personal journey meant to show u the maker's way.

- The scientific literature is rich, I won't be exhaustive.  
- I'm going for intuition more than theory, but hopefully, the theory gets more accessible afterward.

We will see:

- Algorithms
  - Traversal
  - Cycle detection
- Abstractions / Models
  - Meta-abstractions
  - User-facing abstractions: Languages
- Examples

The plan is:

1. [A] Graph **Traversals** -- [M] Explicit graph
   1. DFS
   2. Iterative
   3. OnEntry callback --> see another blog entry for a more generic version
   4. Independent of the model `roots(); next()`
2. [E] Hanoi & Counter-example
3. [M] **STR** & Not happy with next -> guard-action language
4. Alice & Bob: exclusion && deadlock. **Present-aware (predicate)** verification.
5. [M] **iSTR** & StepSynchronous composition operator
6. [E] Safety verification -- **Past-aware** verification.
7. **[M] Regular expressions derivatives as iSTR [bonus]
8. [A] Büchi acceptance cycle detection
   1. Simple nested-dfs algorithm

9. [E] Liveness verification -- **Future-aware** verification.
10. [M] LTL to Büchi via an external tool

<hr>
