---
layout: post
title: Execution Sequencing based on the G∀min∃ SLI
description: a brief discussion on impacts of the G∀min∃ SLI on the language execution
tags: ["operational semantics", "semantics", "executable models"]
categories: ["research", "semantics"]
published: true
---

In a [previous post](../gamine_sli) I have discussed the [**G∀min∃ Semantic Language Interface (SLI)**](../gamine_sli), which offers the capacity to capture any operational semantics while exposing the non-determinism. Here we will look at how we can use the Semantic Language Interface for language execution.

## Execution of SLI Semantics with the Sequencer

The G∀min∃ Semantic Language Interface (SLI) employs a Sequencer to navigate through configurations based on defined actions. The execution process is outlined in the following pseudocode:

```scala
Sequencer(sli)
    current = sli.initial.any
    while (current != NULL)
        action = sli.actions(current).any
        if (actions == NULL) break;
        current= sli.execute(action,current).any
```

The Sequencer operates by first (line 2) selecting an initial configuration from the set defined by ```sli.initial```, which serves as the starting point for the execution sequence.

It then enters a loop (line 3) that continues as long as the current configuration is not ```NULL```.

During each iteration of the loop, the Sequencer processes the ```current``` configuration by arbitrarily selecting an action from the set of available actions for that configuration (line 4 -- ```sli.actions(current).any```). This selection leads the Sequencer down one arbitrary path through the state space for that particular execution.

If no actions are available, the loop terminates (line 5); otherwise, the chosen action is executed (line 6 -- ```sli.execute(action,current)```), updating the current configuration one of the new configurations that result from the execution of the action (the choice here is again arbitrary).

## Deterministic Execution

When the SLI exposes a deterministic semantics then the following proposition holds:

```scala
    ∀ a c, 
        |initial| ≤ 1
    ∧   |actions c| ≤ 1
    ∧   |execute a c| ≤ 1
```

There is at most one ```initial``` configuration. For any configuration ```c```, there is at most one action enabled.
The execution in any action ```a``` enabled in a configuration ```c```, there is at most one resulting configuration.

In this case the Sequencer exposes the unique execution path through the linear state space.

**Sidenote**: If for an arbitrary configuration ```c```, the cardinality of ```action c``` is 0, then the configuration ```c``` is a deadlock.
Furthermore, for a configuration ```c```, and the set of actions enabled in ```c```, if the sum of cardinalities of all ```execute aᵢ c``` is 0 then again the configuration c is a deadlock. If, for some ```a```, the cardinality of ```execute a c``` is zero then we say that the action ```a``` was **blocked during execution**.

## Condition for Achieving a Random Walk

As a keen eye might have already noted, in general, the previous Sequencer will not perform a true **random walk**, but will expose only an arbitrary path through the configuration space.

To obtain a random walk, the arbitrary choices need to be replaced by real random selections. That is the choice amongst the configurations and the enables actions should be uniformly distributed, giving each configuration and action an equal probability of being selected. That is not necessarily the case for the previous Sequencer, as it might, for instance, always choose the first configuration and/or enabled action.

If the selection is truly random, then it offers the variety needed for a broader exploration of the state space and enables the execution to "wander" through the configurations space.

Note also, that to explore various paths, the Sequencer would need to be executed multiple times, each time potentially selecting different actions and following different trajectories through the state space.

## Making the choices more explicit

To render the setup more generic, it will be nice to make the choices more explicit. To achieve that we will extract the configuration and action selection in a ```determinization``` operator, that itself is a SLI (in general). To be even finer we will specialize the SLI semantics to encode deterministic semantics, and the ```determinization``` operator will then be able to expose a deterministic semantics, that embeds the proof of determinism syntactically.

Here is the definition of deterministic specialization of an SLI semantics:

```scala
deterministic_semantics(C A) ≜
    initial: Option C              //the set of initial configurations
    actions: C → Option A          //the set of actions executable from a configuration
    execute: A → C → Option C      //execute one action in one configuration
```

The ```determinize``` operator takes any subject semantics ```s``` as input as well as two choice policies, one for configurations and another one for actions. And implements the three functions required by the deterministic_semantics interface, as follows:

```scala
determinize(s, configurationPolicy, actionPolicy) 
    def initial 
        configurationPolicy(s.initial)
    def actions
        actionPolicy(c, s.actions)
    def execute
        configurationPolicy(s.execute a c)
```

With these components available, we can revisit the previous Sequencer definition, and specialize it to the deterministic semantics, as follows:

```scala
deterministic_sequencer(sem: DeterministicSemantics)
    current = sem.initial
    while current != none
        action = sem.action current
        if (action == none) break;
        current = sem.execute(action, current)
```

To ```run``` an arbitrary subject semantics ```s``` we only have to feed it through the ```determinize``` semantic operator along with the selection policies. Then, to execute, we can apply the ```deterministic_sequencer``` sequencer to the result of ```determinize``` (that lazily encodes a deterministic interpretation of the subject semantics). The following pseudocode illustrates these connections:

```scala
def run(sem: Semantics):
    dsem = determinize(sem, cpolicy, apolicy)
    deterministic_sequencer(dsem)
```

For example, the following lines encode three selection policies:

```scala
def any_policy(x: set X):
    x.any

def first_policy(x: set X):
    x.first

def random_policy(x: set X):
    x.pick_random(rnd)
```

where:

- ```any_policy```, which, if applied, provides the same results as the initial Sequencer.
- ```first_policy```, which, if applied, always chooses the first element amongst the configuration or actions.
- ```random_policy```, which, if applied, provides us with a random walk.
