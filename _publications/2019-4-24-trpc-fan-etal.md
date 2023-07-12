---
title: "Using Big GPS Trajectory Data Analytics for Vehicle Miles Traveled Estimation"
collection: publications
permalink: /publications/2019-4-24-trpc-fan-etal
excerpt: ''
date: 2019-4-24
venue: 'Transportation Research Part C: Emerging Technologies'
paperurl: 'https://doi.org/10.1016/j.trc.2019.04.019'
citation: 'Fan, J.C., Fu, C., Stewart, K., and Zhang, L. (2019). Using Big GPS Trajectory Data Analytics for Vehicle Miles Traveled Estimation. Transportation Research Part C: Emerging Technologies. 103. 298-307.'
---

## Abstract

As location-sensing devices and apps become more prevalent, the scale and availability of big GPS trajectory data are also rapidly expanding. Big GPS trajectory data analytics offers new opportunities for gaining insights into vehicle movement dynamics and road network usage patterns that are important for transportation studies and urban planning among other fields. Processing big GPS trajectory data, consisting of billions of GPS waypoints and millions of individual trajectories is a challenging yet important task for researchers from these different domains. In this research, we propose an Apache Spark-based geo-computing framework for using big GPS trajectory data to estimate vehicle miles travelled, an important metric used by both federal and state highway agencies in the United States for transportation planning. The computing challenge lies in scaling the processing of billions of raw GPS points data as well as the steps for map matching for a statewide road network consisting of thousands of road segments. In this work, we develop a scalable map-matching module that considers both the spatiotemporal information of GPS waypoint sequences and topologic information of road network for the State of Maryland while striking a balance between matching accuracy and computing time. We processed 19.8 million raw GPS trips consisting of approximately 1.4 billion GPS waypoints collected in Maryland during a four-month period in 2015 to estimate vehicle miles travelled for Maryland’s road network. The estimation results show that using big GPS trajectory analytic methods is promising for obtaining accurate and stable vehicle miles travelled estimates.
