---

layout: full-width 

---

# B-spline

- Basis spline: spline function that has minimal support w.r.t. a given degree, smoothness, and domain partition.

- Any spline function of a given degree can be expressed as a linear combination of B-splines of that degree.

- Cardinal B-splines have knots (equidistant from each other).

- B-splines can be used for curve-fitting and numerical differentiation of experimental data.

- A spline function of order $n$ is a piecewise polynomial function of the degree $n-1$ in a variable $x$.

- The key property of spline functions is that they and their derivatives may be continuous, depending on the multiplicities of the knots.

- B-splines of order $n$: Basis functions for spline functions of the same order defined over the same knots (all possible spline functions can be built from a linear comb. of B-splines, and there is only one ==unique== combination for each spline function.)

- Definition

  - Knots, denoted $t_0,...,t_n$.

  - When the knots are distinct, the first $n-2$ derivatives of the polynomial pieces are continuous across each knot.

  - $r$ knots are coincident, then only the first $n-r-1$ derivatives of the spline are continuous across that know.

  - a unique spline $B_{i,n}(x)$ satisfying

  - 
    $$
    B_{i,n}(x) = \begin{cases}
    0 & x<t_i \text{  or  } x \geq t_{i+n},\\
    \text{non-zero}&\text{o.w.}
    \end{cases}
    $$

  - If we add the additional constraint that $\sum_iB_{i,n}(x)=1$ $\forall x$ between the first and last know, then the scaling factor of $B_{i,n}(x)$ becomes fixed.

  - Alternatively, B-splines can be defined by construction by means of Cox-de Boor recursion formula.

  - $$
    B_{i,1}(x) := \begin{cases}
    1&\text{if } t_i\leq x \leq t_{i+1}\\
    0&\text{o.w.}
    \end{cases}
    $$

  - These satisfy $\sum_{i}B_{i,1}(x) = 1$ for all $x$ b/c for any $x$ exactly one of the $B_{i,1}(x)=1$, and all the others are zero.

  - $B_{i,k+1}(x):=\omega_{i,k}(x)B_{i,k}(x)+[1-\omega_{i+1,k}(x)]B_{i+1,k}(x)$ where

  - $$
    \omega_{i,k}(x) :=\begin{cases}
    \frac{x-t_i}{t_{i+k}-t_i} &t_{i+k}\neq t_i,\\
    0&\text{o.w.}
    \end{cases}
    $$

  

  - 

```python
1+1 = 3
```

