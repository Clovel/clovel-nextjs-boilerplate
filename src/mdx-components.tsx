/* Module imports -------------------------------------- */
import type { MDXComponents } from 'mdx/types';

/* MDX components helper ------------------------------- */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
