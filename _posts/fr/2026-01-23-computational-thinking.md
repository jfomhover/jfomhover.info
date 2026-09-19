---
layout: post
content_type: flashcard
title: "Computational Thinking"
subtitle: "Cadres conceptuels issus de la recherche et des pratiques expertes"
lang: fr
date: 2026-01-23
topic: computational-thinking
tags: [computer-science, software-design, pedagogy, cognitive-processes, research]
source: "context/knowledge/science/computational-thinking.md"
translation_key: computational-thinking
redirect_from:
  - /memos/fr/computational-thinking/
---

Le *computational thinking* regroupe les pratiques et les connaissances mobilisées dans la conception de technologies informatiques. Il établit un pont entre deux domaines : la pédagogie (comment enseigner la programmation et l'informatique) et la pratique experte (comment les développeurs expérimentés conçoivent réellement les logiciels).

> **Note** : Ce contenu a été écrit initialement en 2013 dans le cadre de mon mémoire d'*Habilitation à Diriger des Recherches* (HDR). Il a été réécrit en 2026 pour améliorer la formulation et la mise en forme, mais les références n'ont pas été mises à jour et devraient être révisées pour inclure le corpus substantiel de recherche sur le *computational thinking* des 10 à 15 dernières années. Le modèle de synthèse et le cadre conceptuel restent cependant valides et pertinents.

## Enseignement de l'informatique

Le concept de *computational thinking* a gagné en notoriété lorsque [Wing, 2006](#wing2006) l'a proposé comme cadre pour repenser la pédagogie de l'informatique. Depuis, la discipline s'efforce de définir et d'enseigner les compétences fondamentales nécessaires au travail dans les technologies de l'information.

Les programmes d'informatique sont régulièrement mis à jour pour refléter l'évolution des connaissances requises [JTFCC, 2001](#jtfcc2001). La dernière révision [JTFCC, 2013](#jtfcc2013) montre le *computational thinking* se diffuser au-delà de l'informatique vers la biologie, la chimie, l'ingénierie et l'économie — portée par l'utilisation généralisée du traitement et de l'analyse des données. Parallèlement, l'informatique elle-même gagne en reconnaissance comme discipline fondamentale dans l'éducation [Stephenson et al., 2005](#stephenson2005), avec des expériences d'introduction dès l'école élémentaire [Cooper et al., 2010](#cooper2010) ; [Barr & Stephenson, 2011](#barr2011) ; [Quinn, 2011](#quinn2011).

Ce contexte a suscité une réflexion autour de trois questions clés :

**Quels schémas mentaux la programmation induit-elle ?** La décomposition, l'abstraction, la généralisation, la reconnaissance de motifs et la pensée algorithmique émergent comme opérations cognitives fondamentales [Lewandowski et al., 2005](#lewandowski2005) ; [Eckerdal et al., 2005](#eckerdal2005).

**Comment le *computational thinking* se rapporte-t-il aux autres modes de pensée ?** Les chercheurs explorent ses connexions avec les raisonnements logique, mathématique, scientifique, analytique et créatif [Papert, 1996](#papert1996) ; [Hu, 2011](#hu2011).

**Quelles approches pédagogiques fonctionnent le mieux ?** Les méthodes efficaces incluent la conception de jeux [Kurkovsky, 2009](#kurkovsky2009), les activités « débranchées » qui enseignent les concepts sans ordinateur [Thies & Vahrenhold, 2013](#thies2013), l'enseignement orienté motifs [Muller, 2005](#muller2005) et le développement piloté par les tests [Kollanus & Isomöttönen, 2008](#kollanus2008).

Bien que cette recherche pédagogique puisse sembler éloignée de la pratique de la conception de produits, elle révèle les mécanismes cognitifs fondamentaux à l'œuvre lors de la conception de systèmes logiciels. Les opérations mentales identifiées — décomposition, abstraction, reconnaissance de motifs et construction algorithmique — restent largement implicites pendant le recueil et la spécification des besoins. Rendre ces mécanismes explicites est essentiel pour les chercheurs en IA travaillant en tant qu'informaticiens sur des problèmes spécifiques à un domaine.

## Étude de la pratique experte en génie logiciel

Avant que le *computational thinking* ne devienne populaire, les chercheurs étudiaient déjà comment les développeurs experts travaillent réellement. Cette recherche a pris deux formes complémentaires : des psychologues cognitivistes observant et analysant le comportement des développeurs [Visser & Hoc, 1990](#visser1990) ; [Detienne, 1995](#detienne1995), et des praticiens experts réfléchissant à leur propre expérience pour formaliser des méthodologies [Parnas, 1972](#parnas1972) ; [Dijkstra, 1976](#dijkstra1976).

Ces études traitent le **logiciel comme un artefact conçu** [Petre, 2009](#petre2009) où problème et solution co-évoluent car les problèmes initiaux sont rarement bien définis [Dorst & Cross, 2001](#dorst2001). La conception logicielle requiert une **stratégie générale de résolution de problèmes** qui peut être caractérisée selon plusieurs dimensions [Tang & van Vliet, 2012](#tang2012) :

**Orientée problème vs. orientée solution** : Commencer par explorer et spécifier le problème en détail (orientée problème), ou utiliser le prototypage de solutions comme moyen de comprendre et définir le problème (orientée solution).

**En largeur vs. en profondeur** : Concevoir la structure globale du système avant de plonger dans les détails (en largeur), ou résoudre une partie spécifique à fond avant de s'étendre à l'ensemble (en profondeur).

Ces stratégies de haut niveau se combinent avec des **tactiques spécifiques au logiciel** :

**Procédurale vs. déclarative** [Detienne, 1995](#detienne1995) : Construire à partir des actions et des flux d'exécution vers les structures de données (procédurale), ou commencer par les objets de données et ajouter les comportements (déclarative).

**Prospective vs. rétrospective** [Visser & Hoc, 1990](#visser1990) : Travailler en avant des entrées vers les sorties désirées (prospective), ou travailler en arrière depuis l'état final (rétrospective).

Les développeurs emploient également des **mécanismes cognitifs** pour gérer une complexité qui serait autrement « trop grande pour tenir dans la tête » [Petre, 2009](#petre2009). Ceux-ci incluent la simplification, la transformation en représentations plus maniables, la décomposition, le relâchement de contraintes, le raisonnement par analogie et l'abstraction vers des problèmes plus généraux. Parce que problèmes et solutions co-évoluent, les développeurs doivent maîtriser la **provisionnalité** [Petre, 2009](#petre2009) — la capacité à se concentrer sur un aspect tout en mettant temporairement les autres de côté, et à différer les décisions quand c'est nécessaire.

Se concentrer requiert une **séparation des préoccupations** [Dijkstra, 1982](#dijkstra1982) : identifier quels aspects (comportements, fonctionnalités) traversent plusieurs modules et lesquels se regroupent dans des composants uniques [Ali et al., 2010](#ali2010). Cette double séparation — en composants et en préoccupations — aide à optimiser l'architecture du système.

Tout au long de ce travail, les développeurs construisent et maintiennent un **schéma structurel** du problème et de la solution [Corritore & Wiedenbeck, 1999](#corritore1999). Ce modèle mental guide la progression, soutient le retour en arrière et permet la reprise après interruptions [Parnin & Rugaber, 2012](#parnin2012). Les développeurs externalisent ces schémas par des **représentations visuelles** — diagrammes et croquis — pour faciliter la réflexion, la vue d'ensemble et la communication [Jackson, 2010](#jackson2010) ; [Ikeya et al., 2012](#ikeya2012).

Le **schéma d'architecture** joue un rôle central [Taylor & van der Hoek, 2007](#taylor2007) car il se situe à l'interface problème-solution. Il capture les décisions de décomposition initiales, permet la validation de la structure modulaire [Parnas, 1972](#parnas1972), fournit une vue d'ensemble de l'espace des solutions et suit la progression de l'implémentation.

Dans l'espace des solutions, l'écriture de code est centrale mais pas la seule activité. Tôt dans la conception, les développeurs s'accrochent souvent à un « **concept favori** » [Baker & van der Hoek, 2010](#baker2010) — une idée de solution identifiable, plausible (ou simplement intéressante) qui aide à focaliser l'exploration. Ce concept favori devient un véhicule pour tester les hypothèses, questionner les exigences et construire des prototypes initiaux. Les développeurs **simulent** ensuite leurs solutions émergentes, soit mentalement soit par du code exécutable [Visser & Hoc, 1990](#visser1990), pour valider les idées et guider les prochaines étapes.

Tout au long de ce processus, le **jugement** du concepteur est constamment à l'œuvre [Wing, 2008](#wing2008) ; [Hu, 2011](#hu2011), évaluant la complexité du système, l'adéquation entre fonctions et architecture, la cohérence des décisions de décomposition et la pertinence de la solution pour les besoins réels des utilisateurs.

## Synthèse : un modèle du *computational thinking*

Le schéma ci-dessous projette les opérations et objets identifiés dans la littérature sur le *computational thinking* sur un modèle temporel de la conception logicielle. Il s'appuie sur le cadre classique du design thinking [Cross, 2011](#cross2011), suivant l'intuition de [Petre, 2009](#petre2009) selon laquelle le logiciel est un artefact conçu comme tout autre.

![Modèle des opérations et objets du computational thinking dans le processus général de conception logicielle]({{ '/assets/images/computational-thinking-operations.png' | relative_url }})

**Figure : Modèle des opérations et objets du *computational thinking* dans le processus général de conception logicielle**

Le diagramme montre comment le *computational thinking* se déploie dans le temps (de gauche à droite) à travers des zones distinctes mais interconnectées :

**Espace du problème (bleu, en haut à gauche)** : Tôt dans le processus de conception, les développeurs travaillent directement avec le problème par des opérations cognitives : simplification, transformation, analogie, décomposition, généralisation et définition. Ces opérations construisent une compréhension de ce qui doit être résolu et pourquoi, sans encore s'engager vers des formes d'implémentation.

**Opérations de transition (gris, en haut au centre)** : Au fur et à mesure que la compréhension du problème mûrit, quatre opérations critiques transforment cette compréhension en représentations structurées pouvant guider l'implémentation : identification (reconnaître les éléments clés), structuration (organiser les relations), formalisation (créer des spécifications précises) et opérationnalisation (définir comment les concepts fonctionneront). Ces opérations sont le point pivot où le travail abstrait sur le problème devient une conception actionnable.

**Artefacts intermédiaires (gris, au centre)** : Les opérations de transition produisent des objets de conception intermédiaires — motifs (templates de solutions reconnaissables), concepts favoris (idées de solutions initiales) et stratégies de résolution (approches planifiées). Ces artefacts capturent les décisions de conception sous des formes qui peuvent être communiquées, évaluées et raffinées.

**Évaluation continue (ligne diagonale)** : Tout au long de cette progression, le jugement opère en continu, évaluant la complexité (est-ce gérable ?), la provisionnalité (qu'est-ce qui peut être différé ?), la pertinence (cela répond-il aux besoins réels ?) et la cohérence (les parties forment-elles un tout ?). L'évaluation n'est pas une porte mais un fil conducteur reliant toutes les étapes.

**Espace de la solution (jaune, en bas à droite)** : Plus tard dans le processus, le travail devient concret : la conception d'architecture établit la structure du système, l'écriture de code implémente les fonctionnalités, la simulation valide les comportements et l'intégration assemble les composants. Ces artefacts incarnent les décisions prises en amont et peuvent être testés et déployés.

Ce modèle remplit trois objectifs :

**Synthèse** : Il capture les concepts fondamentaux de la conception d'applications dans un cadre unifié. La conception de systèmes intelligents est un cas particulier au sein de cette structure plus large.

**Clarification de la transition** : Il rend explicite comment les opérations de transition (identification, structuration, formalisation, opérationnalisation) transforment la compréhension du problème en guidage de la solution par le biais d'artefacts intermédiaires.

**Méthodologie** : Il fournit une base pour comprendre et améliorer les méthodes de conception en mettant en lumière les processus cognitifs qui restent habituellement implicites et en montrant leurs relations temporelles.

## Références

<a name="ali2010"></a>Ali, M.S. et al. (2010). A systematic review of comparative evidence of aspect-oriented programming. *Information and Software Technology*, 52(9), pp.871–887.

<a name="baker2010"></a>Baker, A. & van der Hoek, A. (2010). Ideas, subjects, and cycles as lenses for understanding the software design process. *Design Studies*, 31(6), pp.590–613.

<a name="barr2011"></a>Barr, V. & Stephenson, C. (2011). Bringing computational thinking to K-12: what is Involved and what is the role of the computer science education community? *ACM Inroads*, 2(1), pp.48–54.

<a name="cooper2010"></a>Cooper, S., Pérez, L.C. & Rainey, D. (2010). K--12 computational learning. *Communications of the ACM*, 53(11), pp.27–29.

<a name="corritore1999"></a>Corritore, C.L. & Wiedenbeck, S. (1999). Mental representations of expert procedural and object-oriented programmers in a software maintenance task. *International Journal of Human-Computer Studies*, 50(1), pp.61–83.

<a name="cross2011"></a>Cross, N. (2011). *Design thinking: understanding how designers think and work*. Oxford, UK: Berg Publishers.

<a name="detienne1995"></a>Detienne, F. (1995). Design Strategies and Knowledge in Object-Oriented Programming: Effects of Experience. *Human-Computer Interaction*, 10(2), pp.129–170.

<a name="dijkstra1976"></a>Dijkstra, E.W. (1976). *A Discipline of Programming*. Prentice Hall PTR.

<a name="dijkstra1982"></a>Dijkstra, E.W. (1982). On the role of scientific thought. In *Selected writings on computing: a personal perspective*. Springer-Verlag, pp. 60–66.

<a name="dorst2001"></a>Dorst, K. & Cross, N. (2001). Creativity in the design process: co-evolution of problem–solution. *Design Studies*, 22(5), pp.425–437.

<a name="eckerdal2005"></a>Eckerdal, A., Thuné, M. & Berglund, A. (2005). What does it take to learn "programming thinking"? In *Proceedings of the 2005 international workshop on Computing education research - ICER '05*. ACM Press, pp. 135–142.

<a name="hu2011"></a>Hu, C. (2011). Computational thinking - What It Might Mean and What We Might Do About It. In *Proceedings of the 16th annual joint conference on Innovation and technology in computer science education - ITiCSE '11*. ACM Press, pp. 223–227.

<a name="ikeya2012"></a>Ikeya, N., Luck, R. & Randall, D. (2012). Recovering the emergent logic in a software design exercise. *Design Studies*, 33(6), pp.611–629.

<a name="jackson2010"></a>Jackson, M. (2010). Representing structure in a software system design. *Design Studies*, 31(6), pp.545–566.

<a name="jtfcc2001"></a>JTFCC (2001). *Computing Curricula 2001 Computer Science*. ACM / IEEE.

<a name="jtfcc2013"></a>JTFCC (2013). *Computer Science Curricula 2013: The Joint Task Force on Computing Curricula*. ACM / IEEE. Available at: http://ai.stanford.edu/users/sahami/CS2013/.

<a name="kollanus2008"></a>Kollanus, S. & Isomöttönen, V. (2008). Test-driven development in education: experiences with critical viewpoints. In *Proceedings of the 13th annual conference on Innovation and technology in computer science education*. ACM, pp. 124–127.

<a name="kurkovsky2009"></a>Kurkovsky, S. (2009). Engaging students through mobile game development. *Technical Symposium on Computer Science Education*, 41(1), pp.44–48.

<a name="lewandowski2005"></a>Lewandowski, G. et al. (2005). What novice programmers don't know. In *Proceedings of the 2005 international workshop on Computing education research - ICER '05*. ACM Press, pp. 1–12.

<a name="muller2005"></a>Muller, O. (2005). Pattern oriented instruction and the enhancement of analogical reasoning. In *Proceedings of the 2005 international workshop on Computing education research - ICER '05*. ACM Press, pp. 57–67.

<a name="papert1996"></a>Papert, S. (1996). An exploration in the space of mathematics educations. *International Journal of Computers for Mathematical Learning*, 1(1), pp.95–123.

<a name="parnin2012"></a>Parnin, C. & Rugaber, S. (2012). Programmer information needs after memory failure. In *20th IEEE International Conference on Program Comprehension (ICPC)*. IEEE, pp. 123–132.

<a name="parnas1972"></a>Parnas, D. (1972). On the criteria to be used in decomposing systems into modules. *Communications of the ACM*, 15(12), pp.1053–1058.

<a name="petre2009"></a>Petre, M. (2009). Insights from expert software design practice. In *Proceedings of the 7th joint meeting of the European software engineering conference and the ACM SIGSOFT symposium on The foundations of software engineering - ESEC/FSE'09*. ACM Press, pp. 233–242.

<a name="quinn2011"></a>Quinn, H. (Committee on C.F. for the N.K.-12 S.E.S.) (2011). *A Framework for K-12 Science Education: Practices, Crosscutting Concepts, and Core Ideas*. National Academy of Sciences. Available at: http://www.nap.edu/catalog.php?record_id=13165.

<a name="stephenson2005"></a>Stephenson, C. et al. (2005). *The new educational imperative: Improving high school computer science education*. Computer Science Teachers Associations: 07_06.

<a name="tang2012"></a>Tang, A. & van Vliet, H. (2012). Design Strategy and Software Design Effectiveness. *IEEE Software*, 29(1), pp.51–55.

<a name="taylor2007"></a>Taylor, R.N. & van der Hoek, A. (2007). Software Design and Architecture: The once and future focus of software engineering. In *Future of Software Engineering (FOSE '07)*. IEEE, pp. 226–243.

<a name="thies2013"></a>Thies, R. & Vahrenhold, J. (2013). On plugging "unplugged" into CS classes. In *Proceeding of the 44th ACM technical symposium on Computer science education - SIGCSE '13*. ACM Press, pp. 365–370.

<a name="visser1990"></a>Visser, W. & Hoc, J.-M. (1990). Expert Software Design Strategies. In *Psychology of Programming*. pp. 239–274.

<a name="wing2006"></a>Wing, J.M. (2006). Computational thinking. *Communications of the ACM*, 49(3), pp.33–34.

<a name="wing2008"></a>Wing, J.M. (2008). Computational thinking and thinking about computing. *Philosophical transactions. Series A, Mathematical, physical, and engineering sciences*, 366(1881), pp.3717–25.
