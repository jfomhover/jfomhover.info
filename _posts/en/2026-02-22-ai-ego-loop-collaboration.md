---
layout: post
content_type: post
title: "L'enfer c'est les autres — when AI iteration replaces co-design"
subtitle: "The trap of the inner loop that flatters before it isolates"
excerpt: "I am not alone anymore, I have an Agent, and it likes all my ideas. Yes, within an hour I can have a fully formed spec, implementation plan, code, and deployed solution. But every hour of solo iteration with AI is a deposit into my own conviction and a withdrawal from my capacity to listen."
date: 2026-02-22
topic: AI & Work
tags: [Cognition, Vibe-coding, Collaboration, Co-Design]
lang: en
pinned: true
---

> *A note before we start: this post is written in first person because it came from an observation of what happens inside my own head when I iterate with AI. It could be interpreted as pointing fingers, I'm not doing that. I'm examining a pattern. I write about collaboration precisely because I value it. Of course, all opinions here are my own and do not represent my employer.*

---

I had a great idea: a near-realtime post-deployment testing tool. The value was clear: catch extremely egregious changes before they impact too many users. I could do it all myself: function apps, Python code, a query engine, some YAML config.

I brought the fully-formed solution to the engineering team expecting enthusiasm. I got skepticism.

I thought ego was involved. *They don't appreciate the work. They don't see the value. If they just understood what I built.* But when I started listening, three problems emerged with my approach. The team didn't have cycles to acquire my mental model. Understanding takes time I had not budgeted. Plus, I wasn't so open to feedback, because iterating alone had given me "definitive" arguments for every design choice. More importantly, I had overlooked their expertise entirely: platform integration, maintenance costs, end-to-end ownership in a large enterprise, on-call rotations... all the requirements that come from actually owning a product.

I should have known. It's written on every motivational poster: *if you want to go fast, go alone; if you want to go far, go together.* Duh. 

Now? I am not alone anymore, I have an Agent, and it likes all my ideas. AI is the most powerful design tool I've ever used — that's precisely what makes the solo loop so seductive. Within an hour I can have a fully formed spec, implementation plan, code, and deployed solution. But every hour of solo iteration with AI is a deposit into my own conviction and a withdrawal from my capacity to listen.

## The ego-loop

Say I have an idea (or two hundred). I open a conversation with GitHub Copilot or Claude Code. Within hours I have a working prototype. The solution looks even better than what I had imagined: AI expanded the scope where I was thinking too small and narrowed it where I was overreaching — an extension of my brain for design.

This process felt flattering. I felt productive, creative, engaged, in control. I achieved this outcome _on my own_, driving the process, thinking strategically at the architecture level and tactically at the implementation level. The ego boost is real.

Sure, I can prompt the AI to criticize my design. And I do, and it does it well. But that only works if I already know which questions to ask, and if I have the discipline to accept the answers when every fiber of the creative flow is pulling me toward the next iteration. And that is the problem: nobody else is thinking in this inner loop. Just me and an infinitely patient collaborator that empirically tends toward agreement.

