---
layout: post
title: A Typeclass for Simple FIFO Queues
date: 2022-01-25 20:00:00
description: an example of a blog post with some code
tags: lean3
categories: formal
published: true
---

In this post I want to cover a typeclass definition for a *simple queue*.
A *simple queue* is an unbounded data structure that maintains a collection of elements of an arbitrary type ```α : Type u```) in a sequence. 
From a queue we can only retrieve the element at the *front* and verify it is *empty*.
The queue can be modified either by adding elements at the tail or by removing elements at the *front*.

The list of operations is:

- `empty: Q α`              -- create an empty queue
- `is_empty: Q α → bool`    -- check if a queue is empty
- `front: Q α → option α`   -- retrieve/peek the front element
- `enqueue: α → Q α → Q α`  -- add an element at the end of the queue
- `dequeue: Q α → Q α`      -- remove the element at the front

An implementation of these operations is correct with respect of the simple Queue if the following equations are true:

An empty queue is_empty

[e₁] `is_empty empty = tt`
   
A non-empty queue ¬is_empty

[e₂] `∀ x Q₀, is_empty (enqueue x Q₀) = ff`
   
An empty queue doesn't have a front

[e₃] `front empty = none`

A non-empty queue has a front

[e₄] `∀ x Q₀,  is_empty Q₀ → front (enqueue x Q₀) = some x`

Front is not changed by an insertion in a non-empty queue

[e₅] `∀ x Q₀, ¬is_empty Q₀ → front (enqueue x Q₀) = front Q₀`

Dequeue from an empty queue has no effect

[e₆] `dequeue empty = empty`

Removing an element from an one element queue, leaves the queue empty

[e₇] `∀ x Q₀, is_empty Q₀ → dequeue (enqueue x Q₀) = empty`

Dequeue enqueue order unimportant for a non-empty queue

[e₈] `∀ x Q₀, ¬is_empty Q₀ → dequeue (enqueue x Q₀) = enqueue x (dequeue Q₀)`

In [lean 3](https://leanprover.github.io) the simple queue can be captured through an Typeclass as follows:

```Lean
class IQueue (α : Type u) (Q : Type u → Type u) :=
  --!`queue operations`--
  (empty:     Q α             )
  (is_empty:  Q α → bool      )
  (front:     Q α → option α  )
  (enqueue:     α → Q α → Q α )
  (dequeue:   Q α → Q α       )
  --!`queue contract`--
   
  (e₁ : is_empty empty = tt)
  (e₂ : ∀ x Q₀, is_empty (enqueue x Q₀) = ff)
  (e₃ : front empty = none)
  (e₄ : ∀ x Q₀,  is_empty Q₀ → front (enqueue x Q₀) = some x)
  (e₅ : ∀ x Q₀, ¬is_empty Q₀ → front (enqueue x Q₀) = front Q₀)
  (e₆ : dequeue empty = empty)
  (e₇ : ∀ x Q₀, is_empty Q₀ → dequeue (enqueue x Q₀) = empty)
  (e₈ : ∀ x Q₀, ¬is_empty Q₀ → dequeue (enqueue x Q₀) = enqueue x (dequeue Q₀))
```
