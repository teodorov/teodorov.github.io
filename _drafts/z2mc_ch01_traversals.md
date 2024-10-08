---
layout: post
title: 'From Zero to Model-Checking - Traversals'
description: Building a language-independent model-checker from scratch.
tags: z2mc
categories: formal
published: true
comments: true
---

## Foreword

This sequel is intended as a hands-on introduction to formal verification by model-checking (mostly explicit-state), even though a more sophisticated reader might see opportunities for symbolic or mixed explicit-symbolic verification.

After engaging with the content here a **reader interested in using formal verification** shall have the necessary background to understand deeply some of the existing model-checking tools: **TLA+**, SPIN, UPPAAL.

After engaging with the content here a **reader working on language design** might be willing to try designing (and implementing) the semantics of the language through the piecewise relation abstraction, which offers a bridge between behavioral language semantics (seen as specifications) and behavioral verification tools.

## Games
[Teaching Model Checking via Games and Puzzles](https://fmfun.github.io/Papers-2019/Schlingloff.pdf)
[Model Checking Games and a Genome Sequence Search](https://iopscience.iop.org/article/10.1088/1742-6596/1679/3/032020)
[Principles of Model Checking: Regular Properties](https://www.cs.colostate.edu/~france/CS614/Slides/ModelCheckingChapter4.pdf)

## Graph Traversal

In this chapter, we will introduce graphs and a graph traversal algorithm.
We will keep it as simple as possible since the concepts here are well-known with rich literature.

![Progress Overview](/assets/img/z2mc/overview_01.png){: width="400" style="display:block; margin-left:auto; margin-right:auto"}



1. Graph and Graph Representation
2. [A] Graph **Traversals** -- [M] Explicit graph
3. BFS
4. Iterative
5. Independent of the model `roots(); next()`
6. OnEntry callback --> See another blog entry for a more generic version

## A Rooted Graph and an Explicit Graph Data Structure

A graph is defined as a tuple `G=(V, E)` where `V` is an arbitrary set of vertices, and `E` is a binary relation between the elements in `V`.
For technical reasons, that will become apparent later, we will allow both self-loops and duplicate edges.
For our purposes, we enrich the previous graph definition with `R ⊆ V` the multiset of roots of the graph. The roots of a graph are the vertices that provide access to the connected components of the graph. Sometimes `R` can be just a set, however, the more relaxed multiset concept allows for simpler, less constrained implementations (a list of nodes for instance).
Thus a rooted graph `RG` is defined as `RG=(V, E, R)`.

### Dictionary-based Rooted Graph

To make it simple, we will represent the rooted graph structure by encoding the graph as an adjacency list using a [dictionary](https://docs.python.org/3.11/library/stdtypes.html#mapping-types-dict).
The keys of the dictionary will be the vertices of the graph. To each vertex we will associate a [list](https://docs.python.org/3.11/library/stdtypes.html#list) of nodes, which are directly reachable from the vertex.

```python
graph = {
  1: [2, 3],
  2: [3, 4]
}
```

To obtain the rooted graph structure we complement the dictionary with another list of vertices, the roots.

```python
roots = [1, 2].
```

The rooted graph structure is then obtained by encapsulating these to fields in an object. Let's first define a DictionaryRootedGraph class, which allows building the objects that we need.

```python
class DictionaryRootedGraph:
  def __init__(self, graph, roots):
    self.graph = graph
    self.roots = roots
```

With this, we already have a small domain-specific language (embedded in Python), which allows us to build rooted graphs. Let's see an example

```python
graph1 = DictionaryRootedGraph(
    {
        1: [2, 3],
        2: [3, 4]
    },
    [1, 3]
)
```

## Breadth-First Traversal

![Traversal Concepts](/assets/img/z2mc/traversal_concepts.png){: width="400" style="display:block; margin-left:auto; margin-right:auto"}

![BreadthFirstTraversal Action](/assets/img/z2mc/breadthFirstTraversal_action.png){: width="200" style="display:block; margin-left:auto; margin-right:auto"}

```scala
breadthFirstTraversal(rootedGraph):
    I = True
    K = ∅
    F = []
    WHILE F ≠ ∅ ∨ I DO
        N = IF I THEN rootedGraph.roots ELSE rootedGraph.graph[F.dequeue()]
        I = False
        FORALL n ∈ N
            IF n ∉ K THEN 
                K = K ∪ {n} 
                F = F ∪ {n}
    RETURN K
```

**NOTE:** For implementing a set in Python use the [set data structure](https://docs.python.org/3.11/library/stdtypes.html#set-types-set-frozenset).

**NOTE:** For implementing the FIFO queue in Python use the [deque (**D**ouble-**E**nded **Que**ue) data structure](https://docs.python.org/3.11/library/collections.html#collections.deque) data structure. The deque is a list-like sequence optimized for data access near its endpoints.

Implement this algorithm in Python, and test it. Don't forget to use the debugger to understand what is happening.
Amongst your tests think of edge cases for instance:

- `breadthFirstTraversal(DictionaryRootedGraph())`
- `breadthFirstTraversal(DictionaryRootedGraph({}, nil))`
- `breadthFirstTraversal(DictionaryRootedGraph(nil, []))`
- `breadthFirstTraversal(DictionaryRootedGraph({1: nil}, []))`

Fix the **algorithm** to pass all tests.

### Abstracting Over the Graph

Why is the algorithm polluted with the implementation details of the `DictionaryRootedGraph`?

The key idea here is to look at the algorithm implementation and try to abstract over the queries on the `DictionaryRootedGraph` data structure by introducing methods, which will hide the data structure-specific details. We need to analyze the algorithm to understand what queries it performs on our data structure. In our case, the answer is rather simple since our `breadthFirstTraversal` uses the rootedGraph only at line 6, where performs two queries:

1. If we are at the beginning (during the initialization phase), we need the **roots** of the graph - our entries in the graph.
2. In the subsequent steps, for any vertex `v` obtained from the frontier (`F.dequeue()`) we need to obtain its **neighbors** (the vertices that we get by following the edges starting at `v`).

Let's add these two methods to the `DictionaryRootedGraph` class, and then update the `breadthFirstTraversal` to use these methods, instead of directly using instance variable accesses.

```python
class DictionaryRootedGraph:
    def __init__(self, graph, roots):
        self._graph = graph
        self._roots = roots

    def roots(self):
        return self._roots

    def neighbors(self, vertex):
        return self._graph[vertex]
```

#### Different Data Structures

Let's say now that we don't like this rooted graph implementation because I have better data-structure implementations:

- for dense graphs (graphs with many edges) a Matrix (a bitmap) representation will be more compact.
- for large graphs with few edges, a sparse matrix encoding of the graph is more compact.
- storing the edges explicitly in a list is easy to parse.

To allow our algorithm to work with different encodings of the graph 

Based on this analysis, we can introduce the *abstract* concept of `RootedGraph` that will encapsulate (group together) these two functions.

```python
class RootedGraph:
    def roots(self): pass
    def neighbors(self, vertex): pass
```

**NOTE:** By inheriting from ABC and adding the `@abstractmethod` annotation we can ensure that the RootedGraph abstract class cannot be instantiated directly.

Python uses the duck-typing principle: *"If it walks like a duck and it quacks like a duck, then it must be a duck"*.
Following this principle, in our case, that means that any object that implements the `roots(self)` and `next(self, vertex)` methods are considered **implicitly** as instances of the `RootedGraph` abstract class. Furthermore, we do not need to define the RootedGraph abstract class at all. Nevertheless doing so greatly improves the readability of the code, as the abstract class clearly defines the public API of any `RootedGraph` instance. To be even more explicit we can explicitly define the DictionaryRootedGraph class to be an instance of the `RootedGraph` abstract class.

```python
class DictionaryRootedGraph(RootedGraph):
```

The `EdgeListRootedGraph` is a different data structure that can represent the graph with a simple list of edges. The edges in the list are encoded as a Python [tuple](https://docs.python.org/3.11/library/stdtypes.html#tuple) `(source, destination)`, where the `source` object represents the source vertex of the edge and the `destination` object represents the target vertex of the edge.
Besides the edge list, our `RootedGraph`` needs the roots of the graph, we will represent them as a list as earlier.

Create the `EdgeListRootedGraph`

Here is a simple graph

```python
graph = EdgeListRootedGraph(
    [
        (1, 2),
        (1, 3),
        (2, 3),
        (2, 4)
    ],
    [1,3]
)
```

What do we need to do so that we can use our `BFS` algorithm with this new data structure?
What are the differences between the `DictionaryRootedGraph` and the `EdgeListRootedGraph`?

The `EdgeListRootedGraph` instances are easier to create from a file containing the roots and the edge list.

```python
1 3 #roots
1 2
1 3
2 3
2 4
```

Write a `reader` factory that creates an `EdgeListRootedGraph` from such a file.

![RootedGraph class hierarchy](/assets/img/z2mc/rooted_graph.png){: width="400" style="display:block; margin-left:auto; margin-right:auto"}

#### More Generic Vertex Types

Up until now, we have used only integer objects to represent the graph vertices. But in the long run, we will want to handle generic objects.

Try creating a graph of `Persons(first_name, family_name)` identified by their name. The relations in the graph represent that a `Person` `knows` another `Person`.
Run the previous reachability algorithm on this graph. If we have a relation `Person(a, b) -> Person(a, b)` what is the result of the reachability query? Why do we have `Person(a, b)` twice in the result? How can we fix that?

Object **Identity** versus object **Equality**, and the set implementation in Python.

To solve this problem we need to enrich our objects with a domain-specific notion of equality. What makes two `Person` instances equal?

```python
class Person:
    ...
    def __eq__(self, other):
        ...
    def __hash__(self):
        ...
```

### Breadth-First Search

![BreadthFirstSearch Action](/assets/img/z2mc/breadthFirstSearch_action.png){: width="200" style="display:block; margin-left:auto; margin-right:auto"}

```scala
breadthFirstSearch(graph, on_entry, opaque):
    I = True
    K = ∅
    F = []
    WHILE F ≠ ∅ ∨ I DO
        N = IF I THEN graph.roots() ELSE graph.neighbours(F.dequeue())
        I = False
        FORALL n ∈ N
            IF n ∉ K THEN
                terminate = on_entry(n, opaque)
                IF terminate THEN
                    RETURN (opaque, K)        
                K = K ∪ {n} 
                F = F ∪ {n}
    RETURN (opaque, K)
```

<hr>

## Intensional Graphs: Hanoi Example

![Progress Overview](/assets/img/z2mc/overview_01_hanoi.png){: width="400" style="display:block; margin-left:auto; margin-right:auto"}

Up until now, we have used only extensional graph representations. But there is no fundamental limit precluding us from using also intensional graph representations. These are graphs that are defined by giving a procedure that can be followed to obtain the graph dynamically on request. At this point, we will start to see the power of our query-based graph manipulations. Here instead of enumerating all the vertices and edges of the graph, we will provide **smart** implementation of the `roots` and `neighbors` methods to generate *special* graphs programmatically that will then be analyzed by our algorithms.

To make this section a bit concrete we will use the Tower of Hanoi game. The aim is to encode the game state as graph vertices and the game actions, that link two game states, as edges. After encoding the game rules we will look for the solution by simply calling our breadth-first search algorithm.

```python
class Hanoi(TransitionRelation, AcceptingSet):
    def __init__(self, nb_stacks=3, nb_disks=3):
        self.nb_stacks = nb_stacks
        self.nb_disks = nb_disks
    
    def roots(self):
        return [HanoiConfiguration(self.nb_stacks, self.nb_disks)]

    def neigbours(self, configuration):
        neighbours = []
        for i, source in enumerate(configuration.stacks):
            if not len(source):
                continue
            disk = source[-1]
            for j, target in enumerate(configuration.stacks):
                if len(target) == 0 or disk < target[-1]:
                    neighbour = copy.deepcopy(configuration)
                    neighbour.stacks[i].pop() if len(source) else False
                    neighbour.stacks[j].append(disk)
                    neighbours.append(neighbour)
        return neighbours

    def solution(self, configuration):
        for i, stack in enumerate(configuration.stacks):
            if i < (self.nb_stacks-1) and len(stack):
                return False
            else:
                if i < (self.nb_stacks-1):
                    continue
                else:
                    print(f'i={i}')
                    return all(stack[j] >= stack[j+1] for j in range(len(stack)-1))
```


**Practical situation:** Going beyond simple search. [Giddy, Jonathan P., and Reihaneh Safavi-Naini. "Automated cryptanalysis of transposition ciphers." The Computer Journal 37.5 (1994): 429-436.](https://academic.oup.com/comjnl/article-pdf/37/5/429/988918/370429.pdf)

This is great, but, how did we get to this solution?

<hr>

## Building the Trace

![Progress Overview](/assets/img/z2mc/overview_02.png){: width="400" style="display:block; margin-left:auto; margin-right:auto"}
![ParentTracer is a RootedGraph](/assets/img/z2mc/rooted_graph_02.png){: width="400" style="display:block; margin-left:auto; margin-right:auto"}

```python
class ParentTracer(RootedGraph):

    def __init__(self, operand, parents=None):
        self.operand = operand
        self.parents = {} if parents is None else parents

    def roots(self):
        neighbours = self.operand.roots()
        for n in neighbours:
            self.parents[n] = []
        return neighbours

    def neighbors(self, vertex):
        neighbours = self.operand.neighbors(vertex)
        for n in neighbours:
            if self.parents.get(n) is None:
                self.parents[n] = [vertex]
        return neighbours
```

<hr>

## Piecewise Relations

![Progress Overview](/assets/img/z2mc/overview_03.png){: width="400" style="display:block; margin-left:auto; margin-right:auto"}

The intensional graph description used in the previous section allowed us to economically encode a whole family of domain-specific graphs (ie. The graphs representing the valid moves allowed by the Tower of Hanoi puzzle).
There are two downsides with this approach that we want to emphasize in this section:

1. The rooted graph abstraction that we have used **abstracts over the graph edges**, which leads to an **imprecise encoding** of graphs with edge annotations. Different workarounds are still possible:
   1. define another function `edge_data(source, target)->maybe(annotation)` that retrieves the annotation from any pair of related vertices. But this approach precludes multiple edges between two vertices (a,b,x) (a,b,y).
   2. encode the graph of interest differently, ie push the edge annotation to the target vertex. But this can result in an exponential blowup in the resulting graph.
2. The implementation of the `neighbours` function in the Tower of Hanoi example has **multiple responsibilities**:
   1. *detect if a disk move is possible*
   2. *create the target configuration/vertex*. Typically it is cheaper to create the target configuration by 
      1. *copying* the source configuration
      2. *changing* it according to the move considered

To address these limitations we will first decompose the `neighbours` function in two parts:

1. an `enabled: C → set A` function that enables to detect the transitions (edges) allowed in the current configuration.
2. an `execute: A → C → set C` function that interprets an enabled transition to obtain the target configuration.

This decomposition leads us to an abstraction closely resemblinng **piecewise functions**. In mathematics piecewise functions allow the definition of functions by parts, where each part is a function enabled under a specific condition. To ensure that the resulting **piecewise** definition is still a function the *set of conditions need to be mutually exclusive*. We will **not enforce this exclusivity constraint** which leads to the more generic **piecewise relation** abstraction. Furthermore, we also relax the **functional** constraint on the parts too. Thus we get to a very general definition of a **piecewise relation**, where each part itself is a relation, potentially defined piecewise itself.

**Important:** Please note that both `enabled` and `execute` are functions with sets as codomains.

Note that we can also define the predicate `enabled: A → C → bool`, which returns true if an action `A` is enabled in the configuration `C`.

To simplify the manipulations these functions will be encapsulated in a new abstraction, which we name the SemanticTransitionRelation (STR).

**side question:** Should we use RootedPiecewiseRelation instead of SemanticTransitionRelation?

```python
class STR:
    def roots(self): pass
    def enabled(self, configuration): pass
    def execute(self, action, configuration): pass
```

To be able to reuse the algorithmic backend that we have already created, we need to somehow convert a STR to an RG abstraction. To achieve this, one approach is based on the [*Adapter design pattern*](https://en.wikipedia.org/wiki/Adapter_pattern). The **adapter**, named `STR2RG`, is another specialization of our `RootedGraph` abstraction that implements the RG API based on the STR API as follows:

```python
class STR2RG:
    def __init__(self, anSTR):
        self.str = anSTR
    def roots(self):
        return self.str.roots()
    def neighbours(self, v):
        enabled_actions = self.str.enabled(v)
        targets = []
        for a in enabled_actions:
            targets += self.str.execute(a, v)
        return targets
```

With this setup we can already model interesting systems. Consider for instance the following STR-based intensional graph description:

```python
    class ExampleSTR:
        def roots(self):
            return [0]
        def enabled(self, configuration):
            x = configuration
            actions = []
            if (x >= -2):
                actions += [lambda x: [1]]
            if (x > 1):
                actions += [lambda x: [x]]
            if (x >= 0):
                actions += [lambda x: [-x] if x < 5 else [-x, x-1]]
            return actions
        def execute(self, action, configuration):
            return action(configuration)
```

Note that in the previous examples, we compute the new configuration (`x'`) based on the previous value of x.

```scala
var x
init ≜ 0
next ≜ x' = 1      if x >= -2
    ∨   x' = x      if x >   1
    ∨   (    x' = -x     if true
        ∨   x' = x-1    if x >   5) if x >= 0
spec ≜ init ∧ ☐next
```

**Interesting side-note:** Following the syntax 'idea' in the previous listing we can get to the TLA+ syntax rather naturally.
Existential quantification `∃ x ∈ S, condition` ↦ S detect: λ x, condition

One simple yet interesting specification is a one-bit clock, which alternates forever between 0 and 1. 

```scala
var clock
init ≜ clock = 0 
     ∨ clock = 1
tick ≜ clock' = 1 if clock = 0
     ∨ clock' = 0 if clock = 1
spec ≜ init ∧ ☐tick
```

`Flag Alice-Bob` Another more interesting example will be the following specification trying to solve the binary mutual exclusion problem between Alice and Bob.

```scala
var a, b
init ≜ a = I ∧ b = I
alice ≜ a' = W if a = I
    ∨ a' = C if a = W ∧ b = I
    ∨ a' = I if a = C

bob ≜ b' = W if b = I
    ∨ b' = C if b = W ∧ a = I
    ∨ b' = I if b = C

spec = init ∧ ☐(alice ∨ bob)
```

**Interesting side-note:** As long as we are not concerned by specification refinement it is OK to disable stuttering: completely for safety verification and partially for liveness (stutter only on deadlock).
With stuttering disabled the one-bit clock specification will disallow the behaviors where the clock never ticks.
```
0 → 0 → 0 → 0 → 0 → ...
1 → 1 → 1 → 1 → 1 → ...
```

### Exercises

**Exercise 1:** Encode the previous specifications using the STR (like the ExampleSTR).

**Exercise 2:** Connect the STR2RG, ParentTracer and Reachability algorithm to implement a simple predicate verification setup.

**Exercise 3:** Use the verification setup to verify the mutual exclusion property `[]! (a = C ∧ b = C)` on the following specification (`Simple Alice-Bob`):

```scala
var a, b
init ≜ a = I ∧ b = I
alice ≜ a' = C if a = I
    ∨ a' = I if a = C

bob ≜ b' = C if b = I
    ∨ b' = I if b = C

spec = init ∧ ☐(alice ∨ bob)
```

**Exercise 4:** Use the verification setup to verify that mutual exclusion property on the `Flag Alice-Bob` specification.

**Exercise 5:** Verify that `Simple Alice-Bob` and `Flag Alice-Bob` are deadlock-free. How can we encode the deadlock-freedom property?

<hr>

## A Simple Python eDSL for Piecewise Relations

![Progress Overview](/assets/img/z2mc/overview_04.png){: width="400" style="display:block; margin-left:auto; margin-right:auto"}

Implementing the STR directly works, but looking at our last specifications using the made-up language we see that there is a certain syntactical pollution. To address this issue in this chapter we will create a simple **e**mbedded **D**omain-**S**pecific **L**anguage (eDSL) in Python.

**Note:** Creating an external DSL for our specification language is outside the scope of this work. The interested reader is nevertheless encouraged to try. Such a reader is encouraged to study the TLA+ syntax to find other (rather inspired) operators, which can further simplify the syntax. Readers keen on the graphical syntax could study UML statecharts in conjunction with the AnimUML specification and verification environment to get another more graphical perspective.

Our eDSL will be named **Soup**, because it will encode the specifications as a `soup` of `pieces` necessary to encode the piecewise relations.

The first ingredient, which will encode the valuation of the variables used in a specification is identical to the `Configuration` concept that we have used for generalizing the `Vertex` types in the graph abstraction.

For the one-bit clock example we will have:

```python
class OneBitClockConfig:
    def __init__(self, value):
        self.clock = value

    def __hash__(self):
        return hash(self.clock)

    def __eq__(self, other):
        if not isinstance(other, OneBitClockConfig):
            return False
        return self.clock == other.clock

    def __repr__(self):
        return f'clock={self.clock}'
```

The `initialization` part of the specification can be decomposed around the disjunctions. Each term in the disjunction will become a unique configuration. Moreover, each such term is required to initialize all the variables. Thus the `initialization` of the one-bit clock will be defined as follows:

```python
init = [OneBitClockConfig(0), OneBitClockConfig(1)]
```

Each piece of the relation will be encoded as two lambdas encapsulated in a `LambdaPiece` object, defined as follows:

```python
class LambdaPiece:
    def __init__(self, name='', guard, generator):
        self.name = name
        self.guard = guard
        self.generator = generator

    def __eq__(self, other):
        if not isinstance(other, LambdaPiece):
            return False
        return self.name == other.name and self.guard == other.guard and self.generator == other.generator
```

For the one-bit clock specification, we get:

```python
toOne  = LambdaPiece('toOne',  lambda c: OneBitClockConfig(1), lambda c: c.clock == 0)
toZero = LambdaPiece('toZero', lambda c: OneBitClockConfig(0), lambda c: c.clock == 1 )
```

The specification is captured in a `Soup` instance, defined as follows:

```python
class Soup:
    def __init__(self, initial=[], pieces=[]):
        self.initial = initial
        self.pieces = pieces

    def add(self, name, guard, generator):
        self.extend(LambdaPiece(name, guard, generator))

    def extend(self, beh):
        if isinstance(beh, LambdaPiece):
            self.pieces.append(beh)
        else:
            self.pieces.extend(beh)
```

For the one-bit clock specification, the soup is:

```python
one_bit_clock_spec = Soup(init, [toOne, toZero])
```

To interpret the soup as a piecewise relation, the next step is to implement the semantics as follows:

```python
class RootedPiecewiseRelationSemantics(SemanticTransitionRelation):
    def __init__(self, soup):
        self.soup = soup

    def roots(self):
        return self.soup.initial

    def enabled(self, configuration):
        return list(filter(lambda ga: ga.guard(configuration), self.soup.pieces))

    def execute(self, action, configuration):
        target = copy.deepcopy(configuration)
        the_output = action.generator(target)
        return the_output
```

Note that in the implementation of the `execute` function we perform a **deepcopy**. Is this necessary? Knowing that the generator lambda produces a new configuration each time. Explain and give an example where this is necessary.

By the way, the one-bit specification can be even shorter:

```python
one_bit_clock_spec = Soup(
    [0, 1],
    [
        LambdaPiece('toOne',  lambda c: 1, lambda c: c == 0),
        LambdaPiece('toZero', lambda c: 0, lambda c: c == 1)
    ]
)
```

Why does it work? Can you explain why we do not *strictly* need a `Configuration` object in this case?

It can be rather similar to the spec in the previous chapter if written as follows:

```python
init = [0, 1]
tick = [
        LambdaPiece(lambda c: 1, lambda c: c == 0),
        LambdaPiece(lambda c: 0, lambda c: c == 1)]
spec = Soup(init, tick)
```

### Exercises

**Exercise 1:** Encode the specifications from the previous chapter using the Soup language.
**Exercise 2:** Create a predicate verification tool for the Soup language.

**Exercise 3:** Verify the mutual exclusion property on the Soup-based `Simple Alice-Bob` specification.

**Exercise 4:** Verify the mutual exclusion property on the Soup-based `Flag Alice-Bob` specification.

**Exercise 5:** Verify that `Simple Alice-Bob` and `Flag Alice-Bob` are deadlock-free.

**Make sure that the results match the ones obtained in the previous chapter**. If they don't match find and fix the bugs.

**Exercise 6:** Encode the Hanoi problem using the Soup language and use the Soup predicate verifier to find the solution.

**Exercise 7:** **TODO:** German traffic light and history management.

<hr>

## More Expressive Properties Through Dependent Semantics

![Progress Overview](/assets/img/z2mc/overview_05.png){: width="400" style="display:block; margin-left:auto; margin-right:auto"}

Until now our verification tasks were limited to predicate verification. To go further we need to extend the expressivity of the "property" language, which was restricted to simple state predicates. To achieve this we will first extend our semantical framework to allow the creation of dependencies between different semantics. The discussion in this chapter is based on the Soup language, which is extended to allow the design of dependent specifications.

One case where dependent semantics can came in handy is specifying the behaviour of a minute clock based on the ticks of the one-bit clock. The minute variable should be incremented on the rising edge of the one-bit clock.

```scala
var minutes
init ≜ minutes ∈ {1..60}             -- note the non-deterministic assignement
tick ≜ minutes' = (minutes + 1) % 60 + 1 if clock = 0 ∧ clock' = 1
spec ≜ init ∧ ☐(tick ∨ minutes' = minutes)
```

![step-dependent behavior](/assets/img/z2mc/dependent_trace_step.png){: style="display:block; margin-left:auto; margin-right:auto"}

Another example is the hour clock based on the minute clock.

```scala
var hour
init ≜ hour ∈ {1..12}             -- note the non-deterministic assignement
tick ≜ hour' = (hour + 1) % 12 + 1 if minutes = 60
spec ≜ init ∧ ☐(tick ∨ hour' = hour)
```

If we are looking at these previous specification they seem incomplete. The minute clock specification defines its behaviour relatively to another behavior, from which it can extract a notion of `clock`. The name `clock` is used in the minute-clock but its behaviour is never defined.

![dependent semantics example](/assets/img/z2mc/dependent_semantics_example.png){: style="display:block; margin-left:auto; margin-right:auto"}

We define a dependent semantics as a semantics that requires some additional input (of type `I`), besides the current configuration (of type `C`), to:

1. decide what is the set of enabled actions. If The `actions` function signature becomes `actions: I → C → set A`.
2. compute the target configuration set, during the execution of an action. The `execute` signature becomes `execute: A → I → C → set C`.

Now that we have an input-dependent semantics, we can define an output producing semantics to improve the symmetry of our design. Such a semantics should produce an output during the execution of a step, in such a way that is possible to connect it to the an input-dependent semantics. To achieve this, we extend the signature of the `execute` function: `execute: A → I → C → set (O × C)`. During the execution of an action an output `O` is produced, besides the new configuration.

With these two ideas our semantically framework evolves, to something very similar to Mealy abstract machines. The execution step is dependent on the current configuration, and the input.  Action execution effectivelly computes the next comfiguration and the output. Thus a step in the semantics state-space becomes:

![io semantics step](/assets/img/z2mc/io_step.png){: style="display:block; margin-left:auto; margin-right:auto"}


```python
class RootedPiecewiseRelationDependentSemantics:

    def __init__(self, soup):
        self.soup = soup

    def roots(self):
        return self.soup.initial

    def enabled(self, input, configuration):
        return list(filter(lambda ga: ga.guard(input, configuration), self.soup.pieces))

    def execute(self, action, input, configuration):
        target = copy.deepcopy(configuration)
        the_output = action.generator(input, target)
        return the_output
```



```python
class ToStepOutputSemantics:

    def __init__(self, subject):
        self.subject = subject

    def roots(self):
        return self.subject.initial

    def enabled(self, configuration):
        return self.subject.enabled

    def execute(self, action, configuration):
        the_targets = self.subject.execute(action, configuration)
        
        return list(map(lambda t: ((configuration, action, t), t), the_targets))
```

<hr>

## Computing the Intersection Between the System and the Property

![Progress Overview](/assets/img/z2mc/overview_06.png){: width="400" style="display:block; margin-left:auto; margin-right:auto"}

### Safety Properties: Looking into the Past

### Theoretical approach

1. Collect the atomic propositions
2. Compute the Kripke structure of the state-space
3. Convert the Kripke structure to NFA.
4. Compose the system NFA with the property NFA

### Let the property compute the Kripke interpretation

1. Convert the state-space to a NFA
2. Compose the system NFA with the property NFA

### Dynamic Composition of the System with the Property

1. Dynamically obtain an NFA interpretation of the system during the composition.

```python
class ConfigurationSynchronousProduct(SemanticTransitionRelation):
    def __init__(self, lhs, rhs):
        self.lhs = lhs
        self.rhs = rhs

    def initial(self):
        return list(map(lambda c: (None, c), self.rhs.initial()))

    def actions(self, source):
        synchronous_actions = []
        lhs_source, rhs_source = source
        if source[0] is None:
            for target in self.lhs.initial():
                self.get_synchronous_actions(target, rhs_source, synchronous_actions)
            return synchronous_actions
        # get all lhs actions
        lhs_actions = self.lhs.actions(lhs_source)
        number_of_actions = len(lhs_actions)
        for lhs_a in lhs_actions:
            _, target = self.lhs.execute(lhs_a, lhs_source)
            if target is None:
                number_of_actions -= 1
            self.get_synchronous_actions(target, rhs_source, synchronous_actions)

        # if number_of_actions == 0:
        #     self.get_synchronous_actions(kripke_source, buchi_source, synchronous_actions)
        return synchronous_actions

    def get_synchronous_actions(self, lhs_config, rhs_config, io_synchronous_actions):
        rhs_actions = self.rhs.actions(lhs_config, rhs_config)
        io_synchronous_actions.extend(map(lambda ra: (lhs_config, ra), rhs_actions))

    def execute(self, action, configuration):
        lhs_target, rhs_action = action
        _, rhs_source = configuration
        return kripke_target, self.rhs.execute(rhs_action, lhs_target, rhs_source)
```

### Step Predicates: Looking at execution steps

Expressing conditions on execution steps expands the possibilities for debugging. First of all, the step breakpoints allow us to reason about the action between the configurations. In their simplest form, they can allow stopping the execution when a named action is reached, `|action("toOne")|`.

Furthermore, the step breakpoints allow reasoning on the delta changes between two consecutive configurations of a behavior (before and after an action). For instance, this will allow us to detect the rising edge of the one-bit clock, `|clock=0 && clock'=1|`.



```python
class StepSynchronousProduct(SemanticTransitionRelation):
    def __init__(self, lhs, rhs):
        self.lhs = lhs
        self.rhs = rhs

    def initial(self):
        initial_configurations = []
        for lc in self.lhs.initial():
            for rc in self.rhs.initial():
                initial_configurations.append((lc, rc))
        return initial_configurations

    def actions(self, configuration):
        synchronous_actions = []
        # get all lhs actions
        lhs_actions = self.lhs.actions(configuration[0])
        number_of_actions = len(lhs_actions)
        for lhs_a in lhs_actions:
            step, target = self.lhs.execute(lhs_a, configuration[0])
            if target is None:
                number_of_actions -= 1
            rhs_actions = self.rhs.actions(step, configuration[1])
            synchronous_actions.extend(map(
                    lambda ra: (step, ra),
                    rhs_actions
                ))

        if number_of_actions == 0:
            step = (configuration[0], StutteringAction.instance(), configuration[0])
            rhs_actions = self.rhs.actions(step, configuration[1])
            synchronous_actions.extend(map(
                lambda ra: (step, ra),
                rhs_actions
            ))
        return synchronous_actions

    def execute(self, action, configuration):
        step = action[0]
        target = self.rhs.execute(action[1], step, configuration[1])
        return step[2], target
```

<hr>

## Nested Reachability for Liveness Verification

![Progress Overview](/assets/img/z2mc/overview_07.png){: width="400" style="display:block; margin-left:auto; margin-right:auto"}

### Liveness Properties: Thinking about the Future

<hr>

## Improving Liveness Verification Performance

![Progress Overview](/assets/img/z2mc/overview_08.png){: width="400" style="display:block; margin-left:auto; margin-right:auto"}

Implement the following state-of-the-art algorithms.

![Buchi Algorithms](/assets/img/z2mc/buchi_algo_hierarchy.svg)

<hr>

## Seeing the Algorithms as Dependent Specifications

![Progress Overview](/assets/img/z2mc/overview_09.png){: width="400" style="display:block; margin-left:auto; margin-right:auto"}

<hr>