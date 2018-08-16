---
title: "Language Model"
cover: "./language_model.png"
date: "2018-08-02"
category: "Natural Language Processing"
tags:
    - "Statistic Model"
    - "Neural Network"
---

Language Modeling is an important idea behind many Natural Language Processing tasks such as Machine Translation, Spelling Correction, Speech Recognition, Summarization, Question-Answering etc. The goal of language modelling is to estimate the probability distribution of various linguistic units, e.g., words, sentences etc.


## Language Model Categories
Language models (LM) can be classiﬁed into two categories: count-based and continuous-space LM. 

### Count Based LM
The count based LM is based on the n-th order Markov assumption and 
estimating n-gram probabilities via counting and subsequent smoothing. 

> Markov Assumption: One can make predictions for the future of the 
process based solely on its present state just as well as one could knowing 
the process’s full history, hence independently from such history.[1]

Probability of a sequence of words is,
<p align="center">
<img src="https://latex.codecogs.com/svg.latex?\inline&space;\LARGE&space;p
(W)&space;=&space;p(w_{1},&space;w_{2},&space;w_{3},&space;...,&space;w_{n})" title="\LARGE p(W) = p(w_{1}, w_{2}, w_{3}, ..., w_{n})" />
</p>

Probability of n-th word given previous n-1 words is,
<p align="center">
<img src="https://latex.codecogs.com/svg.latex?\inline&space;\LARGE&space;p(w_{n})&space;=&space;p(&space;w_{n}&space;|&space;w_{1},&space;w_{2},&space;w_{3},&space;...,&space;w_{n&space;-&space;1})" title="\LARGE p(w_{n}) = p( w_{n} | w_{1}, w_{2}, w_{3}, ..., w_{n - 1})" />
</p>


### Continuous-Space LM

#### Feed-Forward Neural Probabilistic Language Models (NPLMs)


## Implementation


### Count Based LM

#### N-Gram Model


### Continuous-Space LM
####


[1] Jurafsky, Dan. Speech & language processing. Pearson Education India, 2000.