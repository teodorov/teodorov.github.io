---
layout: post
title: A Typeclass for Simple FIFO Queues
date: 2022-01-25 20:00:00
description: an example of a blog post with some code
tags: lean3
categories: formal
published: true
---

```Lean
class IQueue (α : Type u) (Q : Type u → Type u) :=
  --!`queue operations`--
  -- create an empty queue
  (empty:     Q α             )
  -- check if a queue is empty
  (is_empty:  Q α → bool      )
  -- retrieve/peek the front element
  (front:     Q α → option α  )
  -- add an element at the end of the queue
  (enqueue:     α → Q α → Q α )
  -- remove the element at the front
  (dequeue:   Q α → Q α       )
  --!`queue contract`--
  -- an empty queue is_empty 
  (e₁ : is_empty empty = tt)
  -- an non-empty queue ¬is_empty
  (e₂ : ∀ x Q₀, is_empty (enqueue x Q₀) = ff)
  -- an empty queue doesn't have a front
  (e₃ : front empty = none)
  -- a non-empty queue has a front
  (e₄ : ∀ x Q₀,  is_empty Q₀ → front (enqueue x Q₀) = some x)
  -- front is not changed by an insertion in a non-empty queue
  (e₅ : ∀ x Q₀, ¬is_empty Q₀ → front (enqueue x Q₀) = front Q₀)
  -- dequeue from an empty queue has no effect
  (e₆ : dequeue empty = empty)
  -- removing an element from an one element queue, leaves the queue empty
  (e₇ : ∀ x Q₀, is_empty Q₀ → dequeue (enqueue x Q₀) = empty)
  -- dequeue enqueue order unimportant for a non-empty queue
  (e₈ : ∀ x Q₀, ¬is_empty Q₀ → dequeue (enqueue x Q₀) = enqueue x (dequeue Q₀))
```
