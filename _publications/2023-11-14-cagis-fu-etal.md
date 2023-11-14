---
title: "Keeping Walls Straight: Data Model and Training Set Size Matter for Deep Learning in Building Generalization"
collection: publications
permalink: /publications/2023-11-14-cagis-fu-etal
excerpt: ''
date: 2023-11-14
venue: 'Cartography and Geographic Information Science'
paperurl: 'https://doi.org/10.1080/15230406.2023.2264757'
citation: 'Fu, C., Zhou, Z.Y., Feng, Y., & Weibel, R. (2023). Keeping Walls Straight: Data Model and Training Set Size Matter for Deep Learning in Building Generalization.'
pubtype: 'journal'
---

## Abstract

Deep learning-backed models have shown their potential of conducting map generalization tasks. However, pioneering studies for raster-based building generalization encountered a common “wabbly-wall effect” that makes the predicted building shapes unrealistic. This effect was identified as a critical challenge in the existing studies. This work proposes a layered data representation model that separately stores a building for generalization and its context buildings in different channels. Incorporating adjustments to training sample generation and prediction tasks, we show how even without using more complex deep learning architectures, the widely used Residual U-Net can already produce straight walls for the generalized buildings and maintains rectangularity and parallelism of the buildings very well for building simplification and aggregation in the scale transition from 1:5,000 to 1:10,000 and 1:5,000 to 1:15,000, respectively. Experiments with visual evaluation and quantitative indicators such as Intersection over Union (IoU), fractality, and roughness index show that using a larger input tensor size is an easy but effective solution to improve prediction. Balancing samples with data augmentation and introducing an attention mechanism to increase network learning capacity can help in certain experiment settings but have obvious tradeoffs. In addition, we find that the defects observed in previous studies may be due to a lack of enough training samples. We thus conclude that the wabbly-wall challenge can be solved, paving the way for further studies of applying raster-based deep learning models on map generalization.