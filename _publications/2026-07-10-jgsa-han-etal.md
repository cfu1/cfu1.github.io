---
title: "Places Are More Than Just Stops: Integrating Move Segments in Place Location Detection from Trajectory Data"
collection: publications
permalink: /publications/2026-07-10-jgsa-han-etal
excerpt: ''
date: 2026-7-10
venue: 'Journal of Geovisualization and Spatial Analysis'
paperurl: 'https://doi.org/10.1007/s41651-026-00276-1'
citation: 'Han, C., Fu, C.*, Sofios, A., & Weibel, R. (2026). Places Are More Than Just Stops: Integrating Move Segments in Place Location Detection from Trajectory Data. Journal of Geovisualization and Spatial Analysis, 10(2), 34.'
pubtype: 'journal'
---

## Abstract

Identifying meaningful places from human trajectories is essential for understanding spatial behavior and human-environment interactions. Existing methods usually detect places from GPS trajectories by identifying and clustering stop segments as potential place locations, while excluding move segments as transportation displacements. However, these approaches are designed to model a specific type of place focused on stationary activities, thus often underestimating the spatial extent of places or overlooking places where movement is part of the activity, such as parks, leading to fragmented detected places that constrain subsequent analyses. This study proposes an alternative conceptual model of place locations, arguing that the locations (or footprints) of places should integrate both stop and move segments, and introduces a corresponding new place location detection method. Building on conventional stop-move detection, the method adaptively aggregates nearby candidate stop and move segments into place locations using a search radius that varies with local built-up area density. The radius remains small to preserve distinct clusters in compact urban centers, while expanding to capture broader place extents in rural areas. The method was evaluated using validation data from 145 participants who manually delineated locations of their daily activity places. Compared with a state-of-the-art stops-only algorithm serving as a baseline, our proposed method detected more place locations and captured more complete spatial footprints. The new method performed particularly well in low-density built-up environments, where movement is often part of the place experience. The methodology advances trajectory-based place detection to analyze human behavior, environmental functions, and infrastructure planning.
