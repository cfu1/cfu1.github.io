---
title: "Remove and Move: Multi-Task Learning for Building Simplification of Vector Maps with Graph Convolutional Neural Network"
collection: publications
permalink: /publications/2023-6-21-isprs-zhou-fu-weibel
excerpt: ''
date: 2023-6-21
venue: 'ISPRS Journal of Photogrammetry and Remote Sensing'
paperurl: 'https://doi.org/10.1016/j.isprsjprs.2023.06.004'
citation: 'Zhou, Z.Y., Fu, C., & Weibel, R. (2023) Remove and Move: Multi-Task Learning for Building Simplification of Vector Maps with Graph Convolutional Neural Network. ISPRS Journal of Photogrammetry and Remote Sensing.'
---

## Abstract

Simplification of building footprints is an essential task in topographic map generalization from large to medium scales. The traditional rule- or constraint-based algorithms commonly require cartographers to enumerate and formalize as many scenarios as possible. Recently, some studies have introduced deep learning to image map generalization, whose outputs, however, may exhibit deformed boundaries due to pure image input. Vector maps are thus a reasonable solution to avoid such issues because of their accurate, object-based geometric representation. However, few existing studies have aimed to simplify buildings in vector maps with the help of neural networks. Building simplification in vector maps can be regarded as the joint contribution from two elementary operations on vertices of building polygons: remove redundant vertices and move kept vertices. This research proposes a multi-task learning method with graph convolutional neural networks. The proposed method formulates the building simplification problem as a joint task of node removal classification and node movement regression. A multi-task graph convolutional neural network model (MT_GCNN) is developed to learn node removal and movement simultaneously. The model was evaluated with a map from Stuttgart, Germany that contains 8494 buildings generalized from the source scale of 1:5,000 to the target scale of 1:10,000. The experimental results show that the proposed method can generate 80% of the buildings with positional errors of less than 0.2m, 95% with a shape difference under 0.5, and around 98% with an area difference under 0.1 of IoU, compared to the ground truth target buildings, thus demonstrating the feasibility of the proposed method. The code is available at: https://github.com/chouisgiser/MapGeneralizer.
