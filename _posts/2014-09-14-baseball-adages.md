---
layout: post
title:  "Baseball adages and comparison classes"
date: 2014-09-14 09:15
tags: []
---

As in many sports, baseball coaches attempt to combine education and inspiration by way of adages intended to distill complex strategy into a simple phrase.  Among the stalwarts of this tradition are _run out every ball put in play_ and _on a ball hit in the air, make your first step be backwards_.  The axiom I'd like to focus on today is:

> _Don't make the last out at third base._

Well-entrenched adages reach a point at which they are beyond either reproach or justification.  They come to work their way into the culture of play, perhaps even altering the history of the game to align with their suggestion.  Luckily for heretics of tradition, the sabermetric turn has produced a number of baseball gadflies, not content to let traditional wisdom avoid the shears of statistical analysis.  Quite a while back, I came across a pair of posts by [The Unofficial Scorer](http://blog.chron.com/unofficialscorer/2009/02/more-on-the-last-out-at-third-base-goodbye-to-a-friend/) taking on the issue of making the last out at third.  In addition to providing some rigorous data and coming up with a clever way of extracting information relevant to the question at hand, Levine pointed out that whether the advice is sound or not depends on what we understand it to mean.  What I find most interesting are the facts that this adage is highly ambiguous and that the sentence doesn't wear its semantic import on its syntactic sleeve.

The first thing to point out is that the adage is much weaker than seems to be warranted by the context of giving advice for success in baseball.  After all, if one wants to guarantee baseball success, you might as well follow the more general principle:

>_Don't make any out at any base at any point in the game._

In general, the laws governing a practice are those principles that optimize the constraints _strength_ and _informativeness_, and whatever this more general principle gains in strength it sacrifices much more in informativeness.  Our original principle may not cover as many instances a baseball player can find herself in, but its much more useful for an actual player trying to make decisions at the speed of play.

I take it that the informativeness of our principle comes from an implicit comparative structure that it carries.  Prescriptive rules such as this gain their force from the suggestion that abiding by the explicitly mentioned plan of action is _better_ than not doing so and implementing any of a class of nearby plans of action.  So, in assessing the appropriateness of the rule, an essential step is determining the _comparison class_ of nearby plans that it implicitly suggests are of lesser quality.  The ambiguity involved in the last out at third adage comes from the fact that context allows for the relevance of several distinct comparison classes.  One way to pull out the options is by adding an explicit focus structure to the surface representation of the adage:

1. Avoid making the *last* out at third base, as opposed to worrying about the *first* or *second* out.
2. Avoid making the last out at *third base*, as opposed to worrying about the last out at *first base*, *second base*, or *home*.
3. Avoid making *last out at third base*, as opposed to worrying about any other base/out pair.

It should be clear that these are representations of conceptually distinct adages, as one can implement a long term strategy that follows one principle without following the others.  But our original adage is also ambiguous in another way.  This second kind of ambiguity arises from the evaluative character of prescriptive norms.  To evaluate one's adherence to the rule, we must determine a _standard of evaluation_.

In his analysis of the adage, Levine emphasizes a different ambiguity, which he cashes out as an issue of whether the norm is meant to track the *risk* of trying for third base or the *loss* associated with an out at third base.  An individual decides on the basis of risk when their decision is made on the basis of the expected value of attempting for third versus the expected value of staying at second.  

> Risk: V(safe-at-third)P(safe-at-third) + V(out-at-third)P(out-at-third) = V(safe-at-second)

The decision to try for third is the correct one when the subjective probability of successfully taking third is high enough to tip the equality in _Risk_ toward the left-hand side.  According to Levine's analysis, the requisite subjective probability is indeed higher when there are two outs than when there are zero or one.

But there is an alternative decision technique available. The adage seems to be asking us to compare the devestatingness of each out in an inning.  That is, how much does one give up in getting out at third versus the alternative of not attmpting for it.

> Loss: V(safe-at-second) - V(out-at-third) = Value-sacrificed

If this evaluation schema is operative, then an individual will be more willing to give up an out when the associated sacrifice is lower.  But interestingly, Levine's analysis suggests that the sacrifice associated with an out at third base is actually lower when there are two outs as opposed to zero or one.  This is mostly due to the fact that the run potential is lower generally when a team already has two outs.

I take it that each of these evaluation techniques is valid for different interests, and because the results they give in terms of how individuals with those different interests would respond to our adage, the adage is evaluatively ambiguous as well as being comparison class ambiguous.

