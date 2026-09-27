---
layout: post
content_type: post
title: "Mental space vs latent space"
subtitle: "A meditation on agent (non)selfhood, and human-agent co-design"
excerpt: "Because agents appear to me in conversation and respond through natural language, I am encouraged to think of them as having a _self_. But they don't have a self. I think of them as arising from what I like to imagine as a _probability field_: the model's broad generative potential, actualized as tokens due to conditions."
date: 2026-09-27
topic: AI & Work
tags: [Cognition, Vibe-coding, Collaboration, Co-Design]
lang: en
pinned: true
---

I do not trust my agents to develop products entirely on their own. I've tried better instructions, skills, and review agents, but I keep hitting the usual pitfalls.

> _You are absolutely right, this parameter value should not be hardcoded. Let me add it to config management._
>
> _You are absolutely right, I should have caught this bug in my review earlier._
>
> _You are absolutely right, that was in the spec, and it is a gap in the implementation. Let me add it now._

These are different failures, but they leave me doing the same work of steering: catching the design as it drifts, bringing neglected constraints back into view, interrupting recurring shortcuts.

To be fair, it's not entirely the agents' fault. Sometimes I am not steering toward a fully formed intention. The steering is part of how the intention becomes clear. Software design **is** design: working on a solution changes my understanding of the problem. And that's where agents bring me considerable value too, by pushing me out of the inertia of my own thinking.

If both the agent and the human change through the interaction, what exactly is happening when we design together?

## Agents arise through conditioning

Because agents appear to me in conversation and respond through natural language, I am encouraged to think of them as having a _self_. But they don't have a self. I think of them as arising from what I like to imagine as a _probability field_: the model's broad generative potential, actualized as tokens due to conditions.

I do not mean that an LLM is merely spitting out next-token predictions. The model is a vast and unknowable learned system of representations. Yet, technically, its outputs are still generated probabilistically: at every step, the model produces a distribution conditioned by what has come before.

An agent, on top of that field, is conditioned by an evolving aggregate of inputs. There is macro-conditioning, which establishes the agent's role and capabilities (instructions, tools, and skills), and micro-conditioning, in which each user message, tool result, and memory changes the conditions for what can arise next.

The agent's apparent _self_ emerges from this succession of conditions. But the agent at the beginning of a conversation and the agent later in the same conversation are not identical operational configurations, even if they rely on the same underlying model. They are different conditional states of the same generative system. What persists is neither independent nor permanent, but an informational continuity produced by context, memory, and history.

Agent _identity_, then, may be only the mirage of a stable pattern of conditioning. A code-writing agent and a code-reviewing agent appear different because they are conditioned differently, but they draw from the same _probability field_. This shared model may also help explain why they sometimes reproduce the same blind spots.

## Instructions of my own

I am conditioned too. Duh.

When I design software, I move between different ways of looking at the same artefact: user, product manager, architect, implementer, reviewer, maintainer. Sometimes these perspectives even arrive as prompts: _What would a new user think of this?_ One concern recedes; another comes forward. My mental space changes, and so does what I ask of the agent.

I still hold on to the conceit that I am a permanent self, though. Something certainly lingers: the same biases run through all these perspectives. That is the deeper conditioning, accumulated through society, norms, and practice. My own "base model," if I borrow the analogy. Except mine also involves a body, emotions, relationships, and consequences I have to live with.

Changing hats does not necessarily change those habits. The architect in me and the reviewer in me may agree for the same reason two agents agree: neither has questioned the premise they share.

If recurring blind spots make me distrust an agent working alone, they should also make me cautious about doing the entire product myself.

## Where the spaces meet

My mental space and the model's latent or generative space are not of the same nature, I know that. But those spaces do meet through language, code, and the artefacts we produce together. The artefact becomes an intermediary object in the encounter between human mental space and the agent's latent space. I put something of my conditioning into it. The agent transforms it according to its own conditioning and returns a new version.

Sometimes that exchange stalls. The agent keeps producing plausible revisions around an assumption that should have been abandoned, as if stuck in a local optimum created by its conditioning. That's where it needs my steering. Steering is my attempt to change the conditions enough for something else to arise.

The reverse can happen too. Sometimes the agent's response does not merely confirm or refine my intention; it brings me out of my own local optimum. It shows me a perspective I was not conditioned to consider and exposes an assumption I did not know I was making. This is when the interaction feels like magic: not because the model has escaped its field, but because its conditioning leads it somewhere my own conditioning would not have made likely.

Perhaps some actual creativity resides in this mismatch between the spaces. Maybe creativity is not having a self capable of originality. Maybe it is the event in which a system is conditioned into seeing beyond the conditions it began with.

## Who is facing me?

I've implicitly given the agents a lot of human traits here. I should end this meditation with a difference I still believe matters: as a human being, I can become aware of my conditioning and work to change it. I can relearn and unlearn patterns. It is hard, incomplete, and never final, but it is possible.

If AI can help me work on my own conditioning, maybe it deserves some credit.
