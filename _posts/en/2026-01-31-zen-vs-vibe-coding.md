---
layout: post
content_type: essay
title: "Zen and the Art of Vibe-Coding"
subtitle: "Is there still room for code-templation?"
date: 2026-01-31
topic: AI & Cognition
tags: [Computer Science Education, Cognition, Vibe-coding]
lang: en
pinned: true
redirect_from:
  - /essays/en/2026-01-31-zen-vs-vibe-coding/
---

_How AI-assisted coding eliminates the contemplative pauses between architecture and implementation—and whether beginners can still build expertise without that rhythm._

_📌 **Thesis** - I argue that traditional coding builds expertise through oscillation : descending into implementation, returning to architecture, learning through the friction. AI-assisted coding eliminates that rhythm, keeping developers at the system level continuously. This enables sustained architectural focus and demands new precision in articulating design. But it raises a developmental question: can beginners build expertise through articulation alone? or does expertise require the full cycle?_

<details class="easter-egg">
<summary>🌀 <strong>Prompt Spin</strong> – Click for the AI-rewritten opening (can you guess the prompt I used?)</summary>
<p><em>"Claude was refactoring five files at once—again. Decomposing the system architecture exactly how I wanted it. The code was elegant, precise, <i>right</i>. I should have been thrilled. But as I sat at my keyboard, watching the AI write code I used to write myself, I couldn't help but wonder: are we eliminating the very pauses that make us good at what we do? Sure, vibe-coding lets me focus on the big picture—but what if I like the small picture? The pruning, the polishing of docstrings, the typing of arguments, the quiet moment of sitting with what I've made. Was I building my mind while I thought I was just beautifying code?"</em></p>
</details>

## Introduction

I've been coding since childhood. It felt natural, fluid—something that just worked. That changed when I encountered cognitive science. Reading how researchers had documented the mental operations of expert practitioners transformed me into an observer of my own practice. Suddenly I could see the processes underneath the intuition.

Expertise, I've come to understand, requires this kind of self-reflection. Seeing ourselves from the inside, understanding the cognitive operations that feel automatic. With AI-assisted coding, my practice has shifted dramatically. This essay is an attempt to understand what's changing, and what that change might mean.

The question at stake: what cognitive processes made traditional coding effective at building expertise, and what happens when AI eliminates the rhythm those processes depended on? This isn't just about productivity—it's about how developers are made.

## Seeing, drawing, seeing

I like writing on paper, and I like writing on my laptop, and I like writing with AI. My output is different across these three environments. On paper, my sentences are shorter, more carefully worded, more in-depth. It's not better writing—it's different. For a long time I couldn't explain why.

The answer came from Donald Schön's work on reflective practice [[Schön, 1983](#schon1983); [Schön, 1991](#schon1991)]. He describes a _seeing-drawing-seeing_ cycle: you *see* the current situation, *draw* (make a mark, write a line, sketch an idea), then *see again*—the artifact "talks back," revealing what you didn't know you were thinking. The medium shapes this rhythm. The friction between thought and externalization determines how the cycle unfolds.

Friction shapes what emerges.

Writing on paper is more costly, not as fluid as typing on a keyboard. With _seeing-drawing-seeing_ in mind, I saw the friction. It wasn't a bug. It was shaping the cycle itself. When I write on paper, the physical act of forming letters is slow enough that I'm forced to see my thoughts as they materialize. The sentence reveals itself word by word, giving me time to notice when it's veering off course, to catch the awkward phrasing before it's fully set on the page. I'm watching myself write, absorbing what I see emerging in real-time.

The cycle changes when friction decreases, like when I type on keyboard. The _drawing_ becomes so fast that the granular _seeing_ compresses—the word-by-word, awareness collapses into something larger. Instead, I see the line whole. I can iterate faster, loop more rapidly on the entire thing. But the _seeing_ has shifted scales. I'm looking at the sentence now, not watching individual words laid out one by one. The rhythm has changed, and with it, what gets made.

Writing with AI nearly eliminates the cycle. The drawing phase almost disappears—the AI produces paragraphs in seconds. What remains is almost pure seeing. I'm constantly evaluating the whole: does this paragraph capture what I meant? Is the argument structured correctly? Does the tone match my intent? Each iteration presents a complete artifact to assess. The granular seeing is gone. What's left is macro-scale seeing at every turn. It's efficient, even exhilarating. But I notice one thing: the rhythm has flattened into a single beat: see, see, see again.

## Computational Thinking

I like coding. I really do. It stimulates my mind in ways that feel deeply rewarding—a particular kind of puzzle-solving that keeps me engaged for hours. But as a beginner, I hit walls constantly. I couldn't see how to break problems down, how to structure a solution before writing it. The code worked or it didn't, but I couldn't explain why.