> _Note: [[Sharma et al., 2026](#sharma2026)] analyzed 1.5 million real AI conversations and found systematic sycophancy — AI outputs that validate rather than challenge the user's framing._

The alternative? Bring it to the team: explain, sketch, negotiate. Solo iteration to a working prototype takes hours; collaborative design still takes days. Some of my enthusiasm won't survive the process. Some of my assumptions won't either — which should be the point, but it doesn't feel that way when I'm deciding.

## The conditions

But there's something else pushing toward solo iteration, and it's not about speed or conviction.

There's a specific exhaustion that comes from trying to keep pace with AI. [[Dibia, 2025](#dibia2025)] calls it the "three firehoses": research papers, model releases, ecosystem announcements. If you've been on LinkedIn lately, you've felt it. Every day someone publishes a thorough analysis of the thing you were still turning over in your head. Every week a new framework deprecates the one you barely planned integrating. If you have chronic FOMO or impostor syndrome, every day feels like falling further behind.

When you feel behind, you don't want to show up to a meeting with questions, you want to show up with results. Iterating quickly with AI brings that result fast, and the feeling of catching up.

Somewhere in that catching-up loop, the thing you're outsourcing shifts. When AI helps you write code, that's cognitive offloading — delegating a task to an external tool. But when AI helps you decide your design is right — when you iterate on its arguments, refine its justifications, let its confidence reinforce yours — you may not be outsourcing work anymore. A recent preprint [[Guingrich et al., 2026](#guingrich2026)] calls this *belief offloading*: delegating not tasks, but the formation of your convictions. You may be outsourcing judgment.

There's a name for what that produces. Shaw and Nave [[Shaw & Nave, 2026](#shaw2026)] call it *cognitive surrender*: the uncritical adoption of AI outputs that bypasses deliberation. In their experiments, confidence rose 11.7 percentage points with AI assistance — even when the AI was wrong.

I can feel that. Your arguments become refined through repetition with the AI. By the time you present to the team, you're not bringing a proposal — you're bringing a verdict. *"I already tried that approach."* *"This is the cleanest solution."* Others sense you're not truly open to input. The meeting becomes negotiation, not co-design.

When I read the headline, *"[CEO Says He's Showing His Engineers How to Get Things Done by Sending Them Stuff He Vibe Coded](https://futurism.com/ceo-engineers-vibe-coded),"* I recognized the pattern.

It's not just me. Solo AI-coded contributions are already eroding open-source collaboration norms — bypassing the shared understanding that collective development depends on [[Koren et al., 2026](#koren2026)].

## The reckoning

Chad Fowler writes about "regenerative software" — code so cheap to produce that it becomes disposable, regenerated from intent rather than maintained [[Fowler, 2025](#fowler2025)]. If the code is disposable, then indeed what matters is the intent behind it. That intent doesn't mature in a solo loop. It matures through discussion, challenge, the friction of other people's understanding, the reality check of adoption which starts with your own circle.

We know this. We knew it before AI.

I also know that next week, when I have another idea and an Agent ready to help me build it in an afternoon, the pull of the inner loop will be stronger than this knowledge.

*L'enfer, c'est les autres.* Hell is other people — their schedules, their objections, their slower timelines, their questions that feel like resistance but might be insight.

But the real hell is convincing yourself you don't need them.

> *Next in this series: The mental proliferation that comes from being able to refactor everything, everywhere, all at once.*

---

## References

<a name="dibia2025"></a>Dibia, V. (2025). "[AI Fatigue: Reflections on the Human Side of AI's Rapid Advancement](https://doi.org/10.1145/3734515)." *Communications of the ACM*, 68(12).

<a name="fowler2025"></a>Fowler, C. (2025). "[Regenerative Software](https://aicoding.leaflet.pub/3majnyfydzs2y)." *Blog*.

<a name="guingrich2026"></a>Guingrich, R. E., Mehta, D., & Bhatt, U. (2026). "[Belief Offloading in Human-AI Interaction](https://arxiv.org/abs/2602.08754)." *arXiv preprint arXiv:2602.08754*.

<a name="koren2026"></a>Koren, M., Békés, G., Hinz, J., & Lohmann, A. (2026). "[Vibe Coding Kills Open Source](https://arxiv.org/abs/2601.15494)." *arXiv preprint arXiv:2601.15494*.

<a name="sharma2026"></a>Sharma, M., McCain, M., Douglas, R., & Duvenaud, D. (2026). "[Who's in Charge? Disempowerment Patterns in Real-World LLM Usage](https://arxiv.org/abs/2601.19062)." *arXiv preprint arXiv:2601.19062*.

<a name="shaw2026"></a>Shaw, S. D., & Nave, G. (2026). "[Thinking — Fast, Slow, and Artificial: How AI is Reshaping Human Reasoning and the Rise of Cognitive Surrender](http://dx.doi.org/10.2139/ssrn.6097646)." *PsyArXiv*.
