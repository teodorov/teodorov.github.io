---
layout: post
title: Execution Sequencing based on the G∀min∃ SLI
description: a brief discussion on impacts of the G∀min∃ SLI on the language execution
tags: ["operational semantics", "semantics", "executable models"]
categories: ["research", "semantics"]
published: false
---

In a previous post I have discussed the **G∀min∃ Semantic Language Interface (SLI)**, which offers the capacity to capture any operational semantics while exposing the non-determinism. Here we will look at how we can use the Semantic Language Interface for language execution.

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

The Sequencer operates by first selecting an initial configuration from the set defined by ```sli.initial```, which serves as the starting point for the execution sequence. It then enters a loop that continues as long as the current configuration is not ```NULL```. During each iteration of the loop, the Sequencer processes the current configuration by randomly selecting an action from the set of available actions for that configuration using ```sli.actions(current).any```. This selection leads the Sequencer down one arbitrary path through the state space for that particular execution. If no actions are available, the loop terminates; otherwise, the chosen action is executed, updating the current configuration to one of the new configurations that result from the execution of the action (as specified by ```current = sli.execute(action, current).any```). 

## Deterministic Execution

When the SLI exposes deterministic semantics characterized by: ```∀ a c, |initial| ≤ 1 ∧ |actions c| ≤ 1 ∧ |execute a c| ≤ 1```, the behavior of the Sequencer exposes the unique execution path through the linear state space.

## Condition for Achieving a Random Walk

To transform the Sequencer's execution into a random walk, the following conditions must be met:
- **Multiple Actions Available**: The SLI must allow for multiple actions to be available from a single configuration. This non-determinism provides various pathways to explore.
- **Random Action Selection**: The action selection process must be randomized. Instead of selecting just any action, the Sequencer should uniformly choose from the available actions, giving each action an equal probability of being selected.
- **Multiple Resulting Configurations**: The execution of an action should lead to various potential resulting configurations. This variety allows for a broader exploration of the state space and enables the system to "wander" through its configurations.

To explore various paths, the Sequencer would need to be executed multiple times, each time potentially selecting different actions and following different trajectories through the state space.

## Making the choices more explicit

```scala
deterministic_semantics(C A) ≜
    initial: Option C              //the set of initial configurations
    actions: C → Option A          //the set of actions executable from a configuration
    execute: A → C → Option C      //execute one action in one configuration
```

```scala
determinize(o, configurationPolicy, actionPolicy) 
    def initial 
        configurationPolicy(o.initial)
    def actions
        actionPolicy(c, o.actions)
    def execute
        configurationPolicy(o.execute a c)
```

```scala
deterministic_sequencer(sem: DeterministicSemantics)
    current = sem.initial
    while current != none
        action = sem.action current
        if (action == none) break;
        current = sem.execute(action, current)
```

```scala
def run(sem: Semantics):
    dsem = determinize(sem, cpolicy, apolicy)
    deterministic_sequencer(dsem)
```

```scala
def any_policy(x: set X):
    x.any

def first_policy(x: set X):
    x.first

def random_policy(x: set X):
    x.pick_random(rnd)
```