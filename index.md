---
layout: default
---

## RESEARCH INTERESTS
Functional Data Anaylsis | Functional Registration | Bayesian Statistics | Generative Models (VAEs)

## PROJECTS

### ■ Functional Data Analysis (Functional Registration) <a name="FDA"></a>
Functional data — curves, shapes, and other complex structures — arise in fields like biology, medicine, and the social sciences, where understanding dynamic patterns is critical.
Functional Data Analysis (FDA) provides a framework for modeling these datasets, offering tools to uncover meaningful structure and variability. However, in many real-world applications, functional data are noisy, misaligned, and highly complex, posing challenges even for FDA.

My primary research focuses on **functional registration** using the Fisher-Rao metric within a Riemannian manifold framework. This approach aligns functions in a geometrically meaningful way, preserving their intrinsic structure and enabling more accurate statistical analysis — such as more reliable mean estimation, variance calculation, and other key summaries.
As a result, subsequent analyses — including functional principal component analysis (FPCA) and hypothesis testing — become more statistically robust.

To understand functional registration, it is important to recognize that functional data typically exhibit two types of variation:
- Phase variation: temporal shifts of a function.
- Amplitude variation: changes in magnitude of a function.

You can explore these ideas with the interactive plot below.

Consider a smooth function, $f(t)$, defined on the interval $[0,1]$, where $t$ represents time.

- The left plot: a warping function $\gamma(t)$.
- The right plot: the function after time warping, $f(\gamma(t))$.

<div style="display: flex; justify-content: center; margin-top: -1.5em; margin-bottom: -3em; margin-left: -3em;">
  <iframe 
    src="misc_pages/warping.html" 
    width="500" 
    height="350"
    style="border:0px solid black;
    display: block;">
  </iframe>
</div>

#### ▫ Peak Persistence Diagrams ([PPD](https://github.com/wk45/PPD))
<div style="margin-left: 1em;">

In practice, functional data often arise as noisy, discretized measurements that are later smoothed to approximate continuous curves. To preserve important features like peaks and valleys, practitioners typically avoid aggressive smoothing, which leaves small residual fluctuations in the data.
<br><br>
These minor fluctuations pose a challenge when applying dynamic time warping (DTW) combined with the Fisher-Rao metric for alignment. Although the Fisher-Rao framework is mathematically elegant, it can lead to over-alignment, where the warping function tries to match even noise-level variations.

<!-- <img src="figs/ppd/fig1.png" width="300"> -->
<br><br>
To mitigate over-alignment in such cases, practitioners often introduce penalty terms — but selecting appropriate penalties remains an open and challenging problem. To address this limitation, we propose a simple yet effective visual tool: the Peak Persistence Diagram (PPD).
PPD helps identify and summarize significant internal peaks in functional data, offering robustness to noise while remaining sensitive to meaningful structural patterns.
</div>
<br>
<!-- #### • Phase Alignment of functions via [Trajectory Analysis](/Projects/PathAnalysis/Visualization/test99.html)
Functional registration is accomplished by analyzing the trajectory of the mean function after alignment. This is done by projecting the aligned functions onto a lower-dimensional space using Functional Principal Component Analysis (FPCA), enabling effective visualization and interpretation of the registration process. -->

#### ▫ Bayesian Functional Alignment (on-going)
<div style="margin-left: 1em;">
We addressed the challenge of functional registration under noisy and misaligned data by developing a more robust solution within a Bayesian framework.
<br><br>
Classical optimization-based methods such as DTW find a global optimal warping path, so they are often highly sensitive to noise and outliers. In contrast, the Bayesian framework offers several key advantages:
it provides a probabilistic solution by modeling the full posterior distribution of warping functions;
it allows prior information to be naturally incorporated into the registration process;
and it can capture multiple modes in the posterior distribution, enabling exploration of multiple plausible warping solutions — a flexibility that traditional optimization-based methods cannot offer.
<br><br>
We <strong>successfully developed a Bayesian method</strong> for functional registration and signal estimation that move beyond the traditional Fisher-Rao framework, which is more robust to noisy functional data than PPD method.
</div>

<br>

### ■ Other Projects than Functional Data

#### ▫ Network Analysis via Bayesian Method ([Hierarchical Latent SVD Model](/Projects/HLSVD/HSVD.pdf))

<div style="margin-left: 1em;">

In social network data analysis, latent space models (LDMs) are widely used to uncover underlying structures among nodes by embedding them in a latent space. These models can capture various relational metrics—such as distances, classes, and clusters—that facilitate further statistical analysis. Among the different types of LDMs, Hoff (2008) introduced an eigenmodel-based latent space to account for <em>homophily</em>, the tendency of similar nodes to connect.
</div>

<div style="text-align: center;">
  <img src="figs/network/homophiliy.png" width="400">
</div>
> Homophily helps explain common patterns in social networks, including transitivity (“a friend of a friend is a friend”), balance (“the enemy of my friend is an enemy”), and the formation of cohesive subgroups of nodes” (Hoff 2008).

<div style="margin-left: 1em;">
The goal of this project is to apply <strong>Bayesian hierarchical modeling</strong> to a more general class of latent space models—specifically, the latent SVD model—to induce a shrinkage effect and improve parameter estimation by borrowing strength across the network structure.
</div>

<br>
#### ▫ Topological Feature Extraction with Human Brain Connectome
<div style="margin-left: 1em;">
    We explored how topological data analysis can simplify and reveal structural patterns within complex brain connectivity data. Using multi-level white matter tractography datasets, we applied <strong>persistent homology</strong> — a method that captures topological features such as loops and voids across different scales — to better understand the organization of the human brain connectome. The analysis was implemented in R with computational support from Ripser, a fast and efficient tool for computing persistence diagrams.
</div>