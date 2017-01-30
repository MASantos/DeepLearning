I thought I would give some pointers that could guide people in assimilating this chapter.


Everybody knows the basic idea of probability from a frequentist's approach: all cases I'm interested in divided by all possible cases I'm contemplating.



Less people are familiar with the the bayesian approach though. Probability, in this approach, is meant as a quantification or degree of our belief in some event happening. Further, our belief may change if we gather new information. The bayesian approach offers a systematic way to incorporate that 'adding of new information'  when quantifying the likelihood we assign to an event. The bayesian approach is the key concept underlying modern approach to probabilistic inference, aka, (un)directed graphical probabilistic models aka structured probabilistic models.  These models were developed to deal with the problem of Causal inference in statistics; Judea Pearl's books seem to be referenced by everybody.  Maybe some headings help in giving an idea of where this topic leads to or what it relates to: "Probabilistic reasoning in intelligent systems", or "Graph structures for knowledge representation and reasoning",


I'd say, if you want to understand the bayesian approach you should try to understand a graph problem like that of the slippery surface given by


<pre>
Season  X1
/             \

Sprinkler X2       Rain X3
\                  /
\                /
Wet  X4
|
|
Slippery X5
</pre>

All these lines should be considered as pointing downwards, i.e., we are dealing with a directed graph (a DAG in this case).


Some key concepts that this graph reflects:


1- The probability of raining is "conditioned" on the season. So is as well that the sprinkler goes on (assuming you are environmentally friendly :-)


2.- The probability that the surface is wet depends directly on the sprinkler being or not on and on the day being or not rainy. It also depends on the season, but this is not a direct dependency: This means, if you know the state of the sprinkler and whether or not there is rain, you can give a clear estimate of the likelihood of the surface being wet.



3.-The graph models a logical structure of events. First, god laid the seasons, which leads or not to rain, and at the same time the homo sapiens laid sprinklers around with a timing depending on the season (it doesnt apply to Trump & Co). This may or not wet the surface. But what is clear is that whether it is slippery or not just **depends on that last event**! Slippery has a markovian dependency on the whole hierarchy. By that I mean it just depends on that last event, namely if it is or not wet.


4.-The joint probability of any configuration (set of possible values of each node in the gaph) of this hierarchy can be obtained  by "hopping" along the paths of the graphs from top to bottom and compounding probabilities using the bayes  rule.


0.- There is a point 0 I missed: All nodes in the graph represent events for which we are not sure what there state is (because for complicated reasons unimportant to this argument we lack enough information). The mathematical name for ( or rather the math way to denote) such events is Random Variable (stochastic variable is a synonym).


Next concept is that of probability distribution (be it a "mass" distribution as they called it here or a density one).


..


As we deal with random events, we cannot aim at the way, say, Newton was describing things. He would come and say, give me the speed at which the bullet is fired and the force of gravity and I can tell you EXACTLY (that is w/o any doubt, any imprecision -at least theoretically) where the bullet is at each instant of time. In short, given the bullet problem he would aim at finding a function X = f(T) that gives the position of the bullet at each instant.


Our aim is different. The best we can ever do with a random variable is EXACTLY determine its probability distribution P(X), that is, a deterministic and exact function giving....the likelihood of each of the possible values of X


-


That's a big change of mindset!



What if we do not know the probability distribution of a random variable? What measures can give us some insight on that prob. dist.?  Everybody is familiar with at least one estimator of central tendency (mean or average, median, mode,...) and an estimator of dispersion (variance,  mean deviation, percentiles,...).  For instance, a big difference between the mean and median indicates a bias, and thus a tail in the distribution being longer than the other. This can be further measured with another statistic (skewnes, not mentioned in the book).  In general, for any random variable X, if you know all the averages of the form (X - Mean(X) ) ** n  (n-moment of X)  then you have a complete information on the prob. distr. Usually this is inpractical, but this relation between statistics and prob. dist. kind of completes the conceptual framework laid down in studying random events.


-


Question: Let's say we know two different prob. dist. of a given random variable. These are for us now like two **complete** descriptions of that variable. Is there any way to measure how different these two descriptions are?


Yes, there is; and more than one way.


The book mentions one way, the Kullback-Leibner Divergence. It's called divergence because it's not a true distance (it's not symmetric and it doesn't satisfy the triangular inequality as for instance our familiar euclidean distance function does)


-


Question: Let's consider two different prob. dist. ( corresponding to the same or to different random variables, it doesn't matter here). We know the prob. dist. encompasses the fact that we are uncertain about certain details of these variables and the events they describe. Is there a  measure that could quantify that amount of uncertainty (also denoted as lack of information)?


Yes, there is; and more than one way.


The book mentions one way: the (shannon) entropy associated to a prob. dist.


-


-



Note: The graph above can help us understand the concept of correlation.  More importantly it can help us understand how correlation doesn't mean causation. Assuming again we are not dealing with Trump-like species, clearly the state of the sprinkler and that of the weather (rainy or not) will be RELATED: If it rains, you'll likely not have your sprinkler on -sometimes it happens though; other way around, you will have it on usually when it's not raining. More technically, both are CORRELATED.  This is because both depend on one additional variable, namely, the season. Also, the surface being wet or not depends on the season and thus will show some level of correlation.  However, the sprinkler doesn't determines whether it rains or not, nor is the rain switch on/off the sprinkler (you could think of a modern one that does switch it off if it rains; but let's forget this case here: assume we aren't that technologically savvy).


Now what are the causes of the surface being wet? If we don't know the existence of a sprinkler nor the weather, we'd say the cause is the season. In this case, there would be a correlation and a direct causation.


However, if we know the state of the sprinkler and that of the weather, or simply, given the logical structure of that graph, the surface being or not wet depends DIRECTLY ONLY on the state of the sprinkler and that of the weather, but NOT on the season!. Season and wet are correlated but there is no direct causation.  In terms of conditional probabilities, this is expressed by the fact that P( X4 | X3, X2, X1 )  =  P( X4 | X3, X2)


-


Hope this helps start some discussions. I'll work on some numerical examples for wednesday.
