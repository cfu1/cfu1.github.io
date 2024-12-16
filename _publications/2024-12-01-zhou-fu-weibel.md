---
title: "SpaGAN: A spatially-aware generative adversarial network for building generalization in image maps"
collection: publications
permalink: /publications/2024-12-01-zhou-fu-weibel
excerpt: ''
date: 2024-12-01
venue: 'International Journal of Applied Earth Observation and Geoinformation'
paperurl: 'https://doi.org/10.1016/j.jag.2024.104236'
citation: 'Zhou, Z.Y., Fu, C.*, & Weibel, R. (2024). SpaGAN: A spatially-aware generative adversarial network for building generalization in image maps.'
pubtype: 'journal'
---

## Abstract

Building generalization is an essential task in generating multi-scale topographic maps. The progress of deep learning offers a new paradigm to overcome the coordination challenges faced by conventional building generalization algorithms. Some studies have confirmed the feasibility of several original semantic segmentation networks, such as U-Net and its variants and the conditional generative adversarial network (cGAN), for building generalization in image maps. However, they suffer from critical deformation effects, especially for large and geometrically complex buildings. Since learning building generalization essentially means modeling the subtle transformation of building footprints across scales, we argue that the spatial awareness of a neural network, for instance, regarding building size and shape, is crucial to effective learning. Thus, we propose a spatially-aware generative adversarial network, SpaGAN. It takes a representative cGAN, pix2pix, as the backbone, and modifies two modules: In the U-Net-based generator, an atrous spatial pyramid pooling (ASPP) module replaces the conventional convolutional module to extract multi-scale features of buildings of varying sizes and shapes; in the PatchGAN-based discriminator, a signed distance map (SDM) module is used to capture the fine-grained shape difference for discrimination. The proposed network was comprehensively evaluated with a synthetic and a real-world dataset. The results demonstrate that SpaGAN outperforms existing baseline models (U-Net, ResU-Net, pix2pix) for building generalization, particularly in the real-world dataset. The new model can achieve more reasonable aggregation, simplification, and squaring generalization operators.
