# Graph Traversal

**Principles**:

- Isolate the algorithms from the data structures they operate on.
- Explicitly state the hypotheses under which an algorithm works. And build up bridges toward satisfying those hypotheses.


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

