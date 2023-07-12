---
title: "Adaptive Simplification of GPS Trajectories with Geographic Context"
collection: publications
permalink: /publications/2020-6-16-ijgis-fu-huang-weibel
excerpt: ''
date: 2020-6-16
venue: 'International Journal of Geographical Information Science'
paperurl: 'https://doi.org/10.1080/13658816.2020.1778003'
citation: 'Fu, C.*, Huang, H.S., and Weibel, R. (2020). Adaptive Simplification of GPS Trajectories with Geographic Context. International Journal of Geographical Information Science. 1-28.'
pubtype: 'journal'
---

## Abstract

Big GPS trajectory datasets can have redundant spatio-temporal information for applications, which requires simplification as a key preprocessing for modeling. Many existing simplification methods focus on the geometric information from a trajectory per se. Conversely, methods considering geographic context often fail to provide spatially adaptive simplification, or require complex parameter settings to achieve this task. This study proposes a novel two-stage adaptive trajectory simplification method embedding spatial indexing, enrichment, and aggregation in an integrated process. The first stage employs a quadtree for the subdivision depending on the density of geographic context features (i.e. POIs), leading to a variable-resolution representation of the area. The second stage aggregates trajectory waypoints locating in the same quadtree leaf node into a representative point, making the aggregation adapting to the spatial layout of the geographic feature in the first stage. Evaluation with a real-world vehicle trajectory dataset shows that the proposed approach can automatically simplify trajectory segments at variable compression ratios with greater simplification in areas with sparse context features (e.g. rural) and less simplification in areas with dense context features (e.g. urban). More importantly, the method can still preserve inter-trajectory distances between original trajectories and simplified ones, while significantly reducing the computing time.