With time and practice, it got much better. The walls receded. I developed intuitions—when to pause, when to push, how to navigate complexity. But I couldn't explain what had changed. The process remained opaque to me, even as I became fluent in it.

Then I encountered [computational thinking]({% link _posts/en/2026-01-23-computational-thinking.md %}) research. Suddenly I had language for what I'd been doing. What felt intuitive wasn't mysterious anymore—researchers had already documented and named it.

Two concepts anchored everything for me: **"too big for the head"** and **separation of concerns**.

_"Too big for the head"_ [[Petre, 2009](#petre2009)] is Marian Petre's phrase for the central challenge of software development. You need to hold the high-level architecture in mental space while simultaneously descending into implementation details. It's a constant zooming in and out—breadth versus depth, system versus component. To focus on one module, you must strategically forget the internals of another, keeping only the navigational map. The whole system cannot fit in working memory at once.

This is where proper separation of concerns [[Dijkstra, 1982](#dijkstra1982)] becomes essential. You identify which aspects span multiple modules and which fit within single components. The boundaries you draw—what belongs together, what stays separate—become the foundations of your mental map. Good separation makes the architecture logical, memorable, sustainable. Poor separation forces you to hold too much simultaneously.

This cognitive gymnastics—parallel boxes opening and closing, details surfacing and submerging—can be exhilarating to observe from inside your own mind.

It can also be exhausting. Refactoring is particularly demanding because it requires holding multiple layers at once: the current structure, the target structure, and the transformation path between them. After sustained high-strain thinking, the brain needs relief.

When I observed a need for a pause in this oscillation, I used to seek out what I called "Zen gardening": polishing comments, choosing precise argument names, adding type hints, formatting docstrings. Tasks that felt menial—the kind of work I'd save for when my brain was too tired for real architecture. But I've come to understand them differently.

They weren't procrastination. They were contemplation.

This _Zen gardening_ phase creates space in me for three cognitive functions that high-strain work exhausts:

**Judgment** [[Wing, 2008](#wing2008); [Hu, 2011](#hu2011)]: Assessing whether what you've built is actually manageable, whether the parts cohere, whether this addresses real needs. Evaluation requires cognitive space. When you're deep in architectural thinking, judgment gets deferred. Aesthetic work opens room for it to surface.

**Schema maintenance** [[Corritore & Wiedenbeck, 1999](#corritore1999)]: The mental model of system architecture needs reinforcement. When you polish a docstring, you're not just fixing text—you're rehearsing what the function does, where it fits, how it connects. This is the seeing phase of the seeing-drawing-seeing cycle. The schema stabilizes.

**Provisionality** [[Petre, 2009](#petre2009)]: The ability to focus on one aspect while temporarily setting others aside, and to defer decisions when needed. This requires pause. Without contemplative passages, every decision feels urgent. The inertia that seemed inefficient was actually creating breathing room.

Low-strain work enables these functions because it demands little cognitive load while keeping you immersed in the codebase. Executive function recovers while the schema stays active. The pause isn't disengagement; it's active recovery.[^1]

But I wonder if the oscillation does more than maintain capacity—if it's also how expertise develops. The back-and-forth between breadth and depth might be training, not just rest. Reps and recovery, repeated.

Then I started coding with AI.

## Vibe-coding

AI-assisted coding obliterates most low-strain work. The AI refactors multiple files simultaneously, names variables with precision, adds type hints, writes docstrings. What took hours now takes seconds. The code is correct, efficient, properly structured. Development in hyperspeed.

The experience is exhilarating. Fast, precise, responsive. With practice, it becomes an extension of architectural thinking—a way to speak system design and receive functional code. Each prompt becomes tactical, part of a conversation structured around the mental map being formed.

But I noticed something: the oscillation is almost gone. I stay at the architectural level continuously. I don't descend into implementation details as often—the AI handles that traversal. The conversation happens at system scale: articulating structure, specifying contracts, guiding decomposition.

Three shifts stand out for me:

**Sustained architectural focus**: I stay in high-strain architectural thinking longer than before. The relief valve of implementation work is gone. This is both powerful and demanding: I need to maintain system-level vision more continuously.

**Compression of the seeing cycle**: There's less time between specification and implementation. The "second seeing"—the moment when you assess what you've made—compresses. I'm seeing architectural decisions manifest immediately, but I'm not feeling the same sense schema reinforcement.

**A different training regime**: The back-and-forth between breadth and depth trained a particular muscle: the ability to navigate between abstraction levels. When AI handles the depth traversal, that training disappears. But a new training begins: the ability to think architecturally with enough clarity and rigor to guide a system to completion through conversation alone.

This is a different rhythm. The pauses I relied on—the _Zen gardening_ moments—have disappeared. But something else has emerged: the discipline of articulating architecture clearly enough that the AI can execute it. Every prompt requires me to think through what I want at the system level, to be precise about boundaries and concerns.

But I came to vibe-coding with decades of traditional practice already wired in. The oscillation trained me first. What about developers who start here?

## The Training Paradox

The question isn't just whether experienced developers can sustain their expertise without contemplative passages. The deeper concern is developmental: can beginners build architectural expertise through vibe-coding at all?

Expertise isn't accumulated knowledge—it's trained capacity. The oscillation between breadth and depth wasn't just how the system architecture got built. It was how the cognitive architecture got formed. The muscle developed through these reps and rest.

Vibe-coding eliminates this training opportunity. The AI handles the depth. The code appears correct, properly architected, functional. There's no rest, the reps are gone.

This creates a paradox—or perhaps an evolution: vibe-coding seems to require architectural expertise, but it trains different capacities than traditional coding did. I can speak architecture to the AI because I spent years descending into implementation details, getting lost, finding my way back. The map is clear to me now. But what about someone learning to code with AI from the start?

Two questions won't let go:

**What might be lost**: If you never descend into the depths, do you develop the sense of what depth means? If you never polish implementations, does your cognitive architecture solidifies?

**What might be gained**: Perhaps vibe-coding trains a different expertise—one that traditional coding never built as deliberately. The ability to collect your thoughts with precision. To verbalize system structure clearly enough that another intelligence can execute it. This could be architectural thinking in its purest form: design without the distraction of syntax, structure without the cognitive load of implementation.

Maybe a new generation is developping expertise in clarity of architectural thought. The muscle being trained could be different: not the ability to navigate between abstraction levels, but the ability to think at the highest abstraction level with enough rigor to drive a system to completion.

The counterargument is compelling: why force beginners through implementation details if they can learn architecture directly? Perhaps the oscillation was inefficient training—cognitive waste from an era when we had no choice.

Expertise research suggests otherwise. Deliberate practice requires repeated exposure to the full complexity of the domain [[Ericsson et al., 1993](#ericsson1993)]. If you learn only system-level thinking, you may build systems that look architecturally sound but break in implementation-level ways you never learned to anticipate.

The question isn't whether vibe-coding is faster—it is. The question is whether speed and architectural clarity alone produce developers capable of navigating unprecedented complexity.

What's certain is that we're conducting an experiment in real-time, without control groups, on the next generation of developers. By the time we understand what expertise requires, we may have already trained thousands who never developed it. Or we may discover that architectural thinking can be learned at the system level alone, that the oscillation we thought essential was just one path among many.

The question isn't whether AI makes us more productive—it does. The question is whether architectural thinking alone can produce developers capable of navigating unprecedented complexity, or whether expertise requires descent into the depths. We're training a generation differently. We won't know what that means until they build something none of us have imagined.

---

## References

<a name="corritore1999"></a>Corritore, C. L., & Wiedenbeck, S. (1999). "Mental representations of expert procedural and object-oriented programmers in a software maintenance task." *International Journal of Human-Computer Studies*, 50(1), 61-83.

<a name="dijkstra1982"></a>Dijkstra, E. W. (1982). "On the role of scientific thought." In *Selected writings on computing: a personal perspective* (pp. 60-66). New York: Springer-Verlag.

<a name="ericsson1993"></a>Ericsson, K. A., Krampe, R. T., & Tesch-Römer, C. (1993). "The role of deliberate practice in the acquisition of expert performance." *Psychological Review*, 100(3), 363-406.

<a name="hu2011"></a>Hu, C. (2011). "Computational thinking - What It Might Mean and What We Might Do About It." In *Proceedings of the 16th annual joint conference on Innovation and technology in computer science education - ITiCSE '11* (pp. 223-227). New York: ACM Press.

<a name="petre2009"></a>Petre, M. (2009). "Insights from expert software design practice." In *Proceedings of the 7th joint meeting of the European software engineering conference and the ACM SIGSOFT symposium on The foundations of software engineering* (pp. 233-242). New York: ACM Press.

<a name="schon1983"></a>Schön, D. A. (1983). *The Reflective Practitioner: How Professionals Think in Action*. New York: Basic Books.

<a name="schon1991"></a>Schön, D. A. (1991). "Designing as Reflective Conversation with the Materials of a Design Situation." *Research in Engineering Design*, 3(3), 131-147.

<a name="wing2008"></a>Wing, J. M. (2008). "Computational thinking and thinking about computing." *Philosophical Transactions of the Royal Society A: Mathematical, Physical and Engineering Sciences*, 366(1881), 3717-3725.

---

[^1]: This constrained volume of architectural space also guards against catastrophic refactoring—those moments when too many contracts change simultaneously, when you lose track of the transformation path, or when interruption leaves you unable to resume. The required pause creates a checkpoint. The friction that forces contemplation also prevents overreach. What feels like inertia is actually control. Without it, speed becomes destabilization.
